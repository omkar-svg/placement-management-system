
import { useCallback, useEffect, useMemo, useState } from "react";
import api from "../../services/api";

const FILTERS = ["ALL", "UNREAD", "READ"];

const CATEGORY_STYLES = {
  PLACEMENT: "bg-blue-50 text-blue-700",
  APPLICATION: "bg-violet-50 text-violet-700",
  COMPANY: "bg-amber-50 text-amber-700",
  STUDENT: "bg-emerald-50 text-emerald-700",
  SYSTEM: "bg-slate-100 text-slate-700",
};

function getNotificationList(response) {
  const payload = response?.data;

  const result =
    payload?.data?.notifications ??
    payload?.data?.items ??
    payload?.notifications ??
    payload?.items ??
    payload?.data ??
    payload;

  return Array.isArray(result) ? result : [];
}

function getTitle(notification) {
  return (
    notification.title ??
    notification.subject ??
    notification.type?.replaceAll("_", " ") ??
    "Notification"
  );
}

function getMessage(notification) {
  return (
    notification.message ??
    notification.description ??
    notification.body ??
    "No additional details available."
  );
}

function getCategory(notification) {
  const type = String(
    notification.category ?? notification.type ?? "SYSTEM"
  ).toUpperCase();

  if (type.includes("APPLICATION")) return "APPLICATION";
  if (type.includes("COMPANY")) return "COMPANY";
  if (type.includes("STUDENT")) return "STUDENT";
  if (
    type.includes("PLACEMENT") ||
    type.includes("DRIVE") ||
    type.includes("OFFER")
  ) {
    return "PLACEMENT";
  }

  return "SYSTEM";
}

function isRead(notification) {
  return (
    notification.isRead === true ||
    notification.read === true ||
    notification.status?.toUpperCase() === "READ"
  );
}

function formatDate(value) {
  if (!value) return "Date unavailable";

  const date = new Date(value);

  if (Number.isNaN(date.getTime())) return "Date unavailable";

  return date.toLocaleString([], {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

function getNotificationId(notification, index) {
  return notification.id ?? notification._id ?? `notification-${index}`;
}

export default function Notifications() {
  const [notifications, setNotifications] = useState([]);
  const [filter, setFilter] = useState("ALL");
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchNotifications = useCallback(async () => {
    setLoading(true);
    setError("");

    try {
      const response = await api.get("/notifications");
      setNotifications(getNotificationList(response));
    } catch (err) {
      console.error("Failed to fetch notifications:", err);
      setNotifications([]);
      setError(
        err?.response?.status === 404
          ? "The notifications API endpoint is not available."
          : "Unable to load notifications. Please try again."
      );
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchNotifications();
  }, [fetchNotifications]);

  const unreadCount = useMemo(
    () => notifications.filter((item) => !isRead(item)).length,
    [notifications]
  );

  const filteredNotifications = useMemo(() => {
    const query = search.trim().toLowerCase();

    return notifications
      .map((notification, index) => ({ notification, index }))
      .filter(({ notification }) => {
        const read = isRead(notification);

        const matchesFilter =
          filter === "ALL" ||
          (filter === "UNREAD" && !read) ||
          (filter === "READ" && read);

        const searchableText = [
          getTitle(notification),
          getMessage(notification),
          getCategory(notification),
        ]
          .join(" ")
          .toLowerCase();

        return matchesFilter && searchableText.includes(query);
      });
  }, [notifications, filter, search]);

  // Local UI update only; this does not update the database.
  const markAsReadLocally = (id) => {
    setNotifications((current) =>
      current.map((item, index) =>
        getNotificationId(item, index) === id
          ? { ...item, isRead: true, read: true }
          : item
      )
    );
  };

  const markAllAsReadLocally = () => {
    setNotifications((current) =>
      current.map((item) => ({ ...item, isRead: true, read: true }))
    );
  };

  return (
    <div className="min-h-screen bg-slate-50 p-4 sm:p-6 lg:p-8">
      <div className="mx-auto max-w-6xl space-y-7">
        {/* Header */}
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <p className="mb-2 text-sm font-semibold text-amber-600">
              PLACEMENT MANAGEMENT / NOTIFICATIONS
            </p>

            <h1 className="text-3xl font-extrabold tracking-tight text-[#0b1f3a] sm:text-4xl">
              Notifications
            </h1>

            <p className="mt-2 text-sm text-slate-500">
              Stay updated on placement drives, student applications, and
              placement activities.
            </p>
          </div>

          <button
            onClick={fetchNotifications}
            disabled={loading}
            className="rounded-xl bg-[#0b1f3a] px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#16365e] disabled:opacity-60"
          >
            {loading ? "Loading..." : "↻ Refresh"}
          </button>
        </div>

        {/* Summary */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          <StatCard
            title="Total Notifications"
            value={notifications.length}
            icon="▤"
            accent="bg-blue-50 text-blue-700"
          />

          <StatCard
            title="Unread"
            value={unreadCount}
            icon="●"
            accent="bg-amber-50 text-amber-700"
          />

          <StatCard
            title="Read"
            value={notifications.length - unreadCount}
            icon="✓"
            accent="bg-emerald-50 text-emerald-700"
          />
        </div>

        {/* Notification panel */}
        <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="border-b border-slate-100 p-5 sm:p-6">
            <div className="flex flex-col justify-between gap-4 lg:flex-row lg:items-center">
              <div>
                <h2 className="text-lg font-bold text-[#0b1f3a]">
                  Recent Activity
                </h2>
                <p className="mt-1 text-sm text-slate-500">
                  {filteredNotifications.length} notification
                  {filteredNotifications.length !== 1 ? "s" : ""} displayed
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <input
                  type="text"
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}
                  placeholder="Search notifications..."
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-amber-400 focus:ring-2 focus:ring-amber-100 sm:w-64"
                />

                <button
                  onClick={markAllAsReadLocally}
                  disabled={unreadCount === 0}
                  className="rounded-xl border border-amber-300 bg-amber-50 px-4 py-3 text-sm font-semibold text-[#0b1f3a] transition hover:bg-amber-100 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  Mark all as read
                </button>
              </div>
            </div>

            {/* Filter tabs */}
            <div className="mt-5 flex flex-wrap gap-2">
              {FILTERS.map((item) => (
                <button
                  key={item}
                  onClick={() => setFilter(item)}
                  className={`rounded-lg px-4 py-2 text-sm font-semibold transition ${
                    filter === item
                      ? "bg-[#0b1f3a] text-white"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                  }`}
                >
                  {item === "ALL"
                    ? `All (${notifications.length})`
                    : item === "UNREAD"
                      ? `Unread (${unreadCount})`
                      : `Read (${notifications.length - unreadCount})`}
                </button>
              ))}
            </div>
          </div>

          {error && (
            <div className="m-5 flex flex-col gap-3 rounded-xl border border-amber-200 bg-amber-50 p-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="font-semibold text-amber-900">
                  Notifications unavailable
                </p>
                <p className="mt-1 text-sm text-amber-800">{error}</p>
              </div>

              <button
                onClick={fetchNotifications}
                className="shrink-0 rounded-lg border border-amber-300 px-4 py-2 text-sm font-semibold text-amber-900 hover:bg-amber-100"
              >
                Try again
              </button>
            </div>
          )}

          {loading ? (
            <div className="flex flex-col items-center justify-center px-6 py-20">
              <div className="h-9 w-9 animate-spin rounded-full border-4 border-slate-200 border-t-amber-400" />
              <p className="mt-4 text-sm text-slate-500">
                Loading notifications...
              </p>
            </div>
          ) : filteredNotifications.length === 0 ? (
            <div className="flex flex-col items-center justify-center px-6 py-20 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-100 text-3xl text-slate-400">
                ♧
              </div>

              <h3 className="mt-5 text-lg font-bold text-[#0b1f3a]">
                {notifications.length === 0
                  ? "No notifications yet"
                  : "No matching notifications"}
              </h3>

              <p className="mt-2 max-w-md text-sm leading-6 text-slate-500">
                {notifications.length === 0
                  ? "New placement updates and system notifications will appear here when available."
                  : "Try a different filter or search term."}
              </p>

              {(search || filter !== "ALL") && (
                <button
                  onClick={() => {
                    setSearch("");
                    setFilter("ALL");
                  }}
                  className="mt-4 rounded-lg bg-amber-400 px-4 py-2 text-sm font-bold text-[#0b1f3a] hover:bg-amber-300"
                >
                  Clear filters
                </button>
              )}
            </div>
          ) : (
            <div className="divide-y divide-slate-100">
              {filteredNotifications.map(({ notification, index }) => {
                const id = getNotificationId(notification, index);
                const read = isRead(notification);
                const category = getCategory(notification);

                return (
                  <article
                    key={id}
                    className={`flex gap-4 p-5 transition hover:bg-slate-50 sm:p-6 ${
                      !read ? "bg-amber-50/30" : ""
                    }`}
                  >
                    <div
                      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-lg font-bold ${
                        CATEGORY_STYLES[category] ??
                        "bg-slate-100 text-slate-700"
                      }`}
                    >
                      {category === "PLACEMENT"
                        ? "↗"
                        : category === "APPLICATION"
                          ? "▤"
                          : category === "COMPANY"
                            ? "▣"
                            : category === "STUDENT"
                              ? "♙"
                              : "⚙"}
                    </div>

                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <h3
                          className={`text-sm ${
                            !read
                              ? "font-bold text-[#0b1f3a]"
                              : "font-semibold text-slate-700"
                          }`}
                        >
                          {getTitle(notification)}
                        </h3>

                        {!read && (
                          <span className="h-2 w-2 rounded-full bg-amber-400" />
                        )}
                      </div>

                      <p className="mt-2 whitespace-pre-line text-sm leading-6 text-slate-600">
                        {getMessage(notification)}
                      </p>

                      <div className="mt-3 flex flex-wrap items-center gap-3">
                        <span
                          className={`rounded-full px-2.5 py-1 text-xs font-semibold ${
                            CATEGORY_STYLES[category] ??
                            "bg-slate-100 text-slate-700"
                          }`}
                        >
                          {formatStatus(category)}
                        </span>

                        <span className="text-xs text-slate-400">
                          {formatDate(
                            notification.createdAt ??
                              notification.created_at ??
                              notification.date
                          )}
                        </span>
                      </div>
                    </div>

                    {!read && (
                      <button
                        onClick={() => markAsReadLocally(id)}
                        title="Mark as read"
                        aria-label={`Mark ${getTitle(notification)} as read`}
                        className="h-fit shrink-0 rounded-lg border border-slate-200 px-3 py-2 text-xs font-semibold text-slate-600 transition hover:border-amber-300 hover:bg-amber-50 hover:text-[#0b1f3a]"
                      >
                        Mark read
                      </button>
                    )}
                  </article>
                );
              })}
            </div>
          )}

          <div className="flex flex-col gap-2 border-t border-slate-100 bg-slate-50 px-5 py-4 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
            <span>
              Showing {loading ? 0 : filteredNotifications.length} of{" "}
              {loading ? 0 : notifications.length} notifications
            </span>
            <span>Placement Management System</span>
          </div>
        </section>
      </div>
    </div>
  );
}

function StatCard({ title, value, icon, accent }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <div className="flex items-center justify-between">
        <p className="text-sm font-medium text-slate-500">{title}</p>
        <div
          className={`flex h-11 w-11 items-center justify-center rounded-xl text-xl font-bold ${accent}`}
        >
          {icon}
        </div>
      </div>

      <p className="mt-4 text-3xl font-extrabold tracking-tight text-[#0b1f3a]">
        {value}
      </p>

      <p className="mt-1 text-xs text-slate-400">Current records</p>
    </div>
  );
}
