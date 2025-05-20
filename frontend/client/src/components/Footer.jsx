export default function Footer() {
  return (
    <footer className="bg-gray-100 border-t text-sm text-gray-600">
      <div className="max-w-6xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* Column 1: Brand */}
        <div className="text-center md:text-left">
          <h2 className="text-lg font-semibold text-indigo-600 mb-1">Patternshelf</h2>
          <p>&copy; {new Date().getFullYear()} Patternshelf Inc.</p>
          <p>All rights reserved.</p>
        </div>

        {/* Column 2: Navigation */}
        <div className="text-center">
          <h3 className="font-semibold mb-2">Navigation</h3>
          <ul className="space-y-1">
            <li><a href="/" className="hover:underline">Home</a></li>
            <li><a href="/dashboard" className="hover:underline">Dashboard</a></li>
            <li><a href="/login" className="hover:underline">Login</a></li>
            <li><a href="/register" className="hover:underline">Register</a></li>
          </ul>
        </div>

        {/* Column 3: Social Media */}
        <div className="text-center md:text-right">
          <h3 className="font-semibold mb-2">Follow Us</h3>
          <div className="flex justify-center md:justify-end space-x-4 text-xl">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-500">
              <i className="bi bi-twitter"></i>
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-500">
              <i className="bi bi-github"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-500">
              <i className="bi bi-instagram"></i>
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
