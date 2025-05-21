import { useState } from 'react';
import { register } from '../services/api';

export default function Register() {
  const [form, setForm] = useState({ name: '', email: '', password: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await register(form);
    if (res.token) {
      localStorage.setItem('token', res.token);
      window.location.href = '/dashboard';
    } else {
      alert(res.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 max-w-sm mx-auto">
      <h2 className="text-xl mb-4 instrument-serif-regular">Register</h2>
      <input type="text" placeholder="Name" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} className="mb-2 w-full p-2 border" required />
      <input type="email" placeholder="Email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} className="mb-2 w-full p-2 border" required />
      <input type="password" placeholder="Password" value={form.password} onChange={e => setForm({ ...form, password: e.target.value })} className="mb-4 w-full p-2 border" required />
      <button className="bg-pink-400 montserrat text-white px-4 py-2 rounded">Register</button>
    </form>
  );
}
