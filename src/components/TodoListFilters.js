import { useRecoilState } from 'recoil'
import { todoListFilterState } from '../atom'

export const TodoListFilters = () => {
    const [filter, setFilter] = useRecoilState(todoListFilterState)
    
    const handleChange = (e) => {
            setFilter(e.target.value)
    }

    return (
        <>
            <select value={filter} onChange={handleChange}>
                <option value="Show All">All</option>
                <option value="Show Completed">Completed</option>
                <option value="Show Uncompleted">Uncompleted</option>
            </select>
        </>
    )
}