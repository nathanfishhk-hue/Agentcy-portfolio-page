export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-teal">
      <div className="container">
        <nav className="flex items-center justify-between py-4">
          <a href="/" className="text-2xl font-bold text-teal">
            Agentcy
          </a>
          <div className="flex items-center gap-6">
            <a href="#home" className="text-gray-300 hover:text-teal transition-all">Home</a>
            <a href="#projects" className="text-gray-300 hover:text-teal transition-all">Work</a>
            <a href="#services" className="text-gray-300 hover:text-teal transition-all">Services</a>
            <a href="#contact" className="text-gray-300 hover:text-teal transition-all">Contact</a>
          </div>
        </nav>
      </div>
    </header>
  );
}