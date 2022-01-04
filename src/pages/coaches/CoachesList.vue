<template>
<section>
  <coach-filter @change-filter="setFilter"></coach-filter>
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
import CoachFilter from '../../components/coach/CoachFilter.vue'
export default {
  components: {
    CoachItem,
    CoachFilter
  },
  data(){
    return{
      activeFilter:{
        frontend:true,
        backend:true,
        career:true
      }
    }
  },
  computed: {
    filterCoaches() {
      const coaches = this.$store.getters['coach/coaches']
      return coaches.filter(coach => {
        if(this.activeFilter.frontend && coach.areas.includes('frontend')){
          return true
        }
        if(this.activeFilter.backend && coach.areas.includes('backend')){
          return true
        }
        if(this.activeFilter.career && coach.areas.includes('career')){
          return true
        }
        return false
      })
    },
    hasCoach() {
      return this.$store.getters['coach/hasCoach']
    }  
  },
  methods:{
    setFilter(filter){
      this.activeFilter = filter
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
