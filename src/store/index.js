import { createStore } from 'vuex'

import coach from './modules/coach'
import request from './modules/request'

const store = createStore({
  modules:{
    coach: coach,
    request: request
  },
  state(){
    return{
      userId: 'c3'
    }
  },
  mutations:{

  },
  actions:{

  },
  getters:{
    userId(state){
      return state.userId
    }
  }
})

export default store