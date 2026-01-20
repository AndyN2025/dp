<template>
  <div class="app">
    <div class="top-row">
      <SelectedBlock :items="selectedUserItems" :selectedCount="true"/>
      <SelectedBlock :items="selectedChoiceArray" />
    </div>

    <div class="bottom-row">
      <ItemBlock 
        :items="userItems" 
        :selectedItems="selectedUserItems" 
        @toggle="toggleUserItem" 
      />

      <ItemBlock 
        :items="choiceItems" 
        :selectedItems="selectedChoiceArray" 
        singleSelect
        @update="selectChoiceItem"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { useSelection } from './composables/useSelection';
import SelectedBlock from './components/SelectedBlock.vue';
import ItemBlock from './components/ItemBlock.vue';
import { userItems, choiceItems } from './utils/items'

const { selectedUserItems, selectedChoiceItem, toggleUserItem, selectChoiceItem } = useSelection();

const selectedChoiceArray = computed(() => selectedChoiceItem.value ? [selectedChoiceItem.value] : []);
</script>

<style scoped>
.app {
  width: calc(100% - 32px);
  height: calc(100vh - 36px);
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  padding: 16px;
  gap: 20px;
}

.bottom-row {
  display: flex;
  gap: 16px;
  height: 100%;
}

.top-row{
  display: flex;
  gap: 16px;
  justify-content: space-between;
}

.bottom-row > * {
  flex: 1;
}
</style>
