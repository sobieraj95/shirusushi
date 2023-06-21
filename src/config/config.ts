export const menuNav = [
    {
        id: 1,
        header: 'O nas',
        description: 'Nasza wizja',
        icon: 'handshake',
        iconDescription: 'Kościuszki 62 <span>Busko-Zdrój</span>',
        viewName: 'AboutView',
        viewPath: '/about',
        viewStatus: false,
    },
    {
        id: 2,
        header: 'Aktualności',
        description: 'z naszej kuchni',
        icon: 'newspaper',
        iconDescription: 'Zobacz <span>co się kroi</span>',
        viewName: 'NewsView',
        viewPath: '/news',
        viewStatus: false,
    },
    {
        id: 3,
        header: 'Menu',
        description: 'Przepyszne dania',
        icon: 'cutlery',
        iconDescription: 'Przyjdź <span>i zjedz</span>',
        viewName: 'MenuView',
        viewPath: '/menu',
        viewStatus: true,
    },
    {
        id: 4,
        header: 'Galeria',
        description: 'Zobacz nasze zdjęcia',
        icon: 'camera-retro',
        iconDescription: 'Zdjęcia <span>zobacz i przyjdź</span>',
        viewName: 'GalleryView',
        viewPath: '/gallery',
        viewStatus: false,
    },
    {
        id: 5,
        header: 'Catering & Eventy',
        description: 'oferta specjalna',
        icon: 'heart',
        iconDescription: 'Dla Ciebie <span>i Twojej firmy</span>',
        viewName: 'CateringView',
        viewPath: '/catering',
        viewStatus: false,
    },
    {
        id: 6,
        header: 'Kontakt',
        description: 'z nami',
        icon: 'phone',
        iconDescription: 'Zadzwoń <span>do nas</span>',
        viewName: 'ContactView',
        viewPath: '/contact',
        viewStatus: false,
    },
]

export const menuBackgrounds = [
    {
        id: 1,
        imgUrl: `../../assets/menu-backgrounds/menu-1.jpg`
    },
    {
        id: 2,
        imgUrl: `../../assets/menu-backgrounds/menu-2.jpg`
    },
    {
        id: 3,
        imgUrl: `../../assets/menu-backgrounds/menu-3.jpg`
    },
]

export const restaurantData = {
    name: 'Shiru Sushi',
    address: 'Kościuszki 62, Busko-Zdrój',
    status: true,
}

export const starterDataCategories = [
    {
        "order": 1,
        "fullName": "Hosomaki ",
        "name": "hosomaki",
        "description": "cienkie rolki z niewielką ilością ryżu zazwyczaj z jednym składnikiem 8szt."
    },
    {
        "order": 2,
        "fullName": "Uramaki ",
        "name": "uramaki",
        "description": "rolki z ryżem na zewnątrz posypane sezamem, zwykle jednoskładnikowe 8szt."
    },
    {
        "order": 3,
        "fullName": "Sashimi",
        "name": "sashimi",
        "description": "cienkie plastry mięsa ryb lub owoców morza 1 rodzaj to 4 kawałki"
    },
    {
        "order": 4,
        "fullName": "Nigiri",
        "name": "nigiri",
        "description": "ręcznie formowane bloczki ryżu przykryte kawałkiem ryby 2szt."
    },
    {
        "order": 5,
        "fullName": "Futomaki ",
        "name": "futomaki",
        "description": "6szt./12szt. gruba rolka wieloskładnikowa zawinięta w najwyższej jakości nori"
    },
    {
        "order": 6,
        "fullName": "California Maki ",
        "name": "californiamaki",
        "description": "4szt. /8szt. odwrócone rolki wieloskładnikowe ze składnikiem na wierzchu"
    },
    {
        "order": 7,
        "fullName": "Gunkanmaki ",
        "name": "gunkanmaki",
        "description": "2szt. Forma „łódeczki” z ryżu owiniętej w nori, wypełnionej składnikiem"
    },
    {
        "order": 8,
        "fullName": "Oyakomaki",
        "name": "oyakomaki",
        "description": "2szt.owinięta rybą kulka ryżu wypełniona składnikiem"
    },
    {
        "order": 9,
        "fullName": "Temaki ",
        "name": "temaki",
        "description": "2szt. sushi formowane w kształcie rożka"
    },
    {
        "order": 10,
        "fullName": "Przystawki",
        "name": "starters",
        "description": ""
    },
    {
        "order": 11,
        "fullName": "Zupy",
        "name": "soups",
        "description": ""
    },
    {
        "order": 12,
        "fullName": "Dania głowne",
        "name": "maindishes",
        "description": ""
    },
    {
        "order": 13,
        "fullName": "Desery",
        "name": "desserts",
        "description": ""
    },
    {
        "order": 14,
        "fullName": "Menu dla dzieci",
        "name": "kidsmenu",
        "description": ""
    },
    {
        "order": 15,
        "fullName": "Kids rolls",
        "name": "kidsrolls",
        "description": "6szt. rolki zawinięte w płatek sojowy"
    },
    {
        "order": 16,
        "fullName": "Napoje",
        "name": "drinksfree",
        "description": ""
    },
    {
        "order": 17,
        "fullName": "Alkohol",
        "name": "alcohol",
        "description": ""
    },
    {
        "order": 18,
        "fullName": "Rollo Tempura Special",
        "name": "rollotempspecial",
        "description": ""
    },
    {
        "order": 19,
        "fullName": "Zestawy sushi",
        "name": "sushisets",
        "description": ""
    }
]

export const starterDataMenuItems = [
    {
        "id": 1,
        "name": "Wakame",
        "category": "starters",
        "description": "sałatka z wodorostów z dodatkiem tofu posypana sezamem",
        "price": 16,
        "priceAdditional": null,
        "imageUrl": "https://picsum.photos/200/300?random=1",
        "isBigPortion": ""
    },
    {
        "id": 2,
        "name": "Sajgonki",
        "category": "starters",
        "description": "6szt. wegetariańskich sajgonek podanych z sałatką i sosem słodkim chilli",
        "price": 17,
        "priceAdditional": null,
        "imageUrl": "https://picsum.photos/200/300?random=2",
        "isBigPortion": ""
    },
    {
        "id": 3,
        "name": "Krążki kalmara w cieście",
        "category": "starters",
        "description": "6szt. podane z sosem słodkim chili oraz spicy majo",
        "price": 22,
        "priceAdditional": null,
        "imageUrl": "https://picsum.photos/200/300?random=3",
        "isBigPortion": ""
    },
    {
        "id": 4,
        "name": "Pierożki gyoza z wieprzowiną",
        "category": "starters",
        "description": "6szt. smażonych pierożków podanych z orientalną kapustą czerwoną",
        "price": 26,
        "priceAdditional": null,
        "imageUrl": "https://picsum.photos/200/300?random=4",
        "isBigPortion": ""
    },
    {
        "id": 5,
        "name": "Krewetki tygrysie w tempurze",
        "category": "starters",
        "description": "5szt. podane z sałatką i sosem słodkim chili",
        "price": 38,
        "priceAdditional": null,
        "imageUrl": "https://picsum.photos/200/300?random=5",
        "isBigPortion": ""
    },
    {
        "id": 6,
        "name": "Tatar z łososia",
        "category": "starters",
        "description": "z kaparami i porem podany z chrupkim pieczywem, pikantny lub łagodny",
        "price": 38,
        "priceAdditional": null,
        "imageUrl": "https://picsum.photos/200/300?random=6",
        "isBigPortion": ""
    },
    {
        "id": 7,
        "name": "Mix przystawek",
        "category": "starters",
        "description": "chipsy krewetkowe 4x, krążki kalmara 4x, sajgonki 4x, pierożki gyoza wieprzowe 4x, krewetka w panko 2x",
        "price": 60,
        "priceAdditional": null,
        "imageUrl": "https://picsum.photos/200/300?random=7",
        "isBigPortion": ""
    },
    {
        "id": 8,
        "name": "Miso Shiru",
        "category": "soups",
        "description": "zupa sojowa z glonami wakame, grzybami shitake, pieczarkami, porem oraz tofu",
        "price": 13,
        "priceAdditional": null,
        "imageUrl": "https://picsum.photos/200/300?random=8",
        "isBigPortion": ""
    },
    {
        "id": 9,
        "name": "Bulion Shiru",
        "category": "soups",
        "description": "bulion z warzywami, pulpecikami drobiowymi i makaronem ramen",
        "price": 17,
        "priceAdditional": null,
        "imageUrl": "https://picsum.photos/200/300?random=9",
        "isBigPortion": ""
    },
    {
        "id": 10,
        "name": "Rybna",
        "category": "soups",
        "description": "zupa na bulionie rybnym z warzywami, łososiem i krewetkami",
        "price": 24,
        "priceAdditional": null,
        "imageUrl": "https://picsum.photos/200/300?random=10",
        "isBigPortion": ""
    },
    {
        "id": 11,
        "name": "Curry",
        "category": "soups",
        "description": "zupa z czerwonym curry, kurczakiem, warzywami, mleczkiem kokosowym podana z ryżem",
        "price": 26,
        "priceAdditional": null,
        "imageUrl": "https://picsum.photos/200/300?random=11",
        "isBigPortion": ""
    },
    {
        "id": 12,
        "name": "Ramen",
        "category": "soups",
        "description": "wolno gotowany bulion mięsny, lekko pikantny podany z podsmażoną wieprzowiną, wołowiną, jajkiem i makaronem ramen",
        "price": 35,
        "priceAdditional": null,
        "imageUrl": "https://picsum.photos/200/300?random=12",
        "isBigPortion": ""
    },
    {
        "id": 13,
        "name": "Tokyo Ramen",
        "category": "soups",
        "description": "wolno gotowany bulion mięsny, lekko pikantny z mleczkiem kokosowym, boczkiem chashu, grzybami shitake, jajkiem i makaronem ramen",
        "price": 38,
        "priceAdditional": null,
        "imageUrl": "https://picsum.photos/200/300?random=13",
        "isBigPortion": ""
    },
    {
        "id": 14,
        "name": "Kurczak w cieście sezamowym",
        "category": "maindishes",
        "description": "podany z sałatką i ryżem z warzywami",
        "price": 30,
        "priceAdditional": null,
        "imageUrl": "https://picsum.photos/200/300?random=14",
        "isBigPortion": ""
    },
    {
        "id": 15,
        "name": "Wołowina",
        "category": "maindishes",
        "description": "z warzywami i makaronem sojowym",
        "price": 35,
        "priceAdditional": null,
        "imageUrl": "https://picsum.photos/200/300?random=15",
        "isBigPortion": ""
    },
    {
        "id": 16,
        "name": "Udon z krewetkami",
        "category": "maindishes",
        "description": "makaron udon z krewetkami i warzywami",
        "price": 38,
        "priceAdditional": null,
        "imageUrl": "https://picsum.photos/200/300?random=16",
        "isBigPortion": ""
    },
    {
        "id": 17,
        "name": "Stek z łososia w sosie teriyaki",
        "category": "maindishes",
        "description": "z warzywami gotowanymi na parze i ryżem",
        "price": 40,
        "priceAdditional": null,
        "imageUrl": "https://picsum.photos/200/300?random=17",
        "isBigPortion": ""
    },
    {
        "id": 18,
        "name": "Tykwa",
        "category": "hosomaki",
        "description": "",
        "price": 15,
        "priceAdditional": null,
        "imageUrl": "https://picsum.photos/200/300?random=18",
        "isBigPortion": ""
    },
    {
        "id": 19,
        "name": "Oshinko",
        "category": "hosomaki",
        "description": "",
        "price": 15,
        "priceAdditional": null,
        "imageUrl": "https://picsum.photos/200/300?random=19",
        "isBigPortion": ""
    },
    {
        "id": 20,
        "name": "Serek, ogórek",
        "category": "hosomaki",
        "description": "",
        "price": 15,
        "priceAdditional": null,
        "imageUrl": "https://picsum.photos/200/300?random=20",
        "isBigPortion": ""
    },
    {
        "id": 21,
        "name": "Serek, awokado",
        "category": "hosomaki",
        "description": "",
        "price": 16,
        "priceAdditional": null,
        "imageUrl": "https://picsum.photos/200/300?random=21",
        "isBigPortion": ""
    },
    {
        "id": 22,
        "name": "Serek, mango",
        "category": "hosomaki",
        "description": "",
        "price": 16,
        "priceAdditional": null,
        "imageUrl": "https://picsum.photos/200/300?random=22",
        "isBigPortion": ""
    },
    {
        "id": 23,
        "name": "Surimi",
        "category": "hosomaki",
        "description": "",
        "price": 19,
        "priceAdditional": null,
        "imageUrl": "https://picsum.photos/200/300?random=23",
        "isBigPortion": ""
    },
    {
        "id": 24,
        "name": "Krewetka",
        "category": "hosomaki",
        "description": "",
        "price": 22,
        "priceAdditional": null,
        "imageUrl": "https://picsum.photos/200/300?random=24",
        "isBigPortion": ""
    },
    {
        "id": 25,
        "name": "Łosoś/łosoś grillowany",
        "category": "hosomaki",
        "description": "",
        "price": 22,
        "priceAdditional": null,
        "imageUrl": "https://picsum.photos/200/300?random=25",
        "isBigPortion": ""
    },
    {
        "id": 26,
        "name": "Łosoś wędzony",
        "category": "hosomaki",
        "description": "",
        "price": 23,
        "priceAdditional": null,
        "imageUrl": "https://picsum.photos/200/300?random=26",
        "isBigPortion": ""
    },
    {
        "id": 27,
        "name": "Ryba maślana",
        "category": "hosomaki",
        "description": "",
        "price": 25,
        "priceAdditional": null,
        "imageUrl": "https://picsum.photos/200/300?random=27",
        "isBigPortion": ""
    },
    {
        "id": 28,
        "name": "Węgorz",
        "category": "hosomaki",
        "description": "",
        "price": 24,
        "priceAdditional": null,
        "imageUrl": "https://picsum.photos/200/300?random=28",
        "isBigPortion": ""
    },
    {
        "id": 29,
        "name": "Tuńczyk",
        "category": "hosomaki",
        "description": "",
        "price": 24,
        "priceAdditional": null,
        "imageUrl": "https://picsum.photos/200/300?random=29",
        "isBigPortion": ""
    },
    {
        "id": 30,
        "name": "Tykwa",
        "category": "uramaki ",
        "description": "",
        "price": 17,
        "priceAdditional": null,
        "imageUrl": "https://picsum.photos/200/300?random=30",
        "isBigPortion": ""
    },
    {
        "id": 31,
        "name": "Oshinko",
        "category": "uramaki ",
        "description": "",
        "price": 17,
        "priceAdditional": null,
        "imageUrl": "https://picsum.photos/200/300?random=31",
        "isBigPortion": ""
    },
    {
        "id": 32,
        "name": "Serek, ogórek",
        "category": "uramaki ",
        "description": "",
        "price": 17,
        "priceAdditional": null,
        "imageUrl": "https://picsum.photos/200/300?random=32",
        "isBigPortion": ""
    },
    {
        "id": 33,
        "name": "Serek, awokado",
        "category": "uramaki ",
        "description": "",
        "price": 18,
        "priceAdditional": null,
        "imageUrl": "https://picsum.photos/200/300?random=33",
        "isBigPortion": ""
    },
    {
        "id": 34,
        "name": "Serek, mango",
        "category": "uramaki ",
        "description": "",
        "price": 18,
        "priceAdditional": null,
        "imageUrl": "https://picsum.photos/200/300?random=34",
        "isBigPortion": ""
    },
    {
        "id": 35,
        "name": "Surimi",
        "category": "uramaki ",
        "description": "",
        "price": 21,
        "priceAdditional": null,
        "imageUrl": "https://picsum.photos/200/300?random=35",
        "isBigPortion": ""
    },
    {
        "id": 36,
        "name": "Krewetka",
        "category": "uramaki ",
        "description": "",
        "price": 22,
        "priceAdditional": null,
        "imageUrl": "https://picsum.photos/200/300?random=36",
        "isBigPortion": ""
    },
    {
        "id": 37,
        "name": "Łosoś/łosoś grillowany",
        "category": "uramaki ",
        "description": "",
        "price": 23,
        "priceAdditional": null,
        "imageUrl": "https://picsum.photos/200/300?random=37",
        "isBigPortion": ""
    },
    {
        "id": 38,
        "name": "Łosoś wędzony",
        "category": "uramaki ",
        "description": "",
        "price": 24,
        "priceAdditional": null,
        "imageUrl": "https://picsum.photos/200/300?random=38",
        "isBigPortion": ""
    },
    {
        "id": 39,
        "name": "Ryba maślana",
        "category": "uramaki ",
        "description": "",
        "price": 27,
        "priceAdditional": null,
        "imageUrl": "https://picsum.photos/200/300?random=39",
        "isBigPortion": ""
    },
    {
        "id": 40,
        "name": "Węgorz",
        "category": "uramaki ",
        "description": "",
        "price": 27,
        "priceAdditional": null,
        "imageUrl": "https://picsum.photos/200/300?random=40",
        "isBigPortion": ""
    },
    {
        "id": 41,
        "name": "Tuńczyk",
        "category": "uramaki ",
        "description": "",
        "price": 29,
        "priceAdditional": null,
        "imageUrl": "https://picsum.photos/200/300?random=41",
        "isBigPortion": ""
    },
    {
        "id": 42,
        "name": "Krewetka",
        "category": "sashimi",
        "description": "",
        "price": 22,
        "priceAdditional": null,
        "imageUrl": "https://picsum.photos/200/300?random=42",
        "isBigPortion": ""
    },
    {
        "id": 43,
        "name": "Łosoś",
        "category": "sashimi",
        "description": "",
        "price": 23,
        "priceAdditional": null,
        "imageUrl": "https://picsum.photos/200/300?random=43",
        "isBigPortion": ""
    },
    {
        "id": 44,
        "name": "Tuńczyk",
        "category": "sashimi",
        "description": "",
        "price": 27,
        "priceAdditional": null,
        "imageUrl": "https://picsum.photos/200/300?random=44",
        "isBigPortion": ""
    },
    {
        "id": 45,
        "name": "Tuńczyk/łosoś",
        "category": "sashimi",
        "description": "",
        "price": 25,
        "priceAdditional": null,
        "imageUrl": "https://picsum.photos/200/300?random=45",
        "isBigPortion": ""
    },
    {
        "id": 46,
        "name": "Ryba maślana",
        "category": "sashimi",
        "description": "",
        "price": 22,
        "priceAdditional": null,
        "imageUrl": "https://picsum.photos/200/300?random=46",
        "isBigPortion": ""
    },
    {
        "id": 47,
        "name": "Łosoś / Łosoś grillowany",
        "category": "nigiri",
        "description": "",
        "price": 17,
        "priceAdditional": null,
        "imageUrl": "https://picsum.photos/200/300?random=47",
        "isBigPortion": ""
    },
    {
        "id": 48,
        "name": "Łosoś wędzony",
        "category": "nigiri",
        "description": "",
        "price": 17,
        "priceAdditional": null,
        "imageUrl": "https://picsum.photos/200/300?random=48",
        "isBigPortion": ""
    },
    {
        "id": 49,
        "name": "Krewetka",
        "category": "nigiri",
        "description": "",
        "price": 20,
        "priceAdditional": null,
        "imageUrl": "https://picsum.photos/200/300?random=49",
        "isBigPortion": ""
    },
    {
        "id": 50,
        "name": "Węgorz",
        "category": "nigiri",
        "description": "",
        "price": 20,
        "priceAdditional": null,
        "imageUrl": "https://picsum.photos/200/300?random=50",
        "isBigPortion": ""
    },
    {
        "id": 51,
        "name": "Tuńczyk",
        "category": "nigiri",
        "description": "",
        "price": 22,
        "priceAdditional": null,
        "imageUrl": "https://picsum.photos/200/300?random=51",
        "isBigPortion": ""
    },
    {
        "id": 52,
        "name": "Ryba maślana",
        "category": "nigiri",
        "description": "",
        "price": 22,
        "priceAdditional": null,
        "imageUrl": "https://picsum.photos/200/300?random=52",
        "isBigPortion": ""
    },
    {
        "id": 53,
        "name": "Futo vege ",
        "category": "futomaki",
        "description": "serek,ogórek,szczypior,sałata,papryka",
        "price": 22,
        "priceAdditional": 35,
        "imageUrl": "https://picsum.photos/200/300?random=53",
        "isBigPortion": ""
    },
    {
        "id": 54,
        "name": "Futo julienne ",
        "category": "futomaki",
        "description": "warzywa w tempurze,sriracha",
        "price": 22,
        "priceAdditional": 35,
        "imageUrl": "https://picsum.photos/200/300?random=54",
        "isBigPortion": ""
    },
    {
        "id": 55,
        "name": "Futo amai ",
        "category": "futomaki",
        "description": "serek,mango,ogórek,tykwa",
        "price": 22,
        "priceAdditional": 35,
        "imageUrl": "https://picsum.photos/200/300?random=55",
        "isBigPortion": ""
    },
    {
        "id": 56,
        "name": "Futo kalmar",
        "category": "futomaki",
        "description": "kalmar w cieście,oshinko.ogórek,ostry majo",
        "price": 24,
        "priceAdditional": 38,
        "imageUrl": "https://picsum.photos/200/300?random=56",
        "isBigPortion": ""
    },
    {
        "id": 57,
        "name": "Futo surimi",
        "category": "futomaki",
        "description": "paluszek krabowy,serek,papryka,ogórek",
        "price": 24,
        "priceAdditional": 38,
        "imageUrl": "https://picsum.photos/200/300?random=57",
        "isBigPortion": ""
    },
    {
        "id": 58,
        "name": "Futo krab tempura ",
        "category": "futomaki",
        "description": "paluszek krabowy w tempurze,serek,mango, ogórek",
        "price": 25,
        "priceAdditional": 40,
        "imageUrl": "https://picsum.photos/200/300?random=58",
        "isBigPortion": ""
    },
    {
        "id": 59,
        "name": "Futo salmon tempura ",
        "category": "futomaki",
        "description": "łosoś w tempurze,serek,tykwa ogórek",
        "price": 26,
        "priceAdditional": 46,
        "imageUrl": "https://picsum.photos/200/300?random=59",
        "isBigPortion": ""
    },
    {
        "id": 60,
        "name": "Futo teriyaki ",
        "category": "futomaki",
        "description": "łosoś grillowany,serek,awokado,sałata całość polana sosem teriyaki",
        "price": 26,
        "priceAdditional": 46,
        "imageUrl": "https://picsum.photos/200/300?random=60",
        "isBigPortion": ""
    },
    {
        "id": 61,
        "name": "Futo kabayaki ",
        "category": "futomaki",
        "description": "łosoś grillowany,awokado,ogórek,ostry majo całość polana sosem kabayaki",
        "price": 26,
        "priceAdditional": 46,
        "imageUrl": "https://picsum.photos/200/300?random=61",
        "isBigPortion": ""
    },
    {
        "id": 62,
        "name": "Futo mango ",
        "category": "futomaki",
        "description": "łosoś grillowany,mango,serek,ogórek,tykwa",
        "price": 26,
        "priceAdditional": 46,
        "imageUrl": "https://picsum.photos/200/300?random=62",
        "isBigPortion": ""
    },
    {
        "id": 63,
        "name": "Futo hotjulienne ",
        "category": "futomaki",
        "description": "łosoś grillowany,warzywa w tempurze,sriracha",
        "price": 26,
        "priceAdditional": 46,
        "imageUrl": "https://picsum.photos/200/300?random=63",
        "isBigPortion": ""
    },
    {
        "id": 64,
        "name": "Futo sake ",
        "category": "futomaki",
        "description": "łosoś,serek,awokado,sałata",
        "price": 26,
        "priceAdditional": 46,
        "imageUrl": "https://picsum.photos/200/300?random=64",
        "isBigPortion": ""
    },
    {
        "id": 65,
        "name": "Futo shirin",
        "category": "futomaki",
        "description": "łosoś,jalapeno,sriracha,por,sałata",
        "price": 26,
        "priceAdditional": 46,
        "imageUrl": "https://picsum.photos/200/300?random=65",
        "isBigPortion": ""
    },
    {
        "id": 66,
        "name": "Futo yoko sake",
        "category": "futomaki",
        "description": "łosoś,szczypior,papryka,sałata,ostry majo",
        "price": 26,
        "priceAdditional": 46,
        "imageUrl": "https://picsum.photos/200/300?random=66",
        "isBigPortion": ""
    },
    {
        "id": 67,
        "name": "Futo tatar",
        "category": "futomaki",
        "description": "pikantny tatar z łososia, tobbiko",
        "price": 37,
        "priceAdditional": 52,
        "imageUrl": "https://picsum.photos/200/300?random=67",
        "isBigPortion": ""
    },
    {
        "id": 68,
        "name": "Futo tuna",
        "category": "futomaki",
        "description": "tuńczyk,serek,oshinko,szczypior,papryka",
        "price": 30,
        "priceAdditional": 48,
        "imageUrl": "https://picsum.photos/200/300?random=68",
        "isBigPortion": ""
    },
    {
        "id": 69,
        "name": "Futo tuna jalapeno",
        "category": "futomaki",
        "description": "tuńczyk w tempurze,serek,jalapeno,tykwa",
        "price": 30,
        "priceAdditional": 48,
        "imageUrl": "https://picsum.photos/200/300?random=69",
        "isBigPortion": ""
    },
    {
        "id": 70,
        "name": "Futo butterfish",
        "category": "futomaki",
        "description": "ryba maślana,sałata,tykwa,ogórek",
        "price": 30,
        "priceAdditional": 48,
        "imageUrl": "https://picsum.photos/200/300?random=70",
        "isBigPortion": ""
    },
    {
        "id": 71,
        "name": "Futo sweet ebi",
        "category": "futomaki",
        "description": "krewetka w tempurze,serek,ogórek,mango,tykwa",
        "price": 35,
        "priceAdditional": 49,
        "imageUrl": "https://picsum.photos/200/300?random=71",
        "isBigPortion": ""
    },
    {
        "id": 72,
        "name": "Futo kreweta",
        "category": "futomaki",
        "description": "krewetka w tempurze,łosoś,tykwa,sałata",
        "price": 35,
        "priceAdditional": 49,
        "imageUrl": "https://picsum.photos/200/300?random=72",
        "isBigPortion": ""
    },
    {
        "id": 73,
        "name": "Futo ebi-bata",
        "category": "futomaki",
        "description": "krewetka w tempurze,maślana,ogórek,ostry majo",
        "price": 35,
        "priceAdditional": 49,
        "imageUrl": "https://picsum.photos/200/300?random=73",
        "isBigPortion": ""
    },
    {
        "id": 74,
        "name": "Futo shiru",
        "category": "futomaki",
        "description": "5 wybranych dowolnych składników, w tym max 2 ryby lub owoce morza",
        "price": 38,
        "priceAdditional": 53,
        "imageUrl": "https://picsum.photos/200/300?random=74",
        "isBigPortion": ""
    },
    {
        "id": 75,
        "name": "Vega rolls",
        "category": "californiamaki",
        "description": "serek,awokado,papryka, całość obtoczona w szczczypiorku",
        "price": 22,
        "priceAdditional": 36,
        "imageUrl": "https://picsum.photos/200/300?random=75",
        "isBigPortion": ""
    },
    {
        "id": 76,
        "name": "Amai rolls",
        "category": "californiamaki",
        "description": "serek,mango,tykwa,ogórek, całość owinięta w awokado",
        "price": 22,
        "priceAdditional": 36,
        "imageUrl": "https://picsum.photos/200/300?random=76",
        "isBigPortion": ""
    },
    {
        "id": 77,
        "name": "Mango rolls",
        "category": "californiamaki",
        "description": "łosoś grillowany,serek,ogórek, owinięte w plastry mango",
        "price": 30,
        "priceAdditional": 42,
        "imageUrl": "https://picsum.photos/200/300?random=77",
        "isBigPortion": ""
    },
    {
        "id": 78,
        "name": "Teri rolls",
        "category": "californiamaki",
        "description": "serek,ogórek,awokado owinięte w opiekanego łososia, polane ostrym majo i teriyaki, posypane szczypiorkiem",
        "price": 39,
        "priceAdditional": 42,
        "imageUrl": "https://picsum.photos/200/300?random=78",
        "isBigPortion": ""
    },
    {
        "id": 79,
        "name": "Unagi special",
        "category": "californiamaki",
        "description": "łosoś grillowany,serek,ogórek, całość polana sosem unagi kabayaki  owinięte w pieczonego węgorza,",
        "price": 30,
        "priceAdditional": 46,
        "imageUrl": "https://picsum.photos/200/300?random=79",
        "isBigPortion": ""
    },
    {
        "id": 80,
        "name": "Tamago rolls",
        "category": "californiamaki",
        "description": "łosoś grillowany,serek,liczi, całość owinięta w omlet",
        "price": 28,
        "priceAdditional": 41,
        "imageUrl": "https://picsum.photos/200/300?random=80",
        "isBigPortion": ""
    },
    {
        "id": 81,
        "name": "Sake rolls",
        "category": "californiamaki",
        "description": "łosoś,serek,awokado, obtoczone w sezamie",
        "price": 28,
        "priceAdditional": 42,
        "imageUrl": "https://picsum.photos/200/300?random=81",
        "isBigPortion": ""
    },
    {
        "id": 82,
        "name": "Tobbi rolls",
        "category": "californiamaki",
        "description": "łosoś,serek,awokado, obtoczone w tobbiko",
        "price": 31,
        "priceAdditional": 45,
        "imageUrl": "https://picsum.photos/200/300?random=82",
        "isBigPortion": ""
    },
    {
        "id": 83,
        "name": "Teriyaki rolls",
        "category": "californiamaki",
        "description": "łosoś,serek,ogórek,owinięte w plastry opiekanego łososia  całość polana sosem teriyaki",
        "price": 32,
        "priceAdditional": 46,
        "imageUrl": "https://picsum.photos/200/300?random=83",
        "isBigPortion": ""
    },
    {
        "id": 84,
        "name": "Dragon rolls",
        "category": "californiamaki",
        "description": "łosoś wędzony,szczypior,papryka, ostry majo, owinięte w pieczonego węgorza",
        "price": 30,
        "priceAdditional": 46,
        "imageUrl": "https://picsum.photos/200/300?random=84",
        "isBigPortion": ""
    },
    {
        "id": 85,
        "name": "Tuna rolls",
        "category": "californiamaki",
        "description": "serek,papryka,tykwa owinięte w plastry polędwicy z tuńczyka",
        "price": 30,
        "priceAdditional": 43,
        "imageUrl": "https://picsum.photos/200/300?random=85",
        "isBigPortion": ""
    },
    {
        "id": 86,
        "name": "Tuna tempura rolls",
        "category": "californiamaki",
        "description": "tuńczyk w tempurze,serek,jalapeno,tykwa, owinięte w mango",
        "price": 35,
        "priceAdditional": 48,
        "imageUrl": "https://picsum.photos/200/300?random=86",
        "isBigPortion": ""
    },
    {
        "id": 87,
        "name": "Awokado rolls",
        "category": "californiamaki",
        "description": "krewetka w tempurze,serek,papryka, owinięte w awokado",
        "price": 30,
        "priceAdditional": 46,
        "imageUrl": "https://picsum.photos/200/300?random=87",
        "isBigPortion": ""
    },
    {
        "id": 88,
        "name": "Ebi tempura special",
        "category": "californiamaki",
        "description": "krewetka w tempurze,serek,ogórek, obtoczone w tobbiko",
        "price": 32,
        "priceAdditional": 46,
        "imageUrl": "https://picsum.photos/200/300?random=88",
        "isBigPortion": ""
    },
    {
        "id": 89,
        "name": "Tatar rolls",
        "category": "californiamaki",
        "description": "krewetka w tempurze,szczypior,sałata,ostry majo, całość owinięta w awokado z pikantnym tatarem z łososia",
        "price": 32,
        "priceAdditional": 46,
        "imageUrl": "https://picsum.photos/200/300?random=89",
        "isBigPortion": ""
    },
    {
        "id": 90,
        "name": "Rainbow rolls",
        "category": "californiamaki",
        "description": "krewetka w tempurze,serek,tykwa,mango, owinięte w opiekanego łososia i węgorza całość polana sosem kabayaki",
        "price": 32,
        "priceAdditional": 50,
        "imageUrl": "https://picsum.photos/200/300?random=90",
        "isBigPortion": ""
    },
    {
        "id": 91,
        "name": "Gunkan łosoś",
        "category": "gunkanmaki ",
        "description": "",
        "price": 16,
        "priceAdditional": null,
        "imageUrl": "https://picsum.photos/200/300?random=91",
        "isBigPortion": ""
    },
    {
        "id": 92,
        "name": "Gunkan tuńczyk",
        "category": "gunkanmaki ",
        "description": "",
        "price": 18,
        "priceAdditional": null,
        "imageUrl": "https://picsum.photos/200/300?random=92",
        "isBigPortion": ""
    },
    {
        "id": 93,
        "name": "Gunkan tatar",
        "category": "gunkanmaki ",
        "description": "łosoś,por,kapary",
        "price": 20,
        "priceAdditional": null,
        "imageUrl": "https://picsum.photos/200/300?random=93",
        "isBigPortion": ""
    },
    {
        "id": 94,
        "name": "Oyako sake",
        "category": "oyakomaki",
        "description": "tobbiko zawinięte w łososia",
        "price": 22,
        "priceAdditional": null,
        "imageUrl": "https://picsum.photos/200/300?random=94",
        "isBigPortion": ""
    },
    {
        "id": 95,
        "name": "Oyako bata",
        "category": "oyakomaki",
        "description": "tobbiko zawinięte w rybę maślaną",
        "price": 23,
        "priceAdditional": null,
        "imageUrl": "https://picsum.photos/200/300?random=95",
        "isBigPortion": ""
    },
    {
        "id": 96,
        "name": "Oyako tuna",
        "category": "oyakomaki",
        "description": "tobbiko zwinięte w polędwice tuńczyka",
        "price": 24,
        "priceAdditional": null,
        "imageUrl": "https://picsum.photos/200/300?random=96",
        "isBigPortion": ""
    },
    {
        "id": 97,
        "name": "Sake-bata",
        "category": "temaki",
        "description": "łosoś,ryba maślana,ogórek,sałata,tobbiko",
        "price": 26,
        "priceAdditional": null,
        "imageUrl": "https://picsum.photos/200/300?random=97",
        "isBigPortion": ""
    },
    {
        "id": 98,
        "name": "Sake-tuna",
        "category": "temaki",
        "description": "łosoś,tuńczyk,papryka,sałata,tobbiko",
        "price": 29,
        "priceAdditional": null,
        "imageUrl": "https://picsum.photos/200/300?random=98",
        "isBigPortion": ""
    },
    {
        "id": 99,
        "name": "Shiru",
        "category": "temaki",
        "description": "5 dowolnych składników",
        "price": 34,
        "priceAdditional": null,
        "imageUrl": "https://picsum.photos/200/300?random=99",
        "isBigPortion": ""
    },
    {
        "id": 100,
        "name": "Banan w cieście",
        "category": "desserts",
        "description": "na sosie czekoladowym",
        "price": 16,
        "priceAdditional": null,
        "imageUrl": "https://picsum.photos/200/300?random=100",
        "isBigPortion": ""
    },
    {
        "id": 101,
        "name": "Gyoza z jabłkami",
        "category": "desserts",
        "description": "smażone pierożki podane z lodami – 5szt",
        "price": 17,
        "priceAdditional": null,
        "imageUrl": "https://picsum.photos/200/300?random=101",
        "isBigPortion": ""
    },
    {
        "id": 102,
        "name": "Fondant czekoladowy",
        "category": "desserts",
        "description": "podany na ciepło z płynną czekoladą w środku",
        "price": 18,
        "priceAdditional": null,
        "imageUrl": "https://picsum.photos/200/300?random=102",
        "isBigPortion": ""
    },
    {
        "id": 103,
        "name": "Rosołek jajeczny",
        "category": "kidsmenu",
        "description": "z kluseczkami",
        "price": 12,
        "priceAdditional": null,
        "imageUrl": "https://picsum.photos/200/300?random=103",
        "isBigPortion": ""
    },
    {
        "id": 104,
        "name": "Nuggetsy z kurczaka",
        "category": "kidsmenu",
        "description": "3 szt. z frytkami",
        "price": 18,
        "priceAdditional": null,
        "imageUrl": "https://picsum.photos/200/300?random=104",
        "isBigPortion": ""
    },
    {
        "id": 105,
        "name": "Paluszki rybne z łososia",
        "category": "kidsmenu",
        "description": "3 szt. z frytkami",
        "price": 22,
        "priceAdditional": null,
        "imageUrl": "https://picsum.photos/200/300?random=105",
        "isBigPortion": ""
    },
    {
        "id": 106,
        "name": "Nigiri",
        "category": "kidsmenu",
        "description": "1x łosoś grillowany, 1x serek mango, 1x serek ogórek",
        "price": 17,
        "priceAdditional": null,
        "imageUrl": "https://picsum.photos/200/300?random=106",
        "isBigPortion": ""
    },
    {
        "id": 107,
        "name": "Sałatka",
        "category": "kidsmenu",
        "description": "sałata lodowa,ogórek,papryka polana sosem i oprószona sezamem",
        "price": 5,
        "priceAdditional": null,
        "imageUrl": "https://picsum.photos/200/300?random=107",
        "isBigPortion": ""
    },
    {
        "id": 108,
        "name": "Milky rollo",
        "category": "kidsrolls",
        "description": "milkyway, mango,serek",
        "price": 25,
        "priceAdditional": null,
        "imageUrl": "https://picsum.photos/200/300?random=108",
        "isBigPortion": ""
    },
    {
        "id": 109,
        "name": "Tamago rollo",
        "category": "kidsrolls",
        "description": "łosoś grillowany,serek,liczi,smażone w omlecie",
        "price": 25,
        "priceAdditional": null,
        "imageUrl": "https://picsum.photos/200/300?random=109",
        "isBigPortion": ""
    },
    {
        "id": 110,
        "name": "Banana rollo",
        "category": "kidsrolls",
        "description": "nutella, banan, serek, oprószone płatkami migdałów i malinami",
        "price": 25,
        "priceAdditional": null,
        "imageUrl": "https://picsum.photos/200/300?random=110",
        "isBigPortion": ""
    },
    {
        "id": 111,
        "name": "Coca-Cola, Coca-Cola Zero, Fanta, Sprite, Kinley, FuzeTea Cappy(jabłko,pomarańcza) 250ml",
        "category": "drinksfree",
        "description": "",
        "price": 8,
        "priceAdditional": null,
        "imageUrl": "https://picsum.photos/200/300?random=111",
        "isBigPortion": ""
    },
    {
        "id": 112,
        "name": "Sok aloesowy 300ml",
        "category": "drinksfree",
        "description": "",
        "price": 8,
        "priceAdditional": null,
        "imageUrl": "https://picsum.photos/200/300?random=112",
        "isBigPortion": ""
    },
    {
        "id": 113,
        "name": "Woda 330ml",
        "category": "drinksfree",
        "description": "",
        "price": 6,
        "priceAdditional": null,
        "imageUrl": "https://picsum.photos/200/300?random=113",
        "isBigPortion": ""
    },
    {
        "id": 114,
        "name": "Herbata Sir Williams (rózne smaki)",
        "category": "drinksfree",
        "description": "",
        "price": 9,
        "priceAdditional": null,
        "imageUrl": "https://picsum.photos/200/300?random=114",
        "isBigPortion": ""
    },
    {
        "id": 115,
        "name": "Herbata RichMont (różne smaki)",
        "category": "drinksfree",
        "description": "",
        "price": 14,
        "priceAdditional": null,
        "imageUrl": "https://picsum.photos/200/300?random=115",
        "isBigPortion": ""
    },
    {
        "id": 116,
        "name": "Kawa czarna",
        "category": "drinksfree",
        "description": "",
        "price": 8,
        "priceAdditional": null,
        "imageUrl": "https://picsum.photos/200/300?random=116",
        "isBigPortion": ""
    },
    {
        "id": 117,
        "name": "Kawa biała",
        "category": "drinksfree",
        "description": "",
        "price": 9,
        "priceAdditional": null,
        "imageUrl": "https://picsum.photos/200/300?random=117",
        "isBigPortion": ""
    },
    {
        "id": 118,
        "name": "Latte",
        "category": "drinksfree",
        "description": "",
        "price": 11,
        "priceAdditional": null,
        "imageUrl": "https://picsum.photos/200/300?random=118",
        "isBigPortion": ""
    },
    {
        "id": 119,
        "name": "Kirin",
        "category": "alcohol",
        "description": "Jedno z najlepszych piw w Japonii. Charakteryzuje się łagodnym smakiem  i dosyć wysoką zawartością alkoholu. 5.0%",
        "price": 14,
        "priceAdditional": null,
        "imageUrl": "https://picsum.photos/200/300?random=119",
        "isBigPortion": ""
    },
    {
        "id": 120,
        "name": "Asahi",
        "category": "alcohol",
        "description": "piwo bazujące na słodzie jęczmiennym,chmielu kukurydzy oraz ryżu. Delikatna goryczka idealnie współgra ze słodową bazą. 5.2%",
        "price": 14,
        "priceAdditional": null,
        "imageUrl": "https://picsum.photos/200/300?random=120",
        "isBigPortion": ""
    },
    {
        "id": 121,
        "name": "Sapporo",
        "category": "alcohol",
        "description": "ma jasną, słomkową,klarowną barwę.  W smaku przyjemna gorycza z aromatem lekko pieprznej nutki ryżowej. 4,7%",
        "price": 14,
        "priceAdditional": null,
        "imageUrl": "https://picsum.photos/200/300?random=121",
        "isBigPortion": ""
    },
    {
        "id": 122,
        "name": "Iki Yuzu",
        "category": "alcohol",
        "description": "Piwo o orzeźwiającym delikatnym smaku uzyskanym dzięki połączeniu zielonej herbaty sencha oraz owocu yuzu o wyraźnym cytrynowym smaku. ",
        "price": 14,
        "priceAdditional": null,
        "imageUrl": "https://picsum.photos/200/300?random=122",
        "isBigPortion": ""
    },
    {
        "id": 123,
        "name": "Lech free 300ml",
        "category": "alcohol",
        "description": "",
        "price": 7,
        "priceAdditional": null,
        "imageUrl": "https://picsum.photos/200/300?random=123",
        "isBigPortion": ""
    },
    {
        "id": 124,
        "name": "Sake 50ml",
        "category": "alcohol",
        "description": "Wino ryżowe, podawane na ciepło lub zimno. Tradycyjnie podawane na ciepło . 14,5%",
        "price": 10,
        "priceAdditional": null,
        "imageUrl": "https://picsum.photos/200/300?random=124",
        "isBigPortion": ""
    },
    {
        "id": 125,
        "name": "Sake karafka 200ml",
        "category": "alcohol",
        "description": "Wino ryżowe, podawane na ciepło lub zimno. Tradycyjnie podawane na ciepło . 14,5%",
        "price": 32,
        "priceAdditional": null,
        "imageUrl": "https://picsum.photos/200/300?random=125",
        "isBigPortion": ""
    },
    {
        "id": 126,
        "name": "Choya silver 150ml",
        "category": "alcohol",
        "description": "Białe słodko kwaskowe wino z moreli japońskiej (ume). Idealnie komponuje się z sushi, podajemy schłodzone.",
        "price": 14,
        "priceAdditional": null,
        "imageUrl": "https://picsum.photos/200/300?random=126",
        "isBigPortion": ""
    },
    {
        "id": 127,
        "name": "Choya silver butelka 0.5l",
        "category": "alcohol",
        "description": "Białe słodko kwaskowe wino z moreli japońskiej (ume). Idealnie komponuje się z sushi, podajemy schłodzone.",
        "price": 45,
        "priceAdditional": null,
        "imageUrl": "https://picsum.photos/200/300?random=127",
        "isBigPortion": ""
    },
    {
        "id": 128,
        "name": "Aperol Spritz",
        "category": "alcohol",
        "description": "aperol, prosecco, woda gazowana,lód,plasterek pomarańczy",
        "price": 24,
        "priceAdditional": null,
        "imageUrl": "https://picsum.photos/200/300?random=128",
        "isBigPortion": ""
    },
    {
        "id": 129,
        "name": "Choya prosecco",
        "category": "alcohol",
        "description": "choya, prosecco, lód",
        "price": 23,
        "priceAdditional": null,
        "imageUrl": "https://picsum.photos/200/300?random=129",
        "isBigPortion": ""
    },
    {
        "id": 130,
        "name": "Tatar tempura 6szt. rolka bez ryżu",
        "category": "rollotempspecial",
        "description": "lekko pikanty tatar z łososia z porem i kaparami, ogórek,awokado,szczypior, oshinko, całość smażona w tempurze",
        "price": 48,
        "priceAdditional": null,
        "imageUrl": "https://picsum.photos/200/300?random=130",
        "isBigPortion": ""
    },
    {
        "id": 131,
        "name": "Ebi Tatar tempura 8szt.",
        "category": "rollotempspecial",
        "description": "krewetka w tempurze,serek, mango,ogórek, całość smażona w tempurze, na zewnątrz lekko pikantny tatar z łososia",
        "price": 54,
        "priceAdditional": null,
        "imageUrl": "https://picsum.photos/200/300?random=131",
        "isBigPortion": ""
    },
    {
        "id": 132,
        "name": "Panko tatar 8szt.",
        "category": "rollotempspecial",
        "description": "chrupiąca rolka w panko – na zewnątrz pikanty tatar z paluszka krabowego",
        "price": 35,
        "priceAdditional": null,
        "imageUrl": "https://picsum.photos/200/300?random=132",
        "isBigPortion": ""
    },
    {
        "id": 133,
        "name": "Yamiset 10szt.",
        "category": "sushisets",
        "description": "Futo teriyaki  6szt. łosoś grillowany, serek, awokado, sałata, całość polana sosem teriyaki  Uramak serek, ogórek 4szt.",
        "price": 32,
        "priceAdditional": null,
        "imageUrl": "https://picsum.photos/200/300?random=133",
        "isBigPortion": ""
    },
    {
        "id": 134,
        "name": "Vegeset 20szt.",
        "category": "sushisets",
        "description": "Futo vege 6szt. serek, ogórek, szczypior, sałata    Futo amai 6szt  mango, serek, ogórek, tykwa   Uramak serek awokado 8szt.",
        "price": 50,
        "priceAdditional": null,
        "imageUrl": "https://picsum.photos/200/300?random=134",
        "isBigPortion": ""
    },
    {
        "id": 135,
        "name": "Leoset 22szt.",
        "category": "sushisets",
        "description": "Futo sake 6szt. łosoś, serek, awokado, sałata Hosomak serek awokado 8szt.   Hosomak łosoś 8szt.",
        "price": 57,
        "priceAdditional": null,
        "imageUrl": "https://picsum.photos/200/300?random=135",
        "isBigPortion": ""
    },
    {
        "id": 136,
        "name": "Spicyset20szt.",
        "category": "sushisets",
        "description": "Futo hotjulienne  6szt. łosoś grillowany, warzywa w tempurze, sriracha   Futo shirin    6szt.  łosoś, jalapeno, por, sałata, sriracha   Uramak surimi, jalapeno ",
        "price": 70,
        "priceAdditional": null,
        "imageUrl": "https://picsum.photos/200/300?random=136",
        "isBigPortion": ""
    },
    {
        "id": 137,
        "name": "Sakeset 30szt. (możliwość zamiana zestawu na grillowany)",
        "category": "sushisets",
        "description": "Futo sake 6szt. łosoś, serek, awokado, sałata  MangoTeri rolls 8szt serek, ogórek zrololowane w mango oraz opiekanego łososia  Sake rolls 8szt. łosoś, serek, awokado, całość obtoczona w sezamie  Hosomak serek ogórek",
        "price": 115,
        "priceAdditional": null,
        "imageUrl": "https://picsum.photos/200/300?random=137",
        "isBigPortion": ""
    },
    {
        "id": 138,
        "name": "Nadaset 32szt.",
        "category": "sushisets",
        "description": "Awokado rolls 4szt. krewetka w tempurze, serek, papryka, całość owinięta w awokado\nTeri rolls 4szt. serek, ogórek ,awokado, owinięte w plastry opiekanego łososia Mango rolls 4szt. łosoś grillowany, serek, ogórek, owinięte w mango\nFuto teriyaki 6szt. łosoś grillowany, serek, awokado, sałata, całość polana sosem teriyaki  Futo vege 6szt. serek, ogórek, szczypior, sałata, papryka Uramak serek ogórek 8szt.",
        "price": 145,
        "priceAdditional": null,
        "imageUrl": "https://picsum.photos/200/300?random=138",
        "isBigPortion": ""
    },
    {
        "id": 139,
        "name": "Zuset 42szt.",
        "category": "sushisets",
        "description": "Tuna rolls 8szt. Serek, papryka, tykwa, zwinięte w tuńczyka  Tamago rolls 8szt.  łosoś grillowany, serek, liczi, całość owinięta w omlet Tatar rolls 8szt. krewetka w tempurze, szczypior, sałata, ostry majo, całość owinięta w awokado z pikantnym tatarem z łososia oraz ikrą z latającej ryby Futo teriyaki w tempurze 6szt łosoś grillowany, serek, awokado, sałata, całość smażona w tempurze  Futo butterfish 12szt.  ryba maślana, sałata, tykwa, ogórek",
        "price": 195,
        "priceAdditional": null,
        "imageUrl": "https://picsum.photos/200/300?random=139",
        "isBigPortion": ""
    },
    {
        "id": 140,
        "name": "Shirset 84szt.",
        "category": "sushisets",
        "description": "Mango rolls 8szt.\nłosoś grillowany, serek, ogórek, całość owinięta w mango\nAwokado rolls 8szt.\nkrewetka w tempurze, serek, papryka, całość owinięta w awokado \nFuto ebi-bata 12szt.\nkrewetka w tempurze, maślana, ogórek, ostry majo,\ncałość posypana ikrą z latającej ryby\nFuto sake 12szt.\nłosoś, serek, awokado, sałata\nFuto amai 12szt.\nmango, serek, ogórek, tykwa\nHosomak serek oschinko 8szt. \nHosomak serek ogórek 8szt.\nUramak surimi, papryka 8szt.\nUramak tykwa 8szt",
        "price": 270,
        "priceAdditional": null,
        "imageUrl": "https://picsum.photos/200/300?random=140",
        "isBigPortion": ""
    }
]