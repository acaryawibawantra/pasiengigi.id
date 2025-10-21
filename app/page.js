import { Heart, Users, Search, CheckCircle, ArrowRight, Stethoscope, UserCheck } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Heart className="w-8 h-8 text-blue-500" />
              <span className="text-2xl font-bold text-blue-600">PasienGigi.id</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#tentang" className="text-gray-700 hover:text-blue-600 transition">Tentang</a>
              <a href="#cara-kerja" className="text-gray-700 hover:text-blue-600 transition">Cara Kerja</a>
              <a href="#fitur" className="text-gray-700 hover:text-blue-600 transition">Fitur</a>
            </div>
            <div className="flex space-x-4">
              <button className="px-4 py-2 text-blue-600 hover:text-blue-700 font-medium transition">
                Masuk
              </button>
              <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition shadow-md">
                Daftar
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
              Platform Pertama di Indonesia
            </div>
            <h1 className="text-5xl font-bold text-gray-900 leading-tight">
              Menghubungkan <span className="text-blue-600">Mahasiswa FKG</span> dengan <span className="text-teal-600">Pasien</span>
            </h1>
            <p className="text-xl text-gray-600">
              Solusi untuk mahasiswa dokter gigi yang membutuhkan pasien praktek, dan masyarakat yang ingin perawatan gigi gratis berkualitas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition shadow-lg flex items-center justify-center space-x-2 text-lg font-medium">
                <span>Saya Mahasiswa FKG</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="px-8 py-4 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition shadow-lg flex items-center justify-center space-x-2 text-lg font-medium">
                <span>Saya Butuh Perawatan</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
            <div className="flex items-center space-x-8 pt-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">500+</div>
                <div className="text-sm text-gray-600">Mahasiswa Terdaftar</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-teal-600">1,200+</div>
                <div className="text-sm text-gray-600">Pasien Terbantu</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600">50+</div>
                <div className="text-sm text-gray-600">Kampus FKG</div>
              </div>
            </div>
          </div>
          <div className="relative">
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
      <section id="cara-kerja" className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Cara Kerja</h2>
            <p className="text-xl text-gray-600">Simple, cepat, dan efektif</p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            {/* Untuk Mahasiswa */}
            <div className="space-y-6">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <Stethoscope className="w-5 h-5 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Untuk Mahasiswa FKG</h3>
              </div>
              <div className="space-y-4">
                {[
                  { step: "1", text: "Daftar dan verifikasi akun dengan KTM" },
                  { step: "2", text: "Posting kebutuhan pasien (jenis kasus, lokasi, jadwal)" },
                  { step: "3", text: "Terima notifikasi saat ada pasien yang cocok" },
                  { step: "4", text: "Hubungi pasien dan jadwalkan perawatan" }
                ].map((item) => (
                  <div key={item.step} className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                      {item.step}
                    </div>
                    <p className="text-gray-700 pt-1">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Untuk Pasien */}
            <div className="space-y-6">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center">
                  <UserCheck className="w-5 h-5 text-teal-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Untuk Pasien</h3>
              </div>
              <div className="space-y-4">
                {[
                  { step: "1", text: "Daftar dengan data diri dan keluhan gigi" },
                  { step: "2", text: "Upload foto kondisi gigi (opsional)" },
                  { step: "3", text: "Lihat mahasiswa yang butuh kasus sesuai keluhan Anda" },
                  { step: "4", text: "Dapatkan perawatan GRATIS dari mahasiswa terverifikasi" }
                ].map((item) => (
                  <div key={item.step} className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-teal-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                      {item.step}
                    </div>
                    <p className="text-gray-700 pt-1">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fitur Section */}
      <section id="fitur" className="py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Fitur Unggulan</h2>
            <p className="text-xl text-gray-600">Platform lengkap untuk kebutuhan Anda</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Search className="w-8 h-8" />,
                title: "Smart Matching",
                description: "Algoritma cerdas mencocokkan mahasiswa dengan pasien berdasarkan kebutuhan dan lokasi",
                color: "blue"
              },
              {
                icon: <CheckCircle className="w-8 h-8" />,
                title: "Verifikasi Terpercaya",
                description: "Semua mahasiswa terverifikasi dengan KTM dan surat keterangan kampus",
                color: "green"
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Komunitas Aktif",
                description: "Bergabung dengan ribuan mahasiswa FKG dan pasien di seluruh Indonesia",
                color: "purple"
              },
              {
                icon: <Heart className="w-8 h-8" />,
                title: "Perawatan Gratis",
                description: "Pasien mendapat perawatan berkualitas tanpa biaya, di bawah supervisi dosen",
                color: "pink"
              },
              {
                icon: <Stethoscope className="w-8 h-8" />,
                title: "Beragam Kasus",
                description: "Dari scaling, tambal gigi, cabut gigi, hingga perawatan saluran akar",
                color: "teal"
              },
              {
                icon: <UserCheck className="w-8 h-8" />,
                title: "Mudah Digunakan",
                description: "Interface sederhana dan intuitif, siapa saja bisa menggunakan",
                color: "indigo"
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition">
                <div className={`w-16 h-16 bg-${feature.color}-100 rounded-lg flex items-center justify-center mb-4 text-${feature.color}-600`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-teal-600 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Siap Bergabung dengan PasienGigi.id?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Ribuan mahasiswa dan pasien sudah bergabung. Ayo mulai sekarang!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition shadow-lg text-lg font-medium">
              Daftar Sebagai Mahasiswa
            </button>
            <button className="px-8 py-4 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition shadow-lg text-lg font-medium">
              Daftar Sebagai Pasien
            </button>
          </div>
        </div>
      </section>

     {/*membuat FAQ Section*/}
      <section className="fpy-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">FAQ</h2>
          <p className="text-xl text-gray-600">Bagian ini akan segera hadir. Nantikan informasi lebih lanjut!</p>
        </div>

            

      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Heart className="w-8 h-8 text-blue-400" />
                <span className="text-xl font-bold">PasienGigi.id</span>
              </div>
              <p className="text-gray-400">
                Menghubungkan mahasiswa FKG dengan pasien untuk masa depan kesehatan gigi Indonesia yang lebih baik.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Platform</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition">Tentang Kami</a></li>
                <li><a href="#" className="hover:text-white transition">Cara Kerja</a></li>
                <li><a href="#" className="hover:text-white transition">Fitur</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Bantuan</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition">FAQ</a></li>
                <li><a href="#" className="hover:text-white transition">Kontak</a></li>
                <li><a href="#" className="hover:text-white transition">Syarat & Ketentuan</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Kontak</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Email: info@pasiengigi.id</li>
                <li>WhatsApp: +62 812-3456-7890</li>
                <li>Instagram: @pasiengigi.id</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 PasienGigi.id. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}