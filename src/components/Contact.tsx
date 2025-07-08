// src/components/Contact.tsx
const Contact = () => {
    return (
        <section id="contact" className="bg-white py-20 px-6 text-center text-gray-800">
            <h2 className="text-3xl md:text-4xl font-bold text-purple-700 mb-6">Contact Me</h2>

            <p className="max-w-xl mx-auto mb-8 text-gray-600">
                Have a task, project, or opportunity you'd like to discuss? Feel free to get in touch using the form below.
            </p>

            <form
                action="mailto:your-email@example.com"
                method="POST"
                encType="text/plain"
                className="max-w-2xl mx-auto grid grid-cols-1 gap-4"
            >
                <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    required
                    className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                />

                <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    required
                    className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                />

                <textarea
                    name="message"
                    placeholder="Your Message"
                    rows={5}
                    required
                    className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                ></textarea>

                <button
                    type="submit"
                    className="bg-purple-700 text-white px-6 py-3 rounded-md hover:bg-purple-800 transition-all"
                >
                    Send Message
                </button>
            </form>
        </section>
    );
};

export default Contact;
