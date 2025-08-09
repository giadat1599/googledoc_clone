<script setup lang="ts">
import { HighlighterIcon } from "lucide-vue-next";
import { CompactPicker } from "vue-color";

const editorStore = useEditorStore();
const { editor } = storeToRefs(editorStore);

const color = computed({
  get: () => editor.value?.getAttributes("highlight").color || "#000000",
  set: val => editor.value?.chain().focus().setHighlight({ color: val }).run(),
});
</script>

<template>
  <DropdownMenu>
    <DropdownMenuTrigger as-child>
      <button class="h-7 min-w-7 shrink-0 flex flex-col items-center justify-center rounded-sm hover:bg-neutral-200/80 px-1.5 overflow-hidden text-sm cursor-pointer">
        <HighlighterIcon class="size-4" />
      </button>
    </DropdownMenuTrigger>
    <DropdownMenuContent class="p-0 bg-transparent">
      <ClientOnly>
        <CompactPicker v-model="color" />
      </ClientOnly>
    </DropdownMenuContent>
  </DropdownMenu>
</template>
