import { getAllPrograms } from '@/lib/db-admin';
import { auth } from '@/lib/firebase-admin';

export default async function handler(req, res) {
  try {
    //const { uid } = await auth.verifyIdToken(req.headers.token);
    const programs = await getAllPrograms();

    res.status(200).json(programs);
  } catch (error) {
    res.status(500).json({ error });
  }
}
