<template>
  <div>
    <HomePage></HomePage>
    <ApartmentCard></ApartmentCard>
    <PageFooterVue></PageFooterVue>
  </div>
</template>

<script>
// @ is an alias to /src
import ApartmentCard from '@/components/ApartmentCard.vue'
import PageFooterVue from '@/components/PageFooter.vue'
import HomePage from '@/components/HomePage.vue'

export default {
  name: 'HomeView',
  components: {
    ApartmentCard,
    PageFooterVue,
    HomePage
  }
}
</script>
