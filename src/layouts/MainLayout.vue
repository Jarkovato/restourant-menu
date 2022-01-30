<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />
        <q-toolbar-title>
          Добро пожаловать
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      bordered
    >
      <q-list>
        <q-item-label
          header
        >
          Меню ресторана
        </q-item-label>

        <MenuLink
          v-for="link in menuLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import MenuLink from 'components/MenuLink.vue'

const menuList = [
  {
    title: 'Супы',
    caption: 'Вкусные, горячие, сытные',
    icon: 'ramen_dining',
    link: '/soups'
  },
  {
    title: 'Основные блюда',
    caption: 'Лучшая паста в этом городе',
    icon: 'dinner_dining',
    link: '/dishes'
  },
  {
    title: 'Салаты',
    caption: 'Свежие и яркие',
    icon: 'rice_bowl',
    link: '/salats'
  },
  {
    title: 'Десерты',
    caption: 'Сладость - радость',
    icon: 'bakery_dining',
    link: '/desserts'
  },
  {
    title: 'Напитки',
    caption: 'Горячие, холодные',
    icon: 'local_cafe',
    link: '/drinks'
  },
];

import { defineComponent, ref} from 'vue'

export default defineComponent({
  name: 'MainLayout',

  components: {
    MenuLink
  },

  setup () {
    const leftDrawerOpen = ref(false)

    return {
      menuLinks: menuList,
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
})
</script>
