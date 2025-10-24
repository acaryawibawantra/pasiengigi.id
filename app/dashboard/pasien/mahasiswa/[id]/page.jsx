'use client';

import { useState } from 'react';
import { Heart, ArrowLeft, GraduationCap, MapPin, Phone, Mail, MessageCircle, CheckCircle, Building2, Star, Award, Users, Stethoscope, Calendar } from 'lucide-react';
import Link from 'next/link';

export default function DetailMahasiswaPage({ params }) {
  // Dummy data (nanti dari backend berdasarkan params.id)
  const mahasiswa = {
    id: params.id || 1,
    name: 'dr. Sarah Putri',
    email: 'sarah.fkg@univ-x.ac.id',
    phone: '089876543210',
    university: 'Universitas Airlangga',
    faculty: 'Fakultas Kedokteran Gigi',
    semester: 8,
    city: 'Surabaya',
    clinicLocation: 'RSGM Unair, Jl. Mayjen Prof. Dr. Moestopo No.47',
    needCase: 'Karies (Gigi Berlubang)',
    description: 'Mencari pasien dengan karies profunda untuk praktek konservasi gigi. Diutamakan gigi geraham dengan lubang cukup besar. Perawatan akan dilakukan di RSGM Unair dengan supervisi dosen.',
    bio: 'Saya adalah mahasiswa koas FKG yang berdedikasi dan ramah, siap membantu Anda menyelesaikan masalah gigi dengan profesional di bawah supervisi dosen.',
    specialties: ['Karies', 'Scaling', 'Pencabutan', 'Tambal Gigi'],
    rating: 4.8,
    totalReviews: 8,
    totalPatients: 12,
    completedCases: 10,
    verified: true,
    postedDate: '2024-01-15',
    availableDays: ['Senin', 'Rabu', 'Jumat'],
    lastActive: '1 jam yang lalu',
    reviews: [
      {
        id: 1,
        patientName: 'Budi S.',
        rating: 5,
        comment: 'Pelayanan sangat baik, dokter Sarah sangat ramah dan profesional. Perawatan tidak sakit sama sekali!',
        date: '2024-01-10',
        treatment: 'Tambal Gigi'
      },
      {
        id: 2,
        patientName: 'Siti N.',
        rating: 5,
        comment: 'Sangat puas dengan hasilnya. Dokter Sarah menjelaskan prosedur dengan detail dan sabar.',
        date: '2024-01-05',
        treatment: 'Scaling'
      },
      {
        id: 3,
        patientName: 'Ahmad R.',
        rating: 4,
        comment: 'Bagus, hanya perlu sedikit lebih cepat dalam prosesnya. Overall recommended!',
        date: '2023-12-20',
        treatment: 'Pencabutan'
      }
    ]
  };

  const handleContact = () => {
    window.open(`https://wa.me/${mahasiswa.phone}?text=Halo ${mahasiswa.name}, saya tertarik dengan perawatan yang Anda tawarkan.`, '_blank');
  };

  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${
          index < Math.floor(rating)
            ? 'text-yellow-400 fill-current'
            : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      {/* Back Button */}
      <div className="max-w-6xl mx-auto mb-6">
        <Link 
          href="/dashboard/pasien"
          className="inline-flex items-center space-x-2 text-gray-600 hover:text-teal-600 transition"
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="font-medium">Kembali ke Dashboard</span>
        </Link>
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-center space-x-2 mb-6">
          <Heart className="w-8 h-8 text-teal-500" />
          <span className="text-2xl font-bold text-teal-600">TemuPasien</span>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Left Column - Mahasiswa Info */}
          <div className="space-y-6">
            {/* Profile Card */}
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
              <div className="flex flex-col items-center mb-6">
                <div className="w-24 h-24 rounded-full bg-teal-100 flex items-center justify-center mb-4">
                  <GraduationCap className="w-12 h-12 text-teal-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 text-center">{mahasiswa.name}</h2>
                <p className="text-gray-600">Semester {mahasiswa.semester}</p>
                
                {/* Rating */}
                <div className="flex items-center space-x-2 mt-3">
                  <div className="flex">
                    {renderStars(mahasiswa.rating)}
                  </div>
                  <span className="text-sm font-medium text-gray-700">
                    {mahasiswa.rating} ({mahasiswa.totalReviews} review)
                  </span>
                </div>

                {/* Verified Badge */}
                {mahasiswa.verified && (
                  <div className="mt-3 flex items-center space-x-2 px-3 py-1 bg-green-50 border border-green-200 rounded-full">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="text-xs font-medium text-green-700">Terverifikasi</span>
                  </div>
                )}

                <div className="mt-2 text-sm text-gray-500">
                  Aktif {mahasiswa.lastActive}
                </div>
              </div>

              {/* Contact Info */}
              <div className="space-y-3 border-t pt-4">
                <div className="flex items-center space-x-3 text-sm">
                  <Building2 className="w-4 h-4 text-gray-400 flex-shrink-0" />
                  <div className="flex-1">
                    <div className="font-medium text-gray-900">{mahasiswa.university}</div>
                    <div className="text-gray-600 text-xs">{mahasiswa.faculty}</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3 text-sm">
                  <MapPin className="w-4 h-4 text-gray-400 flex-shrink-0" />
                  <div className="flex-1">
                    <div className="font-medium text-gray-900">{mahasiswa.city}</div>
                    <div className="text-gray-600 text-xs">{mahasiswa.clinicLocation}</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3 text-sm">
                  <Phone className="w-4 h-4 text-gray-400 flex-shrink-0" />
                  <span className="text-gray-700">{mahasiswa.phone}</span>
                </div>
                <div className="flex items-center space-x-3 text-sm">
                  <Mail className="w-4 h-4 text-gray-400 flex-shrink-0" />
                  <span className="text-gray-700 break-all">{mahasiswa.email}</span>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
              <h3 className="font-bold text-gray-900 mb-4">Statistik</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Users className="w-5 h-5 text-teal-600" />
                    <span className="text-sm text-gray-600">Total Pasien</span>
                  </div>
                  <span className="font-bold text-gray-900">{mahasiswa.totalPatients}</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Award className="w-5 h-5 text-green-600" />
                    <span className="text-sm text-gray-600">Kasus Selesai</span>
                  </div>
                  <span className="font-bold text-gray-900">{mahasiswa.completedCases}</span>
                </div>
              </div>
            </div>

            {/* Available Days */}
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
              <h3 className="font-bold text-gray-900 mb-4 flex items-center">
                <Calendar className="w-5 h-5 mr-2 text-teal-600" />
                Jadwal Tersedia
              </h3>
              <div className="flex flex-wrap gap-2">
                {mahasiswa.availableDays.map((day) => (
                  <span key={day} className="px-3 py-1 bg-teal-50 text-teal-700 text-sm font-medium rounded-lg border border-teal-200">
                    {day}
                  </span>
                ))}
              </div>
              <p className="text-xs text-gray-500 mt-3">
                Jadwal dapat berubah, silakan hubungi untuk konfirmasi
              </p>
            </div>
          </div>

          {/* Right Column - Details */}
          <div className="lg:col-span-2 space-y-6">
            {/* Need Case Card */}
            <div className="bg-white rounded-xl shadow-sm p-6 sm:p-8 border border-gray-100">
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Kebutuhan Praktek</h1>
              
              {/* Need Case */}
              <div className="mb-6">
                <span className="inline-flex items-center px-4 py-2 bg-teal-50 text-teal-700 text-sm font-medium rounded-lg border border-teal-200">
                  <Stethoscope className="w-4 h-4 mr-2" />
                  {mahasiswa.needCase}
                </span>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Deskripsi Kebutuhan</h3>
                <p className="text-gray-700 leading-relaxed">{mahasiswa.description}</p>
              </div>

              {/* Bio */}
              <div className="mb-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Tentang Saya</h3>
                <p className="text-gray-700 leading-relaxed">{mahasiswa.bio}</p>
              </div>

              {/* Specialties */}
              <div className="mb-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Keahlian</h3>
                <div className="flex flex-wrap gap-2">
                  {mahasiswa.specialties.map((specialty) => (
                    <span key={specialty} className="px-3 py-1 bg-blue-50 text-blue-700 text-sm font-medium rounded-lg border border-blue-200">
                      {specialty}
                    </span>
                  ))}
                </div>
              </div>

              {/* Info Box */}
              <div className="bg-teal-50 border border-teal-200 rounded-lg p-4 mb-6">
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" />
                  <div className="ml-3">
                    <h4 className="text-sm font-bold text-teal-900 mb-1">Perawatan 100% Gratis!</h4>
                    <p className="text-sm text-teal-800">
                      Semua perawatan dilakukan di klinik kampus {mahasiswa.university} di bawah supervisi dosen. Anda tidak akan dikenakan biaya apapun.
                    </p>
                  </div>
                </div>
              </div>

              {/* Contact Button */}
              <button
                onClick={handleContact}
                className="w-full px-6 py-4 bg-green-500 text-white rounded-lg hover:bg-green-600 transition shadow-lg font-medium flex items-center justify-center space-x-2"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Hubungi via WhatsApp</span>
              </button>
            </div>

            {/* Reviews */}
            <div className="bg-white rounded-xl shadow-sm p-6 sm:p-8 border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Review dari Pasien ({mahasiswa.totalReviews})
              </h2>

              <div className="space-y-6">
                {mahasiswa.reviews.map((review) => (
                  <div key={review.id} className="border-b border-gray-200 pb-6 last:border-0 last:pb-0">
                    <div className="flex flex-col sm:flex-row items-start justify-between mb-3">
                      <div>
                        <div className="font-bold text-gray-900">{review.patientName}</div>
                        <div className="flex items-center space-x-2">
                          <div className="flex">
                            {renderStars(review.rating)}
                          </div>
                          <span className="text-sm text-gray-500">• {review.date}</span>
                        </div>
                      </div>
                      <span className="mt-2 sm:mt-0 px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full">
                        Perawatan: {review.treatment}
                      </span>
                    </div>
                    <p className="text-gray-700 leading-relaxed">{review.comment}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}