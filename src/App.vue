<template>
  <Navbar :logo="logo_src" :alt="app_name"/>
  <router-view/>
<FooterPage/>
</template>

<script>
import Navbar from './components/Navbar.vue'
import FooterPage from './components/Footer.vue'

export default {
  components: {
    Navbar,
    FooterPage
  },
  data() {
    return {
      logo_src: "/img/logo.png",
      app_name: 'Burguer Vue'
    }
  }
}
</script>

<style>
*{
  font-family: Helvetica;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.main-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 50px;
  height: 66.6vh;
}

h1 {
 text-align: center;
 font-size: 42px;
 margin-bottom: 30px;
 color: #444;
}
</style>