'use client';

import { motion } from 'framer-motion';
import {
  AlertTriangle,
  Award,
  Briefcase,
  Building,
  Calendar,
  CheckCircle2,
  Edit3,
  FileText,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  Target,
  UserCheck,
} from 'lucide-react';
import { useEffect, useState } from 'react';

// Demo user data with KYC status
const userData = {
  name: 'Asya Khan',
  age: 28,
  title: 'Product Design Director',
  email: 'asya.khan@studio.com',
  phone: '+92 300 1234567',
  address: 'Karachi, Pakistan',
  nationalId: '37402-1234567-1',
  isVerified: true,
  kycVerified: false, // KYC status
  business: 'Khan Creative Studio',
  work: 'Senior Product Designer',
  bannerImage: '/professional-banner.png',
  profileImage: '/professional-profile.png',
  bio: 'Leading digital product design teams to create meaningful experiences that drive business growth and user satisfaction.',
  joinDate: 'March 2020',
  about:
    'Strategic design leader with 6+ years of experience building and scaling design systems, mentoring cross-functional teams, and delivering exceptional product experiences for global clients across fintech, healthcare, and enterprise SaaS.',
  stats: {
    projects: '45',
    clients: '32',
    experience: '6+ years',
    team: '12',
  },
  expertise: [
    'Design Systems',
    'UX Strategy',
    'Team Leadership',
    'Product Scaling',
  ],
};

// Professional animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 120,
      damping: 15,
    },
  },
};

const cardVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
    },
  },
  hover: {
    y: -2,
    transition: {
      type: 'spring',
      stiffness: 400,
      damping: 25,
    },
  },
};

const pulseVariants = {
  pulse: {
    scale: [1, 1.02, 1],
    opacity: [1, 0.8, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
};

export default function ProfessionalProfilePage() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [showKYCAlert, setShowKYCAlert] = useState(!userData.kycVerified);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleUpdateProfile = () => {
    // Handle update profile action
    console.log('Update profile clicked');
    // Add your update profile logic here
  };

  const handleCompleteKYC = () => {
    // Handle KYC completion action
    console.log('Complete KYC clicked');
    // Add your KYC completion logic here
  };

  return (
    <motion.main
      className="min-h-screen bg-white dark:bg-black"
      initial="hidden"
      animate={isLoaded ? 'visible' : 'hidden'}
      variants={containerVariants}
    >
      {/* KYC Alert Banner */}
      {showKYCAlert && !userData.kycVerified && (
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          className="bg-red-50 dark:bg-red-900/20 border-b border-red-200 dark:border-red-800"
        >
          <div className="max-w-6xl mx-auto px-6 lg:px-8 py-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <AlertTriangle className="w-5 h-5 text-red-600 dark:text-red-400" />
                <p className="text-red-800 dark:text-red-200 text-sm font-medium">
                  KYC verification required to access all features
                </p>
              </div>
              <button
                onClick={() => setShowKYCAlert(false)}
                className="text-red-600 dark:text-red-400 hover:text-red-800 dark:hover:text-red-200"
              >
                ×
              </button>
            </div>
          </div>
        </motion.div>
      )}

      {/* Minimal Header */}
      <motion.div
        className="h-48 bg-black dark:bg-white relative overflow-hidden"
        variants={itemVariants}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black via-gray-900 to-black dark:from-white dark:via-gray-100 dark:to-white" />

        {/* Update Profile Button */}
        <motion.button
          onClick={handleUpdateProfile}
          className="absolute top-6 right-6 bg-white dark:bg-black text-black dark:text-white px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 flex items-center gap-2 shadow-lg hover:shadow-xl transition-all"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          variants={itemVariants}
        >
          <Edit3 className="w-4 h-4" />
          <span className="text-sm font-medium">Update Profile</span>
        </motion.button>
      </motion.div>

      <div className="px-6 lg:px-8 max-w-6xl mx-auto -mt-16">
        {/* Profile Header */}
        <motion.div className="relative mb-12" variants={cardVariants}>
          <div className="flex flex-col lg:flex-row items-start gap-8">
            {/* Profile Image */}
            <motion.div
              className="relative flex-shrink-0"
              whileHover={{ scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <div className="w-32 h-32 lg:w-40 lg:h-40 rounded-full bg-white dark:bg-black border-4 border-white dark:border-black shadow-2xl overflow-hidden">
                <img
                  src={userData.profileImage || '/placeholder.svg'}
                  alt={userData.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <motion.div
                className="absolute -bottom-2 -right-2 bg-white dark:bg-black rounded-full p-1 border-2 border-black dark:border-white shadow-lg"
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.5, type: 'spring' }}
              >
                <ShieldCheck className="w-5 h-5 text-black dark:text-white" />
              </motion.div>
            </motion.div>

            {/* Profile Info */}
            <div className="flex-1 space-y-4">
              <motion.div variants={itemVariants}>
                <h1 className="text-4xl lg:mt-20  lg:text-5xl font-light text-black dark:text-white tracking-tight">
                  {userData.name}
                </h1>
                <div className="flex items-center gap-4 mt-2">
                  <p className="text-lg text-gray-600 dark:text-gray-400">
                    {userData.title}
                  </p>
                  <div className="h-1 w-1 bg-gray-400 rounded-full" />
                  <p className="text-sm text-gray-500 dark:text-gray-500">
                    {userData.age} years
                  </p>
                </div>
              </motion.div>

              {/* National ID & KYC Status */}
              <motion.div
                className="flex items-center gap-4 flex-wrap"
                variants={itemVariants}
              >
                <div className="flex items-center gap-3">
                  <FileText className="w-4 h-4 text-gray-500" />
                  <span className="text-sm font-mono text-gray-600 dark:text-gray-400 border border-gray-300 dark:border-gray-700 px-3 py-1 rounded">
                    CNIC: {userData.nationalId}
                  </span>
                </div>

                {/* KYC Status Badge */}
                <motion.div
                  className={`flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium ${
                    userData.kycVerified
                      ? 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 border border-green-200 dark:border-green-800'
                      : 'bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300 border border-red-200 dark:border-red-800'
                  }`}
                  variants={userData.kycVerified ? {} : pulseVariants}
                  animate={userData.kycVerified ? {} : 'pulse'}
                >
                  {userData.kycVerified ? (
                    <>
                      <UserCheck className="w-4 h-4" />
                      KYC Verified
                    </>
                  ) : (
                    <>
                      <AlertTriangle className="w-4 h-4" />
                      KYC Required
                    </>
                  )}
                </motion.div>
              </motion.div>

              {/* Bio */}
              <motion.p
                className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed max-w-3xl"
                variants={itemVariants}
              >
                {userData.bio}
              </motion.p>

              {/* Complete KYC Button - Only show if KYC is not verified */}
              {!userData.kycVerified && (
                <motion.button
                  onClick={handleCompleteKYC}
                  className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-medium flex items-center gap-2 shadow-lg transition-all mt-4"
                  whileHover={{ scale: 1.05, backgroundColor: '#dc2626' }}
                  whileTap={{ scale: 0.95 }}
                  variants={itemVariants}
                >
                  <AlertTriangle className="w-5 h-5" />
                  Complete KYC Verification
                </motion.button>
              )}
            </div>
          </div>
        </motion.div>

        {/* Main Content Grid */}
        <motion.div
          className="grid grid-cols-1 xl:grid-cols-4 gap-8 pb-16"
          variants={containerVariants}
        >
          {/* Left Sidebar */}
          <div className="xl:col-span-1 space-y-8">
            {/* Contact Card */}
            <motion.div
              className="bg-white dark:bg-black border border-gray-200 dark:border-gray-800 rounded-lg p-6"
              variants={cardVariants}
              whileHover="hover"
            >
              <h3 className="font-semibold text-black dark:text-white mb-4 text-sm uppercase tracking-wider">
                Contact
              </h3>
              <div className="space-y-3">
                {[
                  {
                    icon: Mail,
                    value: userData.email,
                    href: `mailto:${userData.email}`,
                  },
                  {
                    icon: Phone,
                    value: userData.phone,
                    href: `tel:${userData.phone}`,
                  },
                  { icon: MapPin, value: userData.address },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-3 py-2 group"
                    whileHover={{ x: 4 }}
                  >
                    <item.icon className="w-4 h-4 text-gray-500 flex-shrink-0" />
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-sm text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <span className="text-sm text-gray-700 dark:text-gray-300">
                        {item.value}
                      </span>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Stats Card */}
            <motion.div
              className="bg-white dark:bg-black border border-gray-200 dark:border-gray-800 rounded-lg p-6"
              variants={cardVariants}
              whileHover="hover"
            >
              <h3 className="font-semibold text-black dark:text-white mb-4 text-sm uppercase tracking-wider">
                Metrics
              </h3>
              <div className="space-y-4">
                {Object.entries(userData.stats).map(([key, value], index) => (
                  <motion.div
                    key={key}
                    className="flex justify-between items-center py-1 border-b border-gray-100 dark:border-gray-900 last:border-0"
                    whileHover={{ x: 2 }}
                  >
                    <span className="text-sm text-gray-600 dark:text-gray-400 capitalize">
                      {key}
                    </span>
                    <span className="font-semibold text-black dark:text-white">
                      {value}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Expertise */}
            <motion.div
              className="bg-white dark:bg-black border border-gray-200 dark:border-gray-800 rounded-lg p-6"
              variants={cardVariants}
              whileHover="hover"
            >
              <h3 className="font-semibold text-black dark:text-white mb-4 text-sm uppercase tracking-wider">
                Expertise
              </h3>
              <div className="flex flex-wrap gap-2">
                {userData.expertise.map((skill, index) => (
                  <motion.span
                    key={skill}
                    className="px-3 py-1 bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 text-sm rounded-full border border-gray-200 dark:border-gray-800"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                    whileHover={{
                      scale: 1.05,
                      backgroundColor: '#000',
                      color: '#fff',
                    }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            {/* KYC Status Card */}
            <motion.div
              className={`border rounded-lg p-6 ${
                userData.kycVerified
                  ? 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800'
                  : 'bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800'
              }`}
              variants={cardVariants}
              whileHover="hover"
            >
              <div className="flex items-center gap-3 mb-3">
                {userData.kycVerified ? (
                  <CheckCircle2 className="w-6 h-6 text-green-600 dark:text-green-400" />
                ) : (
                  <AlertTriangle className="w-6 h-6 text-red-600 dark:text-red-400" />
                )}
                <h3 className="font-semibold text-black dark:text-white text-sm uppercase tracking-wider">
                  KYC Status
                </h3>
              </div>
              <p
                className={`text-sm ${
                  userData.kycVerified
                    ? 'text-green-700 dark:text-green-300'
                    : 'text-red-700 dark:text-red-300'
                }`}
              >
                {userData.kycVerified
                  ? 'Your identity has been successfully verified through our KYC process.'
                  : 'Complete KYC verification to access all platform features.'}
              </p>

              {!userData.kycVerified && (
                <motion.button
                  onClick={handleCompleteKYC}
                  className="w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded-lg font-medium flex items-center justify-center gap-2 mt-4 transition-all"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <AlertTriangle className="w-4 h-4" />
                  Complete KYC
                </motion.button>
              )}
            </motion.div>
          </div>

          {/* Main Content */}
          <div className="xl:col-span-3 space-y-8">
            {/* About Section */}
            <motion.div
              className="bg-white dark:bg-black border border-gray-200 dark:border-gray-800 rounded-lg p-8"
              variants={cardVariants}
              whileHover="hover"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-black dark:bg-white rounded flex items-center justify-center">
                  <FileText className="w-4 h-4 text-white dark:text-black" />
                </div>
                <h2 className="text-xl font-semibold text-black dark:text-white">
                  Professional Summary
                </h2>
              </div>
              <motion.p
                className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg"
                variants={itemVariants}
              >
                {userData.about}
              </motion.p>
            </motion.div>

            {/* Experience Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Current Role */}
              <motion.div
                className="bg-white dark:bg-black border border-gray-200 dark:border-gray-800 rounded-lg p-6"
                variants={cardVariants}
                whileHover="hover"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-black dark:bg-white rounded-lg flex items-center justify-center">
                    <Briefcase className="w-5 h-5 text-white dark:text-black" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-black dark:text-white">
                      Current Role
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {userData.work}
                    </p>
                  </div>
                </div>
                <motion.div
                  className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-500 mt-4"
                  variants={itemVariants}
                >
                  <Calendar className="w-4 h-4" />
                  Since {userData.joinDate}
                </motion.div>
              </motion.div>

              {/* Business */}
              <motion.div
                className="bg-white dark:bg-black border border-gray-200 dark:border-gray-800 rounded-lg p-6"
                variants={cardVariants}
                whileHover="hover"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-black dark:bg-white rounded-lg flex items-center justify-center">
                    <Building className="w-5 h-5 text-white dark:text-black" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-black dark:text-white">
                      Business
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {userData.business}
                    </p>
                  </div>
                </div>
                <motion.div
                  className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-500 mt-4"
                  variants={itemVariants}
                >
                  <Target className="w-4 h-4" />
                  Design Studio
                </motion.div>
              </motion.div>
            </div>

            {/* Verification Status */}
            <motion.div
              className={`rounded-lg p-8 border ${
                userData.kycVerified
                  ? 'bg-black dark:bg-white border-black dark:border-white'
                  : 'bg-red-600 border-red-600'
              }`}
              variants={cardVariants}
              whileHover="hover"
            >
              <div className="flex items-center gap-4">
                <motion.div
                  animate={
                    userData.kycVerified ? { rotate: [0, 10, -10, 0] } : {}
                  }
                  transition={{
                    duration: 2,
                    repeat: userData.kycVerified ? Infinity : 0,
                    repeatType: 'reverse',
                  }}
                >
                  {userData.kycVerified ? (
                    <Award className="w-8 h-8 text-white dark:text-black" />
                  ) : (
                    <AlertTriangle className="w-8 h-8 text-white" />
                  )}
                </motion.div>
                <div>
                  <h3
                    className={`text-xl font-semibold mb-2 ${
                      userData.kycVerified
                        ? 'text-white dark:text-black'
                        : 'text-white'
                    }`}
                  >
                    {userData.kycVerified
                      ? 'Fully Verified Professional'
                      : 'Action Required: KYC Verification'}
                  </h3>
                  <p
                    className={
                      userData.kycVerified
                        ? 'text-gray-300 dark:text-gray-700'
                        : 'text-red-100'
                    }
                  >
                    {userData.kycVerified
                      ? 'Identity authenticated and verified through national documentation. Full professional background validated.'
                      : 'Complete KYC verification to unlock all professional features and build trust with clients.'}
                  </p>

                  {!userData.kycVerified && (
                    <motion.button
                      onClick={handleCompleteKYC}
                      className="bg-white text-red-600 px-6 py-2 rounded-lg font-medium flex items-center gap-2 mt-4 shadow-lg hover:shadow-xl transition-all"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <AlertTriangle className="w-4 h-4" />
                      Start KYC Process
                    </motion.button>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.main>
  );
}
