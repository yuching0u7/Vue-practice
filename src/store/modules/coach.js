const coach = {
  namespaced: true,
  state() {
    return {
      coaches: [{
          id: 'c1',
          firstName: 'Maximilian',
          lastName: 'Schwarzmüller',
          areas: ['frontend', 'backend', 'career'],
          description: "I'm Maximilian and I've worked as a freelance web developer for years. Let me help you become a developer as well!",
          hourlyRate: 30
        },
        {
          id: 'c2',
          firstName: 'Julie',
          lastName: 'Jones',
          areas: ['frontend', 'career'],
          description: 'I am Julie and as a senior developer in a big tech company, I can help you get your first job or progress in your current role.',
          hourlyRate: 30
        }
      ]
    }
  },
  mutations: {
    updateCoachList(state, payload) {
      state.coaches.push(payload)
    }
  },
  actions: {
    updateCoachList(context, data) {
      data.id = context.rootGetters.userId
      context.commit('updateCoachList', data)
    }
  },
  getters: {
    coaches(state) {
      return state.coaches
    },
    hasCoach(state) {
      return state.coaches && state.coaches.length > 0
    },
    isCoach(_, getters, _2, rootGetters) {
      const coaches = getters.coaches
      const userId = rootGetters.userId
      return coaches.some(coach => coach.id == userId) 
    }
  }

}

export default coach