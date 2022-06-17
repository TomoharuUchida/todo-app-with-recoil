import { useState } from 'react';
import { useSetRecoilState } from 'recoil';

import { todoListState } from '../atom'

export const TodoItemCreator = () => {
    const [title, setTitle] =useState('')

    // 状態の更新のみで、取得はしないのでset
    const setTodoList = useSetRecoilState(todoListState)

    const handleChange = (e) => {
        setTitle(e.target.value)
    }

    const addItem = () => {
        setTodoList((oldTodoList) => [
            ...oldTodoList,
            {
                id: getId(),
                title,
                isComplete:false,
            }
        ])
        setTitle('')
    }

    return (
        <div style={{ margin: '1em 0' }}>
            <input type="text" value={title} onChange={handleChange} />
            <button onClick={addItem}>Add</button>
        </div>
    )
};

let id = 1
const getId = () => {
    return id++
}