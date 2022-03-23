<template>
  <vuedatepicker v-model="selectedDate" lang="ko" />
</template>

<script>
//  <vuedatepicker
//     v-model=""
//     :range=""
//     :lang=""
//     :firstDayOfWeek=""
//     :input-class=""
//     :position=""
//     :disabled-start-date=""
//     :disabled-end-date=""
//     :text-format=""
//     :date-format=""
//     :disabled=""
//     :placeholder=""
//     :circle=""
//     :show-clear-button=""
//     :show-picker-inital=""
//   />

import "vue-datepicker-ui/lib/vuedatepickerui.css";
import vuedatepicker from "vue-datepicker-ui";

export default {
  name: "CalendarComp",
  data() {
    return {
      selectedDate: new Date(),
    };
  },
  components: {
    vuedatepicker: vuedatepicker,
  },
};
</script>

<style scoped></style>
