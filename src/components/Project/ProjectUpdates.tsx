import React from 'react';
import { Calendar, Image, Video } from 'lucide-react';

const ProjectUpdates = () => {
  const updates = [
    {
      id: 1,
      title: 'Prototype Testing Complete!',
      date: '2025-01-15',
      content: 'We\'ve successfully completed testing of our first prototype. The results exceeded our expectations with 99.8% purification efficiency.',
      image: 'https://images.pexels.com/photos/356040/pexels-photo-356040.jpeg?auto=compress&cs=tinysrgb&w=600',
      type: 'milestone',
    },
    {
      id: 2,
      title: 'Manufacturing Partnership Secured',
      date: '2025-01-10',
      content: 'Excited to announce our partnership with GreenTech Manufacturing. This collaboration will help us scale production while maintaining our sustainability standards.',
      type: 'announcement',
    },
    {
      id: 3,
      title: 'Video: Behind the Scenes',
      date: '2025-01-05',
      content: 'Take a look behind the scenes at our laboratory where the magic happens. See how our team is working tirelessly to bring this innovation to life.',
      hasVideo: true,
      type: 'media',
    },
  ];

  return (
    <div className="space-y-6">
      <h3 className="text-xl font-bold text-gray-900">Project Updates</h3>
      
      {updates.map((update) => (
        <div key={update.id} className="border border-gray-200 rounded-lg p-6">
          <div className="flex items-center space-x-2 mb-3">
            <Calendar className="h-4 w-4 text-gray-400" />
            <span className="text-sm text-gray-500">{update.date}</span>
            <span className={`px-2 py-1 rounded-full text-xs font-medium ${
              update.type === 'milestone' ? 'bg-green-100 text-green-800' :
              update.type === 'announcement' ? 'bg-blue-100 text-blue-800' :
              'bg-purple-100 text-purple-800'
            }`}>
              {update.type}
            </span>
          </div>
          
          <h4 className="text-lg font-semibold text-gray-900 mb-3">{update.title}</h4>
          <p className="text-gray-600 mb-4">{update.content}</p>
          
          {update.image && (
            <img
              src={update.image}
              alt="Update"
              className="w-full h-48 object-cover rounded-lg"
            />
          )}
          
          {update.hasVideo && (
            <div className="bg-gray-100 rounded-lg p-8 text-center">
              <Video className="h-12 w-12 text-gray-400 mx-auto mb-2" />
              <p className="text-gray-600">Video content would be displayed here</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ProjectUpdates;