<template>
    <div>
        <BannerBurguer/>
        <div class="main-container">
            <h1>Monte o seu Hambúrguer</h1>
            <p>Formulário</p>
        </div>
    </div>
</template>

<script>
import BannerBurguer from '../components/Banner.vue'

export default {
    name: 'HomeView',
    components: {
        BannerBurguer
    }
}
</script>
