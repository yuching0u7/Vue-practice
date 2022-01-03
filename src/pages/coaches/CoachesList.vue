<template>
<section>
  button filter
</section>
<section>
  <div class="controls">
    <button type="button">Refresh</button>
    <router-link to="/register">Register as Coach</router-link>
  </div>
  <ul v-if="hasCoach">
    <coach-item v-for="coach in filterCoaches" :key="coach.id" :firstname="coach.firstName" :lastname="coach.lastName" :rate="coach.hourlyRate" :areas="coach.areas"></coach-item>
  </ul>
  <h3 v-else>No coach on the list.</h3>
</section>
</template>

<script>
import CoachItem from '../../components/coach/CoachItem.vue'
export default {
  components: { CoachItem },
  computed: {
    filterCoaches() {
      return this.$store.getters['coach/coaches']
    },
    hasCoach(){
      return this.$store.getters['coach/hasCoach']
    }
  }
}
</script>
