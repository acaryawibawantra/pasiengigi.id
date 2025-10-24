'use client';

import { useState } from 'react';
import { Heart, ArrowLeft, Calendar, MapPin, Edit, Trash2, Eye, CheckCircle, Clock, XCircle } from 'lucide-react';
import Link from 'next/link';

export default function MyPostsPage() {
  // Dummy data posting mahasiswa (nanti dari backend)
  const [myPosts, setMyPosts] = useState([
    {
      id: 1,
      title: 'Butuh Pasien Karies Profunda',
      needCase: 'Gigi Berlubang (Karies)',
      description: 'Mencari pasien dengan karies profunda untuk praktek konservasi gigi. Diutamakan gigi geraham dengan lubang cukup besar.',
      city: 'Surabaya',
      status: 'active', // active, matched, closed
      postedDate: '2024-01-15',
      viewCount: 24,
      interestedCount: 3
    },
    {
      id: 2,
      title: 'Butuh Kasus Scaling',
      needCase: 'Karang Gigi',
      description: 'Membutuhkan pasien untuk praktikum periodonsia. Scaling dan pembersihan karang gigi.',
      city: 'Surabaya',
      status: 'matched',
      postedDate: '2024-01-10',
      matchedWith: 'Budi Santoso',
      viewCount: 18,
      interestedCount: 5
    },
    {
      id: 3,
      title: 'Butuh Kasus Pencabutan',
      needCase: 'Pencabutan Gigi',
      description: 'Mencari kasus ekstraksi gigi untuk memenuhi syarat praktek bedah mulut.',
      city: 'Surabaya',
      status: 'closed',
      postedDate: '2024-01-05',
      viewCount: 12,
      interestedCount: 2
    }
  ]);
  const [toast, setToast] = useState({ visible: false, type: 'success', message: '' });
  const showToast = (message, type = 'success') => {
    setToast({ visible: true, type, message });
    setTimeout(() => setToast(prev => ({ ...prev, visible: false })), 2000);
  };

  const getStatusBadge = (status) => {
    switch(status) {
      case 'active':
        return (
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-700">
            <CheckCircle className="w-3 h-3 mr-1" />
            Aktif
          </span>
        );
      case 'matched':
        return (
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-700">
            <CheckCircle className="w-3 h-3 mr-1" />
            Sudah Match
          </span>
        );
      case 'closed':
        return (
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-700">
            <XCircle className="w-3 h-3 mr-1" />
            Ditutup
          </span>
        );
      default:
        return null;
    }
  };

  const activePosts = myPosts.filter(p => p.status === 'active').length;
  const matchedPosts = myPosts.filter(p => p.status === 'matched').length;

  const handleDelete = (id) => {
    if (confirm('Apakah Anda yakin ingin menghapus posting ini?')) {
      setMyPosts(myPosts.filter(post => post.id !== id));
      showToast('Posting berhasil dihapus', 'success');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-5">
      {/* Back Button */}
      <div className="max-w-6xl mx-auto mb-6">
        <Link 
          href="/dashboard/mahasiswa"
          className="inline-flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition"
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="font-medium">Kembali ke Dashboard</span>
        </Link>
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center space-x-2 mb-4">
            <Heart className="w-8 h-8 text-blue-500" />
            <span className="text-2xl font-bold text-blue-600">PasienGigi.id</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Posting Saya</h1>
          <p className="text-gray-600">Kelola semua posting kebutuhan pasien Anda</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
            <p className="text-sm text-gray-600 mb-1">Total Posting</p>
            <p className="text-3xl font-bold text-blue-600">{myPosts.length}</p>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
            <p className="text-sm text-gray-600 mb-1">Aktif</p>
            <p className="text-3xl font-bold text-green-600">{activePosts}</p>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
            <p className="text-sm text-gray-600 mb-1">Sudah Match</p>
            <p className="text-3xl font-bold text-purple-600">{matchedPosts}</p>
          </div>
        </div>

        {/* Action Button */}
        <div className="mb-6">
          <Link href="/dashboard/mahasiswa/create-post">
            <button className="w-full sm:w-auto px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition shadow-md font-medium">
              + Buat Posting Baru
            </button>
          </Link>
        </div>

        {/* Posts List */}
        <div className="space-y-4">
          {myPosts.length === 0 ? (
            <div className="bg-white rounded-xl shadow-sm p-12 text-center">
              <Clock className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">Belum Ada Posting</h3>
              <p className="text-gray-600 mb-6">Mulai posting kebutuhan pasien Anda untuk mendapatkan match</p>
              <Link href="/dashboard/mahasiswa/create-post">
                <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition shadow-md font-medium">
                  Buat Posting Pertama
                </button>
              </Link>
            </div>
          ) : (
            myPosts.map((post) => (
              <div key={post.id} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h3 className="text-xl font-bold text-gray-900">{post.title}</h3>
                      {getStatusBadge(post.status)}
                    </div>
                    <span className="inline-block px-3 py-1 bg-blue-50 text-blue-700 text-sm font-medium rounded-lg">
                      {post.needCase}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-700 mb-4">{post.description}</p>

                {/* Meta Info */}
                <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-600">
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-1" />
                    {post.city}
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    {new Date(post.postedDate).toLocaleDateString('id-ID', { 
                      day: 'numeric', 
                      month: 'long', 
                      year: 'numeric' 
                    })}
                  </div>
                  <div className="flex items-center">
                    <Eye className="w-4 h-4 mr-1" />
                    {post.viewCount} views
                  </div>
                  <div className="flex items-center text-blue-600 font-medium">
                    {post.interestedCount} pasien tertarik
                  </div>
                </div>

                {/* Matched Info */}
                {post.status === 'matched' && post.matchedWith && (
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 mb-4">
                    <p className="text-sm text-blue-700">
                      <strong>✓ Match dengan:</strong> {post.matchedWith}
                    </p>
                  </div>
                )}

                {/* Actions */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-200">
                  <Link href={`/dashboard/mahasiswa/posts/${post.id}`}>
                    <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition text-sm font-medium">
                      <Eye className="w-4 h-4 inline mr-1" />
                      Lihat Detail
                    </button>
                  </Link>
                  {post.status === 'active' && (
                    <>
                      <Link href={`/dashboard/mahasiswa/posts/${post.id}/edit`}>
                        <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition text-sm font-medium">
                          <Edit className="w-4 h-4 inline mr-1" />
                          Edit
                        </button>
                      </Link>
                      <button 
                        onClick={() => handleDelete(post.id)}
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
      {toast.visible && (
        <div
          className={`fixed bottom-6 right-6 px-4 py-3 rounded-lg shadow-lg text-white ${
            toast.type === 'success' ? 'bg-green-600' : 'bg-red-600'
          }`}
        >
          {toast.message}
        </div>
      )}
    </div>
  );
}