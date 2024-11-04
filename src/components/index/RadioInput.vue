<script setup lang="ts">
import { onMounted, useTemplateRef } from "vue";

const props = defineProps<{
  name: string;
  legend: string;
  options: string[];
  values: string[];
}>();

const model = defineModel<string>();
const gridRef = useTemplateRef("grid");

onMounted(() => {
  gridRef.value!.style.gridTemplateColumns = `repeat(${props.options.length}, minmax(0, 1fr))`;
});
</script>

<template>
  <fieldset class="grid gap-2.5 pt-3" ref="grid">
    <legend class="text-[15px] font-bold text-gray-blue md:text-xl">
      {{ legend }}
    </legend>

    <label
      class="flex h-10 items-center justify-center rounded-full bg-light-gray-blue font-bold text-almost-white hover:bg-blue has-[:checked]:bg-medium-gray md:h-[3.25rem] md:text-[1.625rem]"
      v-for="(option, idx) in props.options"
    >
      <input type="radio" :name :value="values[idx]" v-model="model" />
      {{ option }}
    </label>
  </fieldset>
</template>

<style scoped>
input {
  appearance: none;
  -moz-appearance: none;
  margin: 0;
}
</style>
