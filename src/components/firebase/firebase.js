import firebase from "firebase";
import firebaseConfig from "./config";
import "firebase/firestore";
import "firebase/storage";
import "firebase/auth";
const settings = { timestampsInSnapshots: true, merge: true };
firebase.initializeApp(firebaseConfig);

firebase.firestore().settings(settings);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firebase.firestore().doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (snapShot.exists === false) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  return userRef;
};

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export const auth = firebase.auth();
export default firebase;
