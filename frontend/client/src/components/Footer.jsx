export default function Footer() {
  return (
    <footer className="bg-stone-100 border-t text-sm text-gray-600">
      <div className="max-w-6xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* Column 1: Brand */}
        <div className="text-center md:text-left">
          <h2 className="text-lg lexend-deca text-rose-500 mb-1">Patternshelf</h2>
          <p className="lexend-deca">&copy; {new Date().getFullYear()} Patternshelf Inc.</p>
          <p className="lexend-deca">All rights reserved.</p>
        </div>

        {/* Column 2: Navigation */}
        <div className="text-center">
          <h3 className="lexend-deca mb-2">Navigation</h3>
          <ul className="space-y-1">
            <li><a href="/" className="instrument-serif-regular hover:underline">Home</a></li>
            <li><a href="/privacy" className="instrument-serif-regular hover:underline">Privacy</a></li>
            <li><a href="/terms" className="instrument-serif-regular hover:underline">Terms Of Service</a></li>
            <li><a href="/maintain" className="instrument-serif-regular hover:underline">Help Keep Us Up</a></li>
          </ul>
        </div>

        {/* Column 3: Social Media */}
        <div className="text-center md:text-right">
          <h3 className="lexend-deca mb-2">Follow Us</h3>
          <div className="flex justify-center md:justify-end space-x-4 text-xl">
            <a href="https://x.com/@nonbiinarybyte" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-500">
              <i className="text-rose-700 bi bi-twitter"></i>
            </a>
            <a href="https://github.com/nonbinarybyte/Patternshelf" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-500">
              <i className="text-rose-700 bi bi-github"></i>
            </a>
            <a href="https://instagram.com/the_patternshelf" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-500">
              <i className="text-rose-700 bi bi-instagram"></i>
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
