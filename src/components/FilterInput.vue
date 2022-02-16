<template>
  <div class="mb-3">
    <label for="exampleFormControlInput1" class="form-label">{{
      $t("FilterLabel")
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

<script lang="ts">
import { computed, defineComponent } from "vue";

export default defineComponent({
  props: ["modelValue"],
  emits: ["update:modelValue"],
  setup(props, { emit }) {
    // https://vuejs.org/guide/components/events.html#usage-with-v-model
    const value = computed({
      get() {
        return props.modelValue;
      },
      set(value) {
        emit("update:modelValue", value);
      },
    });

    return { value };
  },
});
</script>
