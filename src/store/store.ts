import create from "zustand";

const addTodo = (todos: Todo[], text: string): Todo[] => [
  ...todos,
  {
    id: Math.max(0, Math.max(...todos.map(({ id }) => id))) + 1,
    text,
    completed: false,
  },
];

const editTodo = (todos: Todo[], id: number, text: string): Todo[] =>
  todos.map((todo) => ({
    ...todo,
    text: todo.id === id ? text : todo.text,
  }));

const removeTodo = (todos: Todo[], id: number): Todo[] =>
  todos.filter((todo) => {
    return todo.id !== id;
  });

const toggleTodo = (todos: Todo[], id: number): Todo[] =>
  todos.map((todo) => ({
    ...todo,
    completed: todo.id === id ? !todo.completed : todo.completed,
  }));

// Implementing zustand
const useStore = create<todoStore>((set) => ({
  todos: [],
  newTodo: "",
  add: () => {
    set((state) => ({
      ...state,
      todos: addTodo(state.todos, state.newTodo),
      newTodo: "",
    }));
  },
  edit: (id: number, text: string) => {
    set((state) => ({ ...state, todos: editTodo(state.todos, id, text) }));
  },
  setNewTodo: (text: string) => {
    set((state) => ({ ...state, newTodo: text }));
  },
  remove: (todos: Todo[], id: number) => {
    set((state) => ({ ...state, todos: removeTodo(todos, id) }));
  },
  toggle: (todos: Todo[], id: number) => {
    set((state) => ({ ...state, todos: toggleTodo(todos, id) }));
  },
}));

export default useStore;
