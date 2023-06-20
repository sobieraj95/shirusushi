import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyANEu7_a1CzTh32SS66FyhnKEwYCtk1QX0",
    authDomain: "shirusushiv3.firebaseapp.com",
    projectId: "shirusushiv3",
    storageBucket: "shirusushiv3.appspot.com",
    messagingSenderId: "641154356304",
    appId: "1:641154356304:web:ddffee625ae42aed22ad55",
    measurementId: "G-N5PN76HJQH"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };

// const readAllData = async () => {
//   await onSnapshot(query(collection(db, "menu"), orderBy('category', 'asc')), (querySnapshot) => {
//     let fbMenu: any = [];
//     querySnapshot.forEach((doc) => {
//       const menu = {
//         id: doc.id,
//         category: doc.data().category,
//         name: doc.data().name,
//         description: doc.data().description,
//         price: doc.data().price,
//         unit: doc.data().unit,
//       };
//       fbMenu.push(menu);
//     });
//     store.allMenu = fbMenu;
//   });
// }

// const readAllCategories = async () => {
//   await onSnapshot(query(collection(db, "categories"), orderBy('sequence', 'asc')), (querySnapshot) => {
//     let fbCategories: any = [];
//     querySnapshot.forEach((doc) => {
//       const cat = {
//         id: doc.id,
//         name: doc.data().name,
//         sequence: doc.data().sequence,
//         fullName: doc.data().fullName,
//       };
//       fbCategories.push(cat);
//     });
//     store.allCategoriesMenu = fbCategories;
//   });
// }

// przypisywanie każdemu elementowi menu jego kategorii + danych
// state.menu.forEach((el: any) => {
    //     el.categoryData = store.allCategoriesMenu.find((cat: any) => cat.name === el.category)
    //     console.log('elementeee', el);
    // })
    // state.menuEl = _.orderBy(state.menu, ['categoryData.sequence'], ['asc']);
