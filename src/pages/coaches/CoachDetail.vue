<template>
<section>
  <base-card>
    <h2> {{ fullName }} </h2>
    <h3> $ {{ rate }} / hour </h3>
  </base-card>
</section>
<section>
  <base-card>
    <h2>Interested? Reach Out Now!</h2>
    <base-button link :to="`${$route.path}/contact`">Contact</base-button>
  </base-card>
</section>
<section>
  <base-card>
    <base-badge v-for="area in areas" :key="area" :type="area" :title="area"></base-badge>
    <p>{{ description }}</p>
  </base-card>
</section>
</template>

<script>
export default {
  props: ['id'],
  data() {
    return {
      coach: null
    }
  },
  computed:{
    fullName(){
      return this.coach.firstName + ' ' + this.coach.lastName
    },
    areas(){
      return this.coach.areas
    },
    description(){
      return this.coach.description
    },
    rate(){
      return this.coach.hourlyRate
    }
  },
  created(){
    this.coach = this.$store.getters['coach/coaches'].find(coach => coach.id == this.id)
  }
}
</script>
