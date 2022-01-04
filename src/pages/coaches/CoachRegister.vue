<template>
<section>
  <base-card>
    <h2>Register as a coach!</h2>
    <coach-form @save-coach="addCoach"></coach-form>
  </base-card>
</section>
</template>

<script>
import CoachForm from '../../components/coach/CoachForm.vue'
export default {
  components: {
    CoachForm
  },
  methods: {
    addCoach(newCoach) {
      this.$store.dispatch('coach/updateCoachList', newCoach)
      this.$router.replace('/coaches') // redirect to coaches page
    }
  }
};
</script>

<style scoped>
</style>
