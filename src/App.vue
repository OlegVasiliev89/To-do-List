<script setup>
import { ref,computed } from "vue";
const tasks = ref([
  {
    id: 1,
    title: "Tidy Up The House",
    status: "ACTIVE",
  }, 
  {
    id: 2,
    title: "Reach Out To Family",
    status: "ACTIVE",
  }, 
  {
    id: 3,
    title: "Go Shopping",
    status: "ACTIVE",
  }, 
  {
    id: 4,
    title: "Read One Hour",
    status: "COMPLETED",
  },
]) 

const newTaskTitle = ref('');

const activeTasks = computed(()=> tasks.value.filter(el=>el.status === 'ACTIVE'));
const completedTasks = computed(()=> tasks.value.filter(el=>el.status === 'COMPLETED'));

// soft detele
function deleteItem(id){
  tasks.value.filter((el) =>el.id === id)[0].status = 'DELETED'; 
}

function changeTaskStatus(id){
  const task = tasks.value.find((el) => el.id === id);
  if(task){
    task.status = task.status === 'ACTIVE' ? 'COMPLETED' : 'ACTIVE';
  }
}

function addTask(){
  tasks.value.push({
    id: tasks.value.length + 1,
    title: newTaskTitle.value,
    status: 'ACTIVE'
  });

  newTaskTitle.value = '';
}
</script>

<template>
  <header>
  <h1>Just Do It.</h1>
  <div>
    <input type="text" v-model="newTaskTitle" />
    <button @click="addTask()">Create</button>
  </div>
</header>
<main>
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
  <div v-else >All tasks have been completed!</div>
  <ul v-if="completedTasks.length > 0">
    <li v-for="item in completedTasks" :key="item.id">
      <span>
        <input type="checkbox" 
        @change="() => changeTaskStatus(item.id)"
        :checked="item.status=='COMPLETED'"/>
        <span><s>{{ item.title }} </s></span>
      </span>
      <div>
          <button @click="deleteItem(item.id)">
            <i class="fas fa-trash"></i>
        </button>
      </div>
    </li>
  </ul>
</main>
</template>

