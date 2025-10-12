import React, { useState, useRef, useEffect } from 'react';

const TodoApp = () => {
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
      <div className="w-full max-w-xl bg-white shadow-lg rounded-2xl p-6">
        <h1 className="text-2xl font-extrabold mb-2">Todo App</h1>
        <form onSubmit={addTodo} className="flex gap-2 mb-4">
          <input
            ref={inputRef}
            value={input}
            onChange={e => setInput(e.target.value)}
            placeholder="Add a todo..."
            className="flex-1 px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-300"
          />
          <button type="submit" className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700">Add</button>
        </form>

        <div className="flex gap-2 mb-4">
          {['all', 'active', 'completed'].map(f => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-3 py-1 rounded ${filter === f ? 'bg-indigo-600 text-white' : 'bg-gray-100'}`}
            >{f.charAt(0).toUpperCase() + f.slice(1)}</button>
          ))}
        </div>

        <ul className="divide-y divide-gray-200">
          {filteredTodos.map(todo => (
            <li key={todo.id} className="flex justify-between items-center py-2">
              <div className="flex items-center gap-2">
                <button onClick={() => toggleComplete(todo.id)} className={`w-6 h-6 border rounded-full ${todo.completed ? 'bg-indigo-600 text-white' : ''}`}>
                  {todo.completed ? '✓' : ''}
                </button>

                {editingId === todo.id ? (
                  <input
                    value={editingText}
                    onChange={e => setEditingText(e.target.value)}
                    onBlur={() => saveEdit(todo.id)}
                    className="px-2 py-1 border rounded w-64"
                  />
                ) : (
                  <span className={`${todo.completed ? 'line-through text-gray-400' : ''}`}>{todo.text}</span>
                )}
              </div>

              <div className="flex gap-2">
                <button onClick={() => startEdit(todo.id, todo.text)} className="px-2 py-1 bg-gray-100 rounded hover:bg-gray-200">Edit</button>
                <button onClick={() => deleteTodo(todo.id)} className="px-2 py-1 bg-red-50 text-red-600 rounded hover:bg-red-100">Delete</button>
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-4 flex justify-between items-center">
          <span>{todos.filter(todo => !todo.completed).length} left</span>
          <div className="flex gap-2">
            <button onClick={() => setTodos(todos.map(todo => ({ ...todo, completed: !todo.completed })))} className="px-3 py-1 bg-gray-100 rounded hover:bg-gray-200">Toggle All</button>
            <button onClick={clearCompleted} className="px-3 py-1 bg-red-50 text-red-600 rounded hover:bg-red-100">Clear Completed</button>
          </div>
        </div>

        <p className="text-xs text-gray-400 mt-4 text-center">Made with ❤️</p>
      </div>
    </div>
  );
};

export default TodoApp;