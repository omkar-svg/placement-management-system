import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import authService from '../services/authService';
import { getHomePath } from '../utils/roleRoutes';

export default function AuthPage() {
  const navigate = useNavigate();

  const [form, setForm] = useState({ email: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [status, setStatus] = useState({ error: '', success: '', loading: false });

  useEffect(() => {
    const savedEmail = localStorage.getItem('pms_remember_email');
    if (savedEmail) {
      setForm((prev) => ({ ...prev, email: savedEmail }));
      setRememberMe(true);
    }
  }, []);

  useEffect(() => {
    const token = authService.getToken();
    if (token) {
      const user = authService.getUser();
      navigate(getHomePath(user?.role), { replace: true });
    }
  }, [navigate]);

  const updateField = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ error: '', success: '', loading: true });

    const { email, password } = form;
    const cleanEmail = email.trim().toLowerCase();

    if (!cleanEmail || !password) {
      return setStatus({ error: 'Please enter both email and password.', success: '', loading: false });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(cleanEmail)) {
      return setStatus({ error: 'Please enter a valid email address.', success: '', loading: false });
    }

    try {
      const res = await authService.login({ email: cleanEmail, password });
      if (res?.success) {
        if (rememberMe) {
          localStorage.setItem('pms_remember_email', cleanEmail);
        } else {
          localStorage.removeItem('pms_remember_email');
        }
        setStatus({ error: '', success: 'Signed in successfully! Redirecting...', loading: false });
        const role = res?.data?.user?.role;
        setTimeout(() => {
          navigate(getHomePath(role));
        }, 500);
      } else {
        setStatus({ error: res?.message || 'Invalid credentials.', success: '', loading: false });
      }
    } catch (err) {
      const errorMessage =
        err.response?.data?.message ||
        (err.code === 'ERR_NETWORK' || !err.response
          ? 'Unable to connect to the backend server. Please ensure the backend is running on port 5000.'
          : 'Invalid email or password.');
      setStatus({
        error: errorMessage,
        success: '',
        loading: false,
      });
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col justify-between">
      {/* Navbar: Synchronized with Landing Page (#07152d) */}
      <header className="border-b border-white/10 bg-[#07152d] text-white shadow-lg">
        <div className="mx-auto flex h-[78px] max-w-[1320px] items-center justify-between px-4 sm:px-7 lg:px-10">
          {/* Logo & College Identity */}
          <Link
            to="/"
            className="flex shrink-0 items-center gap-3 transition-opacity hover:opacity-95"
          >
            <img
              src="/DKTE-LOGO.png"
              alt="DKTE Logo"
              className="h-10 w-auto sm:h-11"
            />

            <div className="border-l border-white/25 pl-3 leading-tight">
              <p className="text-xs font-bold text-white">
                DKTE Society&apos;s
              </p>

              <p className="text-[10px] font-semibold text-white">
                Textile & Engineering Institute
              </p>

              <p className="text-[9px] text-slate-300">
                Ichalkaranji
              </p>
            </div>

            <div className="hidden border-l border-white/20 pl-3 leading-tight sm:block">
              <span className="inline-flex items-center rounded-md bg-white/10 px-2 py-0.5 text-[11px] font-semibold text-[#ffc52c]">
                Placement Portal
              </span>
            </div>
          </Link>

          <Link
            to="/"
            className="inline-flex items-center gap-1.5 rounded-full border border-white/30 bg-white/5 px-4 py-2 text-xs font-semibold text-white shadow-sm transition-all duration-200 hover:border-[#ffc52c] hover:bg-white/10 hover:text-[#ffc52c]"
          >
            ← Back to Home
          </Link>
        </div>
      </header>

      {/* Main Card */}
      <main className="flex-1 flex items-center justify-center px-4 py-10 sm:py-14">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-xl border border-slate-200 p-8 sm:p-10">
          <div className="text-center mb-6">
            <h1 className="text-2xl sm:text-3xl font-bold text-[#07152d] tracking-tight">
              Sign In
            </h1>
            <p className="text-sm text-slate-500 mt-1.5">
              Enter your college credentials to access the placement portal.
            </p>
          </div>

          {/* Feedback Alerts */}
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

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4" noValidate>
            <div>
              <label htmlFor="auth-email" className="block text-sm font-semibold text-slate-700 mb-1">College Email</label>
              <input
                id="auth-email"
                name="email"
                type="email"
                required
                value={form.email}
                onChange={updateField}
                placeholder="name@dkte.ac.in"
                className="w-full h-11 px-4 bg-white border border-slate-300 rounded-lg text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#07152d]"
              />
            </div>

            <div>
              <label htmlFor="auth-password" className="block text-sm font-semibold text-slate-700 mb-1">Password</label>
              <div className="relative">
                <input
                  id="auth-password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={form.password}
                  onChange={updateField}
                  placeholder="••••••••••••"
                  className="w-full h-11 pl-4 pr-14 bg-white border border-slate-300 rounded-lg text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#07152d]"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs font-semibold text-slate-500 hover:text-[#07152d]"
                >
                  {showPassword ? 'Hide' : 'Show'}
                </button>
              </div>
            </div>

            {/* Remember Me Checkbox */}
            <div className="flex items-center justify-between text-xs pt-0.5">
              <label htmlFor="auth-remember-me" className="flex items-center gap-2 cursor-pointer select-none text-slate-600 font-medium hover:text-slate-900 transition-colors">
                <input
                  id="auth-remember-me"
                  name="rememberMe"
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="w-4 h-4 rounded border-slate-300 text-[#07152d] accent-[#07152d] focus:ring-[#07152d] cursor-pointer"
                />
                <span>Remember me</span>
              </label>
            </div>

            {/* Main CTA: Golden Yellow matching landing page theme */}
            <button
              type="submit"
              disabled={status.loading}
              className="w-full h-11 bg-[#ffc52c] hover:bg-[#ffd45c] text-[#07152d] font-bold rounded-lg transition-colors text-sm shadow-sm cursor-pointer disabled:opacity-60 mt-2"
            >
              {status.loading ? 'Signing in...' : 'Sign In'}
            </button>
          </form>

          {/* Institutional Note */}
          <p className="text-center text-xs text-slate-500 mt-6 leading-relaxed">
            Need an account? Contact your departmental TPO coordinator or administrative office to get registered.
          </p>
        </div>
      </main>

      {/* Footer: Deep Navy */}
      <footer className="border-t border-white/10 bg-[#07152d] py-4 px-6 text-center text-xs text-slate-400">
        DKTE Society&apos;s Textile and Engineering Institute • Training & Placement Cell, Ichalkaranji
      </footer>
    </div>
  );
}
