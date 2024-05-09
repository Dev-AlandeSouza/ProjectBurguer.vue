<template>
    <div>
        <BannerBurguer/>
        <h1>Monte seu Hamburguer</h1>
        <div class="main-container">
        <FormHome/>
        </div>
    </div>
</template>

<script>
import FormHome from '../components/FormHome.vue';
import BannerBurguer from '../components/Banner.vue';

export default {
    name: 'HomeView',
    components: {
        BannerBurguer,
        FormHome
    }
}
</script>
