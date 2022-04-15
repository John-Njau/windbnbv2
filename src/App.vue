<template>
  <!-- <div id="app"> -->
  <div>
    <Navbar></Navbar>
    <!-- <PageFooterVue></PageFooterVue> -->
  </div>
  <!-- </div> -->
</template>

<script>
import Navbar from '@/components/PageNavbar'

export default {
  components: {
    Navbar
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  // color: #2c3e50;
}

nav,
ul {
  padding: 30px;

  a {
    font-weight: bold;
    // color: #2c3e50;

    &.router-link-exact-active {
      color: #ac462c;
    }
  }
}
</style>
