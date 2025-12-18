'use client';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Textarea } from '@/components/ui/textarea';
import { motion } from 'framer-motion';
import {
  AlertTriangle,
  Award,
  Briefcase,
  Building,
  Calendar,
  Camera,
  CheckCircle2,
  CircleAlert,
  FileText,
  Mail,
  MapPin,
  Pencil,
  Phone,
  ShieldAlert,
  ShieldCheck,
  Target,
  UserCheck,
  X,
} from 'lucide-react';
import { useEffect, useState } from 'react';

// Demo user data with KYC status
const initialUserData = {
  name: 'Asya Khan g',
  age: 28,
  title: 'Product Design Director',
  email: 'asya.khan@studio.com',
  phone: '+92 300 1234567',
  address: 'Karachi, Pakistan',
  nationalId: '37402-1234567-1',
  isVerified: true,
  kycVerified: false,
  business: 'Khan Creative Studio',
  work: 'Senior Product Designer',
  bannerImage: 'professional-banner.png',
  profileImage: 'professional-profile.png',
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
  const [userData, setUserData] = useState(initialUserData);
  const [showKYCAlert, setShowKYCAlert] = useState(
    !initialUserData.kycVerified
  );
  const [followBtnAlert, setFollowBtnAlert] = useState('');
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editForm, setEditForm] = useState(initialUserData);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleEditChange = e => {
    const { name, value } = e.target;
    setEditForm(prev => ({ ...prev, [name]: value }));
  };

  const handleStatsChange = e => {
    const { name, value } = e.target;
    setEditForm(prev => ({
      ...prev,
      stats: { ...prev.stats, [name]: value },
    }));
  };

  const handleExpertiseChange = e => {
    const value = e.target.value;
    setEditForm(prev => ({
      ...prev,
      expertise: value.split(',').map(item => item.trim()),
    }));
  };

  const handleSaveProfile = () => {
    setUserData(editForm);
    setIsDialogOpen(false);
  };

  const handleCompleteKYC = () => {
    console.log('Complete KYC clicked');
  };

  const handleImageUpload = (e, type) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = event => {
        if (type === 'banner') {
          setEditForm(prev => ({ ...prev, bannerImage: event.target.result }));
        } else {
          setEditForm(prev => ({ ...prev, profileImage: event.target.result }));
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const followBtn = () => {
    if (!userData.kycVerified) {
      setFollowBtnAlert(`Are You sure? ${userData.name} is not verified`);
    }
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
          className="bg-red-50 dark:bg-red-900/20 border-b  border-red-200 dark:border-red-800"
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
                <X size={20} />
              </button>
            </div>
          </div>
        </motion.div>
      )}

      {/* Banner Image Section */}
      <motion.div
        className="h-64 bg-white dark:bg-black    relative overflow-hidden"
        variants={itemVariants}
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${userData.bannerImage})`,
          }}
        />

        {/* Banner Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

        {/* Banner Edit Button */}

        <Input
          id="banner-upload"
          type="file"
          accept="image/*"
          onChange={e => handleImageUpload(e, 'banner')}
          className="hidden"
        />

        {/* Update Profile Button */}
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <motion.button
              onClick={() => setEditForm(userData)}
              className="absolute top-6 right-6 bg-white dark:bg-black/80 dark:hover:bg-black dark:text-white px-4 py-2 shadow-2xl cursor-pointer rounded-full border border-gray-300 dark:border-gray-700 flex hover:bg-white/90 items-center gap-2 hover:shadow-xl transition-all text-black/70 hover:text-black"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              variants={itemVariants}
            >
              <Pencil size={17} />
              <span className="text-sm">Edit Profile</span>
            </motion.button>
          </DialogTrigger>
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-hidden bg-white dark:bg-black border-gray-200 dark:border-gray-800 p-0">
            <DialogHeader className="px-6 pt-6 pb-4 border-b border-gray-200 dark:border-gray-800">
              <DialogTitle className="text-2xl font-light text-black dark:text-white">
                Edit Professional Profile
              </DialogTitle>
              <DialogDescription className="text-gray-500 dark:text-gray-400">
                Update your professional information and images
              </DialogDescription>
            </DialogHeader>

            <ScrollArea className="h-[60vh] px-6">
              <div className="space-y-6 py-4">
                {/* Image Upload Section */}
                <div className="space-y-4">
                  <Label className="text-black dark:text-white font-medium">
                    Profile Images
                  </Label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Banner Image Upload */}
                    <div className="space-y-3">
                      <Label className="text-sm text-gray-600 dark:text-gray-400">
                        Banner Image
                      </Label>
                      <div className="relative group">
                        <div
                          className="h-32 rounded-lg border-2 border-dashed border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 flex items-center justify-center overflow-hidden"
                          style={{
                            backgroundImage: `url(${editForm.bannerImage})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                          }}
                        >
                          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all flex items-center justify-center">
                            <Camera className="w-8 h-8 text-white/70 group-hover:text-white" />
                          </div>
                        </div>
                        <Input
                          type="file"
                          accept="image/*"
                          onChange={e => handleImageUpload(e, 'banner')}
                          className="absolute inset-0 opacity-0 cursor-pointer"
                        />
                      </div>
                    </div>

                    {/* Profile Image Upload */}
                    <div className="space-y-3">
                      <Label className="text-sm text-gray-600 dark:text-gray-400">
                        Profile Image
                      </Label>
                      <div className="relative group flex justify-center">
                        <div
                          className="h-32 w-32 rounded-full border-2 border-dashed border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 flex items-center justify-center overflow-hidden"
                          style={{
                            backgroundImage: `url(${editForm.profileImage})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                          }}
                        >
                          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all flex items-center justify-center rounded-full">
                            <Camera className="w-6 h-6 text-white/70 group-hover:text-white" />
                          </div>
                        </div>
                        <Input
                          type="file"
                          accept="image/*"
                          onChange={e => handleImageUpload(e, 'profile')}
                          className="absolute inset-0 opacity-0 cursor-pointer rounded-full"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Personal Information */}
                <div className="space-y-4">
                  <Label className="text-black dark:text-white font-medium">
                    Personal Information
                  </Label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label
                        htmlFor="name"
                        className="text-sm text-gray-600 dark:text-gray-400"
                      >
                        Full Name
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        value={editForm.name}
                        onChange={handleEditChange}
                        className="bg-white dark:bg-gray-900 text-black dark:text-white border-gray-200 dark:border-gray-700"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label
                        htmlFor="title"
                        className="text-sm text-gray-600 dark:text-gray-400"
                      >
                        Job Title
                      </Label>
                      <Input
                        id="title"
                        name="title"
                        value={editForm.title}
                        onChange={handleEditChange}
                        className="bg-white dark:bg-gray-900 text-black dark:text-white border-gray-200 dark:border-gray-700"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label
                        htmlFor="email"
                        className="text-sm text-gray-600 dark:text-gray-400"
                      >
                        Email
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        value={editForm.email}
                        onChange={handleEditChange}
                        className="bg-white dark:bg-gray-900 text-black dark:text-white border-gray-200 dark:border-gray-700"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label
                        htmlFor="phone"
                        className="text-sm text-gray-600 dark:text-gray-400"
                      >
                        Phone
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        value={editForm.phone}
                        onChange={handleEditChange}
                        className="bg-white dark:bg-gray-900 text-black dark:text-white border-gray-200 dark:border-gray-700"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label
                      htmlFor="address"
                      className="text-sm text-gray-600 dark:text-gray-400"
                    >
                      Address
                    </Label>
                    <Input
                      id="address"
                      name="address"
                      value={editForm.address}
                      onChange={handleEditChange}
                      className="bg-white dark:bg-gray-900 text-black dark:text-white border-gray-200 dark:border-gray-700"
                    />
                  </div>
                </div>

                {/* Professional Information */}
                <div className="space-y-4">
                  <Label className="text-black dark:text-white font-medium">
                    Professional Information
                  </Label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label
                        htmlFor="business"
                        className="text-sm text-gray-600 dark:text-gray-400"
                      >
                        Business Name
                      </Label>
                      <Input
                        id="business"
                        name="business"
                        value={editForm.business}
                        onChange={handleEditChange}
                        className="bg-white dark:bg-gray-900 text-black dark:text-white border-gray-200 dark:border-gray-700"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label
                        htmlFor="work"
                        className="text-sm text-gray-600 dark:text-gray-400"
                      >
                        Current Role
                      </Label>
                      <Input
                        id="work"
                        name="work"
                        value={editForm.work}
                        onChange={handleEditChange}
                        className="bg-white dark:bg-gray-900 text-black dark:text-white border-gray-200 dark:border-gray-700"
                      />
                    </div>
                  </div>
                </div>

                {/* Bio & About */}
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label
                      htmlFor="bio"
                      className="text-black dark:text-white font-medium"
                    >
                      Bio
                    </Label>
                    <Textarea
                      id="bio"
                      name="bio"
                      value={editForm.bio}
                      onChange={handleEditChange}
                      className="h-20 bg-white dark:bg-gray-900 text-black dark:text-white border-gray-200 dark:border-gray-700 resize-none"
                      placeholder="Short professional bio..."
                    />
                  </div>

                  <div className="space-y-2">
                    <Label
                      htmlFor="about"
                      className="text-black dark:text-white font-medium"
                    >
                      About
                    </Label>
                    <Textarea
                      id="about"
                      name="about"
                      value={editForm.about}
                      onChange={handleEditChange}
                      className="h-32 bg-white dark:bg-gray-900 text-black dark:text-white border-gray-200 dark:border-gray-700 resize-none"
                      placeholder="Detailed professional summary..."
                    />
                  </div>
                </div>

                {/* Professional Stats */}
                <div className="space-y-4">
                  <Label className="text-black dark:text-white font-medium">
                    Professional Stats
                  </Label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {Object.keys(editForm.stats).map(key => (
                      <div key={key} className="space-y-2">
                        <Label
                          htmlFor={`stat-${key}`}
                          className="text-xs capitalize text-gray-500"
                        >
                          {key}
                        </Label>
                        <Input
                          id={`stat-${key}`}
                          name={key}
                          value={editForm.stats[key]}
                          onChange={handleStatsChange}
                          className="bg-white dark:bg-gray-900 text-black dark:text-white border-gray-200 dark:border-gray-700"
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Expertise */}
                <div className="space-y-4">
                  <Label
                    htmlFor="expertise"
                    className="text-black dark:text-white font-medium"
                  >
                    Areas of Expertise
                  </Label>
                  <Textarea
                    id="expertise"
                    name="expertise"
                    value={editForm.expertise.join(', ')}
                    onChange={handleExpertiseChange}
                    className="bg-white dark:bg-gray-900 text-black dark:text-white border-gray-200 dark:border-gray-700 resize-none"
                    placeholder="Design Systems, UX Strategy, Team Leadership, Product Scaling"
                  />
                  <p className="text-xs text-gray-500">
                    Separate each expertise with a comma
                  </p>
                </div>
              </div>
            </ScrollArea>

            <DialogFooter className="px-6 py-4 border-t border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/50">
              <Button
                variant="outline"
                onClick={() => setIsDialogOpen(false)}
                className="text-black dark:text-white border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                Cancel
              </Button>
              <Button
                onClick={handleSaveProfile}
                className="bg-black text-white dark:bg-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
              >
                Save Changes
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </motion.div>

      <div className="px-6 lg:px-8 max-w-6xl mx-auto -mt-20">
        {/* Profile Header */}
        <motion.div className="relative mb-12" variants={cardVariants}>
          <div className="flex flex-col lg:flex-row items-start gap-8">
            {/* Profile Image with Edit */}
            <motion.div
              className="relative flex-shrink-0 group"
              whileHover={{ scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <div className="w-32 h-32 lg:w-40 lg:h-40 rounded-full bg-white dark:bg-black border-4 border-white dark:border-black shadow-2xl overflow-hidden">
                <img
                  src={userData.profileImage}
                  alt={userData.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Profile Image Edit Overlay */}
              <motion.button
                className="absolute bottom-2 right-2 bg-black/70 text-white p-2 rounded-full border border-white/30 opacity-0 group-hover:opacity-100 transition-all duration-200"
                whileHover={{ scale: 1.1 }}
                onClick={() =>
                  document.getElementById('profile-upload')?.click()
                }
              >
                <Camera size={16} />
              </motion.button>
              <Input
                id="profile-upload"
                type="file"
                accept="image/*"
                onChange={e => handleImageUpload(e, 'profile')}
                className="hidden"
              />
            </motion.div>

            {/* Profile Info */}
            <div className="flex-1 space-y-4">
              <motion.div variants={itemVariants}>
                <h1 className="text-4xl flex lg:mt-20 lg:text-5xl font-light text-black dark:text-white tracking-tight">
                  {userData.name}
                  <motion.div
                    className="ml-2 lg:mt-4 mt-2"
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 0.5, type: 'spring' }}
                  >
                    {userData.kycVerified && userData.isVerified ? (
                      <ShieldCheck className="w-7 h-7 text-green-600 dark:text-green-400" />
                    ) : (
                      <ShieldAlert className="w-7 h-7 text-red-600" />
                    )}
                  </motion.div>
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

              <Button
                variant={'ghost'}
                className={`${
                  !userData.kycVerified
                    ? 'bg-red-700 text-white rounded-full hover:bg-red-800'
                    : 'cursor-pointer px-6 hover:bg-blue-600 rounded-full bg-blue-500 hover:shadow-lg shadow-sm transition-all text-white font-semibold'
                }`}
                onClick={followBtn}
              >
                Follow {followBtnAlert && <CircleAlert className="ml-2" />}
              </Button>

              {followBtnAlert && (
                <div className="text-red-800 px-4 py-2 bg-red-100 border font-semibold border-red-300 rounded-lg text-sm">
                  {followBtnAlert}
                </div>
              )}

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
