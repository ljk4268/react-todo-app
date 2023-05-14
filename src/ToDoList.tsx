import { useState } from 'react'
import { useForm } from 'react-hook-form'

interface IForm {
  toDo: string
}

function ToDoList() {
  const { register, handleSubmit, setValue } = useForm<IForm>()
  const handleValue = (data: IForm) => {
    console.log(data.toDo)
    setValue('toDo', '')
  }
  return (
    <div>
      <form onSubmit={handleSubmit(handleValue)}>
        <input
          {...register('toDo', { required: 'Please wirte a To Do' })}
          placeholder="Write a to do "
        />
        <button>Add</button>
      </form>
    </div>
  )
}

export default ToDoList
