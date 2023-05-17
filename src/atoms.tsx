import { atom, selector } from 'recoil'

export interface IToDo {
  text: string
  id: number
  category: string
}

export const categoryState = atom({
  key: 'category',
  default: 'TO_DO',
})

export const toDoState = atom<IToDo[]>({
  key: 'toDo',
  default: [],
})

export const categoryListState = atom<string[]>({
  key: 'categoryList',
  default: ['TO_DO','DOING','DONE'],
})

export const toDoSelector = selector({
  key: 'toDoSelectoer',
  get: ({ get }) => {
    const toDos = get(toDoState)
    const category = get(categoryState)
    return toDos.filter(toDo => toDo.category === category)
  },
})
