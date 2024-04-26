<template>
  <div id="navbar" >
    <router-link to="/" id="logo-url">
      <img :src="logo" :alt="alt" id="logo">
    </router-link>
    <router-link to="./homeview">Home</router-link> |
    <router-link to="./pedidosview">Pedidos</router-link>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  props: ['logo', 'alt']
}


</script>

<style scoped>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#navbar {
   background-color: #333;
   border-bottom: 4px solid #111;
   color: white;
   padding: 15px 50px;
   display: flex;
   justify-content: flex-end;
   align-items: center;
   background-color: #333;
   overflow: hidden;
   position: fixed;
   top: 0;
   width: 100%;
   }

   #navbar #logo-url {
      margin-right: auto;
      margin-left: 0;
   }

   #logo {
      width: 40px;
      height: 40px;
   }

   #navbar a {
      color: #FCBA03;
      text-decoration: none;
      margin: 12px;
      transition: .5s;
   }

    #navbar a:hover {
        color: #f1f1f1;
    }
</style>