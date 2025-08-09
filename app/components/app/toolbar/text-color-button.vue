<script setup lang="ts">
import { CompactPicker } from "vue-color";

const editorStore = useEditorStore();
const { editor } = storeToRefs(editorStore);

const color = computed({
  get: () => editor.value?.getAttributes("textStyle").color || "#000000",
  set: val => editor.value?.chain().focus().setColor(val).run(),
});
</script>

<template>
  <DropdownMenu>
    <DropdownMenuTrigger as-child>
      <button class="h-7 min-w-7 shrink-0 flex flex-col items-center justify-center rounded-sm hover:bg-neutral-200/80 px-1.5 overflow-hidden text-sm cursor-pointer">
        <span class="text-sm">A</span>
        <div class="h-0.5 w-full" :style="{ 'background-color': color }" />
      </button>
    </DropdownMenuTrigger>
    <DropdownMenuContent class="p-0 bg-transparent">
      <ClientOnly>
        <CompactPicker v-model="color" />
      </ClientOnly>
    </DropdownMenuContent>
  </DropdownMenu>
</template>
