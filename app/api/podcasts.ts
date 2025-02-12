import type { NextApiRequest, NextApiResponse } from 'next';

export type Podcast = {
  id: number;
  title: string;
  description: string;
  videoUrl: string;
};

export default function handler(req: NextApiRequest, res: NextApiResponse<Podcast[]>) {
  const podcasts: Podcast[] = [
    {
      id: 1,
      title: 'Podcast 1',
      description: 'This is the first podcast.',
      videoUrl: 'https://youtu.be/ncaage4ZkEQ?si=Ig4978Lgy75mpNjG',
    },
    {
      id: 2,
      title: 'Podcast 2',
      description: 'This is the second podcast.',
      videoUrl: 'https://youtu.be/61jbsio1vhM?si=ZqZelYAZ2Vi0fgnL',
    },
    // Add more podcasts as needed
  ];

  res.status(200).json(podcasts);
}