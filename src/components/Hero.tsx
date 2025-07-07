const Hero = () => {
    return (
        <div className="relative h-screen w-full overflow-hidden">
            {/* Background Video */}
            <video
                autoPlay
                muted
                loop
                playsInline
                className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
            >
                <source src="/Videos/va-bg.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            {/* Overlay (optional for better contrast) */}
            <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-0" />

            {/* Centered Content */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
                <h1 className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-lg mb-4">
                    Hi, I’m Shah 👋
                </h1>
                <p className="text-lg md:text-xl text-white max-w-2xl drop-shadow-md mb-6">
                    A passionate <span className="text-purple-300 font-bold">Virtual Assistant</span> helping businesses grow through efficient task management, content creation, and more.
                </p>
                <a
                    href="#contact"
                    className="bg-purple-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-purple-700 transition duration-300"
                >
                    Hire Me
                </a>
            </div>
        </div>
    );
};

export default Hero;
