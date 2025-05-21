// client/src/pages/dashboard/Settings.jsx
import { useState } from 'react';

export default function Settings() {
  const [loading, setLoading] = useState(false);

  const connectStripe = async () => {
    setLoading(true);
    const res = await fetch('/api/stripe/create-account-link', {
      method: 'POST',
    });
    const data = await res.json();
    window.location.href = data.url;
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Stripe Setup</h2>
      <button
        onClick={connectStripe}
        className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700"
        disabled={loading}
      >
        {loading ? 'Redirecting…' : 'Connect Stripe Account'}
      </button>
    </div>
  );
}
