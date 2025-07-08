// src/components/Navbar.tsx


const Navbar = () => {
    return (
        <nav className="bg-purple-900 text-white px-6 py-4 flex items-center justify-between">
            <div className="flex items-center space-x-3">
                <img src="/logo.png" alt="Logo" className="w-10 h-10" />
                <span className="text-xl font-bold">Shah VA</span>
            </div>

            <ul className="flex space-x-6">
                <li><a href="#home" className="hover:text-yellow-400">Home</a></li>
                <li><a href="#about" className="hover:text-yellow-400">About</a></li>
                <li><a href="#services" className="hover:text-yellow-400">Services</a></li>
                <li><a href="#portfolio" className="hover:text-purple-600 transition">Portfolio</a></li>
                <li><a href="#contact" className="hover:text-yellow-400">Contact</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;

