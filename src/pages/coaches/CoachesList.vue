<template>
<section>
  button filter
</section>
<section>
  <base-card>
    <div class="controls">
      <base-button mode="outline">Refresh</base-button>
      <base-button link to="/register">Register as Coach</base-button>
    </div>
    <ul v-if="hasCoach">
      <coach-item v-for="coach in filterCoaches" :key="coach.id" :id="coach.id" :firstname="coach.firstName" :lastname="coach.lastName" :rate="coach.hourlyRate" :areas="coach.areas"></coach-item>
    </ul>
    <h3 v-else>No coach on the list.</h3>
  </base-card>
</section>
</template>

<script>
import CoachItem from '../../components/coach/CoachItem.vue'
export default {
  components: {
    CoachItem
  },
  computed: {
    filterCoaches() {
      return this.$store.getters['coach/coaches']
    },
    hasCoach() {
      return this.$store.getters['coach/hasCoach']
    }
  }
}
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.controls {
  display: flex;
  justify-content: space-between;
}
</style>
