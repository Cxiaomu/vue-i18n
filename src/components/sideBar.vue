<template>
  <div id="slideBar">
    <el-menu :default-active="activePath" class="el-menu-vertical-demo" @select="handleSelect">
      <el-menu-item v-for="menu in menuList" :key="menu.path" :index="menu.path">
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
        { label: "", name: "快速开始", path: "/start" },
        { label: "", name: "格式化", path: "/formatting" },
        { label: "", name: "日期时间", path: "/dateTime" },
      ],
    };
  },
  created() {
    this.menuList.forEach((item) => {
      if (this.$route.path.includes(item.path)) this.activePath = item.path;
    })
  },
  methods: {
    handleSelect(key: string, keyPath: string) {
      if (key !== this.activePath) {
        this.activePath = key;
        this.$router.push(key);
      }
    },
  },
});
</script>

<style scoped lang="scss">
@import "@/style/global.scss";

#slideBar {
  .el-menu-item.is-active {
    border-left: 5px solid $activeColor;

    .menu-title {
      color: $activeColor;
    }
  }

  .menu-title {
    text-align: left;
    font-size: 1.1em;
    line-height: 1.7;
    font-weight: 700;
    color: #2c3e50;
  }
}
</style>
