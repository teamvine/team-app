import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import(/* webpackChunkName: "about" */ '../pages/Home.vue'),
    beforeEnter(to, from, next) {
      // let token = localStorage.getItem("teamToken") || "";
      // if (token != "") {
      //   store.commit("all/setToken", localStorage.getItem("teamToken"));
      const isRedirection = to.name !== 'Home'
      return next(isRedirection ? true : {
        name: 'ChatPage'
      })
      // } else {
      //   return next({ name: "Login" });
      // }
    },
    redirect: to => ({
      name: 'ChatPage'
    }),
    children: [{
      path: "",
      name: "ChatPage",
      component: () => {
        return import("../components/ChatPage/ChatPage")
      },
      beforeEnter(to, from, next) {
        // let token = localStorage.getItem("teamToken") || "";
        // if (token != "") {
        //   store.commit("all/setToken", localStorage.getItem("teamToken"));
        const isRedirection = to.name !== 'ChatPage'
        return next(isRedirection ? true : {
          name: 'ChannelChat'
        })
        // } else {
        //   return next({ name: "Login" });
        // }
      },
      redirect: () => ({ //@param {} to
        name: 'ChannelChat'
      }),
      children: [{
        path: "",
        name: "ChannelChat",
        component: () => {
          return import("../components/ChatPage/Channel/ChannelChat")
        }
      },
      {
        path: "/personal",
        name: "PersonalChat",
        component: () => {
          return import("../components/ChatPage/Direct/PersonalChat")
        }
      }
      ]
    }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "about" */ '../pages/Login.vue')
  }, {
    path: '/register',
    name: 'Register',
    component: () => import(/* webpackChunkName: "register" */ '../pages/Register.vue')
  },
  {
    path: "/email-verification",
    name: "EmailVerifiaction",
    component: () => import(/* webpackChunkName: "email_verification" */ '../pages/CodeVerification.vue')
  },
  {
    path: '*',
    name: 'NotFound',
    component: () => import(/* webpackChunkName: "register" */ '../pages/NotFound.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
