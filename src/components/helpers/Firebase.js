/** @format */

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyBjk1Yl311XbB-028MzZ_lxMHgsztLz7dg",
	authDomain: "fortyseven-contact-form-deb4b.firebaseapp.com",
	databaseURL: "https://fortyseven-contact-form-deb4b.firebaseio.com",
	projectId: "fortyseven-contact-form-deb4b",
	storageBucket: "fortyseven-contact-form-deb4b.appspot.com",
	messagingSenderId: "935932983038",
	appId: "1:935932983038:web:b819c53f9f05a14e4617af",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
