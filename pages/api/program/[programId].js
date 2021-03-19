import { getReviews } from '@/lib/db-admin';
//import { logger, formatObjectKeys } from '@/utils/logger';

export default async (req, res) => {
  try {
    const { programId } = req.query;
    const { reviews } = await getReviews(programId);
    //console.log(reviews);

    res.status(200).json({ reviews });
  } catch (error) {
    /*logger.error(
      {
        request: {
          headers: formatObjectKeys(req.headers),
          url: req.url,
          method: req.method
        },
        response: {
          statusCode: res.statusCode
        }
      },
      error.message
    );*/

    res.status(500).json({ error });
  }
};
