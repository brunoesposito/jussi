import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

const searchApi = async (
  req: NextApiRequest,
  res: NextApiResponse,
): Promise<void> => {
  const { text } = req.query;

  try {
    const { data } = await axios.get(
      `https://www.googleapis.com/customsearch/v1?key=AIzaSyBbJKXEZYVUlxJLztq52AbY-k-hKZREZO4&cx=006821420682734891990:xvkxu7nu77k&q=${text}`,
    );

    res.status(200).json(data);
  } catch {
    res.status(400).json({ data: 'Error' });
  }
};

export default searchApi;
