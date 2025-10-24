'use client';

import { useState, useEffect } from 'react';
import { Heart, ArrowLeft, FileText, MapPin, Calendar, Eye, Users, CheckCircle, AlertCircle, Edit, Trash2 } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function PostDetailPage({ params }) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [post, setPost] = useState(null);
  const [toast, setToast] = useState({ visible: false, type: 'success', message: '' });
  const showToast = (message, type = 'success') => {
    setToast({ visible: true, type, message });
    setTimeout(() => setToast(prev => ({ ...prev, visible: false })), 2000);
  };

  // Simulasi fetch data detail posting berdasarkan ID (ganti ke API nanti)
  useEffect(() => {
    setIsLoading(true);
    setError(null);

    setTimeout(() => {
      // Data dummy — nanti diganti dengan hasil fetch(`/api/posts/${params.id}`)
      const dummy = {
        id: Number(params.id),
        title: 'Butuh Pasien Karies Profunda',
        needCase: 'Karies (Gigi Berlubang)',
        description: 'Mencari pasien dengan karies profunda untuk praktek konservasi gigi. Diutamakan gigi geraham dengan lubang cukup besar.',
        city: 'Surabaya',
        specificLocation: 'RSGM Unair, Surabaya',
        availableDays: ['Senin', 'Rabu', 'Jumat'],
        patientRequirements: 'Pasien dewasa, tidak ada riwayat penyakit sistemik',
        notes: 'Perawatan dilakukan di bawah supervisi dosen',
        status: 'active', // active, matched, closed
        postedDate: '2024-01-15',
        matchedWith: null,
        viewCount: 24,
        interestedCount: 3
      };

      setPost(dummy);
      setIsLoading(false);
    }, 500);
  }, [params.id]);

  const handleDelete = () => {
    const ok = confirm('Anda yakin ingin menghapus postingan ini?');
    if (!ok) return;

    // Nanti diganti dengan fetch DELETE ke backend
    // await fetch(`/api/posts/${params.id}`, { method: 'DELETE' })
    showToast('Postingan dihapus (simulasi).', 'success');
    router.push('/dashboard/mahasiswa/my-posts');
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-teal-50 py-8 px-5">
        <div className="max-w-5xl mx-auto">
          <div className="h-5 w-40 bg-gray-200 rounded mb-6 animate-pulse" />
          <div className="h-8 w-64 bg-gray-200 rounded mb-4 animate-pulse" />
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 mb-6 animate-pulse">
            <div className="h-6 w-48 bg-gray-200 rounded mb-3" />
            <div className="space-y-2">
              <div className="h-4 w-full bg-gray-200 rounded" />
              <div className="h-4 w-5/6 bg-gray-200 rounded" />
              <div className="h-4 w-4/6 bg-gray-200 rounded" />
            </div>
          </div>
          <div className="grid lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-6">
              <div className="h-40 bg-white rounded-xl shadow-sm border border-gray-100 animate-pulse" />
              <div className="h-40 bg-white rounded-xl shadow-sm border border-gray-100 animate-pulse" />
            </div>
            <div className="space-y-6">
              <div className="h-40 bg-white rounded-xl shadow-sm border border-gray-100 animate-pulse" />
              <div className="h-28 bg-yellow-50 rounded-lg border border-yellow-200 animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-teal-50 flex items-center justify-center">
        <div className="bg-white p-8 rounded-xl shadow-sm border border-red-100 max-w-md">
          <AlertCircle className="w-12 h-12 text-red-500 mx-auto mb-4" />
          <h2 className="text-xl font-bold text-center mb-2">Terjadi Kesalahan</h2>
          <p className="text-gray-600 text-center mb-6">{error}</p>
          <Link 
            href="/dashboard/mahasiswa/my-posts"
            className="block w-full py-3 bg-blue-600 text-white rounded-lg text-center font-medium"
          >
            Kembali ke Posting Saya
          </Link>
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-teal-50 flex items-center justify-center">
        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 max-w-md">
          <AlertCircle className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
          <h2 className="text-xl font-bold text-center mb-2">Data Tidak Ditemukan</h2>
          <p className="text-gray-600 text-center mb-6">Postingan dengan ID {params.id} tidak ditemukan.</p>
          <Link 
            href="/dashboard/mahasiswa/my-posts"
            className="block w-full py-3 bg-blue-600 text-white rounded-lg text-center font-medium"
          >
            Kembali ke Posting Saya
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-teal-50 py-8 px-5">
      {/* Back Button */}
      <div className="max-w-5xl mx-auto mb-6">
        <Link 
          href="/dashboard/mahasiswa/my-posts"
          className="inline-flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition"
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="font-medium">Kembali ke Posting Saya</span>
        </Link>
      </div>

      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="flex items-center space-x-2 mb-6">
          <Heart className="w-8 h-8 text-blue-500" />
          <span className="text-2xl font-bold text-blue-600">PasienGigi.id</span>
        </div>

        {/* Title + Status */}
        <div className="bg-white rounded-xl shadow-sm p-6 sm:p-8 border border-gray-100 mb-6">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">{post.title}</h1>
              <div className="flex flex-wrap gap-3 items-center">
                <span className="inline-block px-4 py-2 bg-blue-50 text-blue-700 text-sm font-medium rounded-lg border border-blue-200">
                  {post.needCase}
                </span>
                <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border ${
                  post.status === 'active' ? 'bg-green-50 text-green-700 border-green-200' :
                  post.status === 'matched' ? 'bg-purple-50 text-purple-700 border-purple-200' :
                  'bg-gray-100 text-gray-700 border-gray-200'
                }`}>
                  <CheckCircle className="w-3 h-3 mr-1" />
                  {post.status === 'active' ? 'Aktif' : post.status === 'matched' ? 'Sudah Match' : 'Ditutup'}
                </span>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              <Link href={`/dashboard/mahasiswa/posts/${post.id}/edit`}>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition text-sm font-medium">
                  <Edit className="w-4 h-4 inline mr-1" />
                  Edit
                </button>
              </Link>
              <button
                onClick={handleDelete}
                className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition text-sm font-medium"
              >
                <Trash2 className="w-4 h-4 inline mr-1" />
                Hapus
              </button>
            </div>
          </div>

          {/* Meta */}
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm text-gray-700">
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-2 text-gray-500" />
              Diposting: {new Date(post.postedDate).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}
            </div>
            <div className="flex items-center">
              <Eye className="w-4 h-4 mr-2 text-gray-500" />
              {post.viewCount} views
            </div>
            <div className="flex items-center">
              <Users className="w-4 h-4 mr-2 text-blue-600" />
              {post.interestedCount} pasien tertarik
            </div>
          </div>

          {/* Matched Info */}
          {post.status === 'matched' && post.matchedWith && (
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 mt-4">
              <p className="text-sm text-blue-700">
                <strong>✓ Match dengan:</strong> {post.matchedWith}
              </p>
            </div>
          )}
        </div>

        {/* Content Sections */}
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Left: Info Utama */}
          <div className="lg:col-span-2 space-y-6">
            {/* Deskripsi */}
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Deskripsi Detail</h3>
              <p className="text-gray-700 leading-relaxed">{post.description}</p>
            </div>

            {/* Persyaratan & Catatan */}
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Informasi Tambahan</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-sm font-medium text-gray-900 mb-1">Persyaratan Pasien</p>
                  <p className="text-gray-700">{post.patientRequirements || '-'}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900 mb-1">Catatan Tambahan</p>
                  <p className="text-gray-700">{post.notes || '-'}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Lokasi & Jadwal */}
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
              <h3 className="font-bold text-gray-900 mb-4">Lokasi & Jadwal</h3>
              <div className="space-y-3">
                <div className="flex items-center text-sm">
                  <MapPin className="w-4 h-4 text-gray-400 mr-2" />
                  <span className="text-gray-900">{post.city}</span>
                </div>
                <div className="text-sm text-gray-700">
                  <p className="font-medium">Lokasi Spesifik</p>
                  <p>{post.specificLocation || '-'}</p>
                </div>
                <div className="text-sm text-gray-700">
                  <p className="font-medium mb-2">Hari Tersedia</p>
                  <div className="flex flex-wrap gap-2">
                    {(post.availableDays || []).length > 0 ? (
                      post.availableDays.map((day) => (
                        <span key={day} className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full border border-blue-200 text-xs">
                          {day}
                        </span>
                      ))
                    ) : (
                      <span className="text-gray-500">-</span>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Info Box */}
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <div className="flex items-start">
                <AlertCircle className="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                <div className="ml-3">
                  <h4 className="text-sm font-bold text-yellow-900 mb-1">Catatan</h4>
                  <ul className="text-sm text-yellow-800 space-y-1">
                    <li>• Pastikan detail posting selalu diperbarui</li>
                    <li>• Gunakan tombol edit untuk mengubah informasi</li>
                    <li>• Hapus posting jika sudah tidak dibutuhkan</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="mt-6 flex flex-col sm:flex-row gap-3">
          <Link href="/dashboard/mahasiswa/my-posts" className="flex-1">
            <button className="w-full px-6 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition font-medium">
              Kembali ke Posting Saya
            </button>
          </Link>
          <Link href={`/dashboard/mahasiswa/posts/${post.id}/edit`} className="flex-1">
            <button className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition shadow-lg font-medium">
              Edit Posting
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
  {toast.visible && (
    <div
      className={`fixed bottom-6 right-6 px-4 py-3 rounded-lg shadow-lg text-white ${
        toast.type === 'success' ? 'bg-green-600' : 'bg-red-600'
      }`}
    >
      {toast.message}
    </div>
  )}
}