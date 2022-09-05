import { ChangeEvent, FormEvent, useState } from "react";
import useStore from "./store/store";

const App = () => {
  const { todos, edit, newTodo, add, setNewTodo, remove, toggle } = useStore();

  const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    add(todos, newTodo);
  };

  return (
    <div className="min-h-screen bg-[#0D0D0D] text-white font-['Arial'] flex flex-col gap-8 items-center justify-center">
      <h1 className="text-2xl">
        <span>
          {todos.length === 1 ? (
            <div className="font-bold">
              (<span className="text-[#ff922e]">{todos.length}</span>)
              <span className="text-[18px]"> TODO</span>
            </div>
          ) : (
            <div className="font-bold">
              (<span className="text-[#ff922e]">{todos.length}</span>)
              <span className="text-[18px]"> TODOS</span>
            </div>
          )}
        </span>
      </h1>

      <div className="flex flex-col gap-y-8 items-center justify-center">
        <div className="bg-[#171717] p-4 rounded-sm w-[24.6rem]">
          <form className="flex flex-col">
            <input
              type="text"
              className="bg-[#0D0D0D] rounded-sm px-3 py-2 font-bold border-none focus:ring-0 text-sm"
              value={newTodo}
              onChange={(e) => setNewTodo(e.target.value)}
            />
            <button
              type="submit"
              className="uppercase mt-4 bg-[#0D0D0D] rounded-sm text-sm font-bold py-2"
              onClick={handleSubmit}
            >
              Add todo
            </button>
          </form>
        </div>

        <div className="bg-[#171717] rounded-sm font-bold p-4">
          {todos.length !== 0 ? (
            todos.map((todo) => (
              <div
                key={todo.id}
                className="px-4 h-full flex gap-x-4 py-2 items-center"
              >
                <input
                  type="checkbox"
                  checked={todo.completed}
                  className="w-4 h-4 text-[#0d0d0d] rounded focus:ring-[#0d0d0d] ring-offset-[#0d0d0d] focus:ring-2 bg-[#0d0d0d] border-none outline-none opacity-50 hover:opacity-100 transition-all"
                  onChange={() => toggle(todos, todo.id)}
                />

                <p
                  className={
                    todo.completed
                      ? "bg-[#0D0D0D] px-4 py-1 rounded-sm text-sm w-64 opacity-50"
                      : "bg-[#0D0D0D] px-4 py-1 rounded-sm text-sm w-64"
                  }
                >
                  <p className="flex break-words items-center break-all">
                    <span className="mr-5 text-xs"> {todo.id} </span>
                    <input
                      type="text"
                      className="bg-[#0d0d0d] border-none text-xs focus:ring-0"
                      value={todo.text}
                      onChange={(e) => {
                        edit(todo.id, e.target.value);
                      }}
                    />
                  </p>
                </p>
                <div
                  className="text-sm bg-[#0D0D0D] px-2 py-1 opacity-50 hover:opacity-100 transition-all cursor-pointer"
                  onClick={() => remove(todos, todo.id)}
                >
                  <p> x </p>
                </div>
              </div>
            ))
          ) : (
            <div className="p-4 flex items-center justify-center h-full w-[22.6rem]">
              <p className="text-sm uppercase"> No todos are here yet! </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
