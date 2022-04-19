  <template>
  <div>
    <div
      class="card"
      v-for="apartment in apartmentData.slice()"
      :key="apartment.id"
    >
      <div class="card-image">
        <figure class="image">
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
