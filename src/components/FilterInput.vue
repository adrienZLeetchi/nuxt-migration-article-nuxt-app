<template>
  <div class="mb-3">
    <label for="exampleFormControlInput1" class="form-label">{{
      t("FilterLabel")
    }}</label>
    <input
      type="email"
      v-model="value"
      class="form-control w-auto"
      id="exampleFormControlInput1"
      placeholder="Rick"
    />
  </div>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n();

const props = defineProps(["modelValue"]);
const emit = defineEmits(["update:modelValue"]);

// https://vuejs.org/guide/components/events.html#usage-with-v-model
const value = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    emit("update:modelValue", value);
  },
});
</script>
