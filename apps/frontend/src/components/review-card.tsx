'use client';

import { FC, useState } from 'react';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Avatar,
} from '@nextui-org/react';
import { StarIcon } from 'lucide-react';

interface ReviewCardProps {
  title: string;
  type: 'book' | 'movie' | 'music';
  author: string;
  reviewerName: string;
  reviewerAvatar: string;
  rating: number;
  review: string;
}

const ReviewCard: FC<ReviewCardProps> = ({
  title,
  type,
  author,
  reviewerName,
  reviewerAvatar,
  rating,
  review,
}) => {
  const [ratingState, setRating] = useState(rating);

  return (
    <Card className="max-w-md">
      <CardHeader className="justify-between">
        <div className="flex gap-5">
          <Avatar isBordered radius="full" size="md" src={reviewerAvatar} />
          <div className="flex flex-col items-start justify-center gap-1">
            <h4 className="font-semibold leading-none text-small text-default-600">
              {reviewerName}
            </h4>
            <h5 className="tracking-tight text-small text-default-400">
              Reviewing: {type}
            </h5>
          </div>
        </div>
        <div className="flex gap-1">
          {[...Array(5)].map((_, i) => (
            // FIXME: way to set zero
            <StarIcon
              key={i}
              className={`w-5 h-5 ${
                i < ratingState
                  ? 'text-yellow-400 fill-yellow-400'
                  : 'text-gray-300'
              }`}
              onClick={() => {
                setRating(ratingState === i + 1 ? 0 : i + 1);
              }}
            />
          ))}
        </div>
      </CardHeader>
      <CardBody className="px-3 py-0 text-small text-default-400">
        <p className="font-bold">{title}</p>
        <p>by {author}</p>
        <p className="pt-2">{review}</p>
      </CardBody>
      <CardFooter className="gap-3">
        <div className="flex gap-1">
          <p className="font-semibold text-default-400 text-small">4</p>
          <p className=" text-default-400 text-small">Comments</p>
        </div>
      </CardFooter>
    </Card>
  );
};

export default ReviewCard;
