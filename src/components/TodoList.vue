<template>
<h1>Composition API</h1>
<ul>
    <li v-for="(task, i) in state.todos" :key="i">
        <span @click="toggleTaskStatus(task)" :class="{'delete': task.completed}">{{ task.title }}</span>
        <button @click="deleteTask(task)">Delete</button>
    </li>
</ul>
<input type="text" v-model="state.new_task" @keypress.enter="addTask" />
<button @click="addTask">Add</button>
<div>
    <p>Completed: {{ state.completedTaskCount }}</p>
    <p>Pending: {{ state.pendingTaskCount }}</p>
</div>
</template>
<script>
import { computed, reactive } from 'vue';

export default {
    setup() {
        const state = reactive({
            new_task: '',
            todos: [
                { title: "Task 1", completed: true},
                { title: "Task 2", completed: false},
            ],
            completedTaskCount: computed(() => {
                return state.todos.filter(task => task.completed).length;
            }),
            pendingTaskCount: computed(() => {
                return state.todos.filter(task => !task.completed).length;
            })
        });
        function toggleTaskStatus(task) {
            task.completed = !task.completed;
        }
        function deleteTask(task) {
            let index = state.todos.indexOf(task);
            state.todos.splice(index, 1);
        }
        function addTask() {
            if(state.new_task) {
                state.todos.push({
                    title: state.new_task,
                    completed: false,
                })
                state.new_task = '';
            }
        }
        return {
            state,
            toggleTaskStatus,
            deleteTask,
            addTask,
        }
    }
}
</script>
<style scoped>
    .delete {
        text-decoration: line-through;
    }
    span, button {
        font-size: 24px;
        margin: 5px 10px;
    }
    input, button {
        height: 30px;
    }
</style>