<template>
  <section>
    <div class="title">
      Posh stays that make you feel at home
    </div>
  </section>
</template>

<script>
import apartmentData from '../../stays.json'
export default {
  data () {
    return {
      apartmentData: apartmentData
    }
  }
}
</script>
<style scoped>
.title{
  color: rgb(165, 29, 29);
  /* margin: auto;
   */
}
</style>
