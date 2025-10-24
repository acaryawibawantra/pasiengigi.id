'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function ComplaintDetailPage({ params }) {
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
  const [complaint, setComplaint] = useState(null);

  const showToast = (message, type = 'success') => {
    setToast({ visible: true, type, message });
    setTimeout(() => setToast(prev => ({ ...prev, visible: false })), 2000);
  };

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setComplaint({
        id: params.id,
        title: 'Keluhan Nyeri Gigi',
        category: 'Keluhan',
        status: 'Aktif',
        description:
          'Nyeri pada gigi geraham kanan saat mengunyah. Sensitif terhadap dingin.',
        location: 'Surabaya',
        createdAt: '15 Januari 2024',
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

  const handleDelete = () => {
    if (confirm('Apakah Anda yakin ingin menghapus keluhan ini?')) {
      showToast('Keluhan berhasil dihapus', 'success');
      setTimeout(() => router.back(), 800);
    }
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

        <h1 className="text-2xl font-semibold mb-2">{complaint.title}</h1>
        <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
          <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded">{complaint.category}</span>
          <span className="px-2 py-1 bg-green-100 text-green-700 rounded">{complaint.status}</span>
          <span>• {complaint.location}</span>
          <span>• {complaint.createdAt}</span>
        </div>

        <h2 className="font-medium mb-1">Deskripsi</h2>
        <p className="text-gray-700 mb-4">{complaint.description}</p>

        {complaint.notes && (
          <>
            <h2 className="font-medium mb-1">Catatan</h2>
            <p className="text-gray-700 mb-6">{complaint.notes}</p>
          </>
        )}

        <div className="flex gap-3">
          <button
            className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700"
            onClick={() => router.push(`/dashboard/pasien/complaints/${complaint.id}/edit`)}
          >
            Edit
          </button>
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