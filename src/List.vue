<template>
     <ul v-if="activeTasks.length > 0">
    <li v-for="item in activeTasks" :key="item.id">
      <span>
        <input type="checkbox" @change="() => changeTaskStatus(item.id)"  />
        <span>{{ item.title }}</span>
      </span>
      <div>
        <button @click="deleteItem(item.id)"><i class="fas fa-trash"></i></button>
      </div>
    </li>
  </ul>    
</template>
  <script setup>
</script>