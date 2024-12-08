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

function Registration() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-b from-blue-50 to-blue-100 py-16 overflow-hidden">
      <div className="w-full max-w-4xl p-6 sm:p-8 md:p-12">
        <div 
          className="bg-white shadow-xl rounded-2xl p-6 sm:p-8 transform hover:shadow-2xl hover:scale-105 transition-all duration-300"
          style={{ background: colorPalette.lightBackground, borderColor: colorPalette.secondary, borderWidth: '2px', borderStyle: 'solid' }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8" style={{ color: colorPalette.primary }}>
            Registration Fee for Participants
          </h2>
          
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr style={{ backgroundColor: colorPalette.background }}>
                  <th className="border-2 px-4 py-3 text-left font-bold" style={{ borderColor: colorPalette.secondary, color: colorPalette.primary }}></th>
                  <th className="border-2 px-4 py-3 text-left font-bold" style={{ borderColor: colorPalette.secondary, color: colorPalette.primary }}>IEEE Member</th>
                  <th className="border-2 px-4 py-3 text-left font-bold" style={{ borderColor: colorPalette.secondary, color: colorPalette.primary }}>Non IEEE Member</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colSpan="3" className="border-2 px-4 py-3 font-semibold" style={{ borderColor: colorPalette.secondary, color: colorPalette.primary, backgroundColor: colorPalette.background }}>
                    Indian Authors
                  </td>
                </tr>
                <tr>
                  <td className="border-2 px-4 py-3" style={{ borderColor: colorPalette.secondary, color: colorPalette.accent2 }}>Students & Research Scholars</td>
                  <td className="border-2 px-4 py-3" style={{ borderColor: colorPalette.secondary, color: colorPalette.accent2 }}>Rs. 4000</td>
                  <td className="border-2 px-4 py-3" style={{ borderColor: colorPalette.secondary, color: colorPalette.accent2 }}>Rs. 6000</td>
                </tr>
                <tr style={{ backgroundColor: colorPalette.background }}>
                  <td className="border-2 px-4 py-3" style={{ borderColor: colorPalette.secondary, color: colorPalette.accent2 }}>Faculty</td>
                  <td className="border-2 px-4 py-3" style={{ borderColor: colorPalette.secondary, color: colorPalette.accent2 }}>Rs. 5000</td>
                  <td className="border-2 px-4 py-3" style={{ borderColor: colorPalette.secondary, color: colorPalette.accent2 }}>Rs. 7500</td>
                </tr>
                <tr>
                  <td className="border-2 px-4 py-3" style={{ borderColor: colorPalette.secondary, color: colorPalette.accent2 }}>Industry Participants</td>
                  <td className="border-2 px-4 py-3" style={{ borderColor: colorPalette.secondary, color: colorPalette.accent2 }}>Rs. 6500</td>
                  <td className="border-2 px-4 py-3" style={{ borderColor: colorPalette.secondary, color: colorPalette.accent2 }}>Rs. 9500</td>
                </tr>
                <tr style={{ backgroundColor: colorPalette.background }}>
                  <td className="border-2 px-4 py-3" style={{ borderColor: colorPalette.secondary, color: colorPalette.accent2 }}>Foreign Authors</td>
                  <td className="border-2 px-4 py-3" style={{ borderColor: colorPalette.secondary, color: colorPalette.accent2 }}>80 USD</td>
                  <td className="border-2 px-4 py-3" style={{ borderColor: colorPalette.secondary, color: colorPalette.accent2 }}>120 USD</td>
                </tr>
                <tr>
                  <td className="border-2 px-4 py-3" style={{ borderColor: colorPalette.secondary, color: colorPalette.accent2 }}>Attendees</td>
                  <td colSpan="2" className="border-2 px-4 py-3 text-center" style={{ borderColor: colorPalette.secondary, color: colorPalette.accent2 }}>Rs. 2000</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Registration;
