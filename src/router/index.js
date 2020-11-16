import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/NavComponents/NavComponents.vue'
// import Shop from '../views/ListControl/ListControl.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index,
    redirect:'/ShopComponents/SpecialMenu',
    children:[
      {
        path:'ShopComponents',
        name:'ShopComponents',
        component: () => import(/* webpackChunkName: "ShopComponents" */ '../views/ShopList/ShopComponents.vue'),
        redirect:'/ShopComponents/SpecialMenu',
        children:[
          {
            path:'SpecialMenu',
            name:'SpecialMenu',
            component:()=>import(/* webpackChunkName: "SpecialMenu" */ '../views/ShopList/SpecialMenu/SpecialMenu.vue'),
          },
          {
            path:'NewyearMenu',
            name:'NewyearMenu',
            component:()=>import(/* webpackChunkName: "NewyearMenu" */ '../views/ShopList/NewyearMenu/NewyearMenu.vue'),
          },
          {
            path:'BreakMenu',
            name:'BreakMenu',
            component:()=>import(/* webpackChunkName: "AllMenu" */ '../views/ShopList/BreakMenu/BreakMenu.vue'),
          },
        ]
      },


      {
        path:'Activity',
        name:'Activity',
        component: () => import(/* webpackChunkName: "Activity" */ '../views/Activity/Activity.vue')
      },


      {
        path:'UserComponents',
        name:'UserComponents',
        component: () => import(/* webpackChunkName: "UserComponents" */ '../views/User/UserComponents.vue'),
          
      },
      {
        path:'pay',
        name:'ListControl',
        component:()=>import(/* webpackChunkName: "registered" */ '../views/ListControl/ListControl.vue'),
      },
      {
        path:'check',
        name:'check',
        component:()=>import(/* webpackChunkName: "registered" */ '../views/ListControl/buydata/buy.vue'),
      },
    ],
    
  },

  
]

const router = new VueRouter({
  routes
})

export default router
