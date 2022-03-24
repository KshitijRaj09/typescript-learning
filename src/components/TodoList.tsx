interface Props {
  id: number;
  todo: string;
  isDone: boolean;
}

const TodoList = ({ id, todo, isDone }: Props) => {
  return (
    <div>
      <span>{todo}</span>
      {isDone}
      <span>Not Done</span>
    </div>
  );
};

export default TodoList;
