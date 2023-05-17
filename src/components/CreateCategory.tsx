import { useForm } from 'react-hook-form'
import { useSetRecoilState } from 'recoil'
import { categoryListState } from '../atoms'


interface IForm {
  category: string
}

function CreateCategory() {
  const { register, handleSubmit, setValue } = useForm<IForm>()
  const setCategoryList = useSetRecoilState(categoryListState)
  const handleValue = ({ category }: IForm) => {
    setCategoryList(prev => [...prev, category])
    setValue('category', '')
  }
  return (
    <form onSubmit={handleSubmit(handleValue)}>
      <input
        {...register('category', { required: 'Please wirte a Category' })}
        placeholder="Write a Category "
      />
      <button>Add</button>
    </form>
  )
}

export default CreateCategory
