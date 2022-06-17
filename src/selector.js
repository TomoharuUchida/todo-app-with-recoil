import { selector } from 'recoil'
import { todoListFilterState,todoListState } from './atom'

// selectorはatomの値を利用して別の処理を行うときに利用する
export const filteredTodoListState = selector({
    // 一位のkeyを設定、初期値は不要
    key: 'filteredTodoListStatsState',
    // 引数はatomの返り値
    get: ({ get }) => {
        const filter = get(todoListFilterState)
        const list = get(todoListState)

        switch (filter) {
            case 'Show Completed':
                return list.filter((item) => item.isComplete)
            case 'Show Uncompleted':
                return list.filter((item) => !item.isComplete)
            default:
                return list
        }
        
    }
})

export const todoListStatsState = selector({
    key: 'todoListStatsState',
    get: ({get}) => {
        const todoList = get(todoListState)
        const totalNum = todoList.length
        const totalCompletedNum = todoList.filter((item) => item.isComplete).length
        const totalUncompletedNum = totalNum - totalCompletedNum
            
        return {
            totalNum,
            totalCompletedNum,
            totalUncompletedNum
        }
    }
})