'use client';

import { useState } from 'react';
import { Heart, Users, Search, CheckCircle, ArrowRight, Stethoscope, UserCheck, ChevronDown, ChevronUp, Menu, X } from 'lucide-react';

function FAQItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 flex justify-between items-center bg-white hover:bg-gray-50 transition"
      >
        <span className="font-semibold text-left text-gray-900">{question}</span>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-blue-600 flex-shrink-0" />
        ) : (
          <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
        )}
      </button>
      {isOpen && (
        <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
          <p className="text-gray-700">{answer}</p>
        </div>
      )}
    </div>
  );
}

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const faqData = [
    {
      question: "Apakah perawatan di PasienGigi.id benar-benar gratis?",
      answer: "Ya, 100% gratis! Mahasiswa FKG membutuhkan pasien untuk memenuhi syarat praktek klinik mereka, sehingga semua perawatan tidak dipungut biaya. Perawatan dilakukan di klinik kampus di bawah supervisi dosen pembimbing."
    },
    {
      question: "Apakah mahasiswa FKG yang terdaftar sudah terverifikasi?",
      answer: "Tentu! Semua mahasiswa yang mendaftar harus melalui proses verifikasi dengan mengunggah Kartu Tanda Mahasiswa (KTM) dan surat keterangan dari kampus. Tim kami akan memverifikasi setiap akun sebelum diaktifkan."
    },
    {
      question: "Berapa lama waktu yang dibutuhkan untuk mendapat pasien/mahasiswa?",
      answer: "Tergantung lokasi dan jenis kasus. Biasanya dalam 1-7 hari Anda akan mendapatkan match. Lokasi di kota besar cenderung lebih cepat karena lebih banyak pengguna."
    },
    {
      question: "Jenis perawatan apa saja yang tersedia?",
      answer: "Beragam, mulai dari scaling (pembersihan karang gigi), tambal gigi, pencabutan gigi, perawatan saluran akar, pembuatan gigi tiruan, hingga perawatan ortodonti (behel). Tergantung kebutuhan mahasiswa dan kondisi pasien."
    },
    {
      question: "Apakah aman? Bagaimana dengan privasi data saya?",
      answer: "Sangat aman! Kami menggunakan enkripsi untuk melindungi data Anda. Foto dan informasi pribadi hanya bisa diakses oleh mahasiswa yang ter-match dengan Anda. Kami tidak membagikan data Anda ke pihak ketiga."
    },
    {
      question: "Saya mahasiswa FKG, bagaimana cara memulai?",
      answer: "Mudah! Daftar akun, verifikasi dengan KTM, lalu posting kebutuhan pasien Anda (jenis kasus, lokasi, jadwal). Sistem akan mencocokkan dengan pasien yang sesuai dan Anda akan mendapat notifikasi."
    },
    {
      question: "Saya pasien, apakah harus datang ke kampus untuk perawatan?",
      answer: "Ya, perawatan dilakukan di klinik kampus FKG untuk memastikan kualitas dan keamanan. Mahasiswa akan memberikan informasi lokasi dan jadwal yang bisa Anda sesuaikan."
    },
    {
      question: "Apakah ada biaya pendaftaran?",
      answer: "Tidak ada! Pendaftaran di PasienGigi.id 100% gratis untuk mahasiswa maupun pasien. Kami berkomitmen untuk menyediakan platform ini tanpa biaya apapun."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Heart className="w-6 h-6 sm:w-8 sm:h-8 text-blue-500" />
              <span className="text-xl sm:text-2xl font-bold text-blue-600">PasienGigi.id</span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              <a href="#tentang" className="text-gray-700 hover:text-blue-600 transition">Tentang</a>
              <a href="#cara-kerja" className="text-gray-700 hover:text-blue-600 transition">Cara Kerja</a>
              <a href="#fitur" className="text-gray-700 hover:text-blue-600 transition">Fitur</a>
              <a href="#faq" className="text-gray-700 hover:text-blue-600 transition">FAQ</a>
            </div>
            
            {/* Desktop Buttons */}
            <div className="hidden md:flex space-x-4">
              <button className="px-4 py-2 text-blue-600 hover:text-blue-700 font-medium transition">
                Masuk
              </button>
              <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition shadow-md">
                Daftar
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-gray-700"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-200">
              <div className="flex flex-col space-y-4">
                <a href="#tentang" className="text-gray-700 hover:text-blue-600 transition px-4 py-2">Tentang</a>
                <a href="#cara-kerja" className="text-gray-700 hover:text-blue-600 transition px-4 py-2">Cara Kerja</a>
                <a href="#fitur" className="text-gray-700 hover:text-blue-600 transition px-4 py-2">Fitur</a>
                <a href="#faq" className="text-gray-700 hover:text-blue-600 transition px-4 py-2">FAQ</a>
                <div className="flex flex-col space-y-2 px-4 pt-2">
                  <button className="w-full py-2 text-blue-600 hover:text-blue-700 font-medium transition">
                    Masuk
                  </button>
                  <button className="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition shadow-md">
                    Daftar
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="space-y-4 sm:space-y-6">
            <div className="inline-block px-3 py-1 sm:px-4 sm:py-2 bg-blue-100 text-blue-700 rounded-full text-xs sm:text-sm font-medium">
              Platform Pertama di Indonesia
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Menghubungkan <span className="text-blue-600">Mahasiswa FKG</span> dengan <span className="text-teal-600">Pasien</span>
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600">
              Solusi untuk mahasiswa dokter gigi yang membutuhkan pasien praktek, dan masyarakat yang ingin perawatan gigi gratis berkualitas.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <button className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition shadow-lg flex items-center justify-center space-x-2 text-base sm:text-lg font-medium">
                <span className="whitespace-nowrap">Saya Mahasiswa FKG</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
              </button>
              <button className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition shadow-lg flex items-center justify-center space-x-2 text-base sm:text-lg font-medium">
                <span className="whitespace-nowrap">Saya Butuh Perawatan</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
              </button>
            </div>
            <div className="grid grid-cols-3 gap-4 pt-4">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-blue-600">500+</div>
                <div className="text-xs sm:text-sm text-gray-600">Mahasiswa Terdaftar</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-teal-600">1,200+</div>
                <div className="text-xs sm:text-sm text-gray-600">Pasien Terbantu</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-purple-600">50+</div>
                <div className="text-xs sm:text-sm text-gray-600">Kampus FKG</div>
              </div>
            </div>
          </div>
          <div className="relative hidden md:block">
            <div className="bg-gradient-to-br from-blue-400 to-teal-400 rounded-3xl p-8 shadow-2xl">
              <div className="bg-white rounded-2xl p-6 space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <Stethoscope className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Mahasiswa FKG</div>
                    <div className="text-sm text-gray-500">Mencari pasien karies</div>
                  </div>
                </div>
                <div className="border-t border-gray-200 pt-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center">
                      <UserCheck className="w-6 h-6 text-teal-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Pasien</div>
                      <div className="text-sm text-gray-500">Butuh perawatan karies</div>
                    </div>
                  </div>
                </div>
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-center">
                  <CheckCircle className="w-6 h-6 text-green-600 mx-auto mb-2" />
                  <div className="text-sm font-medium text-green-800">Match! Hubungi Sekarang</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cara Kerja Section */}
      <section id="cara-kerja" className="bg-white py-12 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">Cara Kerja</h2>
            <p className="text-lg sm:text-xl text-gray-600">Simple, cepat, dan efektif</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12">
            {/* Untuk Mahasiswa */}
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-center space-x-3 mb-4 sm:mb-6">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <Stethoscope className="w-5 h-5 text-blue-600" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900">Untuk Mahasiswa FKG</h3>
              </div>
              <div className="space-y-3 sm:space-y-4">
                {[
                  { step: "1", text: "Daftar dan verifikasi akun dengan KTM" },
                  { step: "2", text: "Posting kebutuhan pasien (jenis kasus, lokasi, jadwal)" },
                  { step: "3", text: "Terima notifikasi saat ada pasien yang cocok" },
                  { step: "4", text: "Hubungi pasien dan jadwalkan perawatan" }
                ].map((item) => (
                  <div key={item.step} className="flex items-start space-x-3 sm:space-x-4">
                    <div className="w-7 h-7 sm:w-8 sm:h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0 text-sm sm:text-base">
                      {item.step}
                    </div>
                    <p className="text-gray-700 pt-1 text-sm sm:text-base">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Untuk Pasien */}
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-center space-x-3 mb-4 sm:mb-6">
                <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center">
                  <UserCheck className="w-5 h-5 text-teal-600" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900">Untuk Pasien</h3>
              </div>
              <div className="space-y-3 sm:space-y-4">
                {[
                  { step: "1", text: "Daftar dengan data diri dan keluhan gigi" },
                  { step: "2", text: "Upload foto kondisi gigi (opsional)" },
                  { step: "3", text: "Lihat mahasiswa yang butuh kasus sesuai keluhan Anda" },
                  { step: "4", text: "Dapatkan perawatan GRATIS dari mahasiswa terverifikasi" }
                ].map((item) => (
                  <div key={item.step} className="flex items-start space-x-3 sm:space-x-4">
                    <div className="w-7 h-7 sm:w-8 sm:h-8 bg-teal-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0 text-sm sm:text-base">
                      {item.step}
                    </div>
                    <p className="text-gray-700 pt-1 text-sm sm:text-base">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      

      {/* Fitur Section */}
      <section id="fitur" className="py-12 sm:py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">Fitur Unggulan</h2>
            <p className="text-lg sm:text-xl text-gray-600">Platform lengkap untuk kebutuhan Anda</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                icon: <Search className="w-6 h-6 sm:w-8 sm:h-8" />,
                title: "Smart Matching",
                description: "Algoritma cerdas mencocokkan mahasiswa dengan pasien berdasarkan kebutuhan dan lokasi",
                color: "blue"
              },
              {
                icon: <CheckCircle className="w-6 h-6 sm:w-8 sm:h-8" />,
                title: "Verifikasi Terpercaya",
                description: "Semua mahasiswa terverifikasi dengan KTM dan surat keterangan kampus",
                color: "green"
              },
              {
                icon: <Users className="w-6 h-6 sm:w-8 sm:h-8" />,
                title: "Komunitas Aktif",
                description: "Bergabung dengan ribuan mahasiswa FKG dan pasien di seluruh Indonesia",
                color: "purple"
              },
              {
                icon: <Heart className="w-6 h-6 sm:w-8 sm:h-8" />,
                title: "Perawatan Gratis",
                description: "Pasien mendapat perawatan berkualitas tanpa biaya, di bawah supervisi dosen",
                color: "pink"
              },
              {
                icon: <Stethoscope className="w-6 h-6 sm:w-8 sm:h-8" />,
                title: "Beragam Kasus",
                description: "Dari scaling, tambal gigi, cabut gigi, hingga perawatan saluran akar",
                color: "teal"
              },
              {
                icon: <UserCheck className="w-6 h-6 sm:w-8 sm:h-8" />,
                title: "Mudah Digunakan",
                description: "Interface sederhana dan intuitif, siapa saja bisa menggunakan",
                color: "indigo"
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white rounded-xl p-5 sm:p-6 shadow-lg hover:shadow-xl transition">
                <div className={`w-12 h-12 sm:w-16 sm:h-16 bg-${feature.color}-100 rounded-lg flex items-center justify-center mb-3 sm:mb-4 text-${feature.color}-600`}>
                  {feature.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm sm:text-base">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-teal-600 py-12 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 sm:mb-6">
            Siap Bergabung dengan PasienGigi.id?
          </h2>
          <p className="text-lg sm:text-xl text-blue-100 mb-6 sm:mb-8">
            Ribuan mahasiswa dan pasien sudah bergabung. Ayo mulai sekarang!
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <button className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition shadow-lg text-base sm:text-lg font-medium">
              Daftar Sebagai Mahasiswa
            </button>
            <button className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition shadow-lg text-base sm:text-lg font-medium">
              Daftar Sebagai Pasien
            </button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="bg-white py-12 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">Pertanyaan yang Sering Diajukan</h2>
            <p className="text-lg sm:text-xl text-gray-600">Temukan jawaban untuk pertanyaan Anda</p>
          </div>
          <div className="space-y-3 sm:space-y-4">
            {faqData.map((faq, index) => (
              <FAQItem key={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>
          <div className="mt-8 sm:mt-12 text-center">
            <p className="text-gray-600 mb-4 text-sm sm:text-base">Masih ada pertanyaan?</p>
            <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition shadow-md text-sm sm:text-base">
              Hubungi Kami
            </button>
          </div>
        </div>
      </section>


      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-3 sm:mb-4">
                <Heart className="w-6 h-6 sm:w-8 sm:h-8 text-blue-400" />
                <span className="text-lg sm:text-xl font-bold">PasienGigi.id</span>
              </div>
              <p className="text-gray-400 text-sm sm:text-base">
                Menghubungkan mahasiswa FKG dengan pasien untuk masa depan kesehatan gigi Indonesia yang lebih baik.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-3 sm:mb-4 text-base sm:text-lg">Platform</h4>
              <ul className="space-y-2 text-gray-400 text-sm sm:text-base">
                <li><a href="#" className="hover:text-white transition">Tentang Kami</a></li>
                <li><a href="#" className="hover:text-white transition">Cara Kerja</a></li>
                <li><a href="#" className="hover:text-white transition">Fitur</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-3 sm:mb-4 text-base sm:text-lg">Bantuan</h4>
              <ul className="space-y-2 text-gray-400 text-sm sm:text-base">
                <li><a href="#faq" className="hover:text-white transition">FAQ</a></li>
                <li><a href="#" className="hover:text-white transition">Kontak</a></li>
                <li><a href="#" className="hover:text-white transition">Syarat & Ketentuan</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-3 sm:mb-4 text-base sm:text-lg">Kontak</h4>
              <ul className="space-y-2 text-gray-400 text-sm sm:text-base">
                <li>Email: info@pasiengigi.id</li>
                <li>WhatsApp: +62 812-3456-7890</li>
                <li>Instagram: @pasiengigi.id</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center text-gray-400 text-sm sm:text-base">
            <p>&copy; 2024 PasienGigi.id. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}