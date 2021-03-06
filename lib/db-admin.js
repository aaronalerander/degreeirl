import { compareAsc, compareDesc, parseISO } from 'date-fns';
import { db } from './firebase-admin';

export async function getAllPrograms() {
  try {
    const snapshot = await db.collection('programsWithReviews').get();
    const programs = [];

    snapshot.forEach((doc) => {
      programs.push({ id: doc.id, ...doc.data() });
    });

    return { programs };
  } catch (error) {
    return { error };
  }
}

export async function getReviews(programId) {
  try {
    let ref = db.collection('reviews').where('programId', '==', programId);

    const snapshot = await ref.get();

    const reviews = [];

    snapshot.forEach((doc) => {
      reviews.push({ id: doc.id, ...doc.data() });
    });

    reviews.sort((a, b) =>
      compareDesc(parseISO(a.createdAt), parseISO(b.createdAt))
    );

    return { reviews };
  } catch (error) {
    return { error };
  }
}

/*
export async function getSite(siteId) {
  const doc = await db.collection('sites').doc(siteId).get();
  const site = { id: doc.id, ...doc.data() };

  return { site };
}



export async function getUserSites(userId) {
  const snapshot = await db
    .collection('sites')
    .where('authorId', '==', userId)
    .get();
  const sites = [];

  snapshot.forEach((doc) => {
    sites.push({ id: doc.id, ...doc.data() });
  });

  sites.sort((a, b) =>
    compareDesc(parseISO(a.createdAt), parseISO(b.createdAt))
  );

  return { sites };
}

export async function getAllFeedbackForSites(uid) {
  const { sites } = await getUserSites(uid);
  const siteIds = sites.map((site) => site.id);
  const snapshot = await db
    .collection('feedback')
    .where('siteId', 'in', siteIds)
    .get();

  const feedback = [];

  snapshot.forEach((doc) => {
    feedback.push({ id: doc.id, ...doc.data() });
  });

  return { feedback };
}*/
