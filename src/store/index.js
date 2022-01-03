import { createStore } from 'vuex'

import coach from './modules/coach'
import request from './modules/request'

const store = createStore({
  modules:{
    coach: coach,
    request: request
  },
  state(){

  },
  mutations:{

  },
  actions:{

  },

})

export default store