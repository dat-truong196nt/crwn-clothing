import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
// Import the functions you need from the SDKs you need
// Your web app's Firebase configuration
const config = {
	apiKey: "AIzaSyCQA-oB-STaN76HacbtVEs6Uq8HGU2vVSA",
	authDomain: "crwn-clothing-45a51.firebaseapp.com",
	projectId: "crwn-clothing-45a51",
	storageBucket: "crwn-clothing-45a51.appspot.com",
	messagingSenderId: "346827252544",
	appId: "1:346827252544:web:299816c7d0cb1d804b10a5",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const providerGG = new firebase.auth.GoogleAuthProvider();
providerGG.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(providerGG);

export const createUserDocument = async ({ userAuth, additionalData }) => {
	if (!userAuth) return;

	const userRef = firestore.doc(`user/${userAuth.uid}`);
	const user = await userRef.get();
	if (!user.exists) {
		try {
			await userRef.set({
				email: userAuth.email,
				name: userAuth.displayName,
				date: new Date(),
				...additionalData,
			});
		} catch (err) {
			console.log("firebase error", err);
		}
	}

	return userRef;
};
export default firebase;
