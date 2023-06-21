import { defineStore } from 'pinia'
import { starterDataCategories, starterDataMenuItems, menuNav, menuBackgrounds, restaurantData } from '@/config/config';

export const useStore = defineStore('app', {
  state: () => ({
    menuNav: menuNav,
    menuBackgrounds: menuBackgrounds,
    menuAllItems: starterDataMenuItems,
    menuAllCategories: starterDataCategories,
    restaurantData: restaurantData
  })

  // actions: {
  //   setAllMenuFromFirebase() {
  //     console.log('siema');
  //     onSnapshot(query(collection(db, "menu"), orderBy('category', 'asc')), (querySnapshot) => {
  //       let tmpMenu: any = [];
  //       querySnapshot.forEach((doc) => {
  //         const menu = {
  //           id: doc.id,
  //           category: doc.data().category,
  //           name: doc.data().name,
  //           description: doc.data().description,
  //           price: doc.data().price,
  //           priceAdditional: doc.data().priceAdditional,
  //         };
  //         tmpMenu.push(menu);
  //       });
  //       this.menuAllItems = tmpMenu;
  //     });
  //   },
  //   setAllCategoriesMenuFromFirebase() {
  //     console.log('siema2');
  //     onSnapshot(query(collection(db, "categories"), orderBy('sequence', 'asc')), (querySnapshot) => {
  //       let tmpCategories: any = [];
  //       querySnapshot.forEach((doc) => {
  //         const cat = {
  //           id: doc.id,
  //           name: doc.data().name,
  //           order: doc.data().order,
  //           description: doc.data().description,
  //           fullName: doc.data().fullName,
  //         };
  //         tmpCategories.push(cat);
  //       });
  //       this.menuAllCategories = tmpCategories;
  //     });
  //   }
  // }
})