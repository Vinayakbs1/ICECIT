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

function AboutUs() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-b from-blue-50 to-blue-100 py-16 overflow-hidden">
      <div className="max-w-6xl w-full bg-white p-6 sm:p-8 md:p-12 rounded-2xl shadow-xl hover:shadow-2xl hover:scale-105 transition-transform transform duration-300" style={{ background: colorPalette.lightBackground }}>
        {/* Logo Section */}
        <div className="flex justify-center mb-6">
          <img
            className="w-32 h-32 object-contain"
            src="http://icsses.sit.ac.in/assets/sit%20logo-CEVvusQH.png"
            alt="logo"
          />
        </div>
        
        {/* About Us Text */}
        <div className="text-center">
          <p className="italic font-semibold text-lg sm:text-xl text-gray-800" style={{ color: colorPalette.accent2 }}>
            Siddaganga Institute of Technology, Tumkur, popularly known as SIT, was established in the year 1963. It was founded and nurtured by His Holiness Dr. Sree Sree Shivakumara Swamiji. The present president of Sree Siddaganga Education Society, Sree Sree Siddalinga Swamiji, is providing directional guidelines. The college is an autonomous institution affiliated to Visvesvaraya Technological University (VTU), Belagavi, Karnataka, approved by AICTE, New Delhi and Programmes accredited by NBA, New Delhi. The institute is accredited by NAAC with ‘A++’ grade and awarded Diamond College rating by QS I-Gauge. At present, the institute offers 14 undergraduate programmes, 9 post-graduate programmes, and 15 research centers recognized by VTU to offer Ph.D. and M.Sc. (Engg.) by research. The institute has well-qualified, experienced, and competent faculty members. SIT is ranked one among the top hundred institutions in India by the National Institute of Ranking Framework since 2016.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
