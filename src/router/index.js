import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: (reslove) => {
        require(['../pages/Hello.vue'],reslove)
      },
      children:[
        {
          path:'/table',
          name: 'Table',
          component: (reslove) => {
            require(['../pages/Table.vue'],reslove)
          }
        },
        {
          path:'/user',
          name: ' User',
          component: (reslove) => {
            require(['../pages/user.vue'],reslove)
          }
        },
      ]
    },
    {
      path: '/result',
      name: 'Result',
      component: (reslove) => {
        require(['../pages/result.vue'],reslove)
      }
    },
    {
      path: '/login',
      name: 'Login',
      component: (reslove) => {
        require(['../pages/login.vue'],reslove)
      }
    }
  ]
})
