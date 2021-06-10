import Vue from 'vue'
import VueRouter from 'vue-router'
import NProgress from 'nprogress'
import store from "../store"

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import(/* webpackChunkName: "home" */ '../pages/Home.vue'),
    beforeEnter(to, from, next) {
      let token = localStorage.getItem("rconnectToken") || "";
      if (token != "") {
        store.commit("all/setToken", localStorage.getItem("rconnectToken"));
        const isRedirection = to.name !== 'Home'
        return next(isRedirection ? true : {
          name: 'StartPage'
        })
      } else {
        return next({ name: "Login" });
      }
    },
    redirect: to => ({
      name: 'StartPage'
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
          },
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
          path: "channel/:channel_code",
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
          path: "direct/:contact_id",
          name: "PersonalChat",
          component: () => {
            return import("../components/ChatPage/Direct/PersonalChat")
          }
        }
        ]
      },
      {
        path: "settings",
        name: "SettingsPage",
        component: () => import(/* webpackChunkName: "settingspage" */ '../components/Settings/Settings'),
        beforeEnter(to, from, next) {
          const isRedirection = to.name !== 'SettingsPage'
          return next(isRedirection ? true : {
            name: 'MyAccount'
          })
        },
        redirect: to => ({
          name: 'MyAccount'
        }),
        children: [
          {
            path: "account",
            name: "MyAccount",
            component: () => import(/* webpackChunkName: "myaccount" */ '../components/Settings/MyAccount')
          },
          {
            path: "profile-settings",
            name: "ProfileSettings",
            component: () => import(/* webpackChunkName: "profilesettings" */ '../components/Settings/ProfileSettings')
          },
          {
            path: "notification-settings",
            name: "NotificationSettings",
            component: () => import(/* webpackChunkName: "notificationssettings" */ '../components/Settings/NotificationSettings')
          }
        ]
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "about" */ '../pages/Login.vue'),
    beforeEnter(to, from, next) {
      let token = localStorage.getItem("rconnectToken") || "";
      if (token != "") {
        return next({ name: 'Home' })
      } else {
        return next();
      }
    },
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import(/* webpackChunkName: "register" */ '../pages/Register.vue'),
    beforeEnter(to, from, next) {
      let token = localStorage.getItem("rconnectToken") || "";
      if (token != "") {
        return next({ name: 'Home' })
      } else {
        return next();
      }
    },
  },
  {
    path: "/email-verification",
    name: "EmailVerifiaction",
    component: () => import(/* webpackChunkName: "email_verification" */ '../pages/CodeVerification.vue'),
    beforeEnter(to, from, next) {
      let userInfo = localStorage.getItem("user-data") || false
      if (!userInfo) {
        return next({ name: "Login" })
      } else {
        return next()
      }
    },
  },
  {
    path: "/send-link",
    name: "Reset_link",
    component: () => import(/* webpackChunkName: "Reset_link" */ '../pages/SendEmail.vue'),
    beforeEnter(to, from, next) {
      let userInfo = localStorage.getItem("rconnectToken") || false
      if (!userInfo) {
        return next({ name: "Home" })
      } else {
        return next()
      }
    },
  },
 
  {
    path: '/reset-password',
    name: "ResetPassword",
    component: ()=> import('../pages/ForgotPassword.vue')
  },
  {
    path: '/change-password',
    name: "ResetPassword",
    component: ()=> import('../pages/ChangePassword.vue')
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
  if (to.name || to.path) {
    NProgress.start()
  }
  next()
})

router.afterEach((to, from) => {
  NProgress.done()
})

export default router
