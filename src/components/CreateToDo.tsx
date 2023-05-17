import { useForm } from 'react-hook-form'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import { toDoState, categoryState } from '../atoms'

interface IForm {
  toDo: string
}

function CreateToDo() {
  const setToDos = useSetRecoilState(toDoState)
  const category = useRecoilValue(categoryState)
  const { register, handleSubmit, setValue } = useForm<IForm>()
  const handleValue = ({ toDo }: IForm) => {
    console.log(toDo)
    setToDos(prev => [
      { text: toDo, id: Date.now(), category },
      ...prev,
    ])
    setValue('toDo', '')
  }
  return (
    <form onSubmit={handleSubmit(handleValue)}>
      <input
        {...register('toDo', { required: 'Please wirte a To Do' })}
        placeholder="Write a to do "
      />
      <button>Add</button>
    </form>
  )
}

export default CreateToDo
