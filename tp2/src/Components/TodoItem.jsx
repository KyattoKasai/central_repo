import '../Css scripts/TodoItem.css';

export default function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <li className="todo-item">
      <p className={`todo-text ${todo.status ? 'done' : ''}`}>
        {todo.id + ". "}
        {todo.description}
      </p>
      
      <div className="todo-buttons">
        <button className={`done-button ${todo.status ? 'undone' : ''}`} onClick={() => onToggle(todo.id)}>
          {todo.status ? '↩' : '✔'}
        </button>
        <button className="delete-button" onClick={() => onDelete(todo.id)}>
          ✖
        </button>
      </div>
    </li>
  );
}