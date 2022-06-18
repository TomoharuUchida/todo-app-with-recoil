import { atom,AtomEffect,DefaultValue } from 'recoil'

const localStorageEffect = key => ({setSelf,onSet }) => {
    const savedvalue = localStorage.getItem(key)
    if (savedvalue != null) {
        setSelf(JSON.parse(savedvalue))
    }

    onSet((newValue) => {
        if (newValue instanceof DefaultValue) {
            localStorage.removeItem(key)
        } else {
            localStorage.setItem(key, JSON.stringify(newValue))
        }
    })
}

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
    ],
    effects: [
        localStorageEffect('todoListState')
    ]
})

export const todoListFilterState = atom({
    key: 'todoListFilterState',
    default: 'Show All'
})