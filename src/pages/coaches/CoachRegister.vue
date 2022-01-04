<template>
<section>
  <base-card>
    <h2>Register as a coach!</h2>
    <coach-form></coach-form>
  </base-card>
</section>
</template>

<script>
import CoachForm from '../../components/coach/CoachForm.vue'
export default {
  components: {
    CoachForm
  }
};
</script>

<style scoped>
</style>
