import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Heart, Share2, Flag, Users, Calendar, Target, Award } from 'lucide-react';
import PaymentModal from '../components/Payment/PaymentModal';
import ProjectUpdates from '../components/Project/ProjectUpdates';
import ProjectComments from '../components/Project/ProjectComments';

const ProjectDetailPage = () => {
  const { id } = useParams();
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [selectedReward, setSelectedReward] = useState<any>(null);
  const [activeTab, setActiveTab] = useState('story');

  // Mock project data
  const project = {
    id: 1,
    title: 'EcoTech Water Purifier',
    description: 'Revolutionary water purification system using solar energy and AI optimization to provide clean drinking water for communities worldwide.',
    longDescription: `
      <h3>The Problem</h3>
      <p>Over 2 billion people worldwide lack access to safely managed drinking water at home. Traditional water purification systems are expensive, energy-intensive, and often require complex maintenance.</p>
      
      <h3>Our Solution</h3>
      <p>The EcoTech Water Purifier combines cutting-edge solar technology with AI-powered optimization to deliver clean, safe drinking water efficiently and sustainably.</p>
      
      <h3>Key Features</h3>
      <ul>
        <li>Solar-powered operation with battery backup</li>
        <li>AI-driven purification optimization</li>
        <li>Mobile app monitoring and control</li>
        <li>Low maintenance design</li>
        <li>Scalable for communities of all sizes</li>
      </ul>
    `,
    image: 'https://images.pexels.com/photos/1586973/pexels-photo-1586973.jpeg?auto=compress&cs=tinysrgb&w=1200',
    category: 'Technology',
    raised: 85000,
    goal: 100000,
    backers: 342,
    daysLeft: 12,
    creator: {
      name: 'Dr. Sarah Chen',
      avatar: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=200',
      bio: 'Environmental Engineer with 15+ years experience in water purification technology',
      projects: 3,
    },
    rewards: [
      {
        id: 1,
        title: 'Early Bird Support',
        amount: 25,
        description: 'Get exclusive updates and a thank you email',
        delivery: 'March 2025',
        available: true,
        backers: 45,
      },
      {
        id: 2,
        title: 'EcoTech Starter Kit',
        amount: 150,
        description: 'Complete water testing kit with pH strips and quality guides',
        delivery: 'April 2025',
        available: true,
        backers: 89,
      },
      {
        id: 3,
        title: 'Home Purifier Unit',
        amount: 500,
        description: 'Full EcoTech water purifier for home use (up to 4 people)',
        delivery: 'June 2025',
        available: true,
        backers: 156,
      },
      {
        id: 4,
        title: 'Community System',
        amount: 2500,
        description: 'Large-scale system for communities (up to 100 people)',
        delivery: 'August 2025',
        available: true,
        backers: 12,
      },
    ],
  };

  const progressPercentage = Math.min((project.raised / project.goal) * 100, 100);

  const handleBackProject = (reward: any) => {
    setSelectedReward(reward);
    setShowPaymentModal(true);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Project Media */}
            <div>
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-96 object-cover rounded-2xl shadow-lg"
              />
            </div>

            {/* Project Info */}
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                  {project.category}
                </span>
                <div className="flex items-center space-x-2 ml-auto">
                  <button className="p-2 text-gray-600 hover:text-red-500 transition-colors">
                    <Heart className="h-5 w-5" />
                  </button>
                  <button className="p-2 text-gray-600 hover:text-blue-500 transition-colors">
                    <Share2 className="h-5 w-5" />
                  </button>
                  <button className="p-2 text-gray-600 hover:text-orange-500 transition-colors">
                    <Flag className="h-5 w-5" />
                  </button>
                </div>
              </div>

              <h1 className="text-4xl font-bold text-gray-900 mb-4">{project.title}</h1>
              <p className="text-xl text-gray-600 mb-6">{project.description}</p>

              {/* Funding Progress */}
              <div className="mb-6">
                <div className="flex justify-between text-sm text-gray-500 mb-2">
                  <span>${project.raised.toLocaleString()} raised</span>
                  <span>{Math.round(progressPercentage)}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <motion.div
                    className="progress-bar h-3 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${progressPercentage}%` }}
                    transition={{ duration: 1, delay: 0.2 }}
                  />
                </div>
                <div className="mt-2 text-sm text-gray-500">
                  of ${project.goal.toLocaleString()} goal
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <Users className="h-6 w-6 text-blue-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900">{project.backers}</div>
                  <div className="text-sm text-gray-500">Backers</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <Calendar className="h-6 w-6 text-green-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900">{project.daysLeft}</div>
                  <div className="text-sm text-gray-500">Days Left</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <Target className="h-6 w-6 text-orange-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900">{Math.round(progressPercentage)}%</div>
                  <div className="text-sm text-gray-500">Funded</div>
                </div>
              </div>

              {/* Creator Info */}
              <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                <img
                  src={project.creator.avatar}
                  alt={project.creator.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{project.creator.name}</h4>
                  <p className="text-sm text-gray-600">{project.creator.projects} projects created</p>
                </div>
                <button className="ml-auto bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors">
                  Contact Creator
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Tabs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-sm">
              {/* Tab Navigation */}
              <div className="border-b border-gray-200">
                <nav className="flex space-x-8 px-6">
                  {[
                    { id: 'story', label: 'Story' },
                    { id: 'updates', label: 'Updates' },
                    { id: 'comments', label: 'Comments' },
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                        activeTab === tab.id
                          ? 'border-blue-500 text-blue-600'
                          : 'border-transparent text-gray-500 hover:text-gray-700'
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </nav>
              </div>

              {/* Tab Content */}
              <div className="p-6">
                {activeTab === 'story' && (
                  <div className="prose max-w-none">
                    <div dangerouslySetInnerHTML={{ __html: project.longDescription }} />
                  </div>
                )}
                {activeTab === 'updates' && <ProjectUpdates />}
                {activeTab === 'comments' && <ProjectComments />}
              </div>
            </div>
          </div>

          {/* Rewards Sidebar */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-sm p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Support This Project</h3>
              
              <div className="space-y-4">
                {project.rewards.map((reward) => (
                  <div
                    key={reward.id}
                    className="border border-gray-200 rounded-lg p-4 hover:border-blue-300 transition-colors"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold text-gray-900">{reward.title}</h4>
                      <span className="text-lg font-bold text-blue-600">${reward.amount}</span>
                    </div>
                    <p className="text-sm text-gray-600 mb-3">{reward.description}</p>
                    <div className="flex justify-between items-center text-xs text-gray-500 mb-3">
                      <span>Delivery: {reward.delivery}</span>
                      <span>{reward.backers} backers</span>
                    </div>
                    <button
                      onClick={() => handleBackProject(reward)}
                      className="w-full bg-gradient-to-r from-blue-600 to-green-600 text-white py-2 rounded-lg font-medium hover:from-blue-700 hover:to-green-700 transition-all duration-200"
                    >
                      Select Reward
                    </button>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <button
                  onClick={() => handleBackProject({ id: 0, title: 'Custom Amount', amount: 0 })}
                  className="w-full bg-white border-2 border-blue-600 text-blue-600 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors"
                >
                  Back Without Reward
                </button>
              </div>
            </div>

            {/* Achievement Badge */}
            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-6 text-center">
              <Award className="h-8 w-8 text-orange-500 mx-auto mb-3" />
              <h4 className="font-semibold text-gray-900 mb-2">Featured Project</h4>
              <p className="text-sm text-gray-600">
                This project has been selected by our team for its innovation and impact potential.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Payment Modal */}
      {showPaymentModal && (
        <PaymentModal
          isOpen={showPaymentModal}
          onClose={() => setShowPaymentModal(false)}
          project={project}
          reward={selectedReward}
        />
      )}
    </div>
  );
};

export default ProjectDetailPage;