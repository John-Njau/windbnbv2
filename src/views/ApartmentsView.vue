<template>
  <div class="about">
    <h1>Our Apartments</h1>
    <ApartmentCard
    ></ApartmentCard>
  </div>
</template>
<script>
import ApartmentCard from '@/components/ApartmentCard.vue'
import apartmentData from '../../stays.json'

export default {
  components: {
    ApartmentCard
  },
  data () {
    return {
      apartmentData: apartmentData
    }
  }
}
</script>
<style scoped>
</style>
