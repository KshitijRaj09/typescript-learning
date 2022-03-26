import { Todos } from '../model';
import { SingleTodo } from './SingleTodo';

interface Props {
  todos: Todos[];
  setTodos: React.Dispatch<React.SetStateAction<Todos[]>>;
  deleteTodoHandler: (id: number) => void;
}

const TodoList = ({ todos, setTodos, deleteTodoHandler }: Props) => {
  const renderTodoList = () =>
    todos.map((todo) => (
      <SingleTodo
        key={todo.id}
        todo={todo}
        deleteTodoHandler={deleteTodoHandler}
      />
    ));

  return <div>{renderTodoList()}</div>;
};

export default TodoList;
