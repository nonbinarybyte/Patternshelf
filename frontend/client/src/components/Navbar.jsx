import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="bg-white shadow p-4 flex justify-between items-center">
      <Link to="/" className="text-xl font-bold text-indigo-600">
        Patternshelf
      </Link>
      <div className="space-x-4">
        <Link to="/login" className="text-gray-700 hover:text-indigo-500">Login</Link>
        <Link to="/register" className="text-gray-700 hover:text-indigo-500">Register</Link>
        <Link to="/dashboard" className="text-gray-700 hover:text-indigo-500">Dashboard</Link>
      </div>
    </nav>
  )
}
