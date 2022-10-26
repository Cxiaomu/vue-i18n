<template>
  <div id="app">
    <NavBar />
    <el-row>
      <el-col :span="4">
        <SlideBar />
      </el-col>
      <el-col :span="20">
        <router-view />
      </el-col>
    </el-row>
  </div>
</template>
<script lang="ts">
import NavBar from "@/components/navBar.vue";
import SlideBar from "@/components/sideBar.vue";
export default {
  name: "App",
  components: {
    NavBar,
    SlideBar,
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
