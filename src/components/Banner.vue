<template>
    <div id="main-banner">
        <h1>Make Your Burguer</h1>
    </div>
</template>

<script>
export default {
    name: 'Banner'
}
</script>

<style scoped>
 #main-banner {
    background-image: url('../../public/img/burger.jpg');
    background-position: 0 -450px;
    background-repeat: no-repeat;
    background-size: cover;
    height: 500px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    
    }
    
    #main-banner  h1 {
        font-size: 4em;
        text-align: center;
        color: #fff;
        background-color: #00000080;
        padding: 0.6rem;
    }
</style>