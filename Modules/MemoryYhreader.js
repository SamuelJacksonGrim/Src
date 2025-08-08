import { doc, setDoc, arrayUnion } from 'firebase/firestore';

export const storeGlyphThread = async (userId, glyphChain, db) => {
  const docRef = doc(db, "glyphThreads", userId);
  await setDoc(docRef, {
    history: arrayUnion({
      chain: glyphChain,
      timestamp: Date.now()
    })
  }, { merge: true });
};
