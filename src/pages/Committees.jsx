import React from 'react'
import { motion } from 'framer-motion'

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

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerChildren = {
  animate: { transition: { staggerChildren: 0.1 } }
};

const hoverEffect = {
  scale: 1.05,
  boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)",
  transition: { duration: 0.3 }
};

const listItemAnimation = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const patrons = [
  {
    name: "Shri T. K. Nanjundappa",
    role: "Honorary Secretary",
    org: "Sree Siddaganga Education Society, Siddaganga Math, Tumakuru",
    img: "http://icsses.sit.ac.in/assets/TKN-HA-cOsT5.jpg"
  },
  {
    name: "Dr. Shivakumaraiah",
    role: "Joint Secretary",
    org: "Sree Siddaganga Education Society, Siddaganga Math, Tumakuru",
    img: ""
  },
  {
    name: "Dr. M. N. Channabasappa",
    role: "Director",
    org: "SIT, Tumakuru",
    img: "http://icsses.sit.ac.in/assets/director-CFf4RI2p.gif"
  }
];

const organizingCommittee = [
  "Dr. Rashmi, Professor and Head, Dept. of EEE, SIT, Tumakuru",
  "Dr. H. K. E. Latha, Professor and Head, Dept. of EIE, SIT, Tumakuru",
  "Dr. H. M. Kalpana, Professor Dept. of EIE, SIT, Tumakuru",
  "Dr. K. V. Suresh, Professor and Head, Dept. of ECE, SIT, Tumakuru",
  "Dr. K. Viswanath, Professor and Head, Dept. of ETE, SIT, Tumakuru",
  "Dr. R. Kumaraswamy, Professor, Dept. of ECE, SIT, Tumakuru",
  "Dr. K. C. Narasimhamurthy, Professor, Dept. of ETE, SIT, Tumakuru",
  "Dr. Siddeswara Prasad V., Professor, Dept. of EIE, SIT, Tumakuru"
];

const advisoryCommittee = [
  "Dr. Basavarju Sanganahalli, Associate Research Scientist in Biomedical Imaging, Yale School of Medicine, US",
  "Dr. Rajkumar Buyya, Distinguished Professor and Director, Cloud Computing and Distributed Systems Laboratory, University of Melbourne, CEO - Manjrasoft Pty Ltd, Australia",
  "Dr. P Nagabhushan, Vice Chancellor, Vignan's Foundation for Science, Technology And Research, Andhra Pradesh, India",
  "Dr. T V Ramachandra, Professor, Energy & Wetlands Research Group, IISc, Bengaluru, Karnataka, India",
  "Dr. S N Omkar, Chief Research Scientist, IISc, Bengaluru, Karnataka, India",
  "Dr. Xiao-Zhi Gao, Professor, University of Eastern Finland, Kuopio, Finland",
  "Dr. Bhanu Prakash Kolla, Professor, K L University, Andhra Pradesh, India",
  "Dr. Naveen Chilamkurti, Head of Cybersecurity Discipline, Director, La Trobe University Cybersecurity Research Hub, La Trobe University, Melbourne, Australia",
  "Dr. Uma Mohan Mokashi, Information Science, Cardiff Metropolitan University, London",
  "Dr. S. Mohan, Chair Professor, IIT Madras, India",
  "Dr. Mahadeva Prasanna, Professor, IIT Dharwad, Karnataka, India",
  "Dr. K Srinivasa Rao, Professor, IIT Kharagpur, India",
  "Dr. Matthew Jacob, Professor, Dept. of CSA, IISc, Bengaluru, Karnataka, India",
  "Dr. Y N Srikanth, Professor, Dept. of CSA, IISc, Bengaluru, Karnataka, India",
  "Dr. V Susheela Devi, Principal Research Scientist, IISc, Bengaluru, Karnataka, India",
  "Dr. Shashidhar Patil, Assistant Manager (Research & Development), Seokyoung Systems, Seoul, South Korea",
  "Dr. Hong Lin, Professor, Dept. of Computer and Mathematical Sciences, University of Houston-Downtown, One Main Street, Houston",
  "Dr. B B Amberker, Professor, NIT Warangal, India",
  "Dr. C B Akki, Professor, IIIT Dharwad, Karnataka, India",
  "Dr. K Samudravijaya, Professor, IIT Guwahati, India",
  "Dr. P. Santhi Thilagam, Professor, National Institute of Technology-Karnataka, Surathkal, Karnataka, India",
  "Dr. Norden E Huang, Professor, Taiwan",
  "Mr. Samir (Sam) Datt, Founder & CEO, Foundation Futuristic Technologies P Limited, New Delhi, India",
  "Dr. Ismail Musirin, Professor, University of Teknologi MARA, Shah Alam, Selangor, Malaysia",
  "Dr. MD. Ekramul Hamid, Professor, Computer Science & Engineering, University of Rajshahi, Rajshahi, Bangladesh",
  "Dr. Sridharan Devarajan, Associate Professor, Dept. of CSA, IISc, Bengaluru, Karnataka, India",
  "Dr. Chandrashekar, Professor, IITM Chennai, India",
  "Dr. Shashidhar G Koolagudi, Associate Professor, Dept. of CSE, NITK Surathkal, Karnataka, India",
  "Dr. Soma Biswas, Associate Professor, IISc, Bengaluru, Karnataka, India",
  "Dr. C.R.S. Kumar, Professor, DIAT, DRDO, Pune, India",
  "Dr. Mahesha BR Pandit, CEO, Rhytify Technologies Private Limited, Bengaluru, Karnataka, India",
  "Dr. Dileep A D, Associate Professor, IIT Mandi, India",
  "Mr. Kasturi Venkatesh, Director, CX Product Management and Advance Solutions, Cisco Systems India (Pvt) Ltd, Bengaluru, Karnataka, India",
  "Mr. Gurucharan H C, Senior Lead Software Engineer, Apple Inc, San Francisco Bay Area, US"
];

const editorialTeam = [
  {
    name: "Dr. M B Nirmala",
    role: "Associate Professor",
    dept: "Computer Science & Engineering"
  },
  {
    name: "Dr. G Jagadamba",
    role: "Assistant Professor",
    dept: "Information Science & Engineering"
  },
  {
    name: "Dr. Prashanth G K",
    role: "Assistant Professor",
    dept: "Master of Computer Applications"
  },
  {
    name: "Dr. Vijender Kumar Solanki",
    role: "Associate Professor",
    dept: "Computer Science & Engineering",
    org: "CMR Institute of Technology (Autonomous), Hyderabad, India"
  }
];

const technicalCommittee = [
  "Mr. Sandeep Moonka, Fintech and Payments Partnership Lead, Google Pay India",
  "Dr. Steven Frenandes, Assistant Professor, Dept of CSE, Creighton University, Omaha, USA",
  "Dr. Neminath, Associate Professor, IIT Indore, India",
  "Dr. Shyam Lal, Assistant Professor, National Institute of Technology, Surathkal, Karnataka, India",
  "Dr. Nagaraj V. Dharwadkar, Professor and Head, Department of Computer Science & Engg., Rajarambapu Institute of Technology, Islampur, Maharashtra",
  "Dr. Arish P, Associate Data Scientist, Entropik Technologies, Chennai, India",
  "Dr. Siva Shankar Ramasamy, Lecturer, International College of Digital Innovation, Chiang Mai, Thailand",
  "Dr. Bheemappa Halavar, Assistant Professor, Indian Institute of Information Technology, Sri City, Chittoor, India",
  "Dr. Mohan R, Assistant Professor, National Institute of Technology, Trichy, India",
  "Dr. Biswajit R Bhowmik, Assistant Professor, National Institute of Technology, Surathkal, Karnataka, India",
  "Dr. Pavan Kumar BN, Assistant Professor, Indian Institute of Information Technology, Sri City, Chittoor, India",
  "Dr. B Sathish Babu, Professor, RVCE, Bengaluru, Karnataka, India",
  "Dr. Mohammed Rafi, Professor, UBDTUVCE, Davanagere, Karnataka, India",
  "Dr. Pramod H. Yelmewad, Assistant professor, Indian Institute of Information Technology, Dharwad, Karnataka, India",
  "Dr. Chidananda Murthy P, Consultant, Celabal Technologies, Bengaluru, Karnataka, India",
  "Mr. Pramod K, Senior Member of Technical Staff, VM Ware, Bengaluru, Karnataka, India",
  "Dr. Mahesh Kumar K M, Information Security Engineer, Jio Platforms Ltd., Bengaluru, Karnataka, India",
  "Mr. Vasanth Kumar B J, ETL Lead, Wipro India Ltd., Bengaluru, Karnataka, India",
  "Dr. G T Raju, Principal, SJC Institute of Technology, Chickballapur, Bengaluru, Karnataka, India",
  "Dr. M V Sudhamani, Professor, BMSIT, Bengaluru, Karnataka, India",
  "Mr. Pradeep Yadlapali, Vice President, Infosys Cloud Ecosystem, Hyderabad, Telangana, India",
  "Mr. Pallav Rustogi, Software Engineer 2, Microsoft Corporation, USA",
  "Dr. Senthil Kumar A V, Professor and Director, PG and Research Department of Computer Applications, Coimbatore, Tamil Nadu, India",
  "Dr. Yogish H K, Professor, RIT, Bengaluru, Karnataka, India",
  "Mr. Harish Jadhav, Senior Lead Engineer, IBM Labs, Bengaluru, Karnataka, India",
  "Dr. Sunil Kumar B S, Professor, GM Institute of Technology, Davangare, Karnataka, India",
  "Dr. Shreedhara K S, Professor, BDT College of Engineering, Davangare, Karnataka, India",
  "Dr. Ravishankar K C, Professor, Government Engineering College, Hassan, Karnataka, India",
  "Dr. Raghu M.E, Assistant Professor, Government Engineering College, Hassan, Karnataka, India",
  "Dr. Jalesh Kumar, Professor, JNNCE Shivamogga, Karnataka, India",
  "Dr. Srinath S, Associate Professor, SJCE Mysore, Karnataka, India",
  "Dr. Prasanna B T, Associate Professor, SJCE Mysore, Karnataka, India",
  "Dr. Nalini N, Professor, NMIT Bangalore, Karnataka, India",
  "Dr. Thippeswamy M.N, Professor and HoD, RIT Bangalore, Karnataka, India",
  "Dr. Shrinivas Desai, Professor, KLE Technological University, Hubli, Karnataka, India",
  "Dr. Thejas G S, Assistant Professor, Tarleton State University, USA",
  "Mr. Srinidhi GS, Senior Director, Imaging Platform Capabilities, GE Healthcare, Bengaluru, Karnataka, India",
  "Mr. Manjunath D S, Graphics Software Engineer, Intel Corporation, Bengaluru, Karnataka, India",
  "Mr. Shashikumar H R, Senior Software Engineer, Hewlett Packard Enterprise, Bengaluru, Karnataka, India"
];

const Committees = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100">
      <div className="max-w-7xl mx-auto px-4 py-16">
      <motion.section className="mb-24" {...fadeInUp}>
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-12" style={{ color: colorPalette.primary }}>
            With the divine blessings of our Founder President
          </h1>
          <motion.div 
            className="flex flex-col items-center rounded-2xl shadow-xl p-8 transform transition duration-500 hover:scale-105"
            whileHover={hoverEffect}
            style={{ background: colorPalette.lightBackground }}
          >
            <img
              className="w-64 h-64 rounded-full shadow-2xl mb-8 border-8 border-white"
              src="http://icsses.sit.ac.in/assets/founder-UXCW3-qS.jpg"
              alt="Founder President"
            />
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-2" style={{ color: colorPalette.primary }}>
              Sree Sree Sree Dr. Shivakumara Swamigalu
            </h2>
            <p className="text-xl text-center mb-2" style={{ color: colorPalette.secondary }}>Founder President</p>
            <p className="text-lg text-center" style={{ color: colorPalette.accent2 }}>
              Sree Siddaganga Education Society, Siddaganga Math, Tumakuru
            </p>
          </motion.div>
        </motion.section>

        {/* Chief Patron Section */}
        <motion.section className="mb-24" {...fadeInUp}>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12" style={{ color: colorPalette.primary }}>
            Chief Patron
          </h2>
          <motion.div 
            className="flex flex-col items-center rounded-2xl shadow-xl p-8 transform transition duration-500 hover:scale-105"
            whileHover={hoverEffect}
            style={{ background: colorPalette.lightBackground }}
          >
            <img
              className="w-64 h-64 rounded-full shadow-2xl mb-8 border-8 border-white"
              src="http://icsses.sit.ac.in/assets/president-JoDq5g5R.jpg"
              alt="Chief Patron"
            />
            <p className="text-2xl md:text-3xl font-bold text-center mb-2" style={{ color: colorPalette.primary }}>
              Sree Siddalinga Swamiji
            </p>
            <p className="text-xl font-semibold text-center mb-2" style={{ color: colorPalette.secondary }}>President,</p>
            <p className="text-lg text-center" style={{ color: colorPalette.accent2 }}>
              Sree Siddaganga Education Society, Siddaganga Math, Tumakuru
            </p>
          </motion.div>
        </motion.section>

        {/* Patrons Section */}
        <motion.section className="mb-24" {...fadeInUp}>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12" style={{ color: colorPalette.primary }}>Patrons</h2>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={staggerChildren}
            initial="initial"
            animate="animate"
          >
            {patrons.map((patron, index) => (
              <motion.div 
                key={index} 
                className="flex flex-col items-center text-center bg-white rounded-2xl shadow-xl p-8 transform transition duration-500 hover:scale-105"
                variants={fadeInUp}
                whileHover={hoverEffect}
                style={{ background: colorPalette.lightBackground }}
              >
                <img
                  className="w-48 h-48 rounded-full shadow-2xl mb-6 border-8 border-white"
                  src={patron.img || "/placeholder.svg?height=192&width=192"}
                  alt={patron.name}
                />
                <p className="text-2xl font-bold mb-2" style={{ color: colorPalette.primary }}>{patron.name}</p>
                <p className="text-lg font-semibold mb-2" style={{ color: colorPalette.secondary }}>{patron.role}</p>
                <p className="text-md" style={{ color: colorPalette.accent2 }}>{patron.org}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* General Chair Section */}
        <motion.section className="mb-24" {...fadeInUp}>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12" style={{ color: colorPalette.primary }}>
            General Chair
          </h2>
          <motion.div 
            className="flex flex-col items-center bg-white rounded-2xl shadow-xl p-8 transform transition duration-500 hover:scale-105"
            whileHover={hoverEffect}
            style={{ background: colorPalette.lightBackground }}
          >
            <img
              className="w-64 h-64 rounded-full shadow-2xl mb-8 border-8 border-white"
              src="http://icsses.sit.ac.in/assets/principal-C3XPtYeR.jpg"
              alt="Dr. S. V. Dinesh"
            />
            <p className="text-2xl md:text-3xl font-bold text-center mb-2" style={{ color: colorPalette.primary }}>
              Dr. S. V. Dinesh
            </p>
            <p className="text-xl font-semibold text-center mb-2" style={{ color: colorPalette.secondary }}>Principal</p>
            <p className="text-lg text-center" style={{ color: colorPalette.accent2 }}>
              SIT, Tumakuru
            </p>
          </motion.div>
        </motion.section>

        {/* Organizing Committee Section */}
        <motion.section 
          className="mb-24 bg-white rounded-2xl shadow-xl p-12"
          {...fadeInUp}
          whileHover={{ boxShadow: "0px 15px 25px rgba(0, 0, 0, 0.1)" }}
          style={{ background: colorPalette.lightBackground }}
        >
          <h2 
            className="text-4xl md:text-5xl font-bold text-center mb-12" 
            style={{ color: colorPalette.primary }}
          >
            Organizing Committee
          </h2>
          <motion.ul 
            className="space-y-6 text-lg text-gray-900 max-w-4xl mx-auto"
            variants={staggerChildren}
            initial="initial"
            animate="animate"
          >
            {organizingCommittee.map((member, index) => (
              <motion.li 
                key={index} 
                className="flex items-start bg-white rounded-lg p-4 transform transition duration-300 hover:scale-105"
                variants={listItemAnimation}
                whileHover={{ boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.05)" }}
              >
                <span 
                  className="mr-4 text-3xl" 
                  style={{ color: colorPalette.accent2 }}
                >
                  •
                </span>
                <span className="text-lg" style={{ color: colorPalette.primary }}>{member}</span>
              </motion.li>
            ))}
          </motion.ul>
        </motion.section>

        {/* Advisory Committee Section */}
        <motion.section 
          className="mb-24 bg-white rounded-2xl shadow-xl p-12"
          {...fadeInUp}
          whileHover={{ boxShadow: "0px 15px 25px rgba(0, 0, 0, 0.1)" }}
          style={{ background: colorPalette.lightBackground }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12" style={{ color: colorPalette.primary }}>
            Advisory Committee
          </h2>
          <motion.ul 
            className="grid grid-cols-1 md:grid-cols-2 gap-6 text-lg text-gray-900 max-w-6xl mx-auto"
            variants={staggerChildren}
            initial="initial"
            animate="animate"
          >
            {advisoryCommittee.map((member, index) => (
              <motion.li 
                key={index} 
                className="flex items-start bg-white rounded-lg p-4 transform transition duration-300 hover:scale-105"
                variants={listItemAnimation}
                whileHover={{ boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.05)" }}
              >
                <span className="mr-4 text-3xl" style={{ color: colorPalette.accent2 }}>•</span>
                <span className="text-lg" style={{ color: colorPalette.primary }}>{member}</span>
              </motion.li>
            ))}
          </motion.ul>
        </motion.section>

        {/* Editorial Team Section */}
        <motion.section 
          className="mb-24 bg-white rounded-2xl shadow-xl p-12"
          {...fadeInUp}
          whileHover={{ boxShadow: "0px 15px 25px rgba(0, 0, 0, 0.1)" }}
          style={{ background: colorPalette.lightBackground }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12" style={{ color: colorPalette.primary }}>
            Editorial Team
          </h2>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
            variants={staggerChildren}
            initial="initial"
            animate="animate"
          >
            {editorialTeam.map((member, index) => (
              <motion.div 
                key={index} 
                className="flex flex-col items-center text-center bg-white rounded-2xl p-6 shadow-md transform transition duration-500 hover:scale-105"
                variants={fadeInUp}
                whileHover={hoverEffect}
              >
                <p className="text-2xl font-bold mb-2" style={{ color: colorPalette.primary }}>{member.name}</p>
                <p className="text-lg font-semibold mb-2" style={{ color: colorPalette.secondary }}>{member.role}</p>
                <p className="text-md" style={{ color: colorPalette.accent2 }}>{member.dept}</p>
                {member.org && <p className="text-md mt-2" style={{ color: colorPalette.accent2 }}>{member.org}</p>}
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* Technical Committee Section */}
        <motion.section 
          className="mb-24 bg-white rounded-2xl shadow-xl p-12"
          {...fadeInUp}
          whileHover={{ boxShadow: "0px 15px 25px rgba(0, 0, 0, 0.1)" }}
          style={{ background: colorPalette.lightBackground }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12" style={{ color: colorPalette.primary }}>
            Technical Committee
          </h2>
          <motion.ul 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-lg text-gray-900 max-w-6xl mx-auto"
            variants={staggerChildren}
            initial="initial"
            animate="animate"
          >
            {technicalCommittee.map((member, index) => (
              <motion.li 
                key={index} 
                className="flex items-start bg-white rounded-lg p-4 transform transition duration-300 hover:scale-105"
                variants={listItemAnimation}
                whileHover={{ boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.05)" }}
              >
                <span className="mr-4 text-3xl" style={{ color: colorPalette.accent2 }}>•</span>
                <span className="text-lg" style={{ color: colorPalette.primary }}>{member}</span>
              </motion.li>
            ))}
          </motion.ul>
        </motion.section>
      </div>
    </div>
  )
}

export default Committees

