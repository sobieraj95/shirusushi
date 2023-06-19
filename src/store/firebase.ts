import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyANEu7_a1CzTh32SS66FyhnKEwYCtk1QX0",
    authDomain: "shirusushiv3.firebaseapp.com",
    projectId: "shirusushiv3",
    storageBucket: "shirusushiv3.appspot.com",
    messagingSenderId: "641154356304",
    appId: "1:641154356304:web:34cba753fa8cf72522ad55",
    measurementId: "G-TF47BVKCKH"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };

// import { collection, doc, setDoc } from "firebase/firestore";

// const citiesRef = collection(db, "cities");

// await setDoc(doc(citiesRef, "SF"), {
//     name: "San Francisco", state: "CA", country: "USA",
//     capital: false, population: 860000,
//     regions: ["west_coast", "norcal"]
// });
// await setDoc(doc(citiesRef, "LA"), {
//     name: "Los Angeles", state: "CA", country: "USA",
//     capital: false, population: 3900000,
//     regions: ["west_coast", "socal"]
// });
// await setDoc(doc(citiesRef, "DC"), {
//     name: "Washington, D.C.", state: null, country: "USA",
//     capital: true, population: 680000,
//     regions: ["east_coast"]
// });
// await setDoc(doc(citiesRef, "TOK"), {
//     name: "Tokyo", state: null, country: "Japan",
//     capital: true, population: 9000000,
//     regions: ["kanto", "honshu"]
// });
// await setDoc(doc(citiesRef, "BJ"), {
//     name: "Beijing", state: null, country: "China",
//     capital: true, population: 21500000,
//     regions: ["jingjinji", "hebei"]
// });
