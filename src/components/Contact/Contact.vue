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
                            <div class="contact__toolbar-icon">
                                <font-awesome-icon icon="circle-info"></font-awesome-icon>
                                <v-tooltip class="contact__tooltip" activator="parent" location="bottom">
                                    <div class="contact__tooltip-row">Poniedziałek:
                                        12:00 - 21:00</div>
                                    <div class="contact__tooltip-row">Wtorek:
                                        12:00 - 21:00</div>
                                    <div class="contact__tooltip-row">Środa:
                                        12:00 - 21:00</div>
                                    <div class="contact__tooltip-row">Czwartek:
                                        12:00 - 21:00</div>
                                    <div class="contact__tooltip-row">Piątek:
                                        12:00 - 21:00</div>
                                    <div class="contact__tooltip-row">Sobota:
                                        12:00 - 18:00</div>
                                    <div class="contact__tooltip-row">Niedziela:
                                        nieczynne</div>
                                </v-tooltip>
                            </div>
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
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import HeaderWithBackButton from '@/components/_partials/HeaderWithBackButton/HeaderWithBackButton.vue';
</script>
<style lang="scss">
@import "Contact.scss";
</style>