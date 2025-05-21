import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="bg-white shadow p-4 flex justify-between items-center">
      <Link to="/" className="text-xl instrument-serif-regular-italic text-rose-500">
        Patternshelf
      </Link>
      <div className="space-x-4">
        <Link to="/login" className="montserrat text-gray-700 hover:text-indigo-500">Login</Link>
        <Link to="/register" className="montserrat text-gray-700 hover:text-indigo-500">Register</Link>
        <Link to="/dashboard" className="montserrat text-gray-700 hover:text-indigo-500">Dashboard</Link>
      </div>
    </nav>
  )
}
