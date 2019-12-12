import Vue from "vue"
import VueRouter from "vue-router";
import appList from "./app-list";
import appWeapon from "./app-weapon";
import appGear from "./app-gear"
import appContainer from "./app-container"
import addHero from "./add-hero";
import editHero from "./edit-hero"
Vue.use(VueRouter);

const router = new VueRouter({
  routes: [{
      path: '/',
      redirect: '/heroes'
    },
    {
      path: '/heroes',
      component: appContainer,
      children: [{
          path: '',
          component: appList
        },
        {
          path: 'add',
          component: addHero
        },
        {
          path: 'edit/:id',
          component: editHero
        }
      ]

    },
    {
      path: '/weapon',
      component: appWeapon

    },
    {
      path: '/gear',
      component: appGear

    }

  ]
});

export default router;
