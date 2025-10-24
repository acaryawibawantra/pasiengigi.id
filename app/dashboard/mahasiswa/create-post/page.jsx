'use client';

import { useState } from 'react';
import { Heart, ArrowLeft, FileText, MapPin, Calendar, Users, CheckCircle, AlertCircle } from 'lucide-react';
import Link from 'next/link';

export default function CreatePostPage() {
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
      console.log('Form Data:', formData);
      alert('Posting berhasil dibuat! Pasien akan melihat kebutuhan Anda di dashboard mereka.');
      setIsSubmitting(false);
      // Redirect ke my-posts
      // router.push('/dashboard/mahasiswa/my-posts');
    }, 1500);
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-teal-50 py-8 px-5">
      {/* Back Button */}
      <div className="max-w-4xl mx-auto mb-6">
        <Link 
          href="/dashboard/mahasiswa"
          className="inline-flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition"
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="font-medium">Kembali ke Dashboard</span>
        </Link>
      </div>

      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center space-x-2 mb-4">
            <Heart className="w-10 h-10 text-blue-500" />
            <span className="text-3xl font-bold text-blue-600">PasienGigi.id</span>
          </Link>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Posting Kebutuhan Pasien</h1>
          <p className="text-gray-600">Buat posting untuk mencari pasien yang sesuai dengan kebutuhan praktek Anda</p>
        </div>

        {/* Info Banner */}
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-6">
          <div className="flex items-start">
            <AlertCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
            <div className="ml-3">
              <h4 className="text-sm font-medium text-blue-900 mb-1">Tips Agar Cepat Match:</h4>
              <ul className="text-sm text-blue-700 space-y-1">
                <li>• Jelaskan kebutuhan kasus dengan spesifik</li>
                <li>• Sebutkan kriteria pasien yang diinginkan</li>
                <li>• Cantumkan jadwal dan lokasi praktek dengan jelas</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Title */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <FileText className="w-4 h-4 inline mr-1" />
                Judul Posting <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                placeholder="Contoh: Butuh Pasien Karies Profunda untuk Konservasi"
                required
              />
              <p className="text-xs text-gray-500 mt-1">Judul yang menarik akan lebih mudah dilihat pasien</p>
            </div>

            {/* Need Case Type */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Jenis Kasus yang Dibutuhkan <span className="text-red-500">*</span>
              </label>
              <select
                name="needCase"
                value={formData.needCase}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                required
              >
                <option value="">Pilih Jenis Kasus</option>
                {caseTypes.map((caseType) => (
                  <option key={caseType} value={caseType}>{caseType}</option>
                ))}
              </select>
            </div>

            {/* Description */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Deskripsi Kebutuhan <span className="text-red-500">*</span>
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                rows="5"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                placeholder="Jelaskan kebutuhan kasus Anda secara detail. Contoh: Mencari pasien dengan karies profunda untuk praktek konservasi gigi. Diutamakan gigi geraham dengan lubang cukup besar yang belum pernah ditambal."
                required
              />
              <p className="text-xs text-gray-500 mt-1">
                💡 Tips: Jelaskan jenis kasus, lokasi gigi yang diinginkan, dan tingkat kesulitan
              </p>
            </div>

            {/* Location */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <MapPin className="w-4 h-4 inline mr-1" />
                  Kota <span className="text-red-500">*</span>
                </label>
                <select
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                  required
                >
                  <option value="">Pilih Kota</option>
                  {cities.map((city) => (
                    <option key={city} value={city}>{city}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Lokasi Klinik/Kampus <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="specificLocation"
                  value={formData.specificLocation}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                  placeholder="Contoh: RSGM Unair"
                  required
                />
              </div>
            </div>

            {/* Available Days */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                <Calendar className="w-4 h-4 inline mr-1" />
                Jadwal Tersedia <span className="text-red-500">*</span>
              </label>
              <div className="flex flex-wrap gap-3">
                {days.map((day) => (
                  <button
                    key={day}
                    type="button"
                    onClick={() => handleDayToggle(day)}
                    className={`px-4 py-2 rounded-lg border-2 transition font-medium ${
                      formData.availableDays.includes(day)
                        ? 'border-blue-500 bg-blue-50 text-blue-700'
                        : 'border-gray-300 bg-white text-gray-700 hover:border-blue-300'
                    }`}
                  >
                    {day}
                  </button>
                ))}
              </div>
              {formData.availableDays.length === 0 && (
                <p className="text-xs text-red-500 mt-2">Pilih minimal 1 hari</p>
              )}
            </div>

            {/* Patient Requirements */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <Users className="w-4 h-4 inline mr-1" />
                Kriteria Pasien <span className="text-gray-500 font-normal">(Opsional)</span>
              </label>
              <textarea
                name="patientRequirements"
                value={formData.patientRequirements}
                onChange={handleInputChange}
                rows="3"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                placeholder="Contoh: Pasien yang kooperatif, tidak memiliki alergi obat bius, tersedia untuk 2-3 kali kunjungan"
              />
            </div>

            {/* Additional Notes */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Catatan Tambahan <span className="text-gray-500 font-normal">(Opsional)</span>
              </label>
              <textarea
                name="notes"
                value={formData.notes}
                onChange={handleInputChange}
                rows="3"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                placeholder="Informasi tambahan yang perlu diketahui pasien"
              />
            </div>

            {/* Info Box */}
            <div className="bg-gradient-to-r from-blue-50 to-teal-50 border border-blue-200 rounded-lg p-5">
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-blue-600 mt-0.5 flex-shrink-0" />
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

            {/* Submit Button */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/dashboard/mahasiswa" className="flex-1">
                <button
                  type="button"
                  className="w-full px-6 py-4 border-2 border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition font-medium"
                >
                  Batal
                </button>
              </Link>
              <button
                type="submit"
                disabled={isSubmitting || formData.availableDays.length === 0}
                className={`flex-1 px-6 py-4 rounded-lg transition shadow-lg font-medium text-white ${
                  isSubmitting || formData.availableDays.length === 0
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-blue-600 hover:bg-blue-700'
                }`}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Memposting...
                  </span>
                ) : (
                  'Posting Sekarang'
                )}
              </button>
            </div>
          </form>
        </div>

        {/* Bottom Info */}
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-500">
            Dengan membuat posting, Anda menyetujui{' '}
            <a href="#" className="text-blue-600 hover:underline">Syarat & Ketentuan</a>
            {' '}dan{' '}
            <a href="#" className="text-blue-600 hover:underline">Kebijakan Privasi</a>
          </p>
        </div>
      </div>
    </div>
  );
}