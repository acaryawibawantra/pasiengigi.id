'use client';

import { useState } from 'react';
import { Heart, Mail, Lock, Eye, EyeOff, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Nanti akan dikoneksikan dengan backend
    console.log('Login attempt:', formData);
    alert('Login functionality akan diintegrasikan dengan backend!');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-teal-50 flex items-center justify-center px-5 py-8">
      {/* Back Button */}
      <Link 
        href="/"
        className="absolute top-4 left-4 sm:top-8 sm:left-8 flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition"
      >
        <ArrowLeft className="w-5 h-5" />
        <span className="font-medium">Kembali</span>
      </Link>

      <div className="w-full max-w-md">
        {/* Logo & Title */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center space-x-2 mb-4">
            <Heart className="w-10 h-10 text-blue-500" />
            <span className="text-3xl font-bold text-blue-600">PasienGigi.id</span>
          </Link>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Selamat Datang Kembali!</h1>
          <p className="text-gray-600">Masuk ke akun Anda untuk melanjutkan</p>
        </div>

        {/* Login Card */}
        <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8">
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Email Input */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  // --- FIX DI SINI ---
                  className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg text-gray-900 placeholder:text-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                  placeholder="nama@email.com"
                  required
                />
              </div>
            </div>

            {/* Password Input */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                   // --- FIX DI SINI ---
                  className="block w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg text-gray-900 placeholder:text-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                  placeholder="Masukkan password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                  ) : (
                    <Eye className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                  )}
                </button>
              </div>
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember"
                  type="checkbox"
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label htmlFor="remember" className="ml-2 block text-sm text-gray-700">
                  Ingat saya
                </label>
              </div>
              <a href="#" className="text-sm text-blue-600 hover:text-blue-700 font-medium">
                Lupa password?
              </a>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition shadow-md font-medium text-base"
            >
              Masuk
            </button>
          </form>

          {/* Divider */}
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-white text-gray-500">atau</span>
            </div>
          </div>

          {/* Social Login Buttons */}
          <div className="space-y-3">
            <button className="w-full flex items-center justify-center space-x-2 py-3 px-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition">
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              <span className="text-gray-700 font-medium">Masuk dengan Google</span>
            </button>
          </div>

          {/* Register Link */}
          <p className="mt-6 text-center text-sm text-gray-600">
            Belum punya akun?{' '}
            <Link href="/register" className="text-blue-600 hover:text-blue-700 font-medium">
              Daftar sekarang
            </Link>
          </p>
        </div>

        {/* Info Text */}
        <p className="mt-6 text-center text-xs text-gray-500">
          Dengan masuk, Anda menyetujui{' '}
          <a href="#" className="text-blue-600 hover:underline">Syarat & Ketentuan</a>
          {' '}dan{' '}
          <a href="#" className="text-blue-600 hover:underline">Kebijakan Privasi</a>
        </p>
      </div>
    </div>
  );
}