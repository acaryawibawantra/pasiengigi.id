'use client';

import { useState } from 'react';
import { Heart, ArrowLeft, Calendar, Edit, Trash2, Eye, CheckCircle, Clock, AlertCircle, Image as ImageIcon } from 'lucide-react';
import Link from 'next/link';

export default function MyComplaintsPage() {
  // Dummy data keluhan pasien (nanti dari backend)
  const [myComplaints, setMyComplaints] = useState([
    {
      id: 1,
      complaint: 'Gigi Berlubang (Karies)',
      description: 'Gigi geraham kanan atas berlubang cukup besar. Terasa sakit saat makan makanan manis dan minuman dingin.',
      urgency: 'high',
      hasPhoto: true,
      status: 'active', // active, matched, completed
      postedDate: '2024-01-18',
      viewCount: 15,
      interestedMahasiswa: 3
    },
    {
      id: 2,
      complaint: 'Karang Gigi',
      description: 'Karang gigi menumpuk di bagian depan bawah, ingin dibersihkan.',
      urgency: 'normal',
      hasPhoto: true,
      status: 'matched',
      matchedWith: 'dr. Sarah Putri',
      matchedDate: '2024-01-12',
      postedDate: '2024-01-10',
      viewCount: 22,
      interestedMahasiswa: 5
    },
    {
      id: 3,
      complaint: 'Gigi Sensitif',
      description: 'Gigi terasa ngilu saat minum dingin atau panas.',
      urgency: 'low',
      hasPhoto: false,
      status: 'completed',
      completedDate: '2024-01-05',
      postedDate: '2023-12-20',
      viewCount: 8,
      interestedMahasiswa: 2
    }
  ]);

  const handleDelete = (id) => {
    if (confirm('Apakah Anda yakin ingin menghapus keluhan ini?')) {
      setMyComplaints(myComplaints.filter(complaint => complaint.id !== id));
      alert('Keluhan berhasil dihapus!');
    }
  };

  const getStatusBadge = (status) => {
    switch(status) {
      case 'active':
        return (
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-700">
            <CheckCircle className="w-3 h-3 mr-1" />
            Mencari Mahasiswa
          </span>
        );
      case 'matched':
        return (
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-700">
            <CheckCircle className="w-3 h-3 mr-1" />
            Sudah Match
          </span>
        );
      case 'completed':
        return (
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-700">
            <CheckCircle className="w-3 h-3 mr-1" />
            Selesai
          </span>
        );
      default:
        return null;
    }
  };

  const getUrgencyBadge = (urgency) => {
    switch(urgency) {
      case 'high':
        return <span className="text-xs font-medium text-red-600">⚡ Urgent</span>;
      case 'normal':
        return <span className="text-xs font-medium text-yellow-600">⏱️ Sedang</span>;
      case 'low':
        return <span className="text-xs font-medium text-green-600">✓ Ringan</span>;
      default:
        return null;
    }
  };

  const activeComplaints = myComplaints.filter(c => c.status === 'active').length;
  const matchedComplaints = myComplaints.filter(c => c.status === 'matched').length;
  const completedComplaints = myComplaints.filter(c => c.status === 'completed').length;

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-5">
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
        <div className="mb-8">
          <div className="flex items-center space-x-2 mb-4">
            <Heart className="w-8 h-8 text-teal-500" />
            <span className="text-2xl font-bold text-teal-600">PasienGigi.id</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Keluhan Saya</h1>
          <p className="text-gray-600">Lihat dan kelola semua keluhan gigi Anda</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
            <p className="text-sm text-gray-600 mb-1">Aktif</p>
            <p className="text-3xl font-bold text-green-600">{activeComplaints}</p>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
            <p className="text-sm text-gray-600 mb-1">Sudah Match</p>
            <p className="text-3xl font-bold text-blue-600">{matchedComplaints}</p>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
            <p className="text-sm text-gray-600 mb-1">Selesai</p>
            <p className="text-3xl font-bold text-purple-600">{completedComplaints}</p>
          </div>
        </div>

        {/* Action Button */}
        <div className="mb-6">
          <Link href="/dashboard/pasien/create-complaint">
            <button className="w-full sm:w-auto px-6 py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition shadow-md font-medium">
              + Tambah Keluhan Baru
            </button>
          </Link>
        </div>

        {/* Complaints List */}
        <div className="space-y-4">
          {myComplaints.length === 0 ? (
            <div className="bg-white rounded-xl shadow-sm p-12 text-center">
              <AlertCircle className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">Belum Ada Keluhan</h3>
              <p className="text-gray-600 mb-6">Mulai posting keluhan gigi Anda untuk mendapatkan perawatan gratis</p>
              <Link href="/dashboard/pasien/create-complaint">
                <button className="px-6 py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition shadow-md font-medium">
                  Tambah Keluhan Pertama
                </button>
              </Link>
            </div>
          ) : (
            myComplaints.map((complaint) => (
              <div key={complaint.id} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <span className="inline-block px-3 py-1 bg-teal-50 text-teal-700 text-sm font-medium rounded-lg">
                        {complaint.complaint}
                      </span>
                      {getUrgencyBadge(complaint.urgency)}
                      {complaint.hasPhoto && (
                        <span className="inline-flex items-center text-xs text-gray-500">
                          <ImageIcon className="w-3 h-3 mr-1" />
                          Ada foto
                        </span>
                      )}
                    </div>
                    {getStatusBadge(complaint.status)}
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-700 mb-4">{complaint.description}</p>

                {/* Meta Info */}
                <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-600">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    {new Date(complaint.postedDate).toLocaleDateString('id-ID', { 
                      day: 'numeric', 
                      month: 'long', 
                      year: 'numeric' 
                    })}
                  </div>
                  <div className="flex items-center">
                    <Eye className="w-4 h-4 mr-1" />
                    {complaint.viewCount} views
                  </div>
                  <div className="flex items-center text-teal-600 font-medium">
                    {complaint.interestedMahasiswa} mahasiswa tertarik
                  </div>
                </div>

                {/* Matched Info */}
                {complaint.status === 'matched' && complaint.matchedWith && (
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 mb-4">
                    <p className="text-sm text-blue-700">
                      <strong>✓ Match dengan:</strong> {complaint.matchedWith}
                    </p>
                    <p className="text-xs text-blue-600 mt-1">
                      Sejak {new Date(complaint.matchedDate).toLocaleDateString('id-ID')}
                    </p>
                  </div>
                )}

                {/* Completed Info */}
                {complaint.status === 'completed' && (
                  <div className="bg-purple-50 border border-purple-200 rounded-lg p-3 mb-4">
                    <p className="text-sm text-purple-700">
                      <strong>✓ Perawatan selesai</strong> pada {new Date(complaint.completedDate).toLocaleDateString('id-ID')}
                    </p>
                  </div>
                )}

                {/* Actions */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-200">
                  <Link href={`/dashboard/pasien/complaints/${complaint.id}`}>
                    <button className="px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition text-sm font-medium">
                      <Eye className="w-4 h-4 inline mr-1" />
                      Lihat Detail
                    </button>
                  </Link>
                  {complaint.status === 'active' && (
                    <>
                      <Link href={`/dashboard/pasien/complaints/${complaint.id}/edit`}>
                        <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition text-sm font-medium">
                          <Edit className="w-4 h-4 inline mr-1" />
                          Edit
                        </button>
                      </Link>
                      <button 
                        onClick={() => handleDelete(complaint.id)}
                        className="px-4 py-2 border border-red-300 text-red-600 rounded-lg hover:bg-red-50 transition text-sm font-medium"
                      >
                        <Trash2 className="w-4 h-4 inline mr-1" />
                        Hapus
                      </button>
                    </>
                  )}
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}