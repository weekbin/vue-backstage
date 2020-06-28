<template>
  <div class="navbar">
    <h1 class="navbar-title">{{ title }}</h1>
    <div class="nav-list">
      <span class="nav-list-item-refresh">
        <svg-icon icon-class="refresh" class-name="refresh" />
      </span>
      <span class="nav-list-item-username" />
      <span class="nav-list-item-dropdown">
        <span class="username">{{ username }}</span>
        <svg-icon icon-class="dropdown" class-name="dropdown" />
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      username: 'weekbin'
    }
  },
  computed: {
    title() {
      return this.$route.meta.title
    }
  }
}
</script>

<style lang="stylus" scoped>
// config icons class
.refresh {
  width: 28px;
  height: 28px;
}

.dropdown {
  width: 10px;
  height: 5px;
  margin: auto;
}

// config navbar class
.navbar {
  position: relative;
  display: flex;
  background: #FFFFFF;
  box-shadow: inset 0px -1px 0px #F2F2F2;

  .navbar-title {
    margin: auto;
    padding: 22px;
    font-weight: 500;
    font-size: 14px;
    line-height: 21px;
    color: #111111;
  }

  .nav-list {
    position: absolute;
    right: 0;
    display: flex;
    justify-content: space-around;

    .nav-list-item-refresh {
      height: 28px;
      padding: 18px 16px;
      cursor: pointer;
    }

    .nav-list-item-dropdown {
      height: 32px;
      display: flex;
      cursor: pointer;
      padding: 16px;

      .username {
        padding: 0 11px;
        margin: auto;
        font-weight: 500;
        font-size: 14px;
        line-height: 21px;
        text-align: right;
        color: #505050;
      }
    }
  }
}
</style>
