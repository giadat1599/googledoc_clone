<script setup lang="ts">
defineProps<{
  isActive?: boolean;
  icon: Component;
}>();

defineEmits<{
  (e: "click", event: MouseEvent): void;
}>();
</script>

<template>
  <button
    :class="cn('text-sm h-7 min-w-7 flex items-center justify-center rounded-sm hover:bg-neutral-200/80 cursor-pointer',
               $props.isActive && 'bg-neutral-200/80')"
    @click="$emit('click', $event)"
  >
    <component :is="icon" class="size-4" />
  </button>
</template>
