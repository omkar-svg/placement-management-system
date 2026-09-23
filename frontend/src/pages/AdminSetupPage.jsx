import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import authService from '../services/authService';

// Dev/team-setup page — lets whoever is running the project locally create
// their OWN admin account (their own name/email/password) instead of a
// shared dummy login. It just calls the existing, unauthenticated
// POST /api/auth/register endpoint with role: 'ADMIN' — the same endpoint
// the README's curl command uses. No backend changes, no seed data.
//
// Note: this endpoint has no protection today (anyone who can reach the
// API can already register an ADMIN via curl/Postman), so this page adds
// no new risk — it just gives that same capability a form instead of a
// terminal. Remove/hide this route before deploying anywhere public.
export default function AdminSetupPage() {
  const navigate = useNavigate();

  const [form, setForm] = useState({ name: '', email: '', password: '', confirmPassword: '' });
  const [status, setStatus] = useState({ error: '', success: '', loading: false });

  const updateField = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const name = form.name.trim();
    const email = form.email.trim().toLowerCase();
    const { password, confirmPassword } = form;

    if (!name || !email || !password) {
      return setStatus({ error: 'Name, email and password are all required.', success: '', loading: false });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return setStatus({ error: 'Please enter a valid email address.', success: '', loading: false });
    }

    if (password.length < 6) {
      return setStatus({ error: 'Password should be at least 6 characters.', success: '', loading: false });
    }

    if (password !== confirmPassword) {
      return setStatus({ error: 'Passwords do not match.', success: '', loading: false });
    }

    setStatus({ error: '', success: '', loading: true });

    try {
      const res = await authService.register({ name, email, password, role: 'ADMIN' });
      if (res?.success) {
        setStatus({ error: '', success: 'Admin account created! Redirecting to login...', loading: false });
        setTimeout(() => navigate('/login'), 1200);
      } else {
        setStatus({ error: res?.message || 'Could not create the account.', success: '', loading: false });
      }
    } catch (err) {
      const message =
        err.response?.data?.message ||
        (err.code === 'ERR_NETWORK' || !err.response
          ? 'Unable to connect to the backend server. Please ensure the backend is running on port 5000.'
          : 'Something went wrong.');
      setStatus({ error: message, success: '', loading: false });
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col justify-between font-sans">
      <header className="bg-[#0b1528] text-white py-4 px-6 border-b border-slate-800">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <Link to="/" className="text-lg font-extrabold tracking-tight text-white">
            DKTE <span className="text-amber-400">Placement Portal</span>
          </Link>
          <Link to="/login" className="text-sm font-medium text-slate-300 hover:text-amber-400 transition-colors">
            ← Back to Sign In
          </Link>
        </div>
      </header>

      <main className="flex-1 flex items-center justify-center px-4 py-10 sm:py-14">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-xl border border-slate-200 p-8 sm:p-10">
          <div className="text-center mb-6">
            <h1 className="text-2xl sm:text-3xl font-bold text-[#0b1528] tracking-tight">
              Create Admin Account
            </h1>
            <p className="text-sm text-slate-500 mt-1.5">
              Local/dev setup — create your own admin login for this project. No dummy data, no seed script.
            </p>
          </div>

          {status.error && (
            <div role="alert" className="mb-4 p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm font-medium">
              {status.error}
            </div>
          )}
          {status.success && (
            <div role="alert" className="mb-4 p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-sm font-medium">
              {status.success}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4" noValidate>
            <div>
              <label htmlFor="setup-name" className="block text-sm font-semibold text-slate-700 mb-1">Full Name</label>
              <input
                id="setup-name"
                name="name"
                type="text"
                required
                value={form.name}
                onChange={updateField}
                placeholder="Your name"
                className="w-full h-11 px-4 bg-white border border-slate-300 rounded-lg text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0b1528]"
              />
            </div>

            <div>
              <label htmlFor="setup-email" className="block text-sm font-semibold text-slate-700 mb-1">Email</label>
              <input
                id="setup-email"
                name="email"
                type="email"
                required
                value={form.email}
                onChange={updateField}
                placeholder="you@dkte.ac.in"
                className="w-full h-11 px-4 bg-white border border-slate-300 rounded-lg text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0b1528]"
              />
            </div>

            <div>
              <label htmlFor="setup-password" className="block text-sm font-semibold text-slate-700 mb-1">Password</label>
              <input
                id="setup-password"
                name="password"
                type="password"
                required
                value={form.password}
                onChange={updateField}
                placeholder="At least 6 characters"
                className="w-full h-11 px-4 bg-white border border-slate-300 rounded-lg text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0b1528]"
              />
            </div>

            <div>
              <label htmlFor="setup-confirm" className="block text-sm font-semibold text-slate-700 mb-1">Confirm Password</label>
              <input
                id="setup-confirm"
                name="confirmPassword"
                type="password"
                required
                value={form.confirmPassword}
                onChange={updateField}
                placeholder="Repeat password"
                className="w-full h-11 px-4 bg-white border border-slate-300 rounded-lg text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0b1528]"
              />
            </div>

            <button
              type="submit"
              disabled={status.loading}
              className="w-full h-11 bg-amber-400 hover:bg-amber-300 text-[#0b1528] font-bold rounded-lg transition-colors text-sm shadow-sm cursor-pointer disabled:opacity-60 mt-2"
            >
              {status.loading ? 'Creating account...' : 'Create Admin Account'}
            </button>
          </form>

          <p className="text-center text-xs text-slate-500 mt-6 leading-relaxed">
            Already have an account? <Link to="/login" className="font-semibold text-[#0b1528] hover:text-amber-500">Sign in instead</Link>
          </p>
        </div>
      </main>

      <footer className="bg-[#0b1528] text-slate-400 py-4 px-6 text-center text-xs border-t border-slate-800">
        DKTE Society's Textile and Engineering Institute • Training & Placement Cell, Ichalkaranji
      </footer>
    </div>
  );
}
