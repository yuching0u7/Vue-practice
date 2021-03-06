import { createRouter, createWebHistory } from 'vue-router'

import CoachesList from './pages/coaches/CoachesList.vue'
import CoachDetail from './pages/coaches/CoachDetail.vue'
import CoachRegister from './pages/coaches/CoachRegister.vue'
import ContactCoadh from './pages/requests/ContactCoach.vue'
import RequestReceived from './pages/requests/RequestReceived.vue'
import NotFound from './pages/NotFound.vue'

const router = createRouter({
  history: createWebHistory(),
  routes:[
    {path: '/', redirect:'/coaches'},
    {path: '/coaches', component: CoachesList,},
    {path: '/coaches/:id', component: CoachDetail, props:true, children:[
      {path:'contact', component:ContactCoadh}
    ]},
    {path: '/requests', component: RequestReceived},
    {path: '/register', component: CoachRegister},
    {path: '/:catchAll(.*)', component: NotFound}
  ]
})

export default router;