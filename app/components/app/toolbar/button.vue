<script setup lang="ts">
type Emits = {
  (e: "click", event: MouseEvent): void;
};

type Props = {
  isActive?: boolean;
  icon: Component;
};

defineProps<Props>();
defineEmits<Emits>();
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
