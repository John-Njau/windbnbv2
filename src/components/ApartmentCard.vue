<template>
  <div>
    <div class="columns">
      <div
        class="column"
        v-for="apartment in apartmentData.slice(0, 3)"
        :key="apartment.id"
      >
        <div class="card">
          <div class="card-image">
            <figure class="image is-3by3">
              <img :src="apartment.photo" />
            </figure>
          </div>
          <div class="card-content">
            <div class="media">
              <div class="media-left">
                <p class="title is-6 media-left">
                  <button class="button" value="">
                    {{ apartment.type }}
                  </button>
                </p>
              </div>
              <div class="media-content">
                <p class="button subtitle is-6 media-right">
                  {{ apartment.superHost }}
                </p>
              </div>
              <div class="media-right">
                <p class="button">Max Guests: {{ apartment.maxGuests }}</p>
              </div>
            </div>
            <div class="content">
              {{ apartment.title }}
              <div></div>
            </div>
          </div>
          {{ apartment.country }}, {{ apartment.city }}
        </div>
      </div>
      <!-- <div class="column">Second column</div>
      <div class="column">Third column</div> -->
    </div>
    <div class="columns">
      <div
        class="column"
        v-for="apartment in apartmentData.slice(4, 7)"
        :key="apartment.id"
      >
        <div class="card">
          <div class="card-image">
            <figure class="image is-3by3">
              <img :src="apartment.photo" />
            </figure>
          </div>
          <div class="card-content">
            <div class="media">
              <div class="media-left">
                <p class="title is-6 media-left">
                  <button class="button" value="">
                    {{ apartment.type }}
                  </button>
                </p>
              </div>
              <div class="media-content">
                <p class="button subtitle is-6 media-right">
                  {{ apartment.superHost }}
                </p>
              </div>
              <div class="media-right">
                <p class="button">Max Guests: {{ apartment.maxGuests }}</p>
              </div>
            </div>
            <div class="content">
              {{ apartment.title }}
              <div></div>
            </div>
          </div>
          {{ apartment.country }}, {{ apartment.city }}
        </div>
      </div>
      <!-- <div class="column">Second column</div>
      <div class="column">Third column</div> -->
    </div>

    <!-- <div>
      <progress class="progress is-small is-primary" max="100">15%</progress>
      <progress class="progress is-danger" max="100">30%</progress>
      <progress class="progress is-medium is-dark" max="50">45%</progress>
      <progress class="progress is-large is-info" max="100">60%</progress>
    </div> -->
  </div>
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
<style>
</style>
