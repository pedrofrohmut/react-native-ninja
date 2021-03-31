export const deleteFromListById = (id, list, setList) => {
  setList(list.filter(item => item.id !== id))
}

export const addToListByItem = (newItem, list, setList) => {
  setList([ ...list, newItem])
}
