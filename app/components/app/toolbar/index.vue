<script setup lang="ts">
import { Undo2Icon } from "lucide-vue-next";

const editorStore = useEditorStore();
const sections = [{ key: "undo", label: "Undo", icon: Undo2Icon }];

function handleClick() {
  editorStore.editor?.chain().focus().undo().run();
}
</script>

<template>
  <div class="bg-[#f1f4f9] px-2.5 py-0.5 rounded-[24px] min-h-[40px] flex items-center gap-x-0.5 overflow-x-auto">
    <AppToolbarButton
      v-for="item in sections"
      :key="item.key"
      :icon="item.icon"
      @click="handleClick()"
    />
  </div>
</template>
