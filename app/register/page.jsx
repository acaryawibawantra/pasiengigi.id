'use client';

import { useState } from 'react';
import { Heart, Stethoscope, UserCheck, ArrowLeft, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function RegisterPage() {
  const [userType, setUserType] = useState(null); // 'mahasiswa' or 'pasien'

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

      <div className="w-full max-w-4xl py-8">
        {/* Logo & Title */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center space-x-2 mb-4">
            <Heart className="w-10 h-10 text-blue-500" />
            <span className="text-3xl font-bold text-blue-600">PasienGigi.id</span>
          </Link>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Daftar Akun Baru</h1>
          <p className="text-gray-600">Pilih jenis akun yang ingin Anda buat</p>
        </div>

        {/* User Type Selection */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          {/* Mahasiswa Card */}
          <div 
            onClick={() => setUserType('mahasiswa')}
            className={`bg-white rounded-2xl shadow-xl p-6 sm:p-8 cursor-pointer transition-all transform hover:scale-105 ${
              userType === 'mahasiswa' ? 'ring-4 ring-blue-500 shadow-2xl' : 'hover:shadow-2xl'
            }`}
          >
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center">
                <Stethoscope className="w-10 h-10 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Mahasiswa FKG</h3>
              <p className="text-gray-600">
                Saya mahasiswa Fakultas Kedokteran Gigi yang sedang mencari pasien untuk praktek klinik
              </p>
              <ul className="text-sm text-left space-y-2 text-gray-700 w-full">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Posting kebutuhan pasien</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Akses database pasien</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Verifikasi dengan KTM</span>
                </li>
              </ul>
              <button 
                className={`w-full py-3 px-4 rounded-lg font-medium transition flex items-center justify-center space-x-2 ${
                  userType === 'mahasiswa' 
                    ? 'bg-blue-600 text-white hover:bg-blue-700' 
                    : 'bg-blue-50 text-blue-600 hover:bg-blue-100'
                }`}
              >
                <span>Pilih sebagai Mahasiswa</span>
                {userType === 'mahasiswa' && <ArrowRight className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {/* Pasien Card */}
          <div 
            onClick={() => setUserType('pasien')}
            className={`bg-white rounded-2xl shadow-xl p-6 sm:p-8 cursor-pointer transition-all transform hover:scale-105 ${
              userType === 'pasien' ? 'ring-4 ring-teal-500 shadow-2xl' : 'hover:shadow-2xl'
            }`}
          >
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="w-20 h-20 bg-teal-100 rounded-full flex items-center justify-center">
                <UserCheck className="w-10 h-10 text-teal-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Pasien</h3>
              <p className="text-gray-600">
                Saya ingin mendapatkan perawatan gigi gratis berkualitas dari mahasiswa FKG
              </p>
              <ul className="text-sm text-left space-y-2 text-gray-700 w-full">
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">✓</span>
                  <span>Perawatan 100% gratis</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">✓</span>
                  <span>Posting keluhan gigi</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">✓</span>
                  <span>Akses mahasiswa terverifikasi</span>
                </li>
              </ul>
              <button 
                className={`w-full py-3 px-4 rounded-lg font-medium transition flex items-center justify-center space-x-2 ${
                  userType === 'pasien' 
                    ? 'bg-teal-600 text-white hover:bg-teal-700' 
                    : 'bg-teal-50 text-teal-600 hover:bg-teal-100'
                }`}
              >
                <span>Pilih sebagai Pasien</span>
                {userType === 'pasien' && <ArrowRight className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Continue Button */}
        {userType && (
          <div className="text-center animate-fade-in">
            <Link 
              href={userType === 'mahasiswa' ? '/register/mahasiswa' : '/register/pasien'}
              className={`inline-flex items-center space-x-2 px-8 py-4 rounded-lg text-white font-medium shadow-lg transition transform hover:scale-105 ${
                userType === 'mahasiswa' ? 'bg-blue-600 hover:bg-blue-700' : 'bg-teal-600 hover:bg-teal-700'
              }`}
            >
              <span>Lanjutkan Pendaftaran</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        )}

        {/* Login Link */}
        <p className="mt-8 text-center text-sm text-gray-600">
          Sudah punya akun?{' '}
          <Link href="/login" className="text-blue-600 hover:text-blue-700 font-medium">
            Masuk di sini
          </Link>
        </p>

        {/* Info Text */}
        <p className="mt-4 text-center text-xs text-gray-500">
          Dengan mendaftar, Anda menyetujui{' '}
          <a href="#" className="text-blue-600 hover:underline">Syarat & Ketentuan</a>
          {' '}dan{' '}
          <a href="#" className="text-blue-600 hover:underline">Kebijakan Privasi</a>
        </p>
      </div>
    </div>
  );
}