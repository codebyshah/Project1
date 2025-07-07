// src/components/About.tsx
const About = () => {
    return (
        <section id="about" className="bg-white text-gray-800 py-20 px-6 max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-10 items-center">
                {/* Image */}
                <div className="flex justify-center">
                    <img
                        src="/Images/Shah.png"
                        alt="Shah - Virtual Assistant"
                        className="w-72 h-72 object-cover rounded-lg shadow-lg"
                    />
                </div>

                {/* Text Content */}
                <div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-purple-700">About Me</h2>
                    <p className="text-lg mb-4">
                        I'm <span className="font-semibold">Shah</span>, a dedicated Virtual Assistant with a passion for technology, organization, and helping clients succeed.
                    </p>
                    <p className="text-gray-600">
                        I specialize in task management, communication, and productivity tools. Whether you're a startup or solo entrepreneur, I can help you stay focused and grow your business.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;
