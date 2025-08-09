<script setup lang="ts">
import type { Level } from "@tiptap/extension-heading";

import { ChevronDownIcon } from "lucide-vue-next";

const editorStore = useEditorStore();
const { editor } = storeToRefs(editorStore);

const headings = [
  { label: "Normal Text", value: 0, fontSize: "16px" },
  { label: "Heading 1", value: 1, fontSize: "32px" },
  { label: "Heading 2", value: 2, fontSize: "24px" },
  { label: "Heading 3", value: 3, fontSize: "20px" },
  { label: "Heading 4", value: 4, fontSize: "18px" },
  { label: "Heading 5", value: 5, fontSize: "16px" },
];

const currentHeading = computed(() => {
  for (let level = 1; level <= 5; level++) {
    if (editor.value?.isActive("heading", { level })) {
      return `Heading ${level}`;
    }
  }
  return "Normal Text";
});

function onSetHeading(value: number) {
  if (value === 0) {
    editor.value?.chain().focus().setParagraph().run();
  }
  else {
    editor.value?.chain().focus().toggleHeading({ level: value as Level }).run();
  }
}
</script>

<template>
  <DropdownMenu>
    <DropdownMenuTrigger as-child>
      <button class="h-7 min-w-7 shrink-0 flex items-center justify-center rounded-sm hover:bg-neutral-200/80 px-1.5 overflow-hidden text-sm cursor-pointer">
        <span class="truncate">
          {{ currentHeading }}
        </span>
        <ChevronDownIcon class="ml-2 size-4 shrink-0" />
      </button>
    </DropdownMenuTrigger>
    <DropdownMenuContent class="p-1 flex flex-col gap-y-1">
      <button
        v-for="heading in headings"
        :key="heading.value"
        :class="cn('flex items-center gap-x-2 px-2 py-1 rounded-sm hover:bg-neutral-200/80 cursor-pointer',
                   ((heading.value === 0 && !editor?.isActive('heading')) || editor?.isActive('heading', { level: heading.value })) && 'bg-neutral-200/80',
        )"
        @click="onSetHeading(heading.value)"
      >
        <span :style="{ 'font-size': heading.fontSize }">{{ heading.label }}</span>
      </button>
    </DropdownMenuContent>
  </DropdownMenu>
</template>
