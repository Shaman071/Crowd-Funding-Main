import React, { useState } from 'react';
import { Search, Filter, SlidersHorizontal } from 'lucide-react';
import ProjectCard from '../components/Projects/ProjectCard';
import ProjectFilters from '../components/Projects/ProjectFilters';

const ProjectsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('trending');
  const [showFilters, setShowFilters] = useState(false);

  const projects = [
    {
      id: 1,
      title: 'Smart Home Energy System',
      description: 'Revolutionary energy management system that reduces electricity bills by up to 60%.',
      image: 'https://images.pexels.com/photos/1586973/pexels-photo-1586973.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Technology',
      raised: 145000,
      goal: 200000,
      backers: 523,
      daysLeft: 15,
      creator: 'TechInnovate Inc.',
      featured: true,
    },
    {
      id: 2,
      title: 'Artisan Coffee Roastery',
      description: 'Building the first carbon-neutral coffee roastery in our community.',
      image: 'https://images.pexels.com/photos/894695/pexels-photo-894695.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Food & Beverage',
      raised: 8500,
      goal: 15000,
      backers: 127,
      daysLeft: 22,
      creator: 'Local Coffee Co.',
      featured: false,
    },
    {
      id: 3,
      title: 'Interactive Learning App',
      description: 'Gamified education platform for children with special learning needs.',
      image: 'https://images.pexels.com/photos/5905709/pexels-photo-5905709.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Education',
      raised: 62000,
      goal: 75000,
      backers: 445,
      daysLeft: 9,
      creator: 'EduTech Solutions',
      featured: true,
    },
    {
      id: 4,
      title: 'Sustainable Fashion Line',
      description: 'Eco-friendly clothing made from recycled ocean plastic and organic materials.',
      image: 'https://images.pexels.com/photos/1020585/pexels-photo-1020585.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Fashion',
      raised: 28000,
      goal: 40000,
      backers: 234,
      daysLeft: 18,
      creator: 'GreenThread',
      featured: false,
    },
    {
      id: 5,
      title: 'Urban Farming Initiative',
      description: 'Hydroponic farming system for growing fresh produce in urban environments.',
      image: 'https://images.pexels.com/photos/1105019/pexels-photo-1105019.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Agriculture',
      raised: 35000,
      goal: 50000,
      backers: 189,
      daysLeft: 25,
      creator: 'Urban Green',
      featured: false,
    },
    {
      id: 6,
      title: 'Mental Health Support App',
      description: 'AI-powered mental wellness platform connecting users with certified therapists.',
      image: 'https://images.pexels.com/photos/7176319/pexels-photo-7176319.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Health & Wellness',
      raised: 98000,
      goal: 120000,
      backers: 612,
      daysLeft: 12,
      creator: 'MindCare Tech',
      featured: true,
    },
  ];

  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || project.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const sortedProjects = [...filteredProjects].sort((a, b) => {
    switch (sortBy) {
      case 'trending':
        return b.backers - a.backers;
      case 'newest':
        return a.id - b.id;
      case 'ending':
        return a.daysLeft - b.daysLeft;
      case 'funded':
        return (b.raised / b.goal) - (a.raised / a.goal);
      default:
        return 0;
    }
  });

  return (
    <div className="min-h-screen bg-gray-50 pt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Discover <span className="gradient-text">Projects</span>
          </h1>
          <p className="text-xl text-gray-600">
            Support innovative ideas from creators around the world
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-2xl shadow-sm p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option>All Categories</option>
              <option>Technology</option>
              <option>Education</option>
              <option>Food & Beverage</option>
              <option>Fashion</option>
              <option>Agriculture</option>
              <option>Health & Wellness</option>
            </select>

            {/* Sort */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="trending">Most Popular</option>
              <option value="newest">Newest</option>
              <option value="ending">Ending Soon</option>
              <option value="funded">Most Funded</option>
            </select>

            {/* Advanced Filters Toggle */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center space-x-2 px-4 py-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <SlidersHorizontal className="h-5 w-5" />
              <span>Filters</span>
            </button>
          </div>

          {/* Advanced Filters */}
          {showFilters && (
            <div className="mt-6 pt-6 border-t border-gray-200">
              <ProjectFilters />
            </div>
          )}
        </div>

        {/* Results */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing {sortedProjects.length} of {projects.length} projects
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {sortedProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Load More */}
        {sortedProjects.length > 0 && (
          <div className="text-center mb-12">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg border-2 border-blue-600 font-medium hover:bg-blue-50 transition-colors">
              Load More Projects
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectsPage;