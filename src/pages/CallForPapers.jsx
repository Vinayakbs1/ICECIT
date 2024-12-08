import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  NetworkIcon, 
  PaperclipIcon, 
  CodeIcon, 
  RadarIcon, 
  AwardIcon, 
  GlobeIcon 
} from 'lucide-react';

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

const CallForPapers = () => {
  const [activeTrack, setActiveTrack] = useState(null);

  const trackDetails = [
    "Wireless Communication",
    "AI and ML applications",
    "Secure Communication",
    "Signal Processing",
    "IoT/Industry 4.0",
    "Autonomous Vehicles",
    "Power Systems, Control and Electric Vehicles",
    "Smart Sensors and Process Automation",
    "VLSI Design",
    "Materials"
  ];

  const trackIcons = [
    NetworkIcon, 
    CodeIcon, 
    RadarIcon, 
    PaperclipIcon, 
    GlobeIcon, 
    AwardIcon,
    NetworkIcon, 
    CodeIcon, 
    RadarIcon, 
    PaperclipIcon
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100 py-16 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 relative z-10">
        {/* Conference Introduction */}
        <motion.div 
          className="bg-white rounded-2xl shadow-xl p-10 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{ background: colorPalette.lightBackground }}
          whileHover={{
            scale: 1.02,
            boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)"
          }}
        >
          <h1 
            className="text-4xl font-bold text-center mb-6"
            style={{ color: colorPalette.primary }}
          >
            Call For Papers
          </h1>
          <p 
            className="text-lg text-center"
            style={{ color: colorPalette.accent2 }}
          >
            3rd International Conference on Smart Systems for Applications in Electrical Sciences (ICSSES) will be organized on 7th and 8th March, 2025 at Siddaganga Institute of Technology, Tumkur, Karnataka. The main objective of the conference is to decipher advances and innovations in the field of 6G, IoT, Automation and Automotive Electronics. 
          </p>
        </motion.div>

        {/* Paper Submission Guidelines */}
        <motion.div 
          className="bg-white rounded-2xl shadow-xl p-10 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{ background: colorPalette.lightBackground }}
          whileHover={{
            scale: 1.02,
            boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)"
          }}
        >
          <h2 
            className="text-3xl font-bold text-center mb-6"
            style={{ color: colorPalette.primary }}
          >
            Paper Submission
          </h2>
          <p 
            className="text-lg text-center"
            style={{ color: colorPalette.accent2 }}
          >
            Papers intended for ICSSES - 2025 should be up to six pages of text. Paper submission must conform to the format defined in the paper presentation guidelines on the conference webpage. Papers must be submitted via online paper submission system.
          </p>
        </motion.div>

        {/* Track Details with Interactive Elements */}
        <motion.div 
          className="bg-white rounded-2xl shadow-xl p-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          style={{ background: colorPalette.lightBackground }}
        >
          <h2 
            className="text-3xl font-bold text-center mb-8"
            style={{ color: colorPalette.primary }}
          >
            Track Details
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {trackDetails.map((track, index) => (
              <motion.div 
                key={index}
                className="p-4 rounded-lg text-lg font-semibold text-center transform transition duration-300 flex items-center justify-center space-x-3 border"
                style={{ 
                  color: colorPalette.accent2,
                  borderColor: colorPalette.secondary
                }}
                whileHover={{
                  backgroundColor: colorPalette.secondary,
                  color: colorPalette.white,
                  scale: 1.05
                }}
              >
                {React.createElement(trackIcons[index], { 
                  className: "w-6 h-6 mr-2 inline-block",
                  style: { color: colorPalette.primary }
                })}
                {track}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default CallForPapers;