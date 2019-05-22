import Vue from 'vue'
import Router from 'vue-router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

Vue.use(Router)

// 组件异步加载，实现按需加载，进去哪个页面请求那个。提高首屏渲染速度
const route = new Router({
  routes: [{
    path: '/',
    redirect: '/login'
  }, {
    path: '/login',
    component: () => import('@/pages/login')
  }, {
    path: '/home',
    redirect: '/excl',
    component: () => import('@/pages/home'),
    children: [{
      path: '/excl',
      component: () => import('@/pages/excl')
    }, {
      path: '/content',
      component: () => import('@/pages/content'),
      meta: {
        role: ['admin']
      }
    }, {
      path: '/echarts',
      component: () => import('@/pages/echarts'),
      meta: {
        role: ['admin', 'editor']
      }
    }, {
      path: '/admin',
      component: () => import('@/pages/admin'),
      meta: {
        role: ['admin', 'editor']
      }
    }, {
      path: '/uploadExcl',
      component: () => import('@/pages/uploadExcl'),
      meta: {
        role: ['admin', 'editor']
      }
    }]
  }, {
    path: '/404page',
    component: () => import('@/error404')
  }]
})

// 须在Router里添加mete字段
route.beforeEach((to, form, next) => {
  // 在此处判断token失效与否，跳转不同路由
  const roles = localStorage.getItem('roles') ? localStorage.getItem('roles') : ''
  const token = localStorage.getItem('token') ? localStorage.getItem('token') : ''
  NProgress.start()
  if (to.path === '/' || to.path === '/login') {
    (roles && token) ? route.push('/home') : next()
  } else {
    // mete字段没有时 说明为admin权限
    if (to.meta && !to.meta.role) {
      next()
    } else if (to.meta && to.meta.role.length && to.meta.role.includes(roles)) {
      next()
    } else if (to.meta && to.meta.role.length && !to.meta.role.includes(roles)) {
      route.push('/404page')
    }
  }
})

route.afterEach(() => {
  NProgress.done()
})

export default route
