
import React, { useCallback, useEffect, useState } from "react";
import {
  FiBriefcase,
  FiMapPin,
  FiGlobe,
  FiRefreshCw,
  FiSearch,
  FiAlertCircle,
  FiExternalLink,
} from "react-icons/fi";

import api from "../../services/api";

function Company() {
  const [companies, setCompanies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");

  const fetchCompanies = useCallback(async () => {
    setLoading(true);
    setError("");

    try {
      // Uses your existing Axios API service.
      const response = await api.get("/companies");

      // Supports APIs returning either { data: [...] }
      // or { success: true, data: [...] }.
      const result = response.data?.data ?? response.data;

      if (!Array.isArray(result)) {
        throw new Error("Invalid companies API response.");
      }

      setCompanies(result);
    } catch (err) {
      console.error("Failed to fetch companies:", err);

      setError(
        err.response?.data?.message ||
          "Unable to load companies. Please check the API connection."
      );
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchCompanies();
  }, [fetchCompanies]);

  const filteredCompanies = companies.filter((company) => {
    const query = search.toLowerCase();

    return (
      company.companyName?.toLowerCase().includes(query) ||
      company.location?.toLowerCase().includes(query) ||
      company.about?.toLowerCase().includes(query)
    );
  });

  return (
    <div className="min-h-screen bg-slate-50 p-4 text-slate-800 sm:p-6 lg:p-8">
      {/* Page Header */}
      <header className="mb-7 flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="text-sm font-medium text-slate-500">
            TPO / Companies
          </p>

          <h1 className="mt-2 text-2xl font-extrabold text-[#0b1f3a] sm:text-3xl">
            Company Management
          </h1>

          <p className="mt-2 text-sm text-slate-500">
            View registered companies and their recruitment information.
          </p>
        </div>

        <button
          type="button"
          onClick={fetchCompanies}
          disabled={loading}
          className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-[#0b1f3a] shadow-sm transition hover:bg-slate-100 disabled:opacity-50"
        >
          <FiRefreshCw
            className={loading ? "animate-spin" : ""}
            size={17}
          />
          Refresh
        </button>
      </header>

      {/* Summary */}
      <section className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="flex items-center gap-4 rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="rounded-xl bg-blue-50 p-4 text-blue-700">
            <FiBriefcase size={25} />
          </div>

          <div>
            <p className="text-sm text-slate-500">Total Companies</p>
            <p className="mt-1 text-3xl font-extrabold text-[#0b1f3a]">
              {loading ? "—" : companies.length}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4 rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="rounded-xl bg-amber-50 p-4 text-amber-700">
            <FiGlobe size={25} />
          </div>

          <div>
            <p className="text-sm text-slate-500">Search Results</p>
            <p className="mt-1 text-3xl font-extrabold text-[#0b1f3a]">
              {loading ? "—" : filteredCompanies.length}
            </p>
          </div>
        </div>
      </section>

      {/* Search */}
      <div className="mb-6">
        <div className="relative max-w-xl">
          <FiSearch
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            size={19}
          />

          <input
            type="search"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search by company name, location..."
            className="w-full rounded-xl border border-slate-200 bg-white py-3 pl-11 pr-4 text-sm outline-none transition focus:border-[#0b1f3a] focus:ring-2 focus:ring-blue-100"
          />
        </div>
      </div>

      {/* Error */}
      {error && (
        <div
          role="alert"
          className="mb-6 flex flex-wrap items-center justify-between gap-3 rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-700"
        >
          <span className="flex items-center gap-2">
            <FiAlertCircle size={18} />
            {error}
          </span>

          <button
            type="button"
            onClick={fetchCompanies}
            className="font-bold underline"
          >
            Try again
          </button>
        </div>
      )}

      {/* Loading */}
      {loading && (
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="animate-pulse rounded-2xl border border-slate-200 bg-white p-6"
            >
              <div className="mb-5 h-12 w-12 rounded-xl bg-slate-200" />
              <div className="mb-3 h-5 w-2/3 rounded bg-slate-200" />
              <div className="mb-2 h-4 w-1/2 rounded bg-slate-100" />
              <div className="mt-5 h-16 rounded bg-slate-100" />
            </div>
          ))}
        </div>
      )}

      {/* Company Cards */}
      {!loading && !error && filteredCompanies.length > 0 && (
        <section
          aria-label="Registered companies"
          className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3"
        >
          {filteredCompanies.map((company) => (
            <article
              key={company.id}
              className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-lg"
            >
              {/* Gold accent */}
              <div className="h-1.5 bg-[#ffc52c]" />

              <div className="p-6">
                <div className="mb-5 flex items-start justify-between gap-3">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0b1f3a] text-[#ffc52c]">
                    <FiBriefcase size={27} />
                  </div>

                  <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
                    Registered
                  </span>
                </div>

                <h2 className="text-xl font-bold text-[#0b1f3a]">
                  {company.companyName}
                </h2>

                <div className="mt-3 flex items-start gap-2 text-sm text-slate-500">
                  <FiMapPin className="mt-0.5 shrink-0 text-[#b88900]" />
                  <span>{company.location || "Location not provided"}</span>
                </div>

                <p className="mt-4 min-h-16 text-sm leading-6 text-slate-600">
                  {company.about || "No company description available."}
                </p>

                <div className="mt-5 border-t border-slate-100 pt-4">
                  {company.website ? (
                    <a
                      href={company.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex max-w-full items-center gap-2 break-all text-sm font-bold text-[#0b1f3a] hover:text-amber-700"
                    >
                      <FiGlobe className="shrink-0" />
                      Visit Website
                      <FiExternalLink className="shrink-0" />
                    </a>
                  ) : (
                    <span className="text-sm text-slate-400">
                      Website not available
                    </span>
                  )}
                </div>
              </div>
            </article>
          ))}
        </section>
      )}

      {/* Empty State */}
      {!loading && !error && filteredCompanies.length === 0 && (
        <div className="rounded-2xl border border-dashed border-slate-300 bg-white px-5 py-16 text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-amber-50 text-amber-700">
            <FiBriefcase size={30} />
          </div>

          <h3 className="mt-5 text-lg font-bold text-[#0b1f3a]">
            {companies.length === 0
              ? "No companies registered"
              : "No matching companies"}
          </h3>

          <p className="mx-auto mt-2 max-w-md text-sm text-slate-500">
            {companies.length === 0
              ? "Registered companies will appear here once they are available through the API."
              : "Try another company name, location, or search term."}
          </p>

          {search && (
            <button
              type="button"
              onClick={() => setSearch("")}
              className="mt-5 rounded-lg bg-[#ffc52c] px-5 py-2.5 text-sm font-bold text-[#0b1f3a] hover:bg-amber-400"
            >
              Clear Search
            </button>
          )}
        </div>
      )}
    </div>
  );
}

export default Company;
