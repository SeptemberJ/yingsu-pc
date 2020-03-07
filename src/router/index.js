import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/* Router Modules */
// import componentsRouter from './modules/components'
// import chartsRouter from './modules/charts'
// import tableRouter from './modules/table'
// import nestedRouter from './modules/nested'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar
    noCache: true                if set true, the page will no be cached(default is false)
    affix: true                  if set true, the tag will affix in the tags-view
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/redirect',
    component: Layout,
    hidden: true,
    children: [
      {
        path: '/redirect/:path(.*)',
        component: () => import('@/views/redirect/index')
      }
    ]
  },
  {
    path: '/website',
    component: () => import('@/views/website/website'),
    hidden: true
  },
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },
  {
    path: '/PayWaiting',
    component: () => import('@/views/PayWaiting/index'),
    hidden: true
  },
  {
    path: '/auth-redirect',
    component: () => import('@/views/login/auth-redirect'),
    hidden: true
  },
  {
    path: '/404',
    component: () => import('@/views/error-page/404'),
    hidden: true
  },
  {
    path: '/401',
    component: () => import('@/views/error-page/401'),
    hidden: true
  },
  {
    path: '/',
    component: Layout,
    redirect: '/businessBoard',
    children: [
      {
        path: 'businessBoard',
        component: () => import('@/views/businessBoard/index'),
        name: 'BusinessBoard',
        meta: { title: '业务看板', icon: 'kanban', affix: true, breadcrumb: false }
      }
    ]
  }
]

/**
 * asyncRoutes
 * the routes that need to be dynamically loaded based on user roles
 */
export const asyncRoutes = [
  {
    path: '/order',
    component: Layout,
    redirect: '/order/general',
    alwaysShow: true,
    name: 'order',
    meta: {
      title: '信息发布',
      icon: 'icon_Release'
    },
    children: [
      {
        path: 'general',
        component: () => import('@/views/order/general'),
        name: 'general',
        meta: {
          title: '普货发货'
        }
      },
      {
        path: 'dangerous',
        component: () => import('@/views/order/dangerous'),
        name: 'dangerous',
        meta: {
          title: '危化发货'
        }
      },
      {
        path: 'coldchain',
        component: () => import('@/views/order/coldchain'),
        name: 'coldchain',
        meta: {
          title: '冷链发货'
        }
      },
      {
        path: 'container',
        component: () => import('@/views/order/container'),
        name: 'container',
        meta: {
          title: '集装箱发货'
        }
      }
    ]
  },

  {
    path: '/userCenter',
    component: Layout,
    redirect: '/userCenter/myInfo',
    alwaysShow: true,
    name: 'userCenter',
    meta: {
      title: '用户中心',
      icon: 'user'
    },
    children: [
      {
        path: 'myInfo',
        component: () => import('@/views/userCenter/myInfo'),
        name: 'myInfo',
        meta: {
          title: '我的资料'
        }
      },
      {
        path: 'wallet',
        component: () => import('@/views/userCenter/wallet'),
        name: 'wallet',
        meta: {
          title: '我的钱包'
        }
      }
    ]
  },

  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const scrollBehavior = function(to, from, savedPosition) {
  if (to.hash) {
    return {
      // 通过 to.hash 的值來找到对应的元素
      selector: to.hash
    }
  }
}

const createRouter = () => new Router({
  // mode: 'history', // require service support
  // scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes,
  scrollBehavior
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
