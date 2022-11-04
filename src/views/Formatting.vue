<template>
  <div class="home">
    <!-- $t("key") -->
    <h1>$t(key, value)</h1>
    <div>
      <h2>{{}} - key</h2>
      <span>{{ $t("normal.lael1") }}</span>
      <span>{{ $t("normal.obj1", obj1) }}</span>
      <span>{{ $t("normal.arr1", arr1) }}</span>
      <h2>v-text</h2>
      <span v-text="$t('normal.label1')"></span>
      <span v-text="$t('normal.obj1', obj1)"></span>
      <span v-text="$t('normal.arr1', arr1)"></span>
    </div>

    <!--  $tc(key,value) -->
    <h1>$tc(key, index, value)</h1>
    <div>
      <h2>{{}} - key</h2>
      <span>{{ $tc("normal.plur1", arr2[0]) }}</span>
      <span>{{ $tc("normal.plur1", arr2[1]) }}</span>
      <span>{{ $tc("normal.plur1", arr2[2]) }}</span>
      <span>{{ $tc("normal.plur2", arr2[0], arr2) }}</span>
      <span>{{ $tc("normal.plur2", arr2[1], arr2) }}</span>
      <span>{{ $tc("normal.plur2", arr2[2], arr2) }}</span>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "FormattingView",
  components: {},
  data() {
    return {
      obj1: {
        name: "Cxiaomu",
      },
      arr1: ["A"],
      arr2: [0, 1, 2],
    };
  },
});
</script>
<style lang="scss" scoped>
span {
  margin: 0 1rem;
}
</style>
