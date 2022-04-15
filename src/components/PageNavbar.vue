<template>
  <div>
    <div class="tabs is-left">
      <ul>
        <!-- <li class="is-active"><a>Pictures</a></li> -->
        <li><router-link to="/"  >Home</router-link></li>
        |
        <li><router-link to="/apartments">Apartments</router-link></li>
        |
        <li><router-link to="/ApartmentPics">Pictures</router-link></li>
        |
        <li><router-link to="/checkout">Checkout</router-link></li>
      </ul>
    </div>
    <div class="tabs is-right">
      <ul>
       <div class="button">
        <input type="search" placeholder="Search..."> Search
        </div>
      </ul>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {}
</script>
<style>
nav,
ul {
  padding: 30px;
  color: #ac462c;
}
</style>
