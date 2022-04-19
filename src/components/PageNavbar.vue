<template>
  <div>
    <div class="tabs is-left">
      <ul>
        <!-- <li class="is-active"><a>Pictures</a></li> -->
        <li><router-link to="/">Home</router-link></li>
        |
        <li><router-link to="/apartments">Apartments</router-link></li>
        |
        <li><router-link to="/apartmentsPics">Pictures</router-link></li>
        |
        <li><router-link to="/checkout">Checkout</router-link></li>
      </ul>
    </div>
    <router-view />
  </div>
</template>

<script>
// import apartmentData from '../../stays.json'

export default {
}
</script>
<style>
nav,
ul {
  padding: 30px;
  color: #ac462c;
}
</style>
