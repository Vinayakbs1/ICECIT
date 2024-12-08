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
    <div className="relative min-h-screen bg-gradient-to-b from-blue-50 to-blue-100 py-16 overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 relative z-10">
        {/* Registration Title */}
        <div className="bg-white rounded-2xl shadow-xl p-10 mb-16" style={{ background: colorPalette.lightBackground }}>
          <h2 className="text-4xl font-bold text-center mb-6" style={{ color: colorPalette.primary }}>
            Registration Fee for Participants
          </h2>
          <div className="overflow-x-auto">
            <table className="table-auto border-collapse border border-gray-300 w-full text-left bg-white shadow-2xl rounded-lg">
              <thead className="bg-indigo-100">
                <tr>
                  <th className="border border-gray-300 px-6 py-3 font-semibold text-lg text-indigo-800"> </th>
                  <th className="border border-gray-300 px-6 py-3 font-semibold text-lg text-indigo-800">IEEE Member</th>
                  <th className="border border-gray-300 px-6 py-3 font-semibold text-lg text-indigo-800">Non IEEE Member</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-6 py-3 font-semibold text-indigo-800">Indian Authors</td>
                  <td colSpan="2" className="border border-gray-300 px-6 py-3"></td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-6 py-3 pl-6">Students & Research Scholars</td>
                  <td className="border border-gray-300 px-6 py-3 text-indigo-700">Rs. 4000</td>
                  <td className="border border-gray-300 px-6 py-3 text-indigo-700">Rs. 6000</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-6 py-3 pl-6">Faculty</td>
                  <td className="border border-gray-300 px-6 py-3 text-indigo-700">Rs. 5000</td>
                  <td className="border border-gray-300 px-6 py-3 text-indigo-700">Rs. 7500</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-6 py-3 pl-6">Industry Participants</td>
                  <td className="border border-gray-300 px-6 py-3 text-indigo-700">Rs. 6500</td>
                  <td className="border border-gray-300 px-6 py-3 text-indigo-700">Rs. 9500</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-6 py-3 font-semibold text-indigo-800">Foreign Authors</td>
                  <td className="border border-gray-300 px-6 py-3 text-indigo-700">80 USD</td>
                  <td className="border border-gray-300 px-6 py-3 text-indigo-700">120 USD</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-6 py-3 font-semibold text-indigo-800">Attendees</td>
                  <td colSpan="2" className="border border-gray-300 px-6 py-3 text-indigo-700">Rs. 2000</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Payment Instructions Section */}
        <div className="bg-white rounded-2xl shadow-xl p-10" style={{ background: colorPalette.lightBackground }}>
          <h3 className="text-3xl font-semibold text-center mb-6" style={{ color: colorPalette.primary }}>
            Payment Instructions
          </h3>
          <p className="text-lg text-center" style={{ color: colorPalette.accent2 }}>
            Payments can be made via online bank transfer, credit/debit card, or through the provided online payment link. Please make sure to include your paper ID in the payment details.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Registration;
