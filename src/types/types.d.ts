// Structure of todo item

type Todo = {
  id: number;
  text: string;
  completed: boolean;
};

// Todo Store Type

type todoStore = {
  todos: Todo[];
  newTodo: string;
  add: (todos: Todo[], text: string) => void;
  edit: (id: number, text: string) => void;
  setNewTodo: (text: string) => void;
  remove: (todos: Todo[], id: number) => void;
  toggle: (todos: Todo[], id: number) => void;
};
