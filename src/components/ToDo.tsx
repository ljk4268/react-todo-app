import { useSetRecoilState, useRecoilValue } from 'recoil'
import { IToDo, toDoState, categoryListState } from '../atoms'

function ToDo({ text, category, id }: IToDo) {
  const setToDos = useSetRecoilState(toDoState)
  const categoryList = useRecoilValue(categoryListState)

  const onClick = (newCategory: IToDo['category']) => {
    setToDos(prev =>
      prev.map(oldToDo => {
        return oldToDo.id === id ? { text, id, category: newCategory } : oldToDo
      })
    )
  }
  return (
    <li>
      <span>{text}</span>
      {
        categoryList?.map((a,i) => category !== a && (
          <button onClick={() => onClick(a)} key={`${a}_${i}`}>{a}</button>
        ))
      }
    </li>
  )
}

export default ToDo