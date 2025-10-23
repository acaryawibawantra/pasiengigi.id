'use client';

import { useState } from 'react';
import { Heart, ArrowLeft, User, Mail, Lock, Phone, Building2, GraduationCap, Upload, MapPin, Eye, EyeOff } from 'lucide-react';
import Link from 'next/link';

export default function RegisterMahasiswaPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [ktmFile, setKtmFile] = useState(null);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
    university: '',
    faculty: 'Fakultas Kedokteran Gigi',
    semester: '',
    nim: '',
    city: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setKtmFile(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    console.log('KTM File:', ktmFile);
    alert('Registrasi akan diintegrasikan dengan backend!');
  };

  const universities = [
    'Universitas Indonesia',
    'Universitas Gadjah Mada',
    'Universitas Airlangga',
    'Universitas Padjadjaran',
    'Universitas Hasanuddin',
    'Universitas Trisakti',
    'Lainnya'
  ];

  const semesters = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];

  const cities = [
    'Jakarta', 'Surabaya', 'Bandung', 'Medan', 'Semarang',
    'Makassar', 'Palembang', 'Tangerang', 'Depok', 'Bekasi',
    'Yogyakarta', 'Malang', 'Bogor', 'Denpasar', 'Lainnya'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-teal-50 py-8 px-5">
      {/* Back Button */}
      <Link 
        href="/register"
        className="inline-flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition mb-6 ml-4"
      >
        <ArrowLeft className="w-5 h-5" />
        <span className="font-medium">Kembali</span>
      </Link>

      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center space-x-2 mb-4">
            <Heart className="w-10 h-10 text-blue-500" />
            <span className="text-3xl font-bold text-blue-600">PasienGigi.id</span>
          </Link>
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
              <GraduationCap className="w-6 h-6 text-blue-600" />
            </div>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Daftar Sebagai Mahasiswa FKG</h1>
          <p className="text-gray-600">Lengkapi data diri Anda untuk verifikasi</p>
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Personal Information Section */}
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                <User className="w-5 h-5 mr-2 text-blue-600" />
                Informasi Pribadi
              </h3>
              
              {/* Full Name */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nama Lengkap <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition text-gray-900 placeholder:text-gray-400"
                  placeholder="Masukkan nama lengkap"
                  required
                />
              </div>

              {/* Email */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 text-gray-900 placeholder:text-gray-400 focus:ring-blue-500 focus:border-blue-500 transition"
                    placeholder="nama@email.com"
                    required
                  />
                </div>
              </div>

              {/* Phone */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nomor WhatsApp <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Phone className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 text-gray-900 placeholder:text-gray-400 focus:ring-blue-500 focus:border-blue-500 transition"
                    placeholder="08xxxxxxxxxx"
                    required
                  />
                </div>
                <p className="text-xs text-gray-500 mt-1">Untuk komunikasi dengan pasien</p>
              </div>

              {/* Password */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Password <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-12 py-3 border text-gray-900 placeholder:text-gray-400 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                    placeholder="Minimal 8 karakter"
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

              {/* Confirm Password */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Konfirmasi Password <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 text-gray-900 placeholder:text-gray-400 focus:ring-blue-500 focus:border-blue-500 transition"
                    placeholder="Ulangi password"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  >
                    {showConfirmPassword ? (
                      <EyeOff className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                    ) : (
                      <Eye className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-gray-200 my-6"></div>

            {/* Academic Information Section */}
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                <Building2 className="w-5 h-5 mr-2 text-blue-600" />
                Informasi Akademik
              </h3>

              {/* University */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Universitas <span className="text-red-500">*</span>
                </label>
                <select
                  name="university"
                  value={formData.university}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 text-gray-900 placeholder:text-gray-400 focus:ring-blue-500 focus:border-blue-500 transition"
                  required
                >
                  <option value="">Pilih Universitas</option>
                  {universities.map((univ) => (
                    <option key={univ} value={univ}>{univ}</option>
                  ))}
                </select>
              </div>

              {/* Faculty (Disabled) */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Fakultas
                </label>
                <input
                  type="text"
                  value={formData.faculty}
                  className="w-full px-4 py-3 border text-gray-900 placeholder:text-gray-400 border-gray-300 rounded-lg bg-gray-50 cursor-not-allowed"
                  disabled
                />
                <p className="text-xs text-gray-500 mt-1">Otomatis: Fakultas Kedokteran Gigi</p>
              </div>

              {/* Semester & NIM Row */}
              <div className="grid grid-cols-2 gap-4 mb-4">
                {/* Semester */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Semester <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="semester"
                    value={formData.semester}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 text-gray-900 placeholder:text-gray-400 focus:ring-blue-500 focus:border-blue-500 transition"
                    required
                  >
                    <option value="">Pilih</option>
                    {semesters.map((sem) => (
                      <option key={sem} value={sem}>Semester {sem}</option>
                    ))}
                  </select>
                </div>

                {/* NIM */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    NIM <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="nim"
                    value={formData.nim}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 text-gray-900 placeholder:text-gray-400 focus:ring-blue-500 focus:border-blue-500 transition"
                    placeholder="Nomor Induk"
                    required
                  />
                </div>
              </div>

              {/* City */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Kota Praktek <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <MapPin className="h-5 w-5 text-gray-400" />
                  </div>
                  <select
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 text-gray-900 placeholder:text-gray-400 focus:ring-blue-500 focus:border-blue-500 transition"
                    required
                  >
                    <option value="">Pilih Kota</option>
                    {cities.map((city) => (
                      <option key={city} value={city}>{city}</option>
                    ))}
                  </select>
                </div>
                <p className="text-xs text-gray-500 mt-1">Lokasi dimana Anda praktek</p>
              </div>

              {/* KTM Upload */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Upload KTM (Kartu Tanda Mahasiswa) <span className="text-red-500">*</span>
                </label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-500 transition">
                  <input
                    type="file"
                    id="ktm-upload"
                    accept="image/*"
                    onChange={handleFileChange}
                    className="hidden"
                    required
                  />
                  <label htmlFor="ktm-upload" className="cursor-pointer">
                    <Upload className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                    <p className="text-sm text-gray-600 mb-1">
                      {ktmFile ? ktmFile.name : 'Klik untuk upload atau drag & drop'}
                    </p>
                    <p className="text-xs text-gray-500">
                      Format: JPG, PNG, PDF (Max 5MB)
                    </p>
                  </label>
                </div>
                <p className="text-xs text-gray-500 mt-2">
                  KTM akan digunakan untuk verifikasi akun Anda
                </p>
              </div>
            </div>

            {/* Terms */}
            <div className="flex items-start">
              <input
                id="terms"
                type="checkbox"
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded mt-1"
                required
              />
              <label htmlFor="terms" className="ml-2 block text-sm text-gray-700">
                Saya menyetujui{' '}
                <a href="#" className="text-blue-600 hover:underline">Syarat & Ketentuan</a>
                {' '}dan{' '}
                <a href="#" className="text-blue-600 hover:underline">Kebijakan Privasi</a>
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-4 px-6 rounded-lg hover:bg-blue-700 transition shadow-lg font-medium text-base"
            >
              Daftar Sekarang
            </button>
          </form>

          {/* Login Link */}
          <p className="mt-6 text-center text-sm text-gray-600">
            Sudah punya akun?{' '}
            <Link href="/login" className="text-blue-600 hover:text-blue-700 font-medium">
              Masuk di sini
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}