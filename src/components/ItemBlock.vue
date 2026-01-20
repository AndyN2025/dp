<template>
    <div class="item-block">
        <ItemCard 
            v-for="item in items" 
            :key="item.id" 
            :item="item" 
            :isSelected="isItemSelected(item)"
            @select="handleSelect" />
    </div>
</template>

<script lang="ts" setup>
import type { Item } from '../composables/types';
import ItemCard from './ItemCard.vue';

const props = defineProps<{
    items: Item[],
    selectedItems: Item[],
    singleSelect?: boolean
}>();

const emit = defineEmits<{
    (e: 'update', item: Item): void,
    (e: 'toggle', item: Item): void
}>();

const isItemSelected = (item: Item) => {
    return props.selectedItems.some(i => i.id === item.id);
}

const handleSelect = (item: Item) => {
    if (props.singleSelect) {
        emit('update', item);
    } else {
        emit('toggle', item);
    }
}
</script>

<style scoped>
.item-block {
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;
    gap: 8px;
    padding: 8px;
    border: 1px solid #ddd;
}
</style>
