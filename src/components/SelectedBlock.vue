<template>
    <div class="selected-block">
        <div class="selected-block__list">
            <ItemCard 
                v-for="item in props.items" 
                :key="item.id" 
                :item="item" 
                :isSelected="true" />
        </div>
        <div 
            class="selected-block__count" 
            v-if="props.selectedCount">
            Selected: {{ props.items.length }}/ 6
        </div>
    </div>
</template>

<script lang="ts" setup>
import type { Item } from '../composables/types';
import ItemCard from './ItemCard.vue';

const props = defineProps<{
    items: Item[],
    selectedCount?: boolean
}>();

</script>

<style scoped>
.selected-block {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 10px;
    padding: 8px;
    border: 1px solid #333;
    min-height: 250px;
    width: 450px;
}

.selected-block__list {
    display: flex;
    flex-wrap: wrap;
}
</style>
