<script setup lang="ts">
import { $language } from "@/i18n";
import { $languageMenu } from "@/stores/languageMenu";
import { $locale } from "@/stores/locale";
import { $menuOpen } from "@/stores/menuOpen";
import { useStore } from "@nanostores/vue";
import { computed } from "vue";

const menuOpen = useStore($languageMenu);
const language = useStore($language);

const tls = computed(() => [
  language.value.english,
  language.value.japanese,
  language.value.vietnamese,
]);

function handleClick(lang: string) {
  $locale.set(lang);
  $languageMenu.set(false);
  $menuOpen.set(true);
}
</script>

<template>
  <div
    class="absolute inset-0 z-50 flex size-full items-center justify-center bg-black/50 p-6 md:hidden"
    v-if="menuOpen"
  >
    <div
      role="dialog"
      aria-label="Language Menu"
      class="flex w-full flex-col items-center gap-4 rounded-xl bg-gray-white p-6"
    >
      <button
        v-for="(lang, idx) in ['en', 'ja', 'vi']"
        @click="handleClick(lang)"
      >
        {{ tls[idx] }}
      </button>
    </div>
  </div>
</template>

<style scoped>
button {
  @apply flex h-12 w-full items-center justify-center rounded-full bg-[#DFE7EC] text-lg font-bold text-medium-gray;
}
</style>
