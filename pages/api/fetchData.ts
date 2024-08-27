import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;

  if (method === 'GET') {
    const apiUrl = 'https://external-api.com/data';
    const username = 'your-username';
    const password = 'your-password';

    const authHeader = Buffer.from(`${username}:${password}`).toString('base64');

    try {
      const response = await fetch(apiUrl, {
        method: 'GET',
        headers: {
          'Authorization': `Basic ${authHeader}`,
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        return res.status(response.status).json({ message: 'Failed to fetch data' });
      }

      const data = await response.json();
      return res.status(200).json(data);

    } catch (error) {
      return res.status(500).json({ message: 'Server Error', error });
    }
  } else {
    res.setHeader('Allow', ['GET']);
    return res.status(405).end(`Method ${method} Not Allowed`);
  }
}
