import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, Users, Calendar, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const FeaturedProjects = () => {
  const projects = [
    {
      id: 1,
      title: 'EcoTech Water Purifier',
      description: 'Revolutionary water purification system using solar energy and AI optimization.',
      image: 'https://images.pexels.com/photos/1586973/pexels-photo-1586973.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Technology',
      raised: 85000,
      goal: 100000,
      backers: 342,
      daysLeft: 12,
    },
    {
      id: 2,
      title: 'Community Garden Initiative',
      description: 'Building sustainable community gardens in urban areas to promote local food production.',
      image: 'https://images.pexels.com/photos/1105019/pexels-photo-1105019.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Environment',
      raised: 12500,
      goal: 25000,
      backers: 156,
      daysLeft: 28,
    },
    {
      id: 3,
      title: 'Kids Coding Academy',
      description: 'Teaching programming and digital literacy to underserved children in rural communities.',
      image: 'https://images.pexels.com/photos/5905709/pexels-photo-5905709.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Education',
      raised: 42000,
      goal: 50000,
      backers: 289,
      daysLeft: 8,
    },
  ];

  // 👇 track liked state for each project
  const [likedProjects, setLikedProjects] = useState<boolean[]>(
    Array(projects.length).fill(false)
  );

  const toggleLike = (index: number) => {
    setLikedProjects((prev) =>
      prev.map((liked, i) => (i === index ? !liked : liked))
    );
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover amazing projects from creators around the world that need your support
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden card-hover"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-gray-700">
                    {project.category}
                  </span>
                </div>

                {/* ❤️ Toggle Heart */}
                <button
                  onClick={() => toggleLike(index)}
                  className="absolute top-4 right-4 p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-colors"
                >
                  <Heart
                    className={`h-5 w-5 transition-colors ${
                      likedProjects[index]
                        ? 'text-red-500 fill-red-500'
                        : 'text-gray-600 hover:text-red-500'
                    }`}
                  />
                </button>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>

                <div className="mb-4">
                  <div className="flex justify-between text-sm text-gray-500 mb-2">
                    <span>${project.raised.toLocaleString()} raised</span>
                    <span>{Math.round((project.raised / project.goal) * 100)}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="progress-bar h-2 rounded-full bg-green-500"
                      style={{
                        width: `${Math.min((project.raised / project.goal) * 100, 100)}%`,
                      }}
                    ></div>
                  </div>
                </div>

                <div className="flex items-center justify-between text-sm text-gray-500 mb-6">
                  <div className="flex items-center space-x-1">
                    <Users className="h-4 w-4" />
                    <span>{project.backers} backers</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-4 w-4" />
                    <span>{project.daysLeft} days left</span>
                  </div>
                </div>

                <Link
                  to={`/project/${project.id}`}
                  className="w-full bg-gradient-to-r from-blue-600 to-green-600 text-white px-6 py-3 rounded-lg font-medium hover:from-blue-700 hover:to-green-700 transition-all duration-200 flex items-center justify-center space-x-2 group"
                >
                  <span>Back This Project</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Link
            to="/projects"
            className="inline-flex items-center space-x-2 text-blue-600 font-medium hover:text-blue-700 transition-colors group"
          >
            <span>Explore All Projects</span>
            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
