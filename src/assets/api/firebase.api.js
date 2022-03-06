import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import { batch } from "react-redux";
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
export const convertCollectionSnapshotToMap = (collections) => {
	const tranformCollection = collections.docs.map((doc) => {
		const { title, items } = doc.data();
		return {
			routeName: encodeURI(title.toLowerCase()),
			id: doc.id,
			title,
			items,
		};
	});
	return tranformCollection.reduce((acc, item) => {
		acc[item.title.toLowerCase()] = item;
		return acc;
	}, {});
};

export const addCollectionItems = async (collectionKey, objectToAdd) => {
	const collectionRef = firestore.collection(collectionKey);
	const collectionSnapShot = await collectionRef.get();
	if (collectionSnapShot.empty) {
		try {
			const batch = firestore.batch();
			objectToAdd.forEach((obj) => {
				const newDocRef = collectionRef.doc(obj.routeName);
				batch.set(newDocRef, obj);
			});
			return await batch.commit();
		} catch (err) {
			console.log(err);
		}
	}
};

export default firebase;
