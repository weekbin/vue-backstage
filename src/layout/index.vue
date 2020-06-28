<template>
  <el-container class="screen-height">
    <el-aside width="150px" class="fix-box-model">
      <Sidebar />
    </el-aside>
    <el-container>
      <el-header height="auto" class="fix-box-model">
        <Navbar />
      </el-header>
      <el-main class="fix-box-model">
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
.fix-box-model{
  margin: 0;
  padding: 0;
}
</style>
