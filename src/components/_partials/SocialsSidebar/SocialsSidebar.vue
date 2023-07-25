<template>
    <div class="socials-sidebar">
        <a class="socials-sidebar__button phone" href="tel:+48 882 101 212" target="_blank">
            <font-awesome-icon icon="phone" />
        </a>
        <a class="socials-sidebar__button facebook" href="https://www.facebook.com/ShiruSushiBusko" target="_blank">
            <font-awesome-icon icon="fa-brands fa-facebook" />
        </a>
        <a class="socials-sidebar__button instagram" href="https://www.instagram.com/shiru_sushi/" target="_blank">
            <font-awesome-icon icon="fa-brands fa-instagram" />
        </a>
        <a class="socials-sidebar__button tripadvisior"
            href="https://www.tripadvisor.com/Restaurant_Review-g1087262-d13219783-Reviews-Shiru_Sushi-Busko_Zdroj_Swietokrzyskie_Province_Central_Poland.html"
            target="_blank">
            <svg xmlns="http://www.w3.org/2000/svg" height="64" width="64" viewBox="0 0 63.997 64">
                <g transform="matrix(.568111 0 0 .568111 -18.190262 12.840025)">
                    <path class="c1"
                        d="M88.28 0C73.612 0 60.36 3.694 49.91 10.523l-17.58.016s4.148 5.537 5.494 11.12L82.318 55.8l5.972 8.928 6.03-9.004 44.596-34.088c1.324-5.62 5.52-11.23 5.52-11.23l-18.734-.013C115.194 3.603 102.424 0 88.278 0z"
                        fill="#000a12" />
                    <path class="c2"
                        d="M115.484 10.318a28.015 28.015 0 0 0-8.839 1.695 27.91 27.91 0 0 0-15.777 14.603c-1.418 3.075-2.22 6.326-2.475 9.597C87.35 21.873 75.515 10.497 60.98 10.2c8.04-3.44 17.278-5.3 27.29-5.3 10.08 0 19.18 1.817 27.213 5.418"
                        fill="#fcc40f" />
                    <g stroke="#000a12" class="c1">
                        <circle r="25.132" cy="39.396" cx="60.072" fill="#fff" stroke-width="5.847" />
                        <circle r="11.3" cy="39.396" cx="60.072" fill="none" stroke-width="5.102" />
                    </g>
                    <circle r="4.667" cy="39.396" cx="60.072" fill="#ef6a45" />
                    <g stroke="#000a12" class="c1">
                        <circle r="25.132" cy="39.346" cx="116.615" fill="#fff" stroke-width="5.847" />
                        <circle r="11.3" cy="39.346" cx="116.615" fill="none" stroke-width="5.102" />
                    </g>
                    <circle r="4.667" cy="39.346" cx="116.615" fill="#00b087" />
                </g>
            </svg>
        </a>
    </div>
</template>
<script setup lang="ts">
import { useRouter } from 'vue-router';
import { useStore } from '@/store/app';
import { onMounted, reactive } from 'vue';
const router = useRouter()

const store = useStore();

interface IProps { }
const props = defineProps<{

}>();

const state = reactive({

})

const showSocials = (socials: any[]) => {
    document.querySelector(`.socials-sidebar`)?.classList.add('showed');
    let i = 0;
    setInterval(() => {
        document.querySelector(`.${socials[i]}`)?.classList.add('showed');
        i++;
    }, 200)
}
onMounted(() => {
    setTimeout(() => {
        showSocials(['phone', 'facebook', 'instagram', 'tripadvisior'])
    }, 2200);
})

</script>
<style lang="scss">
@import "SocialsSidebar.scss";
</style>