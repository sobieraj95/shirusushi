<template>
    <div class="contact">
        <HeaderWithBackButton navData="ContactView" />
        <div class="contact__content">
            <div class="contact__content-wrapper">
                <div class="contact__header-additional">Masz pytania?</div>
                <div class="contact__header">SKONTAKTUJ SIĘ Z NAMI</div>
                <div class="contact__header-separator"></div>
                <div class="contact__header-bottom">Napisz lub zadzwoń do nas!</div>
                <div class="contact__list">
                    <div class="contact__data">
                        <div class="contact__data-icon">
                            <font-awesome-icon icon="house" style="color: #ffffff;" />
                        </div>
                        <div class="contact__data-title">Dane adresowe</div>
                        <div class="contact__data-desc">
                            <span>Sushi World - Kielce</span>
                            <span>Czachowskiego 102, 25-025 Kielce</span>
                        </div>
                    </div>
                    <div class="contact__data">
                        <div class="contact__data-icon">
                            <font-awesome-icon icon="phone" style="color: #ffffff;" />
                        </div>
                        <div class="contact__data-title">Dane kontaktowe</div>
                        <div class="contact__data-desc">
                            <span>
                                E-mail:
                                <a href="mailto: sushiworld.kielce@gmail.com">sushiworld.kielce@gmail.com</a>
                            </span>
                            <span>
                                Telefon:
                                <a href="tel:+48 882 101 212">882 101 212</a></span>
                        </div>
                    </div>
                    <div class="contact__data">
                        <div class="contact__data-icon">
                            <font-awesome-icon icon="clock" style="color: #ffffff;" />
                        </div>
                        <div class="contact__data-title">Godziny otwarcia</div>
                        <div class="contact__data-desc row">
                            <span>Dzisiaj: 12:00 - 21:00</span>
                            <font-awesome-icon class="contact__toolbar-icon" icon="circle-info" />
                        </div>
                    </div>
                </div>
                <div class="contact__map-container">
                    <div class="contact__map-header-additional">Chcesz wpaść? </div>
                    <div class="contact__map-header">Znajdziesz nas tutaj!</div>
                    <div class="contact__map-header-separator"></div>
                    <iframe class="contact__map"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3071.258711916133!2d20.714151000000008!3d50.469677000000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4717c23ee9b77713%3A0x9aa62c98d70b5cfd!2sShiru%20Sushi!5e1!3m2!1spl!2spl!4v1690301039815!5m2!1spl!2spl"
                        width="100%" height="100%" style="border:0;" loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
                

                <!-- <span class="contact__description">Od kilku lat w samym sercu miasta, parę kroków od Rynku, nieopodal Placu
                    Solnego serwujemy dla Państwa dopracowane do perfekcji najlepsze sushi oraz dania kuchni japońskiej we
                    Wrocławiu. Nad najwyższą jakością potraw oraz idealnym połączeniem smaków nieustannie czuwa zespół
                    profesjonalistów i pasjonatów. Nasz Szef Kuchni co sezon zaskakuje Wrocław innowacyjną i bogatą kartą, w
                    której znajdą Państwo idealne sushi na lunch, sushi na wynos lub na obiad. <br>
                    Nasz zgrany i młody team każdego dnia stara się przygotować coś wyjątkowego i specjalnego dla naszych gości. Codziennie serwując
                    Państwu najlepsze Futomaki, Hosmoamki, Uramaki, Kiburomaki, Sashimi oraz dania kuchni azjatyckiej we
                    Wrocławiu. Każdego dnia podajemy Państwu świeże i uważnie wyselekcjonowane ryby oraz owoce morza –
                    kalmary, krewetki, ośmiornice, małże Św. Jakuba, które trafiają do nas bezpośrednio ze światowych giełd
                    rybnych. Ponadto naszą ofertę wzbogacają sushi warsztaty, sushi catering oraz najlepsze sushi
                    wegetariańskie i wegańskie we Wrocławiu. Zapraszamy!
                </span>
                <div class="contact__chefs">
                    <div class="contact__chef">
                        <v-img :src="`https://picsum.photos/500/300?random=1`" :lazy-src="`https://picsum.photos/10/6`"
                            aspect-ratio="1" cover class="contact__chef-photo">
                        </v-img>
                        <div class="contact__chef-desc">Najbardziej znany w naszej firmie Daniel</div>
                    </div>
                    <div class="contact__chef">
                        <v-img :src="`https://picsum.photos/500/300?random=2`" :lazy-src="`https://picsum.photos/10/6`"
                            aspect-ratio="1" cover class="contact__chef-photo">
                        </v-img>
                        <div class="contact__chef-desc">Najlepiej znany w naszej firmie DaNajbardziej znany w naszej firmie Danielniel</div>
                    </div>
                    <div class="contact__chef full">
                        <v-img :src="`https://picsum.photos/500/300?random=3`" :lazy-src="`https://picsum.photos/10/6`"
                            aspect-ratio="1" cover class="contact__chef-photo">
                        </v-img>
                        <div class="contact__chef-desc">Najbardziej znany w naszej firmie Daniel asdfasd</div>
                    </div>
                    <div class="contact__chef">
                        <v-img :src="`https://picsum.photos/500/300?random=4`" :lazy-src="`https://picsum.photos/10/6`"
                            aspect-ratio="1" cover class="contact__chef-photo">
                        </v-img>
                        <div class="contact__chef-desc">Najbardziej znan</div>
                    </div>
                    <div class="contact__chef">
                        <v-img :src="`https://picsum.photos/500/300?random=5`" :lazy-src="`https://picsum.photos/10/6`"
                            aspect-ratio="1" cover class="contact__chef-photo">
                        </v-img>
                        <div class="contact__chef-desc">Najbardziej znany w naszej firmie Daniel</div>
                    </div>
                </div> -->

            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { reactive } from 'vue';
import HeaderWithBackButton from '@/components/_partials/HeaderWithBackButton/HeaderWithBackButton.vue';
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

const state = reactive({
    dialShare: false,
    pageUrl: "https://techformist.com"
})
</script>
<style lang="scss">
@import "Contact.scss";
</style>