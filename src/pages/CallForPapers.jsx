import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
<<<<<<< HEAD
import TrackModal from '../components/TrackModal';
=======
>>>>>>> 6dcc9e7d68acd484d919d660f9fd180f69769ebf
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
<<<<<<< HEAD
  const [selectedTrack, setSelectedTrack] = useState(null);

  const tracks = [
    { title: "Track 1: AI & ML", topics: ["Artificial Intelligence advancements", "Deep Learning and Neural Networks", "Natural Language Processing", "AI-driven Robotics", "Ethical AI and Responsible AI", "AI in Healthcare and Medicine", "Generative AI Applications"] },
    { title: "Track 2: Computing", topics: ["Distributed and Cloud Computing", "Quantum Computing", "High Performance Computing", "Edge and Fog Computing", "Software Engineering in Emerging Systems", "Green Computing Technologies", "Computational Biology"] },
    { title: "Track 3: Data Analytics", topics: ["Big Data Management", "Predictive Analytics", "Data Visualization", "Business Intelligence Systems", "Real-time Data Processing", "Data Warehousing", "Anomaly Detection in Big Data"] },
    { title: "Track 4: IoT", topics: ["IoT Architecture and Protocols", "Smart Home and Smart City Applications", "Industrial IoT and Automation", "Wearable Devices and Healthcare IoT", "IoT Security and Privacy", "IoT in Agriculture", "Energy-Efficient IoT Systems"] },
    { title: "Track 5: Networks", topics: ["Next-Generation Network Technologies", "5G and Beyond", "Software-Defined Networking", "Network Virtualization", "Wireless and Ad Hoc Networks", "Optical Communication Networks", "Network Traffic Analysis and Optimization"] },
    { title: "Track 6: Security", topics: ["Cybersecurity Threats and Solutions", "Blockchain and Cryptography", "Secure Systems Design", "Network Security Protocols", "Data Privacy and Protection", "AI in Cybersecurity", "Ethical Hacking and Penetration Testing"] },
=======
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
>>>>>>> 6dcc9e7d68acd484d919d660f9fd180f69769ebf
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
<<<<<<< HEAD
      <TrackModal
        isOpen={selectedTrack !== null}
        onClose={() => setSelectedTrack(null)}
        track={selectedTrack || tracks[0]}
      />
=======
>>>>>>> 6dcc9e7d68acd484d919d660f9fd180f69769ebf
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
<<<<<<< HEAD
            {tracks.map((track, index) => (
              <motion.div 
                key={index}
                className="p-4 rounded-lg text-lg font-semibold text-center transform transition duration-300 flex items-center justify-center space-x-3 border cursor-pointer"
=======
            {trackDetails.map((track, index) => (
              <motion.div 
                key={index}
                className="p-4 rounded-lg text-lg font-semibold text-center transform transition duration-300 flex items-center justify-center space-x-3 border"
>>>>>>> 6dcc9e7d68acd484d919d660f9fd180f69769ebf
                style={{ 
                  color: colorPalette.accent2,
                  borderColor: colorPalette.secondary
                }}
                whileHover={{
                  backgroundColor: colorPalette.secondary,
                  color: colorPalette.white,
                  scale: 1.05
                }}
<<<<<<< HEAD
                onClick={() => setSelectedTrack(track)}
              >
                {React.createElement(trackIcons[index % trackIcons.length], { 
                  className: "w-6 h-6 mr-2 inline-block",
                  style: { color: colorPalette.primary }
                })}
                {track.title}
=======
              >
                {React.createElement(trackIcons[index], { 
                  className: "w-6 h-6 mr-2 inline-block",
                  style: { color: colorPalette.primary }
                })}
                {track}
>>>>>>> 6dcc9e7d68acd484d919d660f9fd180f69769ebf
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default CallForPapers;