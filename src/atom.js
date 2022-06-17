import { atom } from 'recoil'

// atomを使って共有したい状態を定義する
export const todoListState = atom({
    // 一意となるkeyと初期値を設定する
    key: 'todoListState',
    default: [
        {
            id: 0,
            title: 'sent mail',
            isComplete: false            
        }
    ]
})

export const todoListFilterState = atom({
    key: 'todoListFilterState',
    default: 'Show All'
})