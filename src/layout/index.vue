<template>
  <el-container class="screen-height">
    <el-aside width="150px">
      <Sidebar />
    </el-aside>
    <el-container>
      <el-header height="65px">
        <Navbar />
      </el-header>
      <el-main>
        <Main />
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import Navbar from './components/Navbar'
import Main from './components/Main'
import Sidebar from './components/Sidebar'

export default {
  name: 'Layout',
  components: {
    Navbar, Main, Sidebar
  },
  data() {
    return {}
  }
}
</script>

<style lang="stylus" scoped>
.screen-height{
  height: 100vh;
  overflow: hidden;
}
</style>
