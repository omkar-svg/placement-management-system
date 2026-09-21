import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import authService from '../services/authService';

export default function AuthPage() {
  const navigate = useNavigate();

  const [form, setForm] = useState({ email: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);
  const [status, setStatus] = useState({ error: '', success: '', loading: false });

  useEffect(() => {
    const token = authService.getToken();
    if (token) {
      const user = authService.getUser();
      navigate(user?.role === 'STUDENT' ? '/student/dashboard' : '/', { replace: true });
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
        setStatus({ error: '', success: 'Signed in successfully! Redirecting...', loading: false });
        const role = res?.data?.user?.role;
        setTimeout(() => {
          navigate(role === 'STUDENT' ? '/student/dashboard' : '/');
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
    <div className="min-h-screen bg-slate-100 flex flex-col justify-between font-sans">
      {/* Navbar: Deep Navy */}
      <header className="bg-[#0b1528] text-white py-4 px-6 border-b border-slate-800">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <div className="h-9 px-2.5 py-1 bg-white/10 rounded-lg flex items-center justify-center border border-white/20">
              <img src="/DKTE-LOGO.png" alt="DKTE Logo" className="h-5 w-auto object-contain" />
            </div>
            <span className="text-lg font-extrabold tracking-tight text-white">
              DKTE <span className="text-amber-400">Placement Portal</span>
            </span>
          </Link>
          <Link to="/" className="text-sm font-medium text-slate-300 hover:text-amber-400 transition-colors">
            ← Home
          </Link>
        </div>
      </header>

      {/* Main Card */}
      <main className="flex-1 flex items-center justify-center px-4 py-10 sm:py-14">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-xl border border-slate-200 p-8 sm:p-10">
          <div className="text-center mb-6">
            <h1 className="text-2xl sm:text-3xl font-bold text-[#0b1528] tracking-tight">
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
                className="w-full h-11 px-4 bg-white border border-slate-300 rounded-lg text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0b1528]"
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
                  className="w-full h-11 pl-4 pr-14 bg-white border border-slate-300 rounded-lg text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0b1528]"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs font-semibold text-slate-500 hover:text-[#0b1528]"
                >
                  {showPassword ? 'Hide' : 'Show'}
                </button>
              </div>
            </div>

            {/* Main CTA: Golden Yellow */}
            <button
              type="submit"
              disabled={status.loading}
              className="w-full h-11 bg-amber-400 hover:bg-amber-300 text-[#0b1528] font-bold rounded-lg transition-colors text-sm shadow-sm cursor-pointer disabled:opacity-60 mt-2"
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
      <footer className="bg-[#0b1528] text-slate-400 py-4 px-6 text-center text-xs border-t border-slate-800">
        DKTE Society's Textile and Engineering Institute • Training & Placement Cell, Ichalkaranji
      </footer>
    </div>
  );
}
