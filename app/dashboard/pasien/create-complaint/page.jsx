'use client';

import { useState } from 'react';
import { Heart, ArrowLeft, Upload, FileText, AlertCircle, CheckCircle } from 'lucide-react';
import Link from 'next/link';

export default function CreateComplaintPage() {
  const [photoFile, setPhotoFile] = useState(null);
  const [photoPreview, setPhotoPreview] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    complaint: '',
    complaintDetails: '',
    urgency: 'normal'
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPhotoFile(file);
      
      // Preview image
      const reader = new FileReader();
      reader.onloadend = () => {
        setPhotoPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemovePhoto = () => {
    setPhotoFile(null);
    setPhotoPreview(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log('Form Data:', formData);
      console.log('Photo File:', photoFile);
      alert('Keluhan berhasil ditambahkan! Nanti akan tersimpan di database.');
      setIsSubmitting(false);
      // Redirect ke dashboard
      // router.push('/dashboard/pasien');
    }, 1500);
  };

  const complaints = [
    'Gigi Berlubang (Karies)',
    'Gigi Sensitif',
    'Gigi Goyang',
    'Gigi Bungsu Bermasalah',
    'Karang Gigi',
    'Gusi Berdarah',
    'Gigi Patah',
    'Gigi Ngilu',
    'Ingin Cabut Gigi',
    'Ingin Tambal Gigi',
    'Ingin Scaling',
    'Ingin Pasang Behel',
    'Gigi Tidak Rata',
    'Bau Mulut',
    'Lainnya'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-white to-blue-50 py-8 px-5">
      {/* Back Button */}
      <div className="max-w-3xl mx-auto mb-6">
        <Link 
          href="/dashboard/pasien"
          className="inline-flex items-center space-x-2 text-gray-600 hover:text-teal-600 transition"
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="font-medium">Kembali ke Dashboard</span>
        </Link>
      </div>

      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center space-x-2 mb-4">
            <Heart className="w-10 h-10 text-teal-500" />
            <span className="text-3xl font-bold text-teal-600">PasienGigi.id</span>
          </Link>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Tambah Keluhan Gigi Baru</h1>
          <p className="text-gray-600">Ceritakan keluhan gigi Anda untuk mendapat perawatan gratis</p>
        </div>

        {/* Info Banner */}
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-6">
          <div className="flex items-start">
            <AlertCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
            <div className="ml-3">
              <h4 className="text-sm font-medium text-blue-900 mb-1">Tips Agar Cepat Match:</h4>
              <ul className="text-sm text-blue-700 space-y-1">
                <li>• Jelaskan keluhan dengan detail</li>
                <li>• Upload foto kondisi gigi (sangat membantu)</li>
                <li>• Sebutkan lokasi gigi yang bermasalah</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Complaint Type */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <FileText className="w-4 h-4 inline mr-1" />
                Jenis Keluhan <span className="text-red-500">*</span>
              </label>
              <select
                name="complaint"
                value={formData.complaint}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 text-gray-900 placeholder:text-gray-400 focus:ring-teal-500 focus:border-teal-500 transition"
                required
              >
                <option value="">Pilih Jenis Keluhan</option>
                {complaints.map((complaint) => (
                  <option key={complaint} value={complaint}>{complaint}</option>
                ))}
              </select>
            </div>

            {/* Urgency Level */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Tingkat Urgensi <span className="text-red-500">*</span>
              </label>
              <div className="grid grid-cols-3 gap-3">
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, urgency: 'low' })}
                  className={`px-4 py-3 rounded-lg border-2 transition ${
                    formData.urgency === 'low'
                      ? 'border-green-500 bg-green-50  text-green-700'
                      : 'border-gray-300 hover:border-green-300 text-gray-400 placeholder:text-gray-400'
                  }`}
                >
                  <div className="text-center">
                    <div className="font-semibold text-sm">Ringan</div>
                    <div className="text-xs mt-1">Tidak mengganggu</div>
                  </div>
                </button>
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, urgency: 'normal' })}
                  className={`px-4 py-3 rounded-lg border-2 transition ${
                    formData.urgency === 'normal'
                      ? 'border-yellow-500 bg-yellow-50 text-yellow-700'
                      : 'border-gray-300 hover:border-yellow-300'
                  }`}
                >
                  <div className="text-center">
                    <div className="font-semibold text-sm">Sedang</div>
                    <div className="text-xs mt-1">Cukup mengganggu</div>
                  </div>
                </button>
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, urgency: 'high' })}
                  className={`px-4 py-3 rounded-lg border-2 transition ${
                    formData.urgency === 'high'
                      ? 'border-red-500 bg-red-50 text-red-700'
                      : 'border-gray-300 hover:border-red-300 text-gray-400 placeholder:text-gray-400'
                  }`}
                >
                  <div className="text-center">
                    <div className="font-semibold text-sm">Urgent</div>
                    <div className="text-xs mt-1">Sangat sakit</div>
                  </div>
                </button>
              </div>
            </div>

            {/* Complaint Details */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Deskripsi Keluhan Detail <span className="text-red-500">*</span>
              </label>
              <textarea
                name="complaintDetails"
                value={formData.complaintDetails}
                onChange={handleInputChange}
                rows="6"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 text-gray-900 placeholder:text-gray-400 focus:ring-teal-500 focus:border-teal-500 transition"
                placeholder="Contoh: Gigi geraham kanan atas berlubang cukup besar. Terasa sakit saat makan makanan manis dan minuman dingin. Sudah berlangsung sekitar 2 minggu. Lubangnya terlihat berwarna hitam."
                required
              />
              <p className="text-xs text-gray-500 mt-2">
                💡 Tips: Sebutkan lokasi gigi (depan/belakang, atas/bawah, kiri/kanan), kapan mulai terasa sakit, dan apa yang memicu rasa sakit
              </p>
            </div>

            {/* Photo Upload */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Foto Kondisi Gigi <span className="text-gray-500">(Opsional, tapi sangat direkomendasikan)</span>
              </label>
              
              {!photoPreview ? (
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-teal-500 transition">
                  <input
                    type="file"
                    id="photo-upload"
                    accept="image/*"
                    onChange={handleFileChange}
                    className="hidden"
                  />
                  <label htmlFor="photo-upload" className="cursor-pointer">
                    <Upload className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                    <p className="text-sm text-gray-600 mb-1 font-medium">
                      Klik untuk upload foto atau drag & drop
                    </p>
                    <p className="text-xs text-gray-500">
                      Format: JPG, PNG, HEIC (Max 10MB)
                    </p>
                  </label>
                </div>
              ) : (
                <div className="relative">
                  <img 
                    src={photoPreview} 
                    alt="Preview" 
                    className="w-full h-64 object-cover rounded-lg border-2 border-gray-200"
                  />
                  <button
                    type="button"
                    onClick={handleRemovePhoto}
                    className="absolute top-2 right-2 px-3 py-1 bg-red-500 text-white text-sm rounded-lg hover:bg-red-600 transition"
                  >
                    Hapus
                  </button>
                  <div className="mt-2 flex items-center text-sm text-green-600">
                    <CheckCircle className="w-4 h-4 mr-1" />
                    <span>Foto berhasil dipilih: {photoFile?.name}</span>
                  </div>
                </div>
              )}
              
              <div className="mt-3 bg-teal-50 border border-teal-200 rounded-lg p-3">
                <p className="text-xs text-teal-700">
                  <strong>Kenapa foto penting?</strong> Foto membantu mahasiswa FKG menilai apakah kasus Anda sesuai dengan kebutuhan praktek mereka. Ini akan mempercepat proses matching!
                </p>
              </div>
            </div>

            {/* Info Box */}
            <div className="bg-gradient-to-r from-teal-50 to-blue-50 border border-teal-200 rounded-lg p-5">
              <div className="flex items-start">
                <Heart className="w-6 h-6 text-teal-600 mt-0.5 flex-shrink-0" />
                <div className="ml-3">
                  <h4 className="text-sm font-bold text-gray-900 mb-2">Yang Akan Terjadi Setelah Posting:</h4>
                  <ol className="text-sm text-gray-700 space-y-1">
                    <li>1. Keluhan Anda akan muncul di dashboard mahasiswa FKG</li>
                    <li>2. Mahasiswa yang butuh kasus sesuai akan menghubungi Anda</li>
                    <li>3. Anda bisa memilih mahasiswa yang ingin merawat Anda</li>
                    <li>4. Perawatan dilakukan GRATIS di klinik kampus</li>
                  </ol>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/dashboard/pasien" className="flex-1">
                <button
                  type="button"
                  className="w-full px-6 py-4 border-2 border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition font-medium"
                >
                  Batal
                </button>
              </Link>
              <button
                type="submit"
                disabled={isSubmitting}
                className={`flex-1 px-6 py-4 rounded-lg transition shadow-lg font-medium text-white ${
                  isSubmitting
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-teal-600 hover:bg-teal-700'
                }`}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Menyimpan...
                  </span>
                ) : (
                  'Posting Keluhan'
                )}
              </button>
            </div>
          </form>
        </div>

        {/* Bottom Info */}
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-500">
            Dengan posting keluhan, Anda menyetujui{' '}
            <a href="#" className="text-teal-600 hover:underline">Syarat & Ketentuan</a>
            {' '}dan{' '}
            <a href="#" className="text-teal-600 hover:underline">Kebijakan Privasi</a>
          </p>
        </div>
      </div>
    </div>
  );
}