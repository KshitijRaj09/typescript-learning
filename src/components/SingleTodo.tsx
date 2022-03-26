import { Todos } from '../model';

type Props = {
  todo: Todos;
  deleteTodoHandler: (id: number) => void;
};

export const SingleTodo = ({ todo, deleteTodoHandler }: Props) => {
  return (
    <div>
      <span>{todo.todo}</span>
      <button name='delete' onClick={() => deleteTodoHandler(todo.id)}>
        Done
      </button>
    </div>
  );
};
