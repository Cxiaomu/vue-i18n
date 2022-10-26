<template>
  <div id="navBar">
    <div class="left-logo">
      <!-- <p>Cxiaomu - I18n</p> -->
      <p>Vue - I18n</p>
    </div>
    <div class="right-content"></div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "NavBar",
  components: {},
});
</script>
<style lang="scss" scoped>
#navBar {
  display: flex;
  justify-content: space-between;
  padding: 0 1.5rem;
  line-height: 2rem;
  box-sizing: border-box;
  border-bottom: 1px solid #eaecef;
  .left-logo {
    p {
      font-size: 1.3rem;
      font-weight: 600;
      color: #2c3e50;
    }
  }
}
</style>
