<template>
  <div class="container">
    <div id="todoMenu">
      <input
        id="todoInput"
        type="text"
        placeholder="請輸入代辦事項"
        autocomplete="off"
        v-model="newTodo"
        @keyup.enter="addTodo"
      />
      <button id="todoAddButton" @click="addTodo">新增</button>
    </div>
    <div id="todoList">
      <div v-if="leastTodoCount">
        <h1>剩餘代辦事項: {{ leastTodoCount }} 項</h1>
      </div>
      <div v-else>
        <h1>恭喜! 已完成所有代辦事項</h1>
      </div>
      <Todo
        v-for="todo in todos"
        :key="todo.id"
        v-bind:todo="todo"
        v-bind:deleteTodo="deleteTodo"
        v-bind:changeTodoState="changeTodoState"
      />
    </div>
  </div>
</template>

<script>
import Todo from "@/components/todoList/Todo.vue";
export default {
  name: "App",
  components: {
    Todo,
  },
  data() {
    return {
      todos: [
        { id: 1, text: "Learn JavaScript", isCompleted: true },
        { id: 2, text: "Learn Vue", isCompleted: false },
        { id: 3, text: "Build something awesome", isCompleted: true },
      ],
      newTodo: "",
    };
  },
  computed: {
    leastTodoCount() {
      return this.todos.filter((todo) => todo.isCompleted === false).length;
    },
  },
  methods: {
    addTodo() {
      if (this.newTodo === "") {
        alert("請確實輸入代辦內容!");
        return;
      }
      this.todos = [
        ...this.todos,
        {
          id: Math.floor(Math.random() * 9999),
          text: this.newTodo,
          isCompleted: false,
        },
      ];
      // 清空輸入欄位
      this.newTodo = "";
    },
    changeTodoState(selectedTodo) {
      console.log("Change:", selectedTodo);
      this.todos = this.todos.map((todo) =>
        todo.id === selectedTodo.id
          ? {
              ...todo,
              isCompleted: !todo.isCompleted,
            }
          : todo
      );
    },
    deleteTodo(selectedTodo) {
      console.log("Delete:", selectedTodo);
      this.todos = this.todos.filter((todo) => todo.id !== selectedTodo.id);
    },
  },
};
</script>
<style scoped>
#todoMenu {
  display: flex;
  border-radius: 10px;
  padding: 20px;
  background: #fff;
  justify-content: center;
}

#todoInput {
  font-size: 20px;
  border-radius: 5px;
  padding: 5px;
  min-width: 50%;
}

#todoAddButton {
  width: 60px;
  border: 0;
  cursor: pointer;
  border-radius: 5px;
  margin-left: 5px;
  background: #0984e3;
  color: #fff;
  font-weight: bold;
  font-size: 16px;
}

#todoList {
  scroll-snap-align: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #fff;
  border-radius: 10px;
  margin-top: 20px;
  padding: 20px;
}
</style>
