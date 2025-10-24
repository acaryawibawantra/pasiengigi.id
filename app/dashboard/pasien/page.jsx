'use client';

import { useState } from 'react';
import { Heart, Search, Filter, MapPin, GraduationCap, Stethoscope, LogOut, LayoutDashboard, FileText, UserCircle, Menu, MessageCircle, Star, Building2, Plus } from 'lucide-react';
import Link from 'next/link';

export default function DashboardPasien() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedTreatment, setSelectedTreatment] = useState('');

  // Dummy data mahasiswa (nanti dari backend)
  const mahasiswaList = [
    {
      id: 1,
      name: 'dr. Sarah Putri',
      university: 'Universitas Airlangga',
      semester: 8,
      city: 'Surabaya',
      needCase: 'Karies (Gigi Berlubang)',
      description: 'Mencari pasien dengan karies profunda untuk praktek konservasi gigi',
      rating: 4.8,
      totalPatients: 12,
      phone: '081234567890',
      verified: true
    },
    {
      id: 2,
      name: 'dr. Ahmad Rizki',
      university: 'Universitas Airlangga',
      semester: 9,
      city: 'Surabaya',
      needCase: 'Scaling (Pembersihan Karang Gigi)',
      description: 'Membutuhkan pasien untuk praktikum periodonsia',
      rating: 4.9,
      totalPatients: 15,
      phone: '081234567891',
      verified: true
    },
    {
      id: 3,
      name: 'dr. Dina Kartika',
      university: 'Universitas Airlangga',
      semester: 7,
      city: 'Sidoarjo',
      needCase: 'Pencabutan Gigi',
      description: 'Mencari kasus ekstraksi gigi untuk memenuhi syarat praktek bedah mulut',
      rating: 4.7,
      totalPatients: 8,
      phone: '081234567892',
      verified: true
    },
    {
      id: 4,
      name: 'dr. Budi Santoso',
      university: 'Universitas Airlangga',
      semester: 10,
      city: 'Surabaya',
      needCase: 'Perawatan Saluran Akar',
      description: 'Membutuhkan kasus endodontic treatment untuk case requirement',
      rating: 4.9,
      totalPatients: 20,
      phone: '081234567893',
      verified: true
    }
  ];

  const cities = ['Semua Kota', 'Surabaya', 'Sidoarjo', 'Gresik', 'Malang'];
  const treatments = [
    'Semua Treatment',
    'Karies (Gigi Berlubang)',
    'Scaling (Karang Gigi)',
    'Pencabutan Gigi',
    'Perawatan Saluran Akar',
    'Tambal Gigi',
    'Behel/Ortodonti'
  ];

  // Stats dummy
  const stats = [
    { label: 'Mahasiswa Tersedia', value: '18', color: 'teal' },
    { label: 'Match Bulan Ini', value: '1', color: 'green' },
    { label: 'Riwayat Perawatan', value: '2', color: 'purple' }
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <aside className={`fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transform transition-transform duration-300 lg:translate-x-0 lg:static ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="h-full flex flex-col">
          {/* Logo */}
          <div className="p-6 border-b border-gray-200">
            <Link href="/" className="flex items-center space-x-2">
              <Heart className="w-8 h-8 text-teal-500" />
              <span className="text-xl font-bold text-teal-600">PasienGigi.id</span>
            </Link>
            <p className="text-sm text-gray-600 mt-2">Pasien</p>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4 space-y-2">
            <Link href="/dashboard/pasien" className="flex items-center space-x-3 px-4 py-3 bg-teal-50 text-teal-600 rounded-lg font-medium">
              <LayoutDashboard className="w-5 h-5" />
              <span>Dashboard</span>
            </Link>
            {/* Tambah Keluhan */}
            <Link href="/dashboard/pasien/my-complaints" className="flex items-center space-x-3 px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg transition">
              <FileText className="w-5 h-5" />
              <span>Keluhan Saya</span>
            </Link>
            {/* Profil Saya */}
            <Link href="/dashboard/pasien/profile" className="flex items-center space-x-3 px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg transition">
              <UserCircle className="w-5 h-5" />
              <span>Profil Saya</span>
            </Link>
          </nav>

          {/* Logout */}
          <div className="p-4 border-t border-gray-200">
            <button className="flex items-center space-x-3 px-4 py-3 text-red-600 hover:bg-red-50 rounded-lg transition w-full">
              <LogOut className="w-5 h-5" />
              <span>Keluar</span>
            </button>
          </div>
        </div>
      </aside>

      {/* Overlay untuk mobile */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-h-screen">
        {/* Header */}
        <header className="bg-white shadow-sm sticky top-0 z-30">
          <div className="px-5 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center justify-between">
              {/* Mobile Menu Button */}
              <button 
                onClick={() => setSidebarOpen(true)}
                className="lg:hidden p-2 text-gray-600 hover:bg-gray-100 rounded-lg"
              >
                <Menu className="w-6 h-6" />
              </button>

              {/* Welcome Text */}
              <div className="flex-1 lg:ml-0 ml-4">
                <h1 className="text-xl sm:text-2xl font-bold text-gray-900">Selamat Datang, Ahmad! 👋</h1>
                <p className="text-sm text-gray-600 mt-1">Temukan mahasiswa FKG untuk perawatan gigi Anda</p>
              </div>

              {/* Profile Button */}
              <Link href="/dashboard/pasien/profile" className="flex items-center space-x-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition">
                <UserCircle className="w-6 h-6 text-gray-600" />
                <span className="hidden sm:block text-sm font-medium text-gray-700">Profil</span>
              </Link>
            </div>
          </div>
        </header>

        {/* Main */}
        <main className="flex-1 px-5 sm:px-6 lg:px-8 py-8">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-8">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                <p className="text-sm text-gray-600 mb-1">{stat.label}</p>
                <p className={`text-3xl font-bold text-${stat.color}-600`}>{stat.value}</p>
              </div>
            ))}
          </div>

          {/* Action Button */}
          <div className="mb-8">
            <Link href="/dashboard/pasien/create-complaint">
              <button className="w-full sm:w-auto flex items-center justify-center space-x-2 px-6 py-4 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition shadow-md font-medium">
                <Plus className="w-5 h-5" />
                <span>Tambah Keluhan Gigi Baru</span>
              </button>
            </Link>
          </div>

          {/* Info Banner */}
          <div className="bg-gradient-to-r from-teal-500 to-blue-500 rounded-xl p-6 mb-8 text-white">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <h3 className="text-lg font-bold mb-2">🎉 Perawatan 100% Gratis!</h3>
                <p className="text-teal-50 text-sm">
                  Semua perawatan dilakukan di klinik kampus FKG di bawah supervisi dosen. Anda tidak akan dikenakan biaya apapun.
                </p>
              </div>
            </div>
          </div>

          {/* Search & Filter */}
          <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
            <h2 className="text-lg font-bold text-gray-900 mb-4">Cari Mahasiswa FKG</h2>
            
            {/* Search Bar */}
            <div className="mb-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Cari berdasarkan nama, universitas, atau treatment..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 text-gray-900 placeholder:text-gray-400 focus:ring-teal-500 focus:border-teal-500"
                />
              </div>
            </div>

            {/* Filters */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <MapPin className="w-4 h-4 inline mr-1" />
                  Kota
                </label>
                <select
                  value={selectedCity}
                  onChange={(e) => setSelectedCity(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 text-gray-900 placeholder:text-gray-400 focus:ring-teal-500"
                >
                  {cities.map((city) => (
                    <option key={city} value={city}>{city}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <Filter className="w-4 h-4 inline mr-1" />
                  Jenis Treatment
                </label>
                <select
                  value={selectedTreatment}
                  onChange={(e) => setSelectedTreatment(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 text-gray-900 placeholder:text-gray-400 focus:ring-teal-500"
                >
                  {treatments.map((treatment) => (
                    <option key={treatment} value={treatment}>{treatment}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Mahasiswa List */}
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-4">Mahasiswa FKG Tersedia ({mahasiswaList.length})</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {mahasiswaList.map((mahasiswa) => (
                <div key={mahasiswa.id} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center">
                        <GraduationCap className="w-6 h-6 text-teal-600" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900">{mahasiswa.name}</h3>
                        <div className="flex items-center space-x-1 mt-1">
                          <Star className="w-4 h-4 text-yellow-400 fill-current" />
                          <span className="text-sm font-medium text-gray-700">{mahasiswa.rating}</span>
                          <span className="text-xs text-gray-500">({mahasiswa.totalPatients} pasien)</span>
                        </div>
                      </div>
                    </div>
                    {mahasiswa.verified && (
                      <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full">
                        Terverifikasi
                      </span>
                    )}
                  </div>

                  {/* Info */}
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-gray-600">
                      <Building2 className="w-4 h-4 mr-2 text-gray-400" />
                      {mahasiswa.university}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <MapPin className="w-4 h-4 mr-2 text-gray-400" />
                      {mahasiswa.city} • Semester {mahasiswa.semester}
                    </div>
                  </div>

                  {/* Need Case */}
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 bg-teal-50 text-teal-700 text-sm font-medium rounded-lg mb-2">
                      <Stethoscope className="w-4 h-4 inline mr-1" />
                      {mahasiswa.needCase}
                    </span>
                    <p className="text-sm text-gray-700 line-clamp-2">{mahasiswa.description}</p>
                  </div>

                  {/* Actions */}
                  <div className="flex space-x-2">
                    <Link href={`/dashboard/pasien/mahasiswa/${mahasiswa.id}`} className="flex-1">
                      <button className="w-full px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition font-medium text-sm">
                        Lihat Detail
                      </button>
                    </Link>
                    <a href={`https://wa.me/${mahasiswa.phone}`} target="_blank" rel="noopener noreferrer">
                      <button className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition">
                        <MessageCircle className="w-5 h-5" />
                      </button>
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Empty State (jika tidak ada hasil) */}
            {mahasiswaList.length === 0 && (
              <div className="text-center py-12">
                <GraduationCap className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">Tidak ada mahasiswa ditemukan</h3>
                <p className="text-gray-600">Coba ubah filter pencarian Anda</p>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}