'use client';

import { useState } from 'react';
import { Heart, ArrowLeft, User, MapPin, Calendar, Phone, Mail, MessageCircle, CheckCircle, AlertCircle, Image as ImageIcon, Star } from 'lucide-react';
import Link from 'next/link';

export default function DetailPasienPage({ params }) {
  // Dummy data (nanti dari backend berdasarkan params.id)
  const pasien = {
    id: params.id || 1,
    name: 'Ahmad Santoso',
    age: 28,
    email: 'ahmad.santoso@gmail.com',
    phone: '081234567890',
    city: 'Surabaya',
    address: 'Jl. Raya Darmo No. 123, Darmo, Wonokromo',
    complaint: 'Gigi Berlubang (Karies)',
    urgency: 'high', // high, normal, low
    description: 'Gigi geraham kanan bawah berlubang cukup besar, sering nyeri saat makan makanan manis dan minuman dingin. Sudah berlangsung sekitar 2 minggu. Lubangnya terlihat berwarna hitam dan cukup dalam.',
    hasPhoto: true,
    photoUrl: 'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=400',
    postedDate: '2024-01-18',
    viewCount: 24,
    lastActive: '2 jam yang lalu',
    previousTreatments: [
      { treatment: 'Scaling', date: '2023-12-01', mahasiswa: 'dr. Sarah' },
      { treatment: 'Tambal Gigi', date: '2023-06-15', mahasiswa: 'dr. Budi' }
    ],
    interestedMahasiswa: 3
  };

  const getUrgencyBadge = (urgency) => {
    switch(urgency) {
      case 'high':
        return (
          <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-red-100 text-red-700 border border-red-200">
            <AlertCircle className="w-4 h-4 mr-2" />
            Urgent - Sangat Sakit
          </span>
        );
      case 'normal':
        return (
          <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-yellow-100 text-yellow-700 border border-yellow-200">
            <AlertCircle className="w-4 h-4 mr-2" />
            Sedang - Cukup Mengganggu
          </span>
        );
      case 'low':
        return (
          <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-green-100 text-green-700 border border-green-200">
            <CheckCircle className="w-4 h-4 mr-2" />
            Ringan - Tidak Mendesak
          </span>
        );
      default:
        return null;
    }
  };

  const handleInterested = () => {
    alert('Fitur "Tertarik" akan terhubung dengan backend untuk notifikasi ke pasien');
  };

  const handleContact = () => {
    window.open(`https://wa.me/${pasien.phone}?text=Halo ${pasien.name}, saya mahasiswa FKG yang tertarik dengan kasus Anda.`, '_blank');
  };

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
        <div className="flex items-center space-x-2 mb-6">
          <Heart className="w-8 h-8 text-blue-500" />
          <span className="text-2xl font-bold text-blue-600">PasienGigi.id</span>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Left Column - Patient Info */}
          <div className="space-y-6">
            {/* Profile Card */}
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
              <div className="flex flex-col items-center mb-6">
                <div className="w-24 h-24 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                  <User className="w-12 h-12 text-blue-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 text-center">{pasien.name}</h2>
                <p className="text-gray-600">{pasien.age} tahun</p>
                <div className="mt-2 text-sm text-gray-500">
                  Aktif {pasien.lastActive}
                </div>
              </div>

              {/* Contact Info */}
              <div className="space-y-3 border-t pt-4">
                <div className="flex items-center space-x-3 text-sm">
                  <MapPin className="w-4 h-4 text-gray-400 flex-shrink-0" />
                  <div>
                    <div className="font-medium text-gray-900">{pasien.city}</div>
                    <div className="text-gray-600 text-xs">{pasien.address}</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3 text-sm">
                  <Phone className="w-4 h-4 text-gray-400 flex-shrink-0" />
                  <span className="text-gray-700">{pasien.phone}</span>
                </div>
                <div className="flex items-center space-x-3 text-sm">
                  <Mail className="w-4 h-4 text-gray-400 flex-shrink-0" />
                  <span className="text-gray-700">{pasien.email}</span>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
              <h3 className="font-bold text-gray-900 mb-4">Info Tambahan</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Diposting</span>
                  <span className="text-sm font-medium text-gray-900">
                    {new Date(pasien.postedDate).toLocaleDateString('id-ID', {
                      day: 'numeric',
                      month: 'long',
                      year: 'numeric'
                    })}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Dilihat</span>
                  <span className="text-sm font-medium text-gray-900">{pasien.viewCount}x</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Mahasiswa Tertarik</span>
                  <span className="text-sm font-medium text-blue-600">{pasien.interestedMahasiswa} orang</span>
                </div>
              </div>
            </div>

            {/* Previous Treatments */}
            {pasien.previousTreatments.length > 0 && (
              <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                <h3 className="font-bold text-gray-900 mb-4">Riwayat Perawatan</h3>
                <div className="space-y-3">
                  {pasien.previousTreatments.map((treatment, index) => (
                    <div key={index} className="flex items-start space-x-3 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <div className="flex-1">
                        <div className="font-medium text-gray-900">{treatment.treatment}</div>
                        <div className="text-gray-600 text-xs">
                          {new Date(treatment.date).toLocaleDateString('id-ID')} • {treatment.mahasiswa}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Column - Complaint Details */}
          <div className="lg:col-span-2 space-y-6">
            {/* Complaint Card */}
            <div className="bg-white rounded-xl shadow-sm p-6 sm:p-8 border border-gray-100">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">Detail Keluhan Pasien</h1>
                  <div className="flex flex-wrap gap-3 items-center">
                    <span className="inline-block px-4 py-2 bg-blue-50 text-blue-700 text-sm font-medium rounded-lg border border-blue-200">
                      {pasien.complaint}
                    </span>
                    {getUrgencyBadge(pasien.urgency)}
                    {pasien.hasPhoto && (
                      <span className="inline-flex items-center px-3 py-1 bg-green-50 text-green-700 text-xs font-medium rounded-full border border-green-200">
                        <ImageIcon className="w-3 h-3 mr-1" />
                        Ada Foto Gigi
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="mb-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Deskripsi Keluhan</h3>
                <p className="text-gray-700 leading-relaxed">{pasien.description}</p>
              </div>

              {/* Photo */}
              {pasien.hasPhoto && (
                <div className="mb-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">Foto Kondisi Gigi</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <img 
                      src={pasien.photoUrl} 
                      alt="Kondisi Gigi" 
                      className="w-full h-64 object-cover rounded-lg border-2 border-gray-200 cursor-pointer hover:border-blue-500 transition"
                    />
                    <div className="bg-blue-50 border-2 border-dashed border-blue-200 rounded-lg p-6 flex flex-col items-center justify-center text-center">
                      <ImageIcon className="w-12 h-12 text-blue-400 mb-3" />
                      <p className="text-sm text-blue-700 font-medium">Klik foto untuk memperbesar</p>
                      <p className="text-xs text-blue-600 mt-1">Pastikan kasus sesuai kebutuhan Anda</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Important Notes */}
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
                <div className="flex items-start">
                  <AlertCircle className="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                  <div className="ml-3">
                    <h4 className="text-sm font-bold text-yellow-900 mb-1">Penting!</h4>
                    <ul className="text-sm text-yellow-800 space-y-1">
                      <li>• Pastikan kasus ini sesuai dengan kebutuhan praktek Anda</li>
                      <li>• Hubungi pasien untuk mengonfirmasi kondisi dan jadwal</li>
                      <li>• Perawatan dilakukan di klinik kampus di bawah supervisi dosen</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={handleInterested}
                  className="flex-1 px-6 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition shadow-lg font-medium flex items-center justify-center space-x-2"
                >
                  <Star className="w-5 h-5" />
                  <span>Saya Tertarik dengan Kasus Ini</span>
                </button>
                <button
                  onClick={handleContact}
                  className="flex-1 px-6 py-4 bg-green-500 text-white rounded-lg hover:bg-green-600 transition shadow-lg font-medium flex items-center justify-center space-x-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Hubungi via WhatsApp</span>
                </button>
              </div>

              {/* Info Box */}
              <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <div className="ml-3">
                    <p className="text-sm text-blue-800">
                      <strong>Langkah selanjutnya:</strong> Setelah menghubungi pasien via WhatsApp, diskusikan jadwal dan lokasi perawatan. Pastikan pasien datang ke klinik kampus Anda.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}