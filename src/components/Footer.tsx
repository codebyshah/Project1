// src/components/Footer.tsx
const Footer = () => {
    return (
        <footer className="bg-purple-700 text-white py-6 mt-10">
            <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
                <p className="text-sm">
                    © {new Date().getFullYear()} Shah Paro — Virtual Assistant Portfolio
                </p>
                <div className="flex gap-4 mt-4 md:mt-0">
                    <a href="mailto:your-email@example.com" className="hover:underline">
                        Email
                    </a>
                    <a href="https://www.linkedin.com/in/your-link" target="_blank" rel="noreferrer" className="hover:underline">
                        LinkedIn
                    </a>
                    <a href="#services" className="hover:underline">
                        Services
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
