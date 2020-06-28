<template>
  <div class="sidebar">
    <div class="sidebar-logo">
      <svg-icon icon-class="logo" class-name="logo"/>
      <span class="logo-title">标题</span>
    </div>
    <div class="sidebar-list">
      <div
        v-for="(item,index) in routes"
        :key="index"
        class="sidebar-list-item"
        :style="active(item.meta.title)"
      >
        <router-link class="sidebar-list-item-title" :to="item.path">
          {{ item.meta.title }}
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Sidebar',
  data() {
    return {}
  },
  computed: {
    routes() {
      let routes = this.$router.options.routes

      // only show title of layout's children
      routes = routes.filter(routes_item => {
        return routes_item.name === 'Layout'
      })

      // turn dict to list
      // !!! routes should be unique
      routes = routes[0] && routes[0].children
      return routes
    }
  },
  methods: {
    active(title) {
      const current_url = this.$route.meta && this.$route.meta.title
      const active = {
        background: '#245FF0',
        color: '#FFFFFF',
        fontWeight: '500'
      }
      return current_url === title ? active : ''
    }
  }
}
</script>

<style lang="stylus" scoped>
.sidebar {
  background: #FFFFFF;
  box-shadow: inset -1px 0px 0px #F2F2F2;
  height: 100%;

  .sidebar-logo {
    display: flex;
    justify-content: center;
    height: 65px;

    .logo {
      width: 23.5px;
    }

    .logo-title {
      margin: auto 0;
      padding: 0 13.5px;
      font-weight: 500;
      font-size: 14px;
      line-height: 21px;
      text-align: center;
      color: #111111;
    }
  }

  .sidebar-list {
    .sidebar-list-item {
      display: flex;
      cursor: pointer;
      font-weight: 300;

      .sidebar-list-item-title {
        margin: auto 0;
        padding: 18px 25px;
        font-size: 12px;
        line-height: 18px;
      }
    }
  }
}
</style>
