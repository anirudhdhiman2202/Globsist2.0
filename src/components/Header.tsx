export default function Header() {
  return (
    <header className="fixed w-full top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <span className="text-xl font-bold text-gray-900">Globsist</span>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a
              href="#services"
              className="text-gray-600 hover:text-red-600 transition-colors"
            >
              Services
            </a>
            <a
              href="#pricing"
              className="text-gray-600 hover:text-red-600 transition-colors"
            >
              Pricing
            </a>
            <a
              href="#about"
              className="text-gray-600 hover:text-red-600 transition-colors"
            >
              About
            </a>
            <a
              href="#contact"
              className="text-gray-600 hover:text-red-600 transition-colors"
            >
              Contact
            </a>
          </nav>
          <button className="bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700 transition-colors">
            Get Started
          </button>
        </div>
      </div>
    </header>
  );
}
