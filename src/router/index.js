import Vue from 'vue'
import Router from 'vue-router'

import memberIndex from '@/pages/member_index'
import memberPoints from '@/pages/memberPoints'
import aboutPoint from '@/pages/aboutPoint'
import coupon from '@/pages/coupon'
import balance from '@/pages/balance'
import register from '@/pages/register'
import memberRules from '@/pages/memberRules'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'memberIndex',
      component: memberIndex,
      meta: {
        title: '会员卡'
      }
    },
    {
      path: '/memberPoints',
      name: 'memberPoints',
      component: memberPoints,
      meta: {
        title: '积分'
      }
    },
    {
      path: '/aboutPoint',
      name: 'aboutPoint',
      component: aboutPoint,
      meta: {
        title: '关于积分'
      }
    },
    {
      path: '/coupon/:id/:status',
      name: 'coupon',
      component: coupon,
      meta: {
        title: '优惠券'
      }
    },
    {
      path: '/balance',
      name: 'balance',
      component: balance,
      meta: {
        title: '会员卡余额'
      }
    },
    {
      path: '/register',
      name: 'register',
      component: register,
      meta: {
        title: '绑定手机号'
      }
    },
    {
      path: '/memberRules',
      name: 'memberRules',
      component: memberRules,
      meta: {
        title: '会员章程'
      }
    }
  ]
})
