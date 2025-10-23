'use client';

import { useState } from 'react';
import { Heart, ArrowLeft, User, Mail, Phone, MapPin, Calendar, Camera, Save, Shield, Eye, EyeOff, FileText, CheckCircle, Clock, Lock } from 'lucide-react';
import Link from 'next/link';

// Komponen Helper untuk Input Form
function FormInput({ label, name, type = "text", value, onChange, icon: Icon, disabled, placeholder }) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-2">
        {label}
      </label>
      <div className="relative">
        {Icon && (
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Icon className="h-5 w-5 text-gray-400" />
          </div>
        )}
        <input
          type={type}
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          disabled={disabled}
          placeholder={placeholder || `Masukkan ${label.toLowerCase()}...`}
          className={`block w-full py-3 border border-gray-300 rounded-lg text-gray-900 placeholder:text-gray-400 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition ${Icon ? 'pl-10 pr-4' : 'px-4'} ${disabled ? 'bg-gray-100 cursor-not-allowed' : 'bg-white'}`}
        />
      </div>
    </div>
  );
}

export default function ProfilePasienPage() {
  const [isEditing, setIsEditing] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [profilePhoto, setProfilePhoto] = useState(null);
  
  const [formData, setFormData] = useState({
    fullName: 'Ahmad Santoso',
    email: 'ahmad.santoso@gmail.com',
    phone: '081234567890',
    birthDate: '1996-05-15',
    address: 'Jl. Raya Darmo No. 123, RT 05/RW 03, Darmo, Wonokromo',
    city: 'Surabaya',
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });

  // Stats & Active Complaints
  const stats = {
    activeComplaints: 1,
    matchedComplaints: 1,
    completedTreatments: 2
  };

  const activeComplaint = {
    id: 1,
    complaint: 'Gigi Berlubang (Karies)',
    postedDate: '2024-01-18',
    interestedMahasiswa: 3
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePhoto(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = (e) => {
    e.preventDefault();
    console.log('Saving profile:', formData);
    alert('Profil berhasil diperbarui! (Akan tersimpan di database)');
    setIsEditing(false);
  };

  const handleDeleteAccount = () => {
    // Ganti 'confirm' dengan modal kustom di aplikasi nyata
    if (confirm('Apakah Anda yakin ingin menghapus akun? Tindakan ini tidak dapat dibatalkan.')) {
      alert('Akun akan dihapus. (Akan terhubung dengan backend)');
      // Logika penghapusan akun...
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      {/* Back Button */}
      <div className="max-w-5xl mx-auto mb-6">
        <Link 
          href="/dashboard/pasien"
          className="inline-flex items-center space-x-2 text-gray-600 hover:text-teal-600 transition"
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="font-medium">Kembali ke Dashboard</span>
        </Link>
      </div>

      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-2">
              <Heart className="w-8 h-8 text-teal-500" />
              <span className="text-2xl font-bold text-teal-600">TemuPasien</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Profil Saya</h1>
          </div>
          <button
            onClick={() => setIsEditing(!isEditing)}
            className={`mt-4 sm:mt-0 px-6 py-3 rounded-lg font-medium transition w-full sm:w-auto ${
              isEditing 
                ? 'bg-gray-200 text-gray-700 hover:bg-gray-300' 
                : 'bg-teal-600 text-white hover:bg-teal-700'
            }`}
          >
            {isEditing ? 'Batal Edit' : 'Edit Profil'}
          </button>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Left Column - Photo & Stats */}
          <div className="space-y-6">
            {/* Profile Photo */}
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
              <h3 className="font-bold text-gray-900 mb-4">Foto Profil</h3>
              <div className="flex flex-col items-center">
                <div className="relative">
                  {profilePhoto ? (
                    <img src={profilePhoto} alt="Profile" className="w-32 h-32 rounded-full object-cover border-4 border-teal-100" />
                  ) : (
                    <div className="w-32 h-32 rounded-full bg-teal-100 flex items-center justify-center border-4 border-teal-200">
                      <span className="text-4xl font-bold text-teal-600">
                        {formData.fullName.split(' ').map(n => n[0]).join('').substring(0, 2)}
                      </span>
                    </div>
                  )}
                  {isEditing && (
                    <label htmlFor="photoUpload" className="absolute -bottom-2 -right-2 bg-teal-600 p-2 rounded-full text-white cursor-pointer hover:bg-teal-700 transition">
                      <Camera className="w-5 h-5" />
                      <input id="photoUpload" type="file" accept="image/*" className="hidden" onChange={handlePhotoChange} />
                    </label>
                  )}
                </div>
                {isEditing && (
                  <label htmlFor="photoUpload" className="mt-4 text-sm font-medium text-teal-600 hover:text-teal-700 cursor-pointer">
                    Ganti Foto
                  </label>
                )}
              </div>
            </div>

            {/* Account Stats */}
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
              <h3 className="font-bold text-gray-900 mb-4">Statistik Akun</h3>
              <div className="space-y-3 mt-4">
                <div className="flex items-center text-gray-700">
                  <FileText className="w-5 h-5 mr-3 text-teal-500" />
                  <span>Keluhan Aktif: <span className="font-bold">{stats.activeComplaints}</span></span>
                </div>
                <div className="flex items-center text-gray-700">
                  <CheckCircle className="w-5 h-5 mr-3 text-green-500" />
                  <span>Keluhan Cocok: <span className="font-bold">{stats.matchedComplaints}</span></span>
                </div>
                <div className="flex items-center text-gray-700">
                  <Shield className="w-5 h-5 mr-3 text-blue-500" />
                  <span>Perawatan Selesai: <span className="font-bold">{stats.completedTreatments}</span></span>
                </div>
              </div>
            </div>

            {/* Active Complaint */}
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
              <h3 className="font-bold text-gray-900 mb-4">Keluhan Aktif</h3>
              <span className="inline-block px-3 py-1 bg-teal-100 text-teal-700 text-sm font-medium rounded-lg mb-3">
                {activeComplaint.complaint}
              </span>
              <p className="text-sm text-gray-600">Diposting: {activeComplaint.postedDate}</p>
              <p className="text-sm text-gray-600 mb-4">Peminat: {activeComplaint.interestedMahasiswa} Mahasiswa</p>
              <Link href={`/dashboard/pasien/keluhan/${activeComplaint.id}`}>
                <button className="w-full px-4 py-2 bg-teal-50 text-teal-700 rounded-lg hover:bg-teal-100 transition font-medium text-sm">
                  Lihat Detail Keluhan
                </button>
              </Link>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSave}>
              <div className="bg-white rounded-xl shadow-sm p-6 sm:p-8 border border-gray-100">
                {/* Personal Info Section */}
                <h3 className="text-xl font-bold text-gray-900 mb-6">Informasi Pribadi</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormInput label="Nama Lengkap" name="fullName" value={formData.fullName} onChange={handleInputChange} icon={User} disabled={!isEditing} />
                  <FormInput label="Email" name="email" type="email" value={formData.email} onChange={handleInputChange} icon={Mail} disabled={!isEditing} />
                  <FormInput label="No. Telepon" name="phone" value={formData.phone} onChange={handleInputChange} icon={Phone} disabled={!isEditing} />
                  <FormInput label="Tanggal Lahir" name="birthDate" type="date" value={formData.birthDate} onChange={handleInputChange} icon={Calendar} disabled={!isEditing} />
                  <div className="md:col-span-2">
                    <FormInput label="Alamat" name="address" value={formData.address} onChange={handleInputChange} icon={MapPin} disabled={!isEditing} />
                  </div>
                  <div className="md:col-span-2">
                    <FormInput label="Kota" name="city" value={formData.city} onChange={handleInputChange} icon={MapPin} disabled={!isEditing} />
                  </div>
                </div>

                {/* Password Section (Only show on Edit) */}
                {isEditing && (
                  <>
                    <hr className="my-8 border-gray-200" />
                    <h3 className="text-xl font-bold text-gray-900 mb-6">Ubah Password</h3>
                    <div className="space-y-6">
                      <FormInput label="Password Saat Ini" name="currentPassword" type="password" value={formData.currentPassword} onChange={handleInputChange} icon={Lock} disabled={!isEditing} placeholder="Masukkan password saat ini" />
                      
                      {/* New Password with Show/Hide */}
                      <div>
                        <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700 mb-2">Password Baru</label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Lock className="h-5 w-5 text-gray-400" />
                          </div>
                          <input
                            type={showNewPassword ? 'text' : 'password'}
                            id="newPassword"
                            name="newPassword"
                            value={formData.newPassword}
                            onChange={handleInputChange}
                            placeholder="Masukkan password baru"
                            className="block w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg text-gray-900 placeholder:text-gray-400 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition"
                          />
                          <button
                            type="button"
                            onClick={() => setShowNewPassword(!showNewPassword)}
                            className="absolute inset-y-0 right-0 pr-3 flex items-center"
                          >
                            {showNewPassword ? (
                              <EyeOff className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                            ) : (
                              <Eye className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                            )}
                          </button>
                        </div>
                      </div>
                      
                      <FormInput label="Konfirmasi Password Baru" name="confirmPassword" type="password" value={formData.confirmPassword} onChange={handleInputChange} icon={Lock} disabled={!isEditing} placeholder="Konfirmasi password baru" />
                    </div>
                  </>
                )}

                {/* Action Buttons (Only show on Edit) */}
                {isEditing && (
                  <>
                    <hr className="my-8 border-gray-200" />
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 md:space-x-4">
                      <button
                        type="submit"
                        className="w-full md:w-auto flex items-center justify-center px-6 py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition shadow-md font-medium"
                      >
                        <Save className="w-5 h-5 mr-2" />
                        Simpan Perubahan
                      </button>
                      <button
                        type="button"
                        onClick={handleDeleteAccount}
                        className="w-full md:w-auto text-sm font-medium text-red-600 hover:text-red-700"
                      >
                        Hapus Akun Saya
                      </button>
                    </div>
                  </>
                )}

              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}