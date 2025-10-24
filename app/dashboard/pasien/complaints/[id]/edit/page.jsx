'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function EditComplaintPage({ params }) {
  const router = useRouter();
  const [form, setForm] = useState({
    title: '',
    category: 'Keluhan',
    description: '',
    location: '',
    status: 'Aktif',
    notes: '',
  });
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [toast, setToast] = useState({ visible: false, type: 'success', message: '' });

  const showToast = (message, type = 'success') => {
    setToast({ visible: true, type, message });
    setTimeout(() => setToast(prev => ({ ...prev, visible: false })), 2000);
  };

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setForm({
        title: 'Keluhan Nyeri Gigi',
        category: 'Keluhan',
        description:
          'Nyeri pada gigi geraham kanan saat mengunyah. Sensitif terhadap dingin.',
        location: 'Surabaya',
        status: 'Aktif',
        notes: 'Belum pernah periksa, ingin konsultasi awal.',
      });
      setLoading(false);
    }, 700);
    return () => clearTimeout(timer);
  }, [params.id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    setTimeout(() => {
      setSaving(false);
      showToast('Perubahan keluhan disimpan', 'success');
      // router.push(`/dashboard/pasien/complaints/${params.id}`);
    }, 800);
  };

  const handleCancel = () => {
    showToast('Perubahan dibatalkan', 'success');
    router.back();
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 py-8 px-5">
        <div className="max-w-3xl mx-auto">
          <div className="h-8 w-64 bg-gray-200 rounded mb-6 animate-pulse" />
          <div className="space-y-3">
            <div className="h-4 w-full bg-gray-200 rounded animate-pulse" />
            <div className="h-4 w-5/6 bg-gray-200 rounded animate-pulse" />
            <div className="h-4 w-4/6 bg-gray-200 rounded animate-pulse" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-5">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow p-6">
        <button className="text-blue-600 hover:underline mb-4" onClick={() => router.back()}>
          ← Kembali
        </button>

        <h1 className="text-2xl font-semibold mb-4">Edit Keluhan Pasien</h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Judul</label>
            <input
              type="text"
              name="title"
              value={form.title}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2"
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Kategori</label>
              <select
                name="category"
                value={form.category}
                onChange={handleChange}
                className="w-full border rounded px-3 py-2"
              >
                <option>Keluhan</option>
                <option>Konsultasi</option>
                <option>Informasi</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Status</label>
              <select
                name="status"
                value={form.status}
                onChange={handleChange}
                className="w-full border rounded px-3 py-2"
              >
                <option>Aktif</option>
                <option>Nonaktif</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Lokasi</label>
            <input
              type="text"
              name="location"
              value={form.location}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Deskripsi</label>
            <textarea
              name="description"
              value={form.description}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2"
              rows={5}
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Catatan</label>
            <textarea
              name="notes"
              value={form.notes}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2"
              rows={3}
            />
          </div>

          <div className="flex gap-3">
            <button
              type="submit"
              disabled={saving}
              className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50"
            >
              {saving ? 'Menyimpan...' : 'Simpan'}
            </button>
            <button
              type="button"
              onClick={handleCancel}
              className="px-4 py-2 rounded bg-gray-200 text-gray-800 hover:bg-gray-300"
            >
              Batal
            </button>
          </div>
        </form>
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