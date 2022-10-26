<template>
  <div id="slideBar">
    <el-menu
      :default-active="activePath"
      class="el-menu-vertical-demo"
      @select="handleSelect"
    >
      <el-menu-item
        v-for="menu in menuList"
        :key="menu.path"
        :index="menu.path"
      >
        <span slot="title" class="menu-title">{{ menu.name }}</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "SildeBar",
  data() {
    return {
      activePath: "/start",
      menuList: [
        { label: "", name: "Start", path: "/start" },
        { label: "", name: "Formatting", path: "/formatting" },
      ],
    };
  },
  methods: {
    handleSelect(key: string, keyPath: string) {
      if (keyPath !== this.activePath) this.$router.push(key);
    },
  },
});
</script>

<style scoped lang="scss">
#slideBar {
  .menu-title {
    text-align: left;
    font-size: 1.1em;
    line-height: 1.7;
    font-weight: 700;
    color: #2c3e50;
  }
}
</style>
