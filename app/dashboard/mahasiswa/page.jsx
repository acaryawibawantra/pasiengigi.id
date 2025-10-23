'use client';

import { useState } from 'react';
import { Heart, Search, Filter, MapPin, Calendar, User, Plus, LogOut, LayoutDashboard, FileText, UserCircle, Menu, X, Phone, MessageCircle } from 'lucide-react';
import Link from 'next/link';

export default function DashboardMahasiswa() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedComplaint, setSelectedComplaint] = useState('');

  // Dummy data pasien (nanti dari backend)
  const pasienList = [
    {
      id: 1,
      name: 'Made Capybara Imut',
      age: 28,
      city: 'Simpang enam',
      complaint: 'Gigi Berlubang (Karies)',
      description: 'Gigi geraham kanan bawah berlubang cukup besar, sering nyeri saat makan',
      phone: '081234567890',
      hasPhoto: true,
      postedDate: '2 hari yang lalu'
    },
    {
      id: 2,
      name: 'Made Arimbawa Pradnya',
      age: 35,
      city: 'SImpang Enam',
      complaint: 'Karang Gigi',
      description: 'Karang gigi menumpuk di bagian depan bawah, ingin dibersihkan',
      phone: '081234567891',
      hasPhoto: true,
      postedDate: '3 hari yang lalu'
    },
    {
      id: 3,
      name: 'Bryen yanto',
      age: 42,
      city: 'Sidoarjo',
      complaint: 'Gigi Goyang',
      description: 'Gigi depan atas goyang, kemungkinan perlu dicabut',
      phone: '081234567892',
      hasPhoto: false,
      postedDate: '5 hari yang lalu'
    },
    {
      id: 4,
      name: 'Dewi Kartika',
      age: 25,
      city: 'Surabaya',
      complaint: 'Gigi Sensitif',
      description: 'Gigi terasa ngilu saat minum dingin atau panas',
      phone: '081234567893',
      hasPhoto: true,
      postedDate: '1 minggu yang lalu'
    }
  ];

  const cities = ['Semua Kota', 'Surabaya', 'Sidoarjo', 'Gresik', 'Malang'];
  const complaints = ['Semua Keluhan', 'Gigi Berlubang (Karies)', 'Karang Gigi', 'Gigi Goyang', 'Gigi Sensitif'];

  // Stats dummy
  const stats = [
    { label: 'Pasien Tersedia', value: '24', color: 'blue' },
    { label: 'Match Bulan Ini', value: '3', color: 'green' },
    { label: 'Total Perawatan', value: '8', color: 'purple' }
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <aside className={`fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transform transition-transform duration-300 lg:translate-x-0 lg:static ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="h-full flex flex-col">
          {/* Logo */}
          <div className="p-6 border-b border-gray-200">
            <Link href="/" className="flex items-center space-x-2">
              <Heart className="w-8 h-8 text-blue-500" />
              <span className="text-xl font-bold text-blue-600">PasienGigi.id</span>
            </Link>
            <p className="text-sm text-gray-600 mt-2">Mahasiswa FKG</p>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4 space-y-2">
            <Link href="/dashboard/mahasiswa" className="flex items-center space-x-3 px-4 py-3 bg-blue-50 text-blue-600 rounded-lg font-medium">
              <LayoutDashboard className="w-5 h-5" />
              <span>Dashboard</span>
            </Link>
            <Link href="/dashboard/mahasiswa/my-posts" className="flex items-center space-x-3 px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg transition">
              <FileText className="w-5 h-5" />
              <span>Posting Saya</span>
            </Link>
            <Link href="/dashboard/mahasiswa/profile" className="flex items-center space-x-3 px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg transition">
              <UserCircle className="w-5 h-5" />
              <span>Profil</span>
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
                <h1 className="text-xl sm:text-2xl font-bold text-gray-900">Selamat Datang, Dr. Davin Cabulsss! 👋</h1>
                <p className="text-sm text-gray-600 mt-1">Temukan pasien yang sesuai dengan kebutuhan praktek Anda</p>
              </div>

              {/* Profile Button */}
              <Link href="/dashboard/mahasiswa/profile" className="flex items-center space-x-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition">
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
            <Link href="/dashboard/mahasiswa/create-post">
              <button className="w-full sm:w-auto flex items-center justify-center space-x-2 px-6 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition shadow-md font-medium">
                <Plus className="w-5 h-5" />
                <span>Posting Kebutuhan Pasien</span>
              </button>
            </Link>
          </div>

          {/* Search & Filter */}
          <div className="bg-white rounded-xl shadow-sm p-6 mb-6 ">
            <h2 className="text-lg font-bold text-gray-900 mb-4 ">Cari Pasien</h2>
            
            {/* Search Bar */}
            <div className="mb-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2  text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Cari berdasarkan nama, keluhan, atau lokasi..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg  focus:ring-2 text-gray-900 placeholder:text-gray-400 focus:ring-blue-500 focus:border-blue-500"
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
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 text-gray-900 placeholder:text-gray-400 focus:ring-blue-500"
                >
                  {cities.map((city) => (
                    <option key={city} value={city}>{city}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <Filter className="w-4 h-4 inline mr-1" />
                  Jenis Keluhan
                </label>
                <select
                  value={selectedComplaint}
                  onChange={(e) => setSelectedComplaint(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 text-gray-900 placeholder:text-gray-400 focus:ring-blue-500"
                >
                  {complaints.map((complaint) => (
                    <option key={complaint} value={complaint}>{complaint}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Pasien List */}
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-4">Pasien Tersedia ({pasienList.length})</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {pasienList.map((pasien) => (
                <div key={pasien.id} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                        <User className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900">{pasien.name}</h3>
                        <p className="text-sm text-gray-500">{pasien.age} tahun</p>
                      </div>
                    </div>
                    {pasien.hasPhoto && (
                      <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full">
                        Ada Foto
                      </span>
                    )}
                  </div>

                  {/* Info */}
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-gray-600">
                      <MapPin className="w-4 h-4 mr-2 text-gray-400" />
                      {pasien.city}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Calendar className="w-4 h-4 mr-2 text-gray-400" />
                      {pasien.postedDate}
                    </div>
                  </div>

                  {/* Complaint */}
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 bg-blue-50 text-blue-700 text-sm font-medium rounded-lg mb-2">
                      {pasien.complaint}
                    </span>
                    <p className="text-sm text-gray-700 line-clamp-2">{pasien.description}</p>
                  </div>

                  {/* Actions */}
                  <div className="flex space-x-2">
                    <Link href={`/dashboard/mahasiswa/pasien/${pasien.id}`} className="flex-1">
                      <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium text-sm">
                        Lihat Detail
                      </button>
                    </Link>
                    <a href={`https://wa.me/${pasien.phone}`} target="_blank" rel="noopener noreferrer">
                      <button className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition">
                        <MessageCircle className="w-5 h-5" />
                      </button>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}