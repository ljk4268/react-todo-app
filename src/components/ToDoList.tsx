import { useRecoilState, useRecoilValue } from 'recoil'
import CreateToDo from './CreateToDo'
import CreateCategory from './CreateCategory'
import { toDoSelector, categoryState, categoryListState } from '../atoms'
import ToDo from './ToDo'


function ToDoList() {
  const toDos = useRecoilValue(toDoSelector)
  const categoryList = useRecoilValue(categoryListState)
  const [category, setCategory] = useRecoilState(categoryState)
  const onInput = (event: React.FormEvent<HTMLSelectElement>) => {
    setCategory(event.currentTarget.value as any)
  }

  return (
    <div>
      <h1>To Dos</h1>
      <hr />
      <select value={category} onInput={onInput}>
        {
          categoryList?.map((a,i) => <option value={a} key={`${a}_${i}`}>{a}</option>)
        }
      </select>
      <CreateCategory />
      <hr />
      <CreateToDo />
      {
        toDos?.map(toDo => <ToDo key={toDo.id} {...toDo}/>)
      }
      
    </div>
  )
}

export default ToDoList
