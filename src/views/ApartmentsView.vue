<template>
  <div>
    <div class="tabs is-right m-5">
      <ul>
        <!-- <div class="">
          <input
            type="search"
            class=""
            v-model="search"
            placeholder="Search..."
          />
           <span class="button m-2 ps-3">Search</span>
        </div> -->
        <div class="input-group d-flex justify-content-end m-3">
          <!-- <div class="input-group-prepend">
          </div> -->
          <input
            type="search"
            v-model="location"
            class=""
            placeholder="LOCATION"
          />
          <input
            type="text"
            class=""
            v-model="guests"
            placeholder="Add guests"
          />
          <span class="input-group-text" id=""
            ><i class="bi bi-search"></i
          ></span>
        </div>
      </ul>
    </div>
    <div class="columns d-flex flex-wrap">
      <div
        class="column"
        v-for="apartment in filteredData.slice()"
        :key="apartment.id"
      >
        <div class="card">
          <div class="images">
            <img class="" height="" :src="apartment.photo" />
          </div>
          <div class="card-content">
            <div class="media">
              <div class="media-left">
                <p class="title is-6 media-left">
                  <button class="button" value="" id="type">
                    {{ apartment.type }}
                  </button>
                </p>
              </div>
              <div class="media-content">
                <p
                  v-if="apartment.superHost === true"
                  class="button subtitle is-6 media-right"
                >
                  SuperHost
                </p>
                <p
                  v-else-if="apartment.superHost === false"
                  class="button subtitle"
                  style="display: none"
                ></p>
              </div>
              <div class="media-right">
                <p class="button">Max Guests: {{ apartment.maxGuests }}</p>
              </div>
            </div>
            <div class="content" id="title">
              {{ apartment.title }}
            </div>
          </div>
          <div class="m-3 p-3">
            {{ apartment.country }}, {{ apartment.city }}
          </div>
        </div>
      </div>
      <!-- <div class="column">Second column</div>
      <div class="column">Third column</div> -->
    </div>
    <!-- <div class="columns">
      <div
        class="column"
        v-for="apartment in filteredData.slice()"
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
                <p
                  v-if="apartment.superHost === true"
                  class="button subtitle is-6 media-right"
                >
                  SuperHost
                </p>
                <p
                  v-else-if="apartment.superHost === false"
                  class="button subtitle"
                  style="display: none"
                ></p>
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
    </div> -->
  </div>
</template>
<script>
import apartmentData from '../../stays.json'

export default {
  data () {
    return {
      // search: '',
      location: '',
      guests: '',
      apartmentData: apartmentData
    }
  },
  computed: {
    filteredData () {
      return this.apartmentData
        .filter((apartment) => {
          return (
            apartment.city.match(this.location) ||
            apartment.country.match(this.location)
            // apartment.title.match(this.search) ||
            // apartment.type.match(this.search)
          )
        })
        .filter((apartment) => {
          console.log(this.guests)
          return apartment.maxGuests.toString().match(this.guests)
        })
    }
  }
}
</script>
<style>
#title {
  font-weight: bold;
}
/* images{
  height:300px
} */
</style>
