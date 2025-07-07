import React from 'react';

const services = [
    {
        title: 'Admin Support',
        description: 'Calendar management, appointment booking, and file organization to keep your business running smoothly.',
    },
    {
        title: 'Email Management',
        description: 'Inbox cleanup, filtering important messages, and writing professional responses.',
    },
    {
        title: 'Data Entry',
        description: 'Accurate data entry, spreadsheet creation, and CRM updates.',
    },
    {
        title: 'Lead Generation',
        description: 'Find potential clients using tools like LinkedIn, Apollo.io, and web research.',
    },
];

const Services = () => {
    return (
        <section id="services" className="bg-white py-16 px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-purple-700 mb-10">My Services</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                {services.map((service, index) => (
                    <div
                        key={index}
                        className="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-xl transition"
                    >
                        <h3 className="text-xl font-semibold text-purple-800 mb-2">{service.title}</h3>
                        <p className="text-gray-600 text-sm">{service.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Services;
