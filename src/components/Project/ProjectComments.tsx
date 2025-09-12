import React, { useState } from "react";
import { Heart, MessageCircle, Reply } from "lucide-react";

interface Comment {
  id: number;
  user: {
    name: string;
    avatar: string;
  };
  date: string;
  content: string;
  likes: number;
  replies: number;
}

const ProjectComments: React.FC = () => {
  const [newComment, setNewComment] = useState<string>("");

  // put initial comments in state
  const [comments, setComments] = useState<Comment[]>([
    {
      id: 1,
      user: {
        name: "Alex Johnson",
        avatar:
          "https://images.pexels.com/photos/3778876/pexels-photo-3778876.jpeg?auto=compress&cs=tinysrgb&w=100",
      },
      date: "2025-01-16",
      content:
        "This is exactly what we need in rural communities! Can't wait to see this in action.",
      likes: 12,
      replies: 2,
    },
    {
      id: 2,
      user: {
        name: "Maria Santos",
        avatar:
          "https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=100",
      },
      date: "2025-01-15",
      content:
        "The AI optimization feature sounds incredible. How does it adapt to different water sources?",
      likes: 8,
      replies: 1,
    },
    {
      id: 3,
      user: {
        name: "David Kim",
        avatar:
          "https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=100",
      },
      date: "2025-01-14",
      content:
        "Backed this project immediately. The potential impact on global water access is huge!",
      likes: 15,
      replies: 0,
    },
  ]);

  const handleSubmitComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (newComment.trim()) {
      const newCommentObj: Comment = {
        id: comments.length + 1,
        user: {
          name: "You", // you can replace this with logged-in user info
          avatar:
            "https://cdn-icons-png.flaticon.com/512/149/149071.png", // placeholder avatar
        },
        date: new Date().toISOString().split("T")[0],
        content: newComment,
        likes: 0,
        replies: 0,
      };

      // update comments state
      setComments([newCommentObj, ...comments]);
      setNewComment(""); // clear textarea
    }
  };

  return (
    <div className="space-y-6">
      <h3 className="text-xl font-bold text-gray-900">
        Comments ({comments.length})
      </h3>

      {/* Add Comment Form */}
      <form onSubmit={handleSubmitComment} className="bg-gray-50 rounded-lg p-4">
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Share your thoughts or ask a question..."
          rows={3}
          className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
        />
        <div className="mt-3 flex justify-end">
          <button
            type="submit"
            disabled={!newComment.trim()}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Post Comment
          </button>
        </div>
      </form>

      {/* Comments List */}
      <div className="space-y-4">
        {comments.map((comment) => (
          <div
            key={comment.id}
            className="bg-white border border-gray-200 rounded-lg p-4"
          >
            <div className="flex items-start space-x-3">
              <img
                src={comment.user.avatar}
                alt={comment.user.name}
                className="w-10 h-10 rounded-full object-cover"
              />
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-1">
                  <h4 className="font-semibold text-gray-900">
                    {comment.user.name}
                  </h4>
                  <span className="text-sm text-gray-500">{comment.date}</span>
                </div>
                <p className="text-gray-700 mb-3">{comment.content}</p>
                <div className="flex items-center space-x-4 text-sm text-gray-500">
                  <button className="flex items-center space-x-1 hover:text-red-500 transition-colors">
                    <Heart className="h-4 w-4" />
                    <span>{comment.likes}</span>
                  </button>
                  <button className="flex items-center space-x-1 hover:text-blue-500 transition-colors">
                    <Reply className="h-4 w-4" />
                    <span>Reply</span>
                  </button>
                  {comment.replies > 0 && (
                    <button className="flex items-center space-x-1 hover:text-blue-500 transition-colors">
                      <MessageCircle className="h-4 w-4" />
                      <span>{comment.replies} replies</span>
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectComments;
export { ProjectComments };
