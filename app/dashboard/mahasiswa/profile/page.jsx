'use client';

import { useState } from 'react';
import { Heart, ArrowLeft, User, Mail, Phone, Building2, GraduationCap, MapPin, Upload, Camera, Save, Shield, Eye, EyeOff, CheckCircle, Award, Users, Star } from 'lucide-react';
import Link from 'next/link';

export default function ProfileMahasiswaPage() {
  const [isEditing, setIsEditing] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [profilePhoto, setProfilePhoto] = useState(null);
  const [ktmPhoto, setKtmPhoto] = useState(null);
  
  const [formData, setFormData] = useState({
    fullName: 'Dr. Sarah Putri',
    email: 'sarah.fkg@univ-x.ac.id',
    phone: '089876543210',
    university: 'Universitas Airlangga',
    faculty: 'Fakultas Kedokteran Gigi',
    semester: '8',
    nim: '210123456',
    city: 'Surabaya',
    clinicLocation: 'RSGM Unair, Surabaya',
    bio: 'Saya adalah mahasiswa koas FKG yang berdedikasi dan ramah, siap membantu Anda menyelesaikan masalah gigi dengan profesional.',
    specialties: ['Karies', 'Scaling', 'Pencabutan'],
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });

  // Stats (dari backend nanti)
  const stats = {
    totalPatients: 12,
    completedCases: 10,
    rating: 4.8,
    reviews: 8
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handlePhotoChange = (e, type) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (type === 'profile') {
          setProfilePhoto(reader.result);
        } else {
          setKtmPhoto(reader.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSpecialtyToggle = (specialty) => {
    if (formData.specialties.includes(specialty)) {
      setFormData({
        ...formData,
        specialties: formData.specialties.filter(s => s !== specialty)
      });
    } else {
      setFormData({
        ...formData,
        specialties: [...formData.specialties, specialty]
      });
    }
  };

  const handleSave = (e) => {
    e.preventDefault();
    console.log('Saving profile:', formData);
    alert('Profil berhasil diperbarui! (Akan tersimpan di database)');
    setIsEditing(false);
  };

  const specialtyOptions = [
    'Karies', 'Scaling', 'Pencabutan', 'Tambal Gigi', 
    'Perawatan Saluran Akar', 'Gigi Tiruan', 'Ortodonti', 'Bedah Mulut'
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-5">
      {/* Back Button */}
      <div className="max-w-5xl mx-auto mb-6">
        <Link 
          href="/dashboard/mahasiswa"
          className="inline-flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition"
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="font-medium">Kembali ke Dashboard</span>
        </Link>
      </div>

      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-2">
              <Heart className="w-8 h-8 text-blue-500" />
              <span className="text-2xl font-bold text-blue-600">PasienGigi.id</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Profil Mahasiswa</h1>
          </div>
          <button
            onClick={() => setIsEditing(!isEditing)}
            className={`px-6 py-3 rounded-lg font-medium transition ${
              isEditing 
                ? 'bg-gray-200 text-gray-700 hover:bg-gray-300' 
                : 'bg-blue-600 text-white hover:bg-blue-700'
            }`}
          >
            {isEditing ? 'Batal Edit' : 'Edit Profil'}
          </button>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Left Column - Photo & Status */}
          <div className="space-y-6">
            {/* Profile Photo */}
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
              <h3 className="font-bold text-gray-900 mb-4">Foto Profil</h3>
              <div className="flex flex-col items-center">
                <div className="relative">
                  {profilePhoto ? (
                    <img src={profilePhoto} alt="Profile" className="w-32 h-32 rounded-full object-cover border-4 border-blue-100" />
                  ) : (
                    <div className="w-32 h-32 rounded-full bg-blue-100 flex items-center justify-center border-4 border-blue-200">
                      <span className="text-4xl font-bold text-blue-600">
                        {formData.fullName.split(' ').map(n => n[0]).join('').substring(0, 2)}
                      </span>
                    </div>
                  )}
                  {isEditing && (
                    <label className="absolute bottom-0 right-0 w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center cursor-pointer hover:bg-blue-700 transition shadow-lg">
                      <Camera className="w-5 h-5 text-white" />
                      <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => handlePhotoChange(e, 'profile')}
                        className="hidden"
                      />
                    </label>
                  )}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mt-4 text-center">{formData.fullName}</h3>
                <p className="text-gray-600 text-sm text-center">{formData.email}</p>
              </div>
            </div>

            {/* Status Verifikasi */}
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
              <h3 className="font-bold text-gray-900 mb-4">Status Akun</h3>
              <div className="flex items-center space-x-2 p-3 bg-green-50 border border-green-200 rounded-lg">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <div className="flex-1">
                  <p className="text-sm font-medium text-green-900">Akun Terverifikasi</p>
                  <p className="text-xs text-green-700">KTM telah diverifikasi admin</p>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
              <h3 className="font-bold text-gray-900 mb-4">Statistik</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Users className="w-5 h-5 text-blue-600" />
                    <span className="text-sm text-gray-600">Total Pasien</span>
                  </div>
                  <span className="font-bold text-gray-900">{stats.totalPatients}</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Award className="w-5 h-5 text-green-600" />
                    <span className="text-sm text-gray-600">Kasus Selesai</span>
                  </div>
                  <span className="font-bold text-gray-900">{stats.completedCases}</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Star className="w-5 h-5 text-yellow-500" />
                    <span className="text-sm text-gray-600">Rating</span>
                  </div>
                  <span className="font-bold text-gray-900">{stats.rating} ({stats.reviews})</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Forms */}
          <div className="lg:col-span-2 space-y-6">
            <form onSubmit={handleSave}>
              {/* Data Diri & Akademik */}
              <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 mb-6">
                <h3 className="text-lg font-bold text-gray-900 mb-6 flex items-center">
                  <User className="w-5 h-5 mr-2 text-blue-600" />
                  Data Diri & Akademik
                </h3>

                <div className="grid sm:grid-cols-2 gap-4">
                  {/* Nama Lengkap */}
                  <div className="sm:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nama Lengkap
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      disabled={!isEditing}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition disabled:bg-gray-50"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        disabled={!isEditing}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition disabled:bg-gray-50"
                      />
                    </div>
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nomor WhatsApp
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        disabled={!isEditing}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition disabled:bg-gray-50"
                      />
                    </div>
                  </div>

                  {/* University */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Universitas
                    </label>
                    <div className="relative">
                      <Building2 className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="text"
                        name="university"
                        value={formData.university}
                        disabled
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg bg-gray-50 cursor-not-allowed"
                      />
                    </div>
                    <p className="text-xs text-gray-500 mt-1">Tidak dapat diubah</p>
                  </div>

                  {/* Semester & NIM */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Semester & NIM
                    </label>
                    <div className="flex space-x-2">
                      <select
                        name="semester"
                        value={formData.semester}
                        onChange={handleInputChange}
                        disabled={!isEditing}
                        className="w-1/3 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition disabled:bg-gray-50"
                      >
                        {[...Array(12)].map((_, i) => (
                          <option key={i+1} value={i+1}>Sem {i+1}</option>
                        ))}
                      </select>
                      <input
                        type="text"
                        name="nim"
                        value={formData.nim}
                        disabled
                        className="flex-1 px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 cursor-not-allowed"
                      />
                    </div>
                  </div>

                  {/* City */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Kota
                    </label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        disabled={!isEditing}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition disabled:bg-gray-50"
                      />
                    </div>
                  </div>

                  {/* Clinic Location */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Lokasi Klinik/Kampus
                    </label>
                    <input
                      type="text"
                      name="clinicLocation"
                      value={formData.clinicLocation}
                      onChange={handleInputChange}
                      disabled={!isEditing}
                      placeholder="Contoh: RSGM Unair, Surabaya"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition disabled:bg-gray-50"
                    />
                  </div>
                </div>
              </div>

              {/* Bio & Specialties */}
              <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 mb-6">
                <h3 className="text-lg font-bold text-gray-900 mb-6">Bio & Keahlian</h3>

                {/* Bio */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Bio Singkat
                  </label>
                  <textarea
                    name="bio"
                    value={formData.bio}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                    rows="4"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition disabled:bg-gray-50"
                    placeholder="Ceritakan tentang diri Anda..."
                  />
                  <p className="text-xs text-gray-500 mt-1">Bio ini akan ditampilkan ke pasien</p>
                </div>

                {/* Specialties */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Keahlian/Spesialisasi <span className="text-gray-500 font-normal">(Pilih yang Anda kuasai)</span>
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {specialtyOptions.map((specialty) => (
                      <button
                        key={specialty}
                        type="button"
                        onClick={() => isEditing && handleSpecialtyToggle(specialty)}
                        disabled={!isEditing}
                        className={`px-4 py-2 rounded-lg border-2 transition font-medium text-sm ${
                          formData.specialties.includes(specialty)
                            ? 'border-blue-500 bg-blue-50 text-blue-700'
                            : 'border-gray-300 bg-white text-gray-700 hover:border-blue-300'
                        } ${!isEditing && 'cursor-not-allowed opacity-70'}`}
                      >
                        {specialty}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* KTM Upload */}
              <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 mb-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Kartu Tanda Mahasiswa (KTM)</h3>
                {ktmPhoto ? (
                  <div className="relative">
                    <img src={ktmPhoto} alt="KTM" className="w-full max-w-md h-64 object-cover rounded-lg border-2 border-gray-200" />
                    {isEditing && (
                      <label className="absolute bottom-4 right-4 px-4 py-2 bg-blue-600 text-white rounded-lg cursor-pointer hover:bg-blue-700 transition shadow-lg flex items-center space-x-2">
                        <Upload className="w-4 h-4" />
                        <span>Ganti KTM</span>
                        <input
                          type="file"
                          accept="image/*"
                          onChange={(e) => handlePhotoChange(e, 'ktm')}
                          className="hidden"
                        />
                      </label>
                    )}
                  </div>
                ) : (
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                    <Upload className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                    <p className="text-sm text-gray-600 mb-3">KTM belum diunggah</p>
                    {isEditing && (
                      <label className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg cursor-pointer hover:bg-blue-700 transition">
                        Upload KTM
                        <input
                          type="file"
                          accept="image/*"
                          onChange={(e) => handlePhotoChange(e, 'ktm')}
                          className="hidden"
                        />
                      </label>
                    )}
                  </div>
                )}
              </div>

              {/* Change Password */}
              {isEditing && (
                <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 mb-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-6 flex items-center">
                    <Shield className="w-5 h-5 mr-2 text-blue-600" />
                    Ubah Password <span className="text-sm font-normal text-gray-500 ml-2">(Opsional)</span>
                  </h3>

                  <div className="space-y-4">
                    {/* Current Password */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Password Lama
                      </label>
                      <input
                        type="password"
                        name="currentPassword"
                        value={formData.currentPassword}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                        placeholder="Masukkan password lama"
                      />
                    </div>

                    {/* New Password */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Password Baru
                      </label>
                      <div className="relative">
                        <input
                          type={showNewPassword ? "text" : "password"}
                          name="newPassword"
                          value={formData.newPassword}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                          placeholder="Minimal 8 karakter"
                        />
                        <button
                          type="button"
                          onClick={() => setShowNewPassword(!showNewPassword)}
                          className="absolute right-3 top-1/2 transform -translate-y-1/2"
                        >
                          {showNewPassword ? (
                            <EyeOff className="w-5 h-5 text-gray-400" />
                          ) : (
                            <Eye className="w-5 h-5 text-gray-400" />
                          )}
                        </button>
                      </div>
                    </div>

                    {/* Confirm Password */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Konfirmasi Password Baru
                      </label>
                      <input
                        type="password"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                        placeholder="Ketik ulang password baru"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Save Button */}
              {isEditing && (
                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition shadow-lg font-medium flex items-center space-x-2"
                  >
                    <Save className="w-5 h-5" />
                    <span>Simpan Perubahan</span>
                  </button>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}