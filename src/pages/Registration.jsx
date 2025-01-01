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
          className="bg-white shadow-xl rounded-2xl p-6 sm:p-8 transform hover:shadow-2xl transition-all duration-300"
          style={{ background: colorPalette.lightBackground }}
        >
          <h2 
            className="text-4xl font-bold text-center mb-12"
            style={{ color: '#FF8C00' }} // Orange color for the heading
          >
            Registration Fee for Participants
          </h2>
          
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white">
              <thead>
                <tr>
                  <th className="border border-gray-300 p-4"></th>
                  <th className="border border-gray-300 p-4"></th>
                  <th className="border border-gray-300 p-4 font-bold text-center">IEEE Member</th>
                  <th className="border border-gray-300 p-4 font-bold text-center">Non IEEE Member</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td rowSpan="3" className="border border-gray-300 p-4 font-bold align-middle">Indian Authors</td>
                  <td className="border border-gray-300 p-4">Students & Research Scholars</td>
                  <td className="border border-gray-300 p-4 text-center">Rs. 4000</td>
                  <td className="border border-gray-300 p-4 text-center">Rs. 6000</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-4">Faculty</td>
                  <td className="border border-gray-300 p-4 text-center">Rs. 5000</td>
                  <td className="border border-gray-300 p-4 text-center">Rs. 7500</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-4">Industry Participants</td>
                  <td className="border border-gray-300 p-4 text-center">Rs. 6500</td>
                  <td className="border border-gray-300 p-4 text-center">Rs. 9500</td>
                </tr>
                <tr>
                  <td colSpan="2" className="border border-gray-300 p-4 font-bold">Foreign Authors</td>
                  <td className="border border-gray-300 p-4 text-center">80 USD</td>
                  <td className="border border-gray-300 p-4 text-center">120 USD</td>
                </tr>
                <tr>
                  <td colSpan="2" className="border border-gray-300 p-4 font-bold">Attendees</td>
                  <td colSpan="2" className="border border-gray-300 p-4 text-center">Rs. 2000</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Additional Registration Information */}
          <div className="mt-12 space-y-6 text-lg">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-2xl font-semibold mb-4" style={{ color: colorPalette.primary }}>Important Notes:</h3>
              <ul className="list-disc pl-6 space-y-3" style={{ color: colorPalette.accent2 }}>
                <li>Registration fee includes conference kit, lunch, and refreshments during the conference days.</li>
                <li>At least one author of each accepted paper must register for the conference.</li>
                <li>Each registration covers only one paper.</li>
                <li>For additional papers, separate registration is required.</li>
                <li>IEEE Member registration requires valid IEEE Membership number.</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-2xl font-semibold mb-4" style={{ color: colorPalette.primary }}>Payment Details:</h3>
              <div className="space-y-3" style={{ color: colorPalette.accent2 }}>
                <p><strong>Account Name:</strong> ICECIT 2025</p>
                <p><strong>Bank Name:</strong> State Bank of India</p>
                <p><strong>Branch:</strong> SIT Campus Branch, Tumakuru</p>
                <p><strong>Account Type:</strong> Current Account</p>
                <p><strong>Account Number:</strong> XXXX XXXX XXXX</p>
                <p><strong>IFSC Code:</strong> XXXX0XXXXXX</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Registration;
