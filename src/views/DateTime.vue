<template>
    <div class="home">
        <h1>$d(time, key)</h1>
        <span>{{ $d(new Date()) }}</span>
        <span>{{ $d(new Date(), "long") }}</span>
        <!-- year -->
        <h1>year</h1>
        <div>
            <span>{{ $d(new Date(), "year_numeric") }}</span>
            <span>{{ $d(new Date(), "year_two") }}</span>
        </div>

        <!-- month -->
        <h1>month</h1>
        <div>
            <span>{{ $d(new Date(), "month_numeric") }}</span>
            <span>{{ $d(new Date(), "month_two") }}</span>
            <span>{{ $d(new Date(), "month_narrow") }}</span>
            <span>{{ $d(new Date(), "month_short") }}</span>
            <span>{{ $d(new Date(), "month_long") }}</span>
        </div>

        <!-- day -->
        <h1>day</h1>
        <div>
            <span>{{ $d(new Date(), "day_numeric") }}</span>
            <span>{{ $d(new Date(), "day_two") }}</span>
        </div>

        <!-- hour -->
        <h1>hour</h1>
        <div>
            <span>{{ $d(new Date(), "hour_numeric") }}</span>
            <span>{{ $d(new Date(), "hour_two") }}</span>
        </div>

        <!-- minute -->
        <h1>minute</h1>
        <div>
            <span>{{ $d(new Date(), "minute_numeric") }}</span>
            <span>{{ $d(new Date(), "minute_two") }}</span>
        </div>

        <!-- second -->
        <h1>second</h1>
        <div>
            <span>{{ $d(new Date(), "second_numeric") }}</span>
            <span>{{ $d(new Date(), "second_two") }}</span>
        </div>

        <!-- timeZoneName -->
        <h1>timeZoneName</h1>
        <div>
            <span>{{ $d(new Date(), "timeZoneName_short") }}</span>
            <span>{{ $d(new Date(), "timeZoneName_long") }}</span>
        </div>

        <!-- weekday -->
        <h1>weekday</h1>
        <div>
            <span>{{ $d(new Date(), "weekday_narrow") }}</span>
            <span>{{ $d(new Date(), "weekday_short") }}</span>
            <span>{{ $d(new Date(), "weekday_long") }}</span>
        </div>

        <!-- era -->
        <h1>era</h1>
        <div>
            <span>{{ $d(new Date(), "era_narrow") }}</span>
            <span>{{ $d(new Date(), "era_short") }}</span>
            <span>{{ $d(new Date(), "era_long") }}</span>
        </div>
    </div>
</template>
  
<script lang="ts">
import Vue from "vue";

export default Vue.extend({
    name: "DateTimeView",
    components: {},
    data() {
        return {
            date: new Date(),
        };
    },
});
</script>
<style lang="scss" scoped>
span {
  margin: 0 1rem;
}
</style>
  