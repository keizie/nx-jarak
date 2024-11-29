import CommentSection from '@/components/comment-section';
import ReviewCard from '@/components/review-card';

export default function Index() {
  const review = {
    title: 'The Great Gatsby',
    type: 'book' as const,
    author: 'F. Scott Fitzgerald',
    reviewerName: 'Alice Johnson',
    reviewerAvatar: 'https://i.pravatar.cc/150?u=a042581f4e29026024d',
    rating: 4,
    review:
      "A classic novel that captures the essence of the Roaring Twenties. Fitzgerald's prose is beautiful, and the story is both captivating and heartbreaking.",
  };

  const initialComments = [
    {
      id: 1,
      author: 'Bob Smith',
      avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026704d',
      content:
        "I agree, the prose is indeed beautiful. Fitzgerald's description of the parties is particularly vivid.",
      timestamp: '2023-05-15 10:30 AM',
    },
    {
      id: 2,
      author: 'Carol Davis',
      avatar: 'https://i.pravatar.cc/150?u=a04258114e29026702d',
      content:
        "I found the characters to be somewhat unlikeable, but I think that was intentional on Fitzgerald's part.",
      timestamp: '2023-05-15 11:45 AM',
    },
  ];
  return (
    <div className="max-w-2xl p-4 mx-auto">
      <ReviewCard {...review} />
      <CommentSection comments={initialComments} />
    </div>
  );
}
