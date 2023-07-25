<template>
    <div class="catering">
        <HeaderVerticalWithBackButton navData="CateringView" />
        <div class="catering__content">
            <div class="catering__content-wrapper">
                <div class="catering__description">Od kilku lat w samym sercu miasta, parę kroków od Rynku, nieopodal Placu
                    Solnego serwujemy dla Państwa dopracowane do perfekcji najlepsze sushi oraz dania kuchni japońskiej we
                    Wrocławiu. Nad najwyższą jakością potraw oraz idealnym połączeniem smaków nieustannie czuwa zespół
                    profesjonalistów i pasjonatów. Nasz Szef Kuchni co sezon zaskakuje Wrocław innowacyjną i bogatą kartą, w
                    której znajdą Państwo idealne sushi na lunch, sushi na wynos lub na obiad. <br>
                    Nasz zgrany i młody team każdego dnia stara się przygotować coś wyjątkowego i specjalnego dla naszych
                    gości. Codziennie serwując
                    Państwu najlepsze Futomaki, Hosmoamki, Uramaki, Kiburomaki, Sashimi oraz dania kuchni azjatyckiej we
                    Wrocławiu. Każdego dnia podajemy Państwu świeże i uważnie wyselekcjonowane ryby oraz owoce morza –
                    kalmary, krewetki, ośmiornice, małże Św. Jakuba, które trafiają do nas bezpośrednio ze światowych giełd
                    rybnych. Ponadto naszą ofertę wzbogacają sushi warsztaty, sushi catering oraz najlepsze sushi
                    wegetariańskie i wegańskie we Wrocławiu. Zapraszamy!
                </div>
                <div class="catering__photos">
                    <div class="catering__photo">
                        <v-img :src="`https://picsum.photos/500/300?random=2`" :lazy-src="`https://picsum.photos/10/6`"
                            aspect-ratio="1" cover class="catering__photo-photo">
                        </v-img>
                        <div class="catering__photo-desc">Najbardziej znany w naszej firmie Daniel</div>
                    </div>
                    <div class="catering__photo">
                        <v-img :src="`https://picsum.photos/500/300?random=3`" :lazy-src="`https://picsum.photos/10/6`"
                            aspect-ratio="1" cover class="catering__photo-photo">
                        </v-img>
                        <div class="catering__photo-desc">Najlepiej znany w naszej firmie DaNajbardziej znany w naszej
                            firmie Danielniel</div>
                    </div>
                </div>
                <div class="catering__description">Od kilku lat w samym sercu miasta, parę kroków od Rynku, nieopodal Placu
                    Solnego serwujemy dla Państwa dopracowane do perfekcji najlepsze sushi oraz dania kuchni japońskiej we
                    Wrocławiu. Nad najwyższą jakością potraw oraz idealnym połączeniem smaków nieustannie czuwa zespół
                    profesjonalistów i pasjonatów.
                </div>
                <div class="catering__photos">
                    <div class="catering__photo">
                        <v-img :src="`https://picsum.photos/500/300?random=4`" :lazy-src="`https://picsum.photos/10/6`"
                            aspect-ratio="1" cover class="catering__photo-photo">
                        </v-img>
                        <div class="catering__photo-desc">Najbardziej znany w naszej firmie Daniel</div>
                    </div>
                </div>
                <div class="catering__description">Ponadto naszą ofertę wzbogacają sushi warsztaty, sushi catering oraz najlepsze sushi
                    wegetariańskie i wegańskie we Wrocławiu. Zapraszamy!
                </div>
                <div class="catering__photos">
                    <div class="catering__photo">
                        <v-img :src="`https://picsum.photos/500/300?random=5`" :lazy-src="`https://picsum.photos/10/6`"
                            aspect-ratio="1" cover class="catering__photo-photo">
                        </v-img>
                        <div class="catering__photo-desc">Najbardziej znany w naszej firmie Daniel</div>
                    </div>
                    <div class="catering__photo">
                        <v-img :src="`https://picsum.photos/500/300?random=6`" :lazy-src="`https://picsum.photos/10/6`"
                            aspect-ratio="1" cover class="catering__photo-photo">
                        </v-img>
                        <div class="catering__photo-desc">Najlepiej znany w naszej firmie DaNajbardziej znany w naszej
                            firmie Danielniel</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import HeaderVerticalWithBackButton from '../_partials/HeaderVerticalWithBackButton/HeaderVerticalWithBackButton.vue';
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
<style lang="scss">
@import "Catering.scss";
</style>