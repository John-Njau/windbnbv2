    <template>
  <div>
    fffffff
    <div
      class="card"
      v-for="apartment in apartmentData.slice(0, 3)"
      :key="apartment.id"
    >
      <div class="card-image">
        <figure class="image is-3by3">
          <img :src="apartment.photo" />
        </figure>
      </div>
    </div>
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

<style scoped>
</style>
