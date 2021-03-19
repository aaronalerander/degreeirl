import firebase from './firebase';

const firestore = firebase.firestore();

export function createReview({
  program,
  school,
  everyDay,
  wishYouKnew,
  pickAgain,
  reviewerName
}) {
  //add the name first
  var programId = program.replace(/\s/g, '');
  programId = programId.toLowerCase();

  var programsRef = firestore.collection('programsWithReviews').doc(program);

  var setWithMerge = programsRef.set(
    {
      name: program,
      id: programId
    },
    { merge: true }
  );

  firestore.collection('reviews').doc().set({
    program,
    school,
    everyDay,
    wishYouKnew,
    pickAgain,
    reviewerName,
    createdAt: new Date().toISOString(),
    programId: programId
  });
}

/*export function createUser(uid, data) {
  return firestore
    .collection('users')
    .doc(uid)
    .set({ uid, ...data }, { merge: true });
}*/
