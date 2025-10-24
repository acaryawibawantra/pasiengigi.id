'use client';

import { useState, useEffect } from 'react';
import { Heart, ArrowLeft, FileText, MapPin, Calendar, Users, CheckCircle, AlertCircle } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function EditPostPage({ params }) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    needCase: '',
    description: '',
    city: '',
    specificLocation: '',
    availableDays: [],
    patientRequirements: '',
    notes: ''
  });

  // Fetch post data based on ID
  useEffect(() => {
    // Simulasi fetch data dari API
    setTimeout(() => {
      // Data dummy (nanti diganti dengan fetch dari API)
      const postData = {
        id: params.id,
        title: 'Butuh Pasien Karies Profunda',
        needCase: 'Karies (Gigi Berlubang)',
        description: 'Mencari pasien dengan karies profunda untuk praktek konservasi gigi. Diutamakan gigi geraham dengan lubang cukup besar.',
        city: 'Surabaya',
        specificLocation: 'RSGM Unair, Surabaya',
        availableDays: ['Senin', 'Rabu', 'Jumat'],
        patientRequirements: 'Pasien dewasa, tidak ada riwayat penyakit sistemik',
        notes: 'Perawatan akan dilakukan di bawah supervisi dosen'
      };
      
      setFormData(postData);
      setIsLoading(false);
    }, 500);
  }, [params.id]);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleDayToggle = (day) => {
    if (formData.availableDays.includes(day)) {
      setFormData({
        ...formData,
        availableDays: formData.availableDays.filter(d => d !== day)
      });
    } else {
      setFormData({
        ...formData,
        availableDays: [...formData.availableDays, day]
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log('Updated Form Data:', formData);
      alert('Posting berhasil diperbarui!');
      setIsSubmitting(false);
      // Redirect ke my-posts
      router.push('/dashboard/mahasiswa/my-posts');
    }, 1000);
  };

  const caseTypes = [
    'Karies (Gigi Berlubang)',
    'Scaling (Karang Gigi)',
    'Pencabutan Gigi',
    'Tambal Gigi',
    'Perawatan Saluran Akar',
    'Gigi Tiruan',
    'Ortodonti (Behel)',
    'Bedah Mulut',
    'Periodontal',
    'Gigi Bungsu',
    'Lainnya'
  ];

  const cities = [
    'Jakarta', 'Surabaya', 'Bandung', 'Medan', 'Semarang',
    'Makassar', 'Palembang', 'Tangerang', 'Depok', 'Bekasi',
    'Yogyakarta', 'Malang', 'Bogor', 'Denpasar', 'Lainnya'
  ];

  const days = ['Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-teal-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Memuat data posting...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-teal-50 py-8 px-5">
      {/* Back Button */}
      <div className="max-w-4xl mx-auto mb-6">
        <Link 
          href="/dashboard/mahasiswa/my-posts"
          className="inline-flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition"
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="font-medium">Kembali ke Posting Saya</span>
        </Link>
      </div>

      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center space-x-2 mb-4">
            <Heart className="w-10 h-10 text-blue-500" />
            <span className="text-3xl font-bold text-blue-600">PasienGigi.id</span>
          </Link>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Edit Posting</h1>
          <p className="text-gray-600">Perbarui informasi posting kebutuhan pasien Anda</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="bg-white rounded-xl shadow-sm p-6 sm:p-8 border border-gray-100">
            <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
              <FileText className="w-5 h-5 mr-2 text-blue-600" />
              Informasi Kebutuhan
            </h2>

            <div className="space-y-6">
              {/* Judul */}
              <div>
                <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
                  Judul Posting
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Contoh: Butuh Pasien Karies untuk Praktek Konservasi"
                  required
                />
              </div>

              {/* Jenis Kasus */}
              <div>
                <label htmlFor="needCase" className="block text-sm font-medium text-gray-700 mb-1">
                  Jenis Kasus yang Dibutuhkan
                </label>
                <select
                  id="needCase"
                  name="needCase"
                  value={formData.needCase}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                >
                  <option value="">Pilih Jenis Kasus</option>
                  {caseTypes.map((type, index) => (
                    <option key={index} value={type}>{type}</option>
                  ))}
                </select>
              </div>

              {/* Deskripsi */}
              <div>
                <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
                  Deskripsi Detail
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Jelaskan secara detail kasus yang Anda butuhkan, termasuk kriteria khusus jika ada"
                  required
                />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 sm:p-8 border border-gray-100">
            <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
              <MapPin className="w-5 h-5 mr-2 text-blue-600" />
              Lokasi & Jadwal
            </h2>

            <div className="space-y-6">
              {/* Kota */}
              <div>
                <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
                  Kota
                </label>
                <select
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                >
                  <option value="">Pilih Kota</option>
                  {cities.map((city, index) => (
                    <option key={index} value={city}>{city}</option>
                  ))}
                </select>
              </div>

              {/* Lokasi Spesifik */}
              <div>
                <label htmlFor="specificLocation" className="block text-sm font-medium text-gray-700 mb-1">
                  Lokasi Spesifik (Klinik/Kampus)
                </label>
                <input
                  type="text"
                  id="specificLocation"
                  name="specificLocation"
                  value={formData.specificLocation}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Contoh: RSGM Universitas X, Jl. Contoh No. 123"
                  required
                />
              </div>

              {/* Hari Tersedia */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Hari Tersedia untuk Praktek
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {days.map((day, index) => (
                    <div key={index} className="flex items-center">
                      <button
                        type="button"
                        onClick={() => handleDayToggle(day)}
                        className={`flex items-center justify-center px-4 py-2 rounded-lg border ${
                          formData.availableDays.includes(day)
                            ? 'bg-blue-50 border-blue-300 text-blue-700'
                            : 'bg-white border-gray-300 text-gray-700 hover:bg-gray-50'
                        } w-full`}
                      >
                        {formData.availableDays.includes(day) && (
                          <CheckCircle className="w-4 h-4 mr-2" />
                        )}
                        {day}
                      </button>
                    </div>
                  ))}
                </div>
                {formData.availableDays.length === 0 && (
                  <p className="text-sm text-red-600 mt-1">Pilih minimal satu hari</p>
                )}
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 sm:p-8 border border-gray-100">
            <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
              <Users className="w-5 h-5 mr-2 text-blue-600" />
              Informasi Tambahan
            </h2>

            <div className="space-y-6">
              {/* Persyaratan Pasien */}
              <div>
                <label htmlFor="patientRequirements" className="block text-sm font-medium text-gray-700 mb-1">
                  Persyaratan Pasien (Opsional)
                </label>
                <textarea
                  id="patientRequirements"
                  name="patientRequirements"
                  value={formData.patientRequirements}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Contoh: Usia, jenis kelamin, atau kondisi khusus yang dibutuhkan"
                />
              </div>

              {/* Catatan Tambahan */}
              <div>
                <label htmlFor="notes" className="block text-sm font-medium text-gray-700 mb-1">
                  Catatan Tambahan (Opsional)
                </label>
                <textarea
                  id="notes"
                  name="notes"
                  value={formData.notes}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Informasi tambahan yang perlu diketahui pasien"
                />
              </div>

              {/* Info Box */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <div className="flex items-start">
                  <AlertCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <div className="ml-3">
                    <h4 className="text-sm font-bold text-gray-900 mb-2">Yang Akan Terjadi Setelah Posting:</h4>
                    <ol className="text-sm text-gray-700 space-y-1">
                      <li>1. Posting Anda akan muncul di dashboard pasien</li>
                      <li>2. Pasien yang sesuai akan menghubungi Anda</li>
                      <li>3. Diskusikan jadwal dan konfirmasi dengan pasien</li>
                      <li>4. Lakukan perawatan di klinik kampus</li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex flex-col sm:flex-row gap-3">
            <Link href="/dashboard/mahasiswa/my-posts" className="flex-1">
              <button
                type="button"
                className="w-full px-6 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition font-medium"
              >
                Batal
              </button>
            </Link>
            <button
              type="submit"
              disabled={isSubmitting || formData.availableDays.length === 0}
              className="flex-1 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition shadow-lg font-medium disabled:bg-blue-300 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <span className="inline-block animate-spin mr-2">⟳</span>
                  Menyimpan...
                </>
              ) : (
                'Simpan Perubahan'
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}