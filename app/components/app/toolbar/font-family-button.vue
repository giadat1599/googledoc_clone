<script setup lang="ts">
import { ChevronDownIcon } from "lucide-vue-next";

const editorStore = useEditorStore();
const { editor } = storeToRefs(editorStore);

const fonts = [
  { label: "Arial", value: "Arial" },
  { label: "Times New Roman", value: "Times New Roman" },
  { label: "Courier New", value: "Courier New" },
  { label: "Georgia", value: "Georgia" },
  { label: "Verdana", value: "Verdana" },
];
</script>

<template>
  <DropdownMenu>
    <DropdownMenuTrigger as-child>
      <button class="h-7 w-[120px] shrink-0 flex items-center justify-between rounded-sm hover:bg-neutral-200/80 px-1.5 overflow-hidden text-sm cursor-pointer">
        <span class="truncate">
          {{ editor?.getAttributes('textStyle').fontFamily || 'Arial' }}
        </span>
        <ChevronDownIcon class="ml-2 size-4 shrink-0" />
      </button>
    </DropdownMenuTrigger>
    <DropdownMenuContent class="p-1 flex flex-col gap-y-1">
      <button
        v-for="font in fonts"
        :key="font.value"
        :class="cn('flex items-center gap-x-2 px-2 py-1 rounded-sm hover:bg-neutral-200/80 cursor-pointer',
                   editor?.getAttributes('textStyle').fontFamily === font.value && 'bg-neutral-200/80',
        )"
        :style="{ 'font-family': font.value }"
        @click="editor?.chain().focus().setFontFamily(font.value).run()"
      >
        <span class="text-sm">{{ font.label }}</span>
      </button>
    </DropdownMenuContent>
  </DropdownMenu>
</template>
