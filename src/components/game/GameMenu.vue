<script setup lang="ts">
import { $game } from "@/i18n";
import { $languageMenu } from "@/stores/languageMenu";
import { $menuOpen } from "@/stores/menuOpen";
import { useStore } from "@nanostores/vue";

const menuOpen = useStore($menuOpen);
const game = useStore($game);

function handleTranslateClick() {
  $menuOpen.set(false);
  $languageMenu.set(true);
}
</script>

<template>
  <div
    class="absolute inset-0 z-50 flex size-full items-center justify-center bg-black/50 p-6 md:hidden"
    v-if="menuOpen"
  >
    <div
      role="dialog"
      aria-label="Game Menu"
      class="flex w-full flex-col items-center gap-4 rounded-xl bg-gray-white p-6"
    >
      <button class="orange">{{ game.restart }}</button>
      <button>{{ game.new }}</button>
      <button @click="$menuOpen.set(false)">{{ game.resume }}</button>
      <button @click="handleTranslateClick">{{ game.language }}</button>
    </div>
  </div>
</template>

<style scoped>
button {
  @apply flex h-12 w-full items-center justify-center rounded-full bg-[#DFE7EC] text-lg font-bold text-medium-gray;
}

button.orange {
  @apply bg-orange text-almost-white;
}
</style>
