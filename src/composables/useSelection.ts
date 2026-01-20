import { ref } from "vue";
import type { Item } from "./types";

export function useSelection() {
  const selectedUserItems = ref<Item[]>([]);
  const selectedChoiceItem = ref<Item | null>(null);

  function toggleUserItem(item: Item) {
    const index = selectedUserItems.value.findIndex(i => i.id === item.id);
    if (index >= 0) {
      selectedUserItems.value.splice(index, 1);
    } else {
      if (selectedUserItems.value.length < 6) {
        selectedUserItems.value.push(item);
      }
    }
  }

  function selectChoiceItem(item: Item) {
    if (selectedChoiceItem.value?.id === item.id) {
      selectedChoiceItem.value = null;
    } else {
      selectedChoiceItem.value = item;
    }
  }

  return {
    selectedUserItems,
    selectedChoiceItem,
    toggleUserItem,
    selectChoiceItem
  };
}
