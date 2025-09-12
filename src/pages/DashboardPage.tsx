import React, { useState } from 'react';
import { BarChart, Users, TrendingUp, DollarSign, Plus, Eye, Edit } from 'lucide-react';

const DashboardPage = () => {
  const [activeTab, setActiveTab] = useState('projects');

  const userStats = {
    totalRaised: 245000,
    totalBackers: 1234,
    projectsCreated: 3,
    successRate: 85,
  };

  const projects = [
    {
      id: 1,
      title: 'EcoTech Water Purifier',
      status: 'active',
      raised: 85000,
      goal: 100000,
      backers: 342,
      daysLeft: 12,
    },
    {
      id: 2,
      title: 'Smart Learning Platform',
      status: 'successful',
      raised: 120000,
      goal: 80000,
      backers: 567,
      daysLeft: 0,
    },
    {
      id: 3,
      title: 'Community Garden Kit',
      status: 'draft',
      raised: 0,
      goal: 25000,
      backers: 0,
      daysLeft: 30,
    },
  ];

  const recentBackings = [
    {
      id: 1,
      project: 'Solar Power Initiative',
      amount: 150,
      date: '2025-01-15',
      creator: 'GreenEnergy Co.',
    },
    {
      id: 2,
      project: 'Educational App for Kids',
      amount: 75,
      date: '2025-01-12',
      creator: 'EduTech Solutions',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Your <span className="gradient-text">Dashboard</span>
          </h1>
          <p className="text-xl text-gray-600">
            Manage your projects and track your impact
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-2xl shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <DollarSign className="h-8 w-8 text-green-600" />
              <span className="text-2xl font-bold text-green-600">
                ${userStats.totalRaised.toLocaleString()}
              </span>
            </div>
            <p className="text-gray-600 font-medium">Total Raised</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <Users className="h-8 w-8 text-blue-600" />
              <span className="text-2xl font-bold text-blue-600">
                {userStats.totalBackers.toLocaleString()}
              </span>
            </div>
            <p className="text-gray-600 font-medium">Total Backers</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <BarChart className="h-8 w-8 text-purple-600" />
              <span className="text-2xl font-bold text-purple-600">
                {userStats.projectsCreated}
              </span>
            </div>
            <p className="text-gray-600 font-medium">Projects Created</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <TrendingUp className="h-8 w-8 text-orange-600" />
              <span className="text-2xl font-bold text-orange-600">
                {userStats.successRate}%
              </span>
            </div>
            <p className="text-gray-600 font-medium">Success Rate</p>
          </div>
        </div>

        {/* Content Tabs */}
        <div className="bg-white rounded-2xl shadow-sm">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8 px-6">
              {[
                { id: 'projects', label: 'My Projects' },
                { id: 'backed', label: 'Backed Projects' },
                { id: 'analytics', label: 'Analytics' },
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

          <div className="p-6">
            {activeTab === 'projects' && (
              <div>
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-xl font-bold text-gray-900">My Projects</h3>
                  <button className="bg-gradient-to-r from-blue-600 to-green-600 text-white px-6 py-2 rounded-lg font-medium hover:from-blue-700 hover:to-green-700 transition-all duration-200 flex items-center space-x-2">
                    <Plus className="h-4 w-4" />
                    <span>New Project</span>
                  </button>
                </div>

                <div className="space-y-4">
                  {projects.map((project) => (
                    <div key={project.id} className="border border-gray-200 rounded-lg p-6">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h4 className="text-lg font-semibold text-gray-900">{project.title}</h4>
                          <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium mt-1 ${
                            project.status === 'active' ? 'bg-green-100 text-green-800' :
                            project.status === 'successful' ? 'bg-blue-100 text-blue-800' :
                            'bg-gray-100 text-gray-800'
                          }`}>
                            {project.status}
                          </span>
                        </div>
                        <div className="flex space-x-2">
                          <button className="p-2 text-gray-600 hover:text-blue-600 transition-colors">
                            <Eye className="h-4 w-4" />
                          </button>
                          <button className="p-2 text-gray-600 hover:text-blue-600 transition-colors">
                            <Edit className="h-4 w-4" />
                          </button>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                        <div>
                          <p className="text-sm text-gray-500">Raised</p>
                          <p className="font-semibold">${project.raised.toLocaleString()}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Goal</p>
                          <p className="font-semibold">${project.goal.toLocaleString()}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Backers</p>
                          <p className="font-semibold">{project.backers}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Days Left</p>
                          <p className="font-semibold">{project.daysLeft}</p>
                        </div>
                      </div>

                      {project.status === 'active' && (
                        <div className="mt-4">
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div
                              className="progress-bar h-2 rounded-full"
                              style={{ width: `${Math.min((project.raised / project.goal) * 100, 100)}%` }}
                            ></div>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'backed' && (
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-6">Projects You've Backed</h3>
                <div className="space-y-4">
                  {recentBackings.map((backing) => (
                    <div key={backing.id} className="border border-gray-200 rounded-lg p-6">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="text-lg font-semibold text-gray-900">{backing.project}</h4>
                          <p className="text-gray-600">by {backing.creator}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-lg font-bold text-green-600">${backing.amount}</p>
                          <p className="text-sm text-gray-500">{backing.date}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'analytics' && (
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-6">Analytics</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-4">Funding Progress</h4>
                    <div className="h-48 flex items-center justify-center text-gray-500">
                      Chart visualization would go here
                    </div>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-4">Backer Growth</h4>
                    <div className="h-48 flex items-center justify-center text-gray-500">
                      Chart visualization would go here
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;