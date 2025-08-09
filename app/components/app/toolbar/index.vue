<script setup lang="ts">
const editorStore = useEditorStore();
const { sections } = storeToRefs(editorStore);
</script>

<template>
  <div class="bg-[#f1f4f9] px-2.5 py-0.5 rounded-[24px] min-h-[40px] flex items-center gap-x-0.5 overflow-x-auto">
    <AppToolbarButton
      v-for="item in sections[0]"
      :key="item.key"
      :icon="item.icon"
      @click="item.onClick"
    />
    <Separator orientation="vertical" class="h-6 bg-neutral-300" />
    <AppToolbarFontFamilyButton />
    <Separator orientation="vertical" class="h-6 bg-neutral-300" />
    <AppToolbarHeadingLevelButton />
    <Separator orientation="vertical" class="h-6 bg-neutral-300" />
    <AppToolbarButton
      v-for="item in sections[1]"
      :key="item.key"
      :icon="item.icon"
      :is-active="item.active"
      @click="item.onClick"
    />
    <Separator orientation="vertical" class="h-6 bg-neutral-300" />
    <AppToolbarTextColorButton />
    <AppToolbarHightlightColorButton />
    <Separator orientation="vertical" class="h-6 bg-neutral-300" />
    <AppToolbarButton
      v-for="item in sections[2]"
      :key="item.key"
      :icon="item.icon"
      :is-active="item.active"
      @click="item.onClick"
    />
  </div>
</template>
