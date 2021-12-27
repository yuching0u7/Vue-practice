import {
  createRouter,
  createWebHistory
} from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [{
      // redirect to coaches
      path: '/',
      redirect: '/coaches'
    }, {
      path: '/coaches',
      component: null
    },
    {
      path: '/coaches/:id',
      component: null,
      children: [{
        // coaches/xxxx/contact
        path: '/contact',
        component: null
      }]
    },
    {
      path: '/register',
      component: null
    },
    {
      path: '/requests',
      component: null
    }, {
      // catch all 
      path: '/:notfound(.*)',
      component: null
    }
  ]
})

export default router