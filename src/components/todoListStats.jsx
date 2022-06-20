import { useRecoilValue } from 'recoil';
import { todoListStatsState } from '../selector';

export function TodoListStats() {
  // selectorを利用する場合もuseRecoilValueを使う
  const { totalNum, totalCompletedNum, totalUncompletedNum } = useRecoilValue(todoListStatsState);
  return (
    <ul>
      <li>
        Total items:
        {totalNum}
      </li>
      <li>
        Items completed:
        {totalCompletedNum}
      </li>
      <li>
        Items not completed:
        {totalUncompletedNum}
      </li>
    </ul>
  );
}
