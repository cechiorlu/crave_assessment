import { CheckListItem } from "./store"

export const searchById = (id: string, list: Array<CheckListItem>) => {
    const found = list.find((item) => item.id === id)
    return found
}