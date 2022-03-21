import { CheckList } from "./entities/CheckList"
import { ProgressCategory } from './entities/ProgressCategory'


// In memory store

// export const inMemoryStore = [
//     {
//         id: "sdsd",
//         name: "Foundation",       // progress category title
//         listItems: [
//             {
//                 id: "jgdf",
//                 title: "setup virtual office",
//                 isChecked: true
//             },
//             {
//                 id: "dfsds",
//                 title: "set mission and vision",
//                 isChecked: true
//             },
//             {
//                 id: "jrxd",
//                 title: "Select business name",
//                 isChecked: true
//             }
//         ]
//     },

//     {
//         id: "fhfg",
//         name: "Discovery",       
//         listItems: [
//             {
//                 id: "hdff",
//                 title: "Create roadmap",
//                 isChecked: true
//             },
//             {
//                 id: "hfhfdg",
//                 title: "Competitor analysis",
//                 isChecked: false
//             }
//         ]
//     }
// ]

type CheckListItem = {
    id: string,
    title: string,
    isChecked: boolean,
    progressCategory: {
        id: string,
        title: string
    }
}

export const CheckListsStore: Array<CheckListItem> = [
    {
        id: "aaaa",
        title: "Set virtual office",
        isChecked: true,
        progressCategory: {
            id: "001",
            title: 'Foundation'
        }
    },
    {
        id: "bbbb",
        title: "Mission and vision",
        isChecked: true,
        progressCategory: {
            id: "001",
            title: 'Foundation'
        }
    },
    {
        id: "cccc",
        title: "Create Roadmap",
        isChecked: false,
        progressCategory: {
            id: "mhgh",
            title: 'Discovery'
        }
    },
    {
        id: "dddd",
        title: "Create Roadmap",
        isChecked: false,
        progressCategory: {
            id: "mhgh",
            title: 'Discovery'
        }
    }
]


type ProgressCategoryType = {
    id: string,
    title: string,
    companyId: string
}

export const ProgressCategoryStore: Array<ProgressCategoryType> = [
    {
        id: '001',
        title: 'Foundation',
        companyId: 'oaklab',
    },
    {
        id: '002',
        title: 'Discovery',
        companyId: 'oaklab',
    },
    {
        id: '003',
        title: 'Foundation',
        companyId: 'crvtch'
    }
]


export const searchById = (id: string, list: Array<CheckListItem>) => {
    const found = list.filter((iter) => {
        return iter.id === id
    })

    return found
}