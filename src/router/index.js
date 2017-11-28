import Vue from 'vue'
import Router from 'vue-router'

import memberIndex from '@/pages/member_index'
import memberPoints from '@/pages/memberPoints'
import aboutPoint from '@/pages/aboutPoint'
import coupon from '@/pages/coupon'
import balance from '@/pages/balance'
import register from '@/pages/register'
import memberRules from '@/pages/memberRules'
import myInvitation from '@/pages/myInvitation'
import memberInfo from '@/pages/memberInfo'
import expensesRecord from '@/pages/expensesRecord'
import paymentSucc from '@/pages/paymentSucc'
import chooseCoupon from '@/pages/chooseCoupon'
import attentionEntrance from '@/pages/attentionEntrance'
import successfulGet from '@/pages/successfulGet'
import refuelBefore from '../pages/refuel-before.vue'
import OrderConfirmation from '../pages/order-confirmation.vue'
import OrderSuccess from '../pages/order-success.vue'
import Grade from '../pages/grade.vue'
import GradeSuccess from '../pages/grade-success.vue'
import AffirmOil from '../pages/affirm-oil.vue'
import CollectOil from '../pages/collect-oil.vue'
import OilDetails from '../pages/oil-details.vue'
import OrderDetails from '../pages/order-details.vue'
import InviteStamps from '../pages/invite-stamps.vue'
import OilNearby from '../pages/oil-nearby.vue'


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
    },
    {
      path: '/myInvitation',
      name: 'myInvitation',
      component: myInvitation,
      meta: {
        title: '我的邀请'
      }
    },
    {
      path: '/memberInfo',
      name: 'memberInfo',
      component: memberInfo,
      meta: {
        title: '会员卡详情'
      }
    },
    {
      path: '/expensesRecord',
      name: 'expensesRecord',
      component: expensesRecord,
      meta: {
        title: '消费记录'
      }
    },
    {
      path: '/paymentSucc',
      name: 'paymentSucc',
      component: paymentSucc,
      meta: {
        title: '支付成功'
      }
    },
    {
      path: '/chooseCoupon',
      name: 'chooseCoupon',
      component: chooseCoupon,
      meta: {
        title: '选择优惠券'
      }
    },
    {
      path: '/attentionEntrance',
      name: 'attentionEntrance',
      component: attentionEntrance,
      meta: {
        title: '邀请送券'
      }
    },
    {
      path: '/successfulGet',
      name: 'successfulGet',
      component: successfulGet,
      meta: {
        title: '邀请送券'
      }
    },
    {
      path: '/AffirmOil',
      component: AffirmOil
    },
    {
      path: '/refuel-before',
      component: refuelBefore
    },
    {
      path: '/order-confirmation',
      component: OrderConfirmation
    },
    {
      path: '/order-success',
      component: OrderSuccess
    },
    {
      path: '/grade-success',
      component: GradeSuccess
    },
    {
      path: '/grade',
      component: Grade
    },
    {
      path: '/affirm-oil',
      component: AffirmOil
    },
    {
      path: '/collect-oil',
      component: CollectOil
    },
    {
      path: '/oil-details',
      component: OilDetails
    },
    {
      path: '/order-details',
      component: OrderDetails
    },
    {
      path: '/invite-stamps',
      component: InviteStamps
    },
    {
      path: '/oil-nearby',
      component: OilNearby
    },
  ]
})
