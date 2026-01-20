<template>
  <div 
    :class="['item-card', 
    { selected: isSelected }]" 
    @click="onClick">
    {{ item.name }}
  </div>
</template>

<script lang="ts" setup>
import type { Item } from '../composables/types';

const props = defineProps<{
  item: Item,
  isSelected: boolean
}>();

const emit = defineEmits<{
  (e: 'select', item: Item): void
}>();

const onClick = () => {
  emit('select', props.item);
}
</script>

<style scoped>
.item-card {
  border: 1px solid #818181;
  padding: 8px;
  margin: 4px;
  cursor: pointer;
  user-select: none;
  width: 80px;
  height: 80px;
}

.item-card.selected {
  background-color: #b3d4fc;
  border-color: #3399ff;
}
</style>
