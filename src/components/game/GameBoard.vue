<script setup lang="ts">
import { $game } from "@/i18n";
import { $menuOpen } from "@/stores/menuOpen";
import { useStore } from "@nanostores/vue";

const game = useStore($game);
const menuOpen = useStore($menuOpen);
</script>

<template>
  <main
    class="flex h-fit min-h-screen w-full flex-col justify-between gap-20 p-6"
  >
    <div class="flex flex-row justify-between">
      <span class="text-2xl font-bold text-dark-gray">memory</span>
      <button
        class="flex h-10 items-center rounded-full bg-orange p-5 font-bold text-almost-white md:hidden"
        :aria-expanded="menuOpen"
        @click="$menuOpen.set(true)"
      >
        {{ game.menu }}
      </button>
    </div>

    <div>Game Board</div>

    <div>Players</div>
  </main>
</template>
