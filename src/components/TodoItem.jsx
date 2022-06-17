import {useRecoilState} from 'recoil'
import { todoListState } from '../atom'

export const TodoItem = ({ item }) => {
    // 状態の取得と更新なのでuseRecoilState
    const [todoList, setTodoList] = useRecoilState(todoListState)

    const editItemText = (e) => {
        const index = todoList.findIndex((listItem) => listItem.id === item.id)
        const newTodoList = [
            ...todoList.slice(0, index),
            { ...item,title:e.target.value},
            ...todoList.slice(index + 1)
        ]
        setTodoList(newTodoList);
    }
    
    const toggleItemCompletion = () => {
        const index = todoList.findIndex((listItem) => listItem.id === item.id)
        const newTodoList = [
            ...todoList.slice(0, index),
            { ...item, isComplete: !item.isComplete },
            ...todoList.slice(index + 1)
        ]
        setTodoList(newTodoList);
    };    

    const deleteItem = () => {
        // componentのidとatomのidが一致するもののindexを取得
        const index = todoList.findIndex((listItem) => listItem.id === item.id)
        // 削除対象を除いた新しいatomを作成
        const newTodoList = [
            ...todoList.slice(0, index),
            ...todoList.slice(index + 1)
        ]
        setTodoList(newTodoList);
    };

    return (
        <div>
            <input
                type="checkbox"
                checked={item.isComplete}
                onChange={toggleItemCompletion}
            />
            <input type="text" value={item.title} onChange={editItemText } />
            <span onClick={deleteItem} style={{ cursor:'pointer'}}> X</span>
        </div>
    )
}