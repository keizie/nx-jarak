'use client';

import React, { useState } from 'react';
import { Avatar, Button, Input } from '@nextui-org/react';

interface Comment {
  id: number;
  author: string;
  avatar: string;
  content: string;
  timestamp: string;
}

interface CommentSectionProps {
  comments: Comment[];
}

const CommentSection: React.FC<CommentSectionProps> = ({
  comments: initialComments,
}) => {
  const [comments, setComments] = useState<Comment[]>(initialComments);
  const [newComment, setNewComment] = useState('');

  const handleAddComment = () => {
    if (newComment.trim()) {
      const comment: Comment = {
        id: comments.length + 1,
        author: 'Current User',
        avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026024d',
        content: newComment,
        timestamp: new Date().toLocaleString(),
      };
      setComments([...comments, comment]);
      setNewComment('');
    }
  };

  return (
    <div className="mt-4">
      <h3 className="text-lg font-semibold mb-2">Comments</h3>
      <div className="space-y-4">
        {comments.map((comment) => (
          <div key={comment.id} className="flex items-start space-x-3">
            <Avatar src={comment.avatar} size="sm" />
            <div>
              <div className="flex items-center space-x-2">
                <span className="font-medium">{comment.author}</span>
                <span className="text-xs text-gray-500">
                  {comment.timestamp}
                </span>
              </div>
              <p className="mt-1 text-sm">{comment.content}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 flex space-x-2">
        <Input
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Add a comment..."
          className="flex-grow"
        />
        <Button onClick={handleAddComment} color="primary">
          Post
        </Button>
      </div>
    </div>
  );
};

export default CommentSection;
