import { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import authService from '../services/authService';

const ROLES = ['STUDENT', 'TPO', 'ADMIN'];

export default function AuthPage() {
  const navigate = useNavigate();
  const location = useLocation();

  const [isLogin, setIsLogin] = useState(location.pathname !== '/register');
  const [form, setForm] = useState({ name: '', email: '', password: '', confirmPassword: '', role: 'STUDENT' });
  const [showPassword, setShowPassword] = useState(false);
  const [status, setStatus] = useState({ error: '', success: '', loading: false });

  useEffect(() => {
    setIsLogin(location.pathname !== '/register');
    setStatus({ error: '', success: '', loading: false });
  }, [location.pathname]);

  const updateField = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const switchMode = (toLogin) => {
    navigate(toLogin ? '/login' : '/register');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ error: '', success: '', loading: true });

    const { name, email, password, confirmPassword, role } = form;

    if (!email.trim() || !password) {
      return setStatus({ error: 'Please enter all required fields.', success: '', loading: false });
    }

    if (!isLogin) {
      if (!name.trim()) return setStatus({ error: 'Full name is required.', success: '', loading: false });
      if (password.length < 6) return setStatus({ error: 'Password must be at least 6 characters.', success: '', loading: false });
      if (password !== confirmPassword) return setStatus({ error: 'Passwords do not match.', success: '', loading: false });
    }

    try {
      if (isLogin) {
        const res = await authService.login({ email: email.trim(), password });
        if (res?.success) {
          setStatus({ error: '', success: 'Signed in successfully! Redirecting...', loading: false });
          setTimeout(() => navigate('/'), 500);
        } else {
          setStatus({ error: res?.message || 'Invalid credentials.', success: '', loading: false });
        }
      } else {
        const res = await authService.register({ name: name.trim(), email: email.trim(), password, role });
        if (res?.success) {
          setStatus({ error: '', success: 'Account created! Switching to Sign In...', loading: false });
          setTimeout(() => switchMode(true), 1200);
        } else {
          setStatus({ error: res?.message || 'Registration failed.', success: '', loading: false });
        }
      }
    } catch (err) {
      setStatus({
        error: err.response?.data?.message || (isLogin ? 'Login failed.' : 'Registration failed. Email might exist.'),
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
              {isLogin ? 'Sign In' : 'Create Account'}
            </h1>
            <p className="text-sm text-slate-500 mt-1.5">
              {isLogin ? 'Enter your details to access the placement portal.' : 'Register to apply for upcoming placement drives.'}
            </p>
          </div>

          {/* Mode Switcher Tabs */}
          <div className="flex bg-slate-100 p-1 rounded-xl mb-6">
            <button
              type="button"
              onClick={() => switchMode(true)}
              className={`flex-1 py-2 text-sm font-semibold rounded-lg transition-all ${
                isLogin ? 'bg-[#0b1528] text-white shadow-sm' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Sign In
            </button>
            <button
              type="button"
              onClick={() => switchMode(false)}
              className={`flex-1 py-2 text-sm font-semibold rounded-lg transition-all ${
                !isLogin ? 'bg-[#0b1528] text-white shadow-sm' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Register
            </button>
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
            {!isLogin && (
              <div>
                <label htmlFor="auth-name" className="block text-sm font-semibold text-slate-700 mb-1">Full Name</label>
                <input
                  id="auth-name"
                  name="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={updateField}
                  placeholder="e.g. Omkar Gaikwad"
                  className="w-full h-11 px-4 bg-white border border-slate-300 rounded-lg text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0b1528]"
                />
              </div>
            )}

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

            {!isLogin && (
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1">Role</label>
                <div className="grid grid-cols-3 gap-2">
                  {ROLES.map((r) => (
                    <button
                      key={r}
                      type="button"
                      onClick={() => setForm({ ...form, role: r })}
                      className={`py-2 text-xs font-bold rounded-lg border transition-all ${
                        form.role === r
                          ? r === 'STUDENT'
                            ? 'border-amber-400 bg-amber-50 text-[#0b1528] ring-2 ring-amber-300'
                            : 'border-slate-800 bg-[#0b1528] text-white ring-2 ring-slate-700'
                          : 'border-slate-300 bg-white text-slate-600 hover:bg-slate-50'
                      }`}
                    >
                      {r === 'STUDENT' ? '🎓 Student' : r === 'TPO' ? '🏢 TPO' : '🛡️ Admin'}
                    </button>
                  ))}
                </div>
              </div>
            )}

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

            {!isLogin && (
              <div>
                <label htmlFor="auth-confirm" className="block text-sm font-semibold text-slate-700 mb-1">Confirm Password</label>
                <input
                  id="auth-confirm"
                  name="confirmPassword"
                  type="password"
                  required
                  value={form.confirmPassword}
                  onChange={updateField}
                  placeholder="Repeat password"
                  className="w-full h-11 px-4 bg-white border border-slate-300 rounded-lg text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0b1528]"
                />
              </div>
            )}

            {/* Main CTA: Golden Yellow */}
            <button
              type="submit"
              disabled={status.loading}
              className="w-full h-11 bg-amber-400 hover:bg-amber-300 text-[#0b1528] font-bold rounded-lg transition-colors text-sm shadow-sm cursor-pointer disabled:opacity-60 mt-2"
            >
              {status.loading ? 'Please wait...' : isLogin ? 'Sign In' : 'Create Account'}
            </button>
          </form>

          {/* Toggle link */}
          <p className="text-center text-sm text-slate-600 mt-6">
            {isLogin ? "Don't have an account? " : 'Already have an account? '}
            <button
              type="button"
              onClick={() => switchMode(!isLogin)}
              className="font-bold text-[#0b1528] hover:underline cursor-pointer"
            >
              {isLogin ? 'Register' : 'Sign in'}
            </button>
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
