<template>
  <div class="todo">
    <p class="todo-text" v-bind:class="{ completed: todo.isCompleted }">
      {{ todo.text }}
    </p>
    <button
      class="todo-btn btn-success"
      v-show="!todo.isCompleted"
      @click="changeTodoState(todo)"
    >
      完成
    </button>
    <button
      class="todo-btn btn-undo"
      v-show="todo.isCompleted"
      @click="changeTodoState(todo)"
    >
      復原
    </button>
    <button class="todo-btn btn-deleted" @click="deleteTodo(todo)">刪除</button>
  </div>
</template>

<script>
export default {
  name: "Todo",
  props: {
    todo: {
      type: Object,
      required: true,
      default() {
        return {
          text: "我是TODO標題",
          isCompleted: false,
        };
      },
    },
    deleteTodo: {
      type: Function,
    },
    changeTodoState: {
      type: Function,
    },
  },
};
</script>

<style scoped>
.todo {
  display: flex;
  width: 70%;
  padding: 10px;
  background: #fdcb6e;
  border-radius: 5px;
  font-weight: bold;
}

.todo:nth-child(odd) {
  background-color: #ffeaa7;
}

.todo-text {
  flex-grow: 1;
  font-size: 20px;
}

.todo-btn {
  width: 60px;
  border: 0;
  cursor: pointer;
  border-radius: 5px;
  margin: 5px;
  color: #fff;
  font-weight: bold;
  font-size: 16px;
}

.btn-success {
  background: #55efc4;
  color: #2d3436;
}

.btn-success:hover {
  background: #00b894;
}

.btn-undo {
  background: #636e72;
}

.btn-undo:hover {
  background: #2d3436;
}

.btn-deleted {
  background: #ff7675;
}

.btn-deleted:hover {
  background: #d63031;
}

.completed {
  text-decoration-line: line-through;
  font-style: italic;
  opacity: 0.6;
}
</style>
