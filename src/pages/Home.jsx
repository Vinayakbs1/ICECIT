// Home.jsx
import React from "react";

const colorPalette = {
  primary: '#1A5F7A',
  secondary: '#159895',
  accent1: '#57C5B6',
  accent2: '#0E2954',
  accent3: '#2C7DA0',
  background: '#F0F9FF',
  white: '#FFFFFF'
};

const styles = `
.gradient-border {
  position: relative;
  overflow: hidden;
}
.gradient-border::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 5px;
  background: linear-gradient(to right, ${colorPalette.primary}, ${colorPalette.secondary});
}
.track-card {
  transition: all 0.3s ease;
  transform-origin: center;
  position: relative;
  overflow: hidden;
}
.track-card::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(to right, ${colorPalette.primary}, ${colorPalette.secondary});
  transform: scaleX(0);
  transition: transform 0.3s ease;
}
.track-card:hover::after {
  transform: scaleX(1);
}
.track-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 30px rgba(21, 158, 149, 0.2);
}

.timeline-dot::before {
  content: '';
  position: absolute;
  width: 24px;
  height: 24px;
  background: white;
  border-radius: 50%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0% {
    box-shadow: 0 0 0 0 rgba(26, 95, 122, 0.4);
  }
  70% {
    box-shadow: 0 0 0 10px rgba(26, 95, 122, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(26, 95, 122, 0);
  }
}

.timeline-card {
  position: relative;
  transition: all 0.3s ease;
}

.timeline-card::before {
  content: '';
  position: absolute;
  width: 0;
  height: 2px;
  background: linear-gradient(to right, #1A5F7A, #159895);
  top: 50%;
  transition: all 0.3s ease;
}

.timeline-card-left::before {
  right: -30px;
}

.timeline-card-right::before {
  left: -30px;
}

.timeline-card:hover::before {
  width: 30px;
}

.timeline-icon {
  transform: scale(1);
  transition: transform 0.3s ease;
}

.timeline-card:hover .timeline-icon {
  transform: scale(1.2) rotate(5deg);
}
`;

function Home() {
  const tracks = [
    { title: "Track 1: AI & ML", topics: ["Artificial Intelligence advancements", "Deep Learning and Neural Networks", "Natural Language Processing", "AI-driven Robotics", "Ethical AI and Responsible AI", "AI in Healthcare and Medicine", "Generative AI Applications"] },
    { title: "Track 2: Computing", topics: ["Distributed and Cloud Computing", "Quantum Computing", "High Performance Computing", "Edge and Fog Computing", "Software Engineering in Emerging Systems", "Green Computing Technologies", "Computational Biology"] },
    { title: "Track 3: Data Analytics", topics: ["Big Data Management", "Predictive Analytics", "Data Visualization", "Business Intelligence Systems", "Real-time Data Processing", "Data Warehousing", "Anomaly Detection in Big Data"] },
    { title: "Track 4: IoT", topics: ["IoT Architecture and Protocols", "Smart Home and Smart City Applications", "Industrial IoT and Automation", "Wearable Devices and Healthcare IoT", "IoT Security and Privacy", "IoT in Agriculture", "Energy-Efficient IoT Systems"] },
    { title: "Track 5: Networks", topics: ["Next-Generation Network Technologies", "5G and Beyond", "Software-Defined Networking", "Network Virtualization", "Wireless and Ad Hoc Networks", "Optical Communication Networks", "Network Traffic Analysis and Optimization"] },
    { title: "Track 6: Security", topics: ["Cybersecurity Threats and Solutions", "Blockchain and Cryptography", "Secure Systems Design", "Network Security Protocols", "Data Privacy and Protection", "AI in Cybersecurity", "Ethical Hacking and Penetration Testing"] },
  ];

  return (
    <div className="min-h-screen relative" style={{ backgroundColor: colorPalette.background }}>
      <style>{styles}</style>
      <div className="relative max-w-7xl mx-auto px-4 py-8">
        {/* Header Section */}
        <div className="text-center mb-12 gradient-border rounded-lg p-8 shadow-2xl" style={{ backgroundColor: colorPalette.white }}>
          <div className="flex items-center justify-center space-x-4 mb-6">
            <img 
              src="/images/logo.png"
              alt="SIT Logo" 
              className="w-36 md:w-48 h-36 md:h-48 object-contain" 
            />
            <img 
              src="/images/swamiji.jpg"
              alt="SIT Tribute" 
              className="w-36 md:w-48 h-36 md:h-48 object-contain" 
            />
          </div>
          <h1 className="text-2xl md:text-3xl font-bold mb-2" style={{ color: colorPalette.primary }}>
            3rd International Conference on Emerging Computation and Information Technologies ICECIT-2025
          </h1>
          <h2 className="text-lg md:text-xl mb-4" style={{ color: colorPalette.secondary }}>
            Association of Computer Science & Engineering, Information Science & Engineering, Master of Computer Application
          </h2>
          <p className="text-base md:text-lg font-semibold mb-4">
            10th &amp; 11th October, 2025
          </p>
        </div>

        {/* Campus Section */}
        <div className="flex flex-col md:flex-row mb-12 gradient-border rounded-lg p-8 shadow-2xl space-y-6 md:space-y-0 md:space-x-6" style={{ backgroundColor: colorPalette.white }}>
          <div className="md:w-1/2 flex space-x-4 md:space-x-0">
            <img 
              src="http://icsses.sit.ac.in/assets/SIT_ADMIN-BhrGAbjH.jpg" 
              alt="SIT College" 
              className="w-full h-auto object-cover rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105" 
            />
          </div>
          <div className="md:w-1/2 flex items-center bg-gray-100/50 p-6 rounded-lg">
            <p className="text-base text-center md:text-left">
              Siddaganga Institute of Technology (SIT) in Tumkur, Karnataka, is a prestigious institution established in 1963. Renowned for its excellence in engineering and technology education, it offers undergraduate, postgraduate, and doctoral programs in various disciplines. Affiliated with Visvesvaraya Technological University, SIT is well-known for its state-of-the-art infrastructure, experienced faculty, and vibrant campus life. The institute emphasizes research and innovation, contributing significantly to academia and industry. As of the latest National Institutional Ranking Framework (NIRF) rankings in 2024, SIT Tumkur is ranked in the top engineering category.
            </p>
          </div>
        </div>

        {/* About Section */}
        <div className="mb-12 bg-gradient-to-br from-[#E6F2FF] to-[#F0F9FF] rounded-lg p-8 shadow-xl">
          <div className="bg-white p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-4 text-[#1A5F7A]">About SIT and the Conference</h2>
            <div className="space-y-4">
              <p className="text-base text-gray-700">Siddaganga Institute of Technology (SIT), Tumakuru, is one of India's premier engineering institutions known for its excellence in education and innovation. With a sprawling green campus and state-of-the-art facilities, SIT provides an ideal setting for hosting international conferences.</p>
              <p className="text-base text-gray-700">The conference brings together researchers, academics, and industry professionals to discuss the latest advancements in AI, IoT, Data Analytics, Security, and other cutting-edge fields. Join us to exchange ideas, network, and explore innovations that are shaping the future.</p>
            </div>
          </div>
        </div>

        {/* Tracks Section */}
        <div>
          <h2 className="text-2xl font-bold mb-6 text-center" style={{ color: colorPalette.secondary }}>Conference Tracks</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tracks.map((track, index) => (
              <div 
                key={index} 
                className="track-card p-6 rounded-lg border-2 border-transparent bg-gradient-to-br from-[#F0F9FF] to-[#E6F2FF] hover:border-[#159895] transition-all duration-300 ease-in-out"
              >
                <h3 
                  className="text-lg font-semibold mb-4 transition-colors duration-300" 
                  style={{ color: colorPalette.primary }}
                >
                  {track.title}
                </h3>
                <ul className="space-y-2">
                  {track.topics.map((topic, topicIndex) => (
                    <li 
                      key={topicIndex} 
                      className="text-sm text-gray-700 before:content-['→'] before:mr-2 before:text-[#159895] before:font-bold hover:translate-x-2 transition-transform duration-300"
                    >
                      {topic}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Important Dates Section with Enhanced Roadmap Style */}
        <div className="mb-12 mt-16 py-16" style={{ background: 'linear-gradient(135deg, #f0f9ff 0%, #e6f2ff 100%)' }}>
          <h2 className="text-4xl font-bold mb-16 text-center" style={{ color: colorPalette.primary }}>
            Conference Timeline
          </h2>
          <div className="max-w-6xl mx-auto relative px-4">
            {/* Timeline Line */}
            <div 
              className="absolute left-1/2 transform -translate-x-1/2 h-full w-2 rounded-full"
              style={{ 
                background: `linear-gradient(to bottom, ${colorPalette.primary}, ${colorPalette.secondary})`,
                top: '20px',
                boxShadow: '0 0 20px rgba(21, 152, 149, 0.3)'
              }}
            />

            {/* Timeline Items */}
            <div className="space-y-24">
              {[
                {
                  title: "Submission Portal Opens",
                  date: "1st October 2025",
                  icon: "📝",
                  description: "Start submitting your research papers"
                },
                {
                  title: "Full Paper Submission Deadline",
                  date: "20th January 2026",
                  icon: "📄",
                  description: "Last date to submit your complete paper"
                },
                {
                  title: "Acceptance/Rejection Notification",
                  date: "18th February 2026",
                  icon: "✉️",
                  description: "Results will be announced"
                },
                {
                  title: "Camera Ready Paper Submission",
                  date: "22nd February 2026",
                  icon: "📎",
                  description: "Submit your final camera-ready paper"
                },
                {
                  title: "Registration Deadline",
                  date: "26th February 2026",
                  icon: "💳",
                  description: "Complete your registration and payment"
                },
                {
                  title: "Conference Days",
                  date: "7th & 8th March 2026",
                  icon: "🎓",
                  description: "Join us for the main conference"
                }
              ].map((item, index) => (
                <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  {/* Content */}
                  <div className={`w-5/12 ${index % 2 === 0 ? 'pr-12' : 'pl-12'}`}>
                    <div 
                      className={`timeline-card ${index % 2 === 0 ? 'timeline-card-left' : 'timeline-card-right'} 
                        bg-white p-6 rounded-xl shadow-xl transform transition-all duration-300 hover:scale-105`}
                      style={{ 
                        borderTop: `4px solid ${colorPalette.secondary}`,
                        background: 'rgba(255, 255, 255, 0.95)'
                      }}
                    >
                      <div className="timeline-icon text-5xl mb-4">{item.icon}</div>
                      <h3 className="text-xl font-bold mb-2" style={{ color: colorPalette.primary }}>{item.title}</h3>
                      <p className="text-lg font-semibold mb-2" style={{ color: colorPalette.secondary }}>{item.date}</p>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>

                  {/* Timeline Dot */}
                  <div className="timeline-dot absolute left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-white shadow-lg" style={{ 
                    border: `3px solid ${colorPalette.secondary}`,
                    zIndex: 1
                  }} />

                  {/* Empty space for the other side */}
                  <div className="w-5/12" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;