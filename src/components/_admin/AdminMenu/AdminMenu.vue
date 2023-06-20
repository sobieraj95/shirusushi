<template>
    <v-container class="bg-surface-variant">
        <v-text-field v-model="state.searchValue" @input="searchItem"></v-text-field>
        <v-row>
            <v-col lg="1">
            </v-col>
            <v-col lg="10">
                <v-row>
                    <v-col lg="2">
                        ID
                    </v-col>
                    <v-col lg="2" @click="sortMenu('category')">
                        Kategoria
                    </v-col>
                    <v-col lg="2" @click="sortMenu('name')">
                        Nazwa
                    </v-col>
                    <v-col lg="2" @click="sortMenu('price')">
                        Cena
                    </v-col>
                    <v-col lg="2">
                        Opis
                    </v-col>
                    <v-col lg="2">
                        Jedostka
                    </v-col>
                </v-row>
            </v-col>
            <v-col lg="1">
            </v-col>
        </v-row>
        <v-row v-if="state.menu" v-for="item in state.menu" :key="item.id">
            <v-col lg="1">
                <v-icon color="red" @click="removeMenuPos(item.id)">
                    mdi-minus
                </v-icon>
            </v-col>
            <v-col lg="10" :class="{ 'yellow': item.changed, 'green': item.new }">
                <v-row>
                    <v-col lg="2">
                        {{ item.new ? '---' : item.id }}
                    </v-col>
                    <v-col lg="2">
                        <v-text-field v-model='item.category' @input="!item.new && checkChanges(item.id)"></v-text-field>
                    </v-col>
                    <v-col lg="2">
                        <v-text-field v-model='item.name' @input="!item.new && checkChanges(item.id)"></v-text-field>
                    </v-col>
                    <v-col lg="2">
                        <v-text-field type="number" v-model='item.price'
                            @input=" !item.new && checkChanges(item.id)"></v-text-field>
                    </v-col>
                    <v-col lg="2">
                        <v-text-field v-model='item.description' @input="!item.new && checkChanges(item.id)"></v-text-field>
                    </v-col>
                    <v-col lg="2">
                        <v-text-field v-model='item.unit' @input="!item.new && checkChanges(item.id)"></v-text-field>
                    </v-col>
                </v-row>
            </v-col>
            <v-col lg="1">
                <v-icon color="yellow" @click="addMenuPos(item.id)">
                    mdi-plus
                </v-icon>
                <v-icon v-if="item.new" color="yellow" @click="submitNewMenuPos(item.id)">
                    mdi-check-circle
                </v-icon>
                <v-icon v-if="item.changed" color="yellow" @click="submitUpdateMenuPos(item.id)">
                    mdi-check-circle
                </v-icon>
            </v-col>
        </v-row>
    </v-container>
</template>
<style lang="scss">
@import "AdminMenu.scss";
</style>
<script setup>
// import { onMounted, reactive, ref } from 'vue'
// import { collection, updateDoc, getDoc, addDoc, doc, deleteDoc, query, where, onSnapshot, orderBy } from "firebase/firestore";
// // import { collection, getDocs } from 'firebase/firestore'
// import { db } from '@store/firebase'

// const refCollection = collection(db, "menu");
// const startCollectionQuery = query(refCollection, orderBy('category', 'asc'));


// const searchItem = () => {
//     state.menu = state.menu.filter(el => el.name.toLowerCase().includes(state.searchValue.toLowerCase()))
// }
// const checkChanges = async (id) => {
//     if (!state.menuChanges.find(el => el.id === id)) {
//         const docSnap = await getDoc(doc(db, "menu", id));
//         if (docSnap.exists()) {
//             state.menuChanges.push({
//                 id: docSnap.id,
//                 category: docSnap.data().category,
//                 name: docSnap.data().name,
//                 description: docSnap.data().description,
//                 price: docSnap.data().price,
//                 unit: docSnap.data().unit,
//                 changed: true
//             })
//             state.menu.find(el => el.id === id).changed = true
//         }
//     } else if (JSON.stringify(state.menuChanges.find(el => el.id === id)) === JSON.stringify(state.menu.find(el => el.id === id))) {
//         state.menuChanges.splice(state.menuChanges.indexOf(state.menuChanges.find(el => el.id === id)), 1);
//         state.menu.find(el => el.id === id).changed = false
//     }
// }

// const sortMenu = (sortBy) => {
//     let menuCollectionQuery

//     if (!state.sortBy) {
//         state.sortBy = sortBy;
//         state.sortType = 'asc';
//     } else if (state.sortBy === sortBy) {
//         state.sortType = state.sortType === 'asc' ? 'desc' : 'asc';
//     } else if (state.sortBy !== sortBy) {
//         state.sortBy = sortBy;
//         state.sortType = 'asc';
//     }
//     console.log(`state sortby: ${state.sortBy} | state sorttype: ${state.sortType} | sortBy: ${sortBy}`);
//     menuCollectionQuery = query(refCollection, orderBy(state.sortBy, state.sortType));
//     readAllData(menuCollectionQuery)
// }

// const addMenuPos = (clickedId) => {
//     state.menu.splice(state.menu.indexOf(state.menu.find(el => el.id === clickedId)) + 1, 0, { id: Date.now(), category: '', name: '', description: '', price: null, unit: '', edited: false, new: true })
// }

// const checkDataBeforeAdd = (data) => {
//     return data.category && data.name && data.description && data.price && data.unit && true
// }
// const submitNewMenuPos = (id) => {
//     const newElData = state.menu.find(el => el.id === id && el.new === true);

//     if (checkDataBeforeAdd(newElData)) {
//         addDoc(refCollection, {
//             category: newElData.category,
//             name: newElData.name,
//             description: newElData.description,
//             price: newElData.price,
//             unit: newElData.unit,
//             changed: false
//         });
//     }
// }

// const submitUpdateMenuPos = (id) => {
//     const tempItem = state.menu.find(el => el.id === id)
//     console.log(tempItem);
//     updateDoc(doc(refCollection, id), {
//         category: tempItem.category,
//         name: tempItem.name,
//         description: tempItem.description,
//         price: tempItem.price,
//         unit: tempItem.unit,
//         changed: false
//     });
//     state.menuChanges.splice(state.menuChanges.indexOf(state.menuChanges.find(el => el.id === id)), 1);
// }

// const removeMenuPos = (id) => {
//     if (state.menu.find(el => el.id === id).new) {
//         state.menu.splice(state.menu.indexOf(state.menu.find(el => el.id === id)), 1);
//         return
//     }
//     deleteDoc(doc(refCollection, id));
// }

// let state = reactive({
//     menu: [],
//     sortBy: '',
//     sortType: '',
//     menuChanges: [],
//     searchValue: ''
// })

// const readAllData = async (query = startCollectionQuery) => {
//     await onSnapshot(query ? query : refCollection, (querySnapshot) => {
//         let fbMenu = [];
//         querySnapshot.forEach((doc) => {
//             const menu = {
//                 id: doc.id,
//                 category: doc.data().category,
//                 name: doc.data().name,
//                 description: doc.data().description,
//                 price: doc.data().price,
//                 unit: doc.data().unit,
//                 changed: false
//             }
//             fbMenu.push(menu)
//         });
//         state.menu = fbMenu
//     });
// }

onMounted(() => {
    // readAllData()
})
// interface IProps {}
// defineProps<IProps>()

// interface MenuItem {
//     id: string,
//     category: string,
//     name: string,
//     desciprtion: string,
//     price: number,
//     unit: string,
// }

// interface IState {
//     menuAllItems: MenuItem[]
// }
// reactive<IState>({
//     menuAllItems,
// })
</script>