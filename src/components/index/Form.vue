<script setup lang="ts">
import { $form } from "@/i18n";
import { $locale, $localeStore } from "@/stores/locale";
import { useStore } from "@nanostores/vue";
import { computed, onMounted, onUnmounted, ref, watch } from "vue";
import RadioInput from "./RadioInput.vue";

const form = useStore($form);

const theme = ref("numbers");
const players = ref("1");
const grid = ref("4x4");
const language = ref($localeStore.get());

const width = ref(0);
const languageOptions = computed(() => {
  if (width.value < 420)
    return [
      form.value.englishSmall,
      form.value.japaneseSmall,
      form.value.vietnameseSmall,
    ];
  else return [form.value.english, form.value.japanese, form.value.vietnamese];
});

function handleResize() {
  width.value = window.innerWidth;
}

onMounted(() => {
  width.value = window.innerWidth;
  window.addEventListener("resize", handleResize);
});

onUnmounted(() => {
  window.removeEventListener("resize", handleResize);
});

watch(language, (val) => {
  $locale.set(val);
});
</script>

<template>
  <form
    class="flex w-full max-w-[40.675rem] flex-col gap-6 rounded-[0.625rem] bg-almost-white p-6 md:gap-8 md:p-14"
  >
    <RadioInput
      :legend="form.selectTheme"
      :options="[form.themeNumbers, form.themeIcons]"
      :values="['numbers', 'icons']"
      name="theme"
      v-model="theme"
    />
    <RadioInput
      :legend="form.numberOfPlayers"
      :options="['1', '2', '3', '4']"
      :values="['1', '2', '3', '4']"
      name="players"
      v-model="players"
    />
    <RadioInput
      :legend="form.gridSize"
      :options="['4x4', '6x6']"
      :values="['4x4', '6x6']"
      name="grid"
      v-model="grid"
    />
    <RadioInput
      :legend="form.language"
      :options="languageOptions"
      :values="['en', 'ja', 'vi']"
      name="language"
      v-model="language"
    />

    <button
      class="mt-2 h-12 w-full rounded-full bg-orange text-lg font-bold hover:bg-[#FFB84A] focus:bg-[#FFB84A] md:mt-0 md:h-[4.3rem] md:text-[2rem]"
    >
      {{ form.start }}
    </button>
  </form>
</template>
