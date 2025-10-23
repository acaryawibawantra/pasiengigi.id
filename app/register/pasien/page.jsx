"use client";

import { useState } from "react";
import {
  Heart, ArrowLeft, User, Mail, Lock, Phone, Calendar,
  MapPin, Upload, FileText, Eye, EyeOff
} from "lucide-react";
import Link from "next/link";

export default function RegisterPasienPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [photoFile, setPhotoFile] = useState(null);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    birthDate: "",
    address: "",
    city: "",
    complaint: "",
    complaintDetails: "",
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) setPhotoFile(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Password dan konfirmasi password tidak cocok!");
      return;
    }

    console.log("Form Data:", formData);
    console.log("Photo File:", photoFile);
    alert("Registrasi akan diintegrasikan dengan backend!");
  };

  const cities = [
    "Jakarta", "Surabaya", "Bandung", "Medan", "Semarang",
    "Makassar", "Palembang", "Tangerang", "Depok", "Bekasi",
    "Yogyakarta", "Malang", "Bogor", "Denpasar", "Lainnya",
  ];

  const complaints = [
    "Gigi Berlubang (Karies)", "Gigi Sensitif", "Gigi Goyang",
    "Gigi Bungsu Bermasalah", "Karang Gigi", "Gusi Berdarah",
    "Gigi Patah", "Gigi Ngilu", "Ingin Cabut Gigi",
    "Ingin Tambal Gigi", "Ingin Scaling", "Ingin Pasang Behel", "Lainnya",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-white to-blue-50 py-8 px-5">
      {/* Back Button */}
      <Link
        href="/"
        className="inline-flex items-center space-x-2 text-gray-600 hover:text-teal-600 transition mb-6 ml-4"
      >
        <ArrowLeft className="w-5 h-5" />
        <span className="font-medium">Kembali</span>
      </Link>

      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center space-x-2 mb-4">
            <Heart className="w-10 h-10 text-teal-500" />
            <span className="text-3xl font-bold text-teal-600">PasienGigi.id</span>
          </Link>
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center">
              <User className="w-6 h-6 text-teal-600" />
            </div>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
            Daftar Sebagai Pasien
          </h1>
          <p className="text-gray-600">Dapatkan perawatan gigi gratis berkualitas</p>
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* === Informasi Pribadi === */}
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                <User className="w-5 h-5 mr-2 text-teal-600" />
                Informasi Pribadi
              </h3>

              {/* Nama */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nama Lengkap <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition"
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
                  <Mail className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition"
                    placeholder="nama@email.com"
                    required
                  />
                </div>
              </div>

              {/* Nomor Telepon */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nomor WhatsApp <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <Phone className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition"
                    placeholder="08xxxxxxxxxx"
                    required
                  />
                </div>
              </div>

              {/* Tanggal Lahir */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Tanggal Lahir <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
                  <input
                    type="date"
                    name="birthDate"
                    value={formData.birthDate}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition"
                    required
                  />
                </div>
              </div>

              {/* Password */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Password <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition"
                    placeholder="Minimal 8 karakter"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-3.5"
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                    ) : (
                      <Eye className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                    )}
                  </button>
                </div>
              </div>

              {/* Konfirmasi Password */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Konfirmasi Password <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition"
                    placeholder="Ulangi password"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-3.5"
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
            <hr className="my-6 border-gray-200" />

            {/* === Lokasi === */}
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                <MapPin className="w-5 h-5 mr-2 text-teal-600" /> Informasi Lokasi
              </h3>

              <textarea
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                rows="3"
                className="w-full mb-4 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition"
                placeholder="Alamat lengkap Anda"
                required
              />

              <select
                name="city"
                value={formData.city}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition"
                required
              >
                <option value="">Pilih Kota</option>
                {cities.map((city) => (
                  <option key={city} value={city}>{city}</option>
                ))}
              </select>
            </div>

            {/* Divider */}
            <hr className="my-6 border-gray-200" />

            {/* === Keluhan Gigi === */}
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                <FileText className="w-5 h-5 mr-2 text-teal-600" /> Keluhan Gigi
              </h3>

              <select
                name="complaint"
                value={formData.complaint}
                onChange={handleInputChange}
                className="w-full mb-4 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition"
                required
              >
                <option value="">Pilih Keluhan</option>
                {complaints.map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>

              <textarea
                name="complaintDetails"
                value={formData.complaintDetails}
                onChange={handleInputChange}
                rows="4"
                className="w-full mb-4 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition"
                placeholder="Jelaskan keluhan Anda secara detail"
                required
              />

              {/* Upload Foto */}
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-teal-500 transition">
                <input
                  type="file"
                  id="photo-upload"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="hidden"
                />
                <label htmlFor="photo-upload" className="cursor-pointer">
                  <Upload className="w-10 h-10 text-gray-400 mx-auto mb-2" />
                  <p className="text-sm text-gray-600">
                    {photoFile ? photoFile.name : "Klik untuk upload foto gigi (opsional)"}
                  </p>
                </label>
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-teal-600 text-white py-4 px-6 rounded-lg hover:bg-teal-700 transition shadow-lg font-medium"
            >
              Daftar Sekarang
            </button>

            <p className="mt-6 text-center text-sm text-gray-600">
              Sudah punya akun?{" "}
              <Link href="/login" className="text-teal-600 hover:text-teal-700 font-medium">
                Masuk di sini
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
