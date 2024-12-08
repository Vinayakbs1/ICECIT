import React from 'react';

const colorPalette = {
  primary: '#1A5F7A',
  secondary: '#159895',
  accent1: '#57C5B6',
  accent2: '#0E2954',
  accent3: '#2C7DA0',
  background: '#F0F9FF',
  white: '#FFFFFF',
  lightBackground: '#E6F7FF',
  gradient: "linear-gradient(135deg, #1A5F7A, #159895)"
};

function ContactUs() {
  const contacts = [
    {
      name: "Dr. Vinayaka K. U.",
      title: "Assistant Professor",
      department: "Dept. of EEE",
      location: "SIT, Tumkur",
      phone: "+91 9538539591",
      email: "icsses@sit.ac.in",
    },
    {
      name: "Dr. Madhu B. M.",
      title: "Assistant Professor",
      department: "Dept. of EEE",
      location: "SIT, Tumkur",
      phone: "+91 9986163831",
      email: "madhubm@sit.ac.in",
    },
  ];

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-b from-blue-50 to-blue-100 py-16 overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 sm:p-8 md:p-12 relative z-10">
        {contacts.map((contact, index) => (
          <div
            key={index}
            className="bg-white shadow-xl rounded-2xl p-6 sm:p-8 w-full max-w-xs sm:max-w-sm md:max-w-md text-center transition-transform transform hover:shadow-2xl hover:scale-105 duration-300"
            style={{
              background: colorPalette.lightBackground,
              borderColor: colorPalette.secondary,
              borderWidth: '2px',
              borderStyle: 'solid'
            }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4" style={{ color: colorPalette.primary }}>
              {contact.name}
            </h2>
            <p className="text-lg sm:text-xl" style={{ color: colorPalette.accent2 }}>
              {contact.title}
            </p>
            <p className="text-lg sm:text-xl" style={{ color: colorPalette.accent2 }}>
              {contact.department}
            </p>
            <p className="text-lg sm:text-xl" style={{ color: colorPalette.accent2 }}>
              {contact.location}
            </p>
            <p className="text-blue-500 font-semibold text-lg mt-4">
              <a href={`tel:${contact.phone}`} style={{ color: colorPalette.secondary }}>
                {contact.phone}
              </a>
            </p>
            <p className="text-blue-500 font-semibold text-lg">
              <a href={`mailto:${contact.email}`} style={{ color: colorPalette.secondary }}>
                {contact.email}
              </a>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ContactUs;
