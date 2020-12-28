import Vue from 'vue'
import VueRouter from 'vue-router'
import NProgress from 'nprogress'

Vue.use(VueRouter)

const routes = [
  // {
  //   path:"/channel/new",
  //   name:"NewChannel",
  //   component:() => import(/* webpackChunkName: "NewChannel" */ '../components/ChatPage/SideBar/NewChannel.vue'),
  // },
  {
    path: "/",
    name: "Home",
    component: () => import(/* webpackChunkName: "home" */ '../pages/Home.vue'),
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
    children: [
      {
        path: "/start",
        name: "StartPage",
        component: () => import(/* webpackChunkName: "startpage" */ '../components/StartPage/StartPage'),
        beforeEnter(to, from, next) {
          const isRedirection = to.name !== 'StartPage'
          return next(isRedirection ? true : {
            name: 'Start'
          })
        },
        redirect: to => ({
          name: 'Start'
        }),
        children: [
          {
            path: "",
            name: "Start",
            component: () => import(/* webpackChunkName: "start" */ '../components/StartPage/Start/Start')
          },
          {
            path: "new-organization",
            name: "NewWorkspace",
            component: () => import(/* webpackChunkName: "newWorkspace" */ '../components/StartPage/NewWorkspace/NewWorkspace')
          },
          {
            path: "search-organization",
            name: "FindWorkspace",
            component: () => import(/* webpackChunkName: "FindWorkspace" */ '../components/StartPage/FindWorkspace/FindWorkspace')
          }
        ]
      },
      {
      path: "chat",
      name: "ChatPage",
      component: () => {
        return import("../components/ChatPage/ChatPage")
      },
      beforeEnter(to, from, next) {
        const isRedirection = to.name !== 'ChatPage'
        return next(isRedirection ? true : {
          name: 'ChannelChat'
        })
      },
      redirect: () => ({ //@param {} to
        name: 'ChannelChat'
      }),
      children: [{
        path: "channel",
        name: "ChannelChat",
        component: () => {
          return import("../components/ChatPage/Channel/ChannelChat")
        },
        children: [{
          path: "new-channel",
          name: "NewChannel",
          component: () => {
            return import("../components/ChatPage/Channel/NewChannel")
          }
        }]
      },
      {
        path: "direct",
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
    path: '/**',
    name: 'NotFound',
    component: () => import(/* webpackChunkName: "register" */ '../pages/NotFound.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeResolve((to, from, next) => {
  // If this isn't an initial page load.
  if (to.name || to.path) {
    // Start the route progress bar.
    NProgress.start()
  }
  next()
})

router.afterEach((to, from) => {
  // Complete the animation of the route progress bar.
  NProgress.done()
})

export default router
