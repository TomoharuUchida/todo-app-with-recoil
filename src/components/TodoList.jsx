import { useRecoilValue } from 'recoil';

import { TodoItemCreator } from './TodoItemCreator';
import { TodoListStats } from './todoListStats';
import { TodoItem } from './TodoItem';
import { filteredTodoListState } from '../selector';
import { TodoListFilters } from './TodoListFilters';

export function TodoList() {
  // useRecoilValueは状態の取得のみ、更新は不可なので使わない
  const todoList = useRecoilValue(filteredTodoListState);

  return (
    <>
      <h1>Todo App With Recoil</h1>
      <TodoListFilters />
      <TodoListStats />
      <TodoItemCreator />
      {todoList.map((item) => (
        <TodoItem key={item.id} item={item} />
      ))}
    </>
  );
}
