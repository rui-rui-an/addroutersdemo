import Vue from "vue"
import VueRouter from "vue-router"
import Login from "../views/login"

Vue.use(VueRouter)

const StaticRouterMap = [
  {
    path: "/",
    redirect: "/login",
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/layout",
    name: "Layout",
    redirect: "/dashboard",
    component: () => import("@/layout"),
    children: [
      {
        path: "/dashboard",
        name: "Dashboard",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/dashboard"),
      },
    ],
  },

  {
    path: "/404",
    component: () => import("@/views/404"),
    hidden: true,
  },
]

export default new VueRouter({
  mode: "history",
  scrollBehavior: () => ({ y: 0 }),
  routes: StaticRouterMap,
})
