import { useState } from 'react';
import { login } from '../services/api';

export default function Login() {
  const [form, setForm] = useState({ email: '', password: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await login(form);
    if (res.token) {
      localStorage.setItem('token', res.token);
      window.location.href = '/dashboard';
    } else {
      alert(res.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 max-w-sm mx-auto">
      <h2 className="text-xl mb-4 instrument-serif-regular">Login</h2>
      <input type="email" placeholder="Email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} className="mb-2 w-full p-2 border" required />
      <input type="password" placeholder="Password" value={form.password} onChange={e => setForm({ ...form, password: e.target.value })} className="mb-4 w-full p-2 border" required />
      <button className="montserrat bg-pink-400 text-white px-4 py-2 rounded">Login</button>
    </form>
  );
}
