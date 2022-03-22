// In memory store

export type CheckListItem = {
    id: string,
    title: string,
    isChecked: boolean,
    progressCategory: {
        id: string,
        title: string,
        companyId: string
    }
}

export const CheckListsStore: Array<CheckListItem> = [
    {
        id: "aaaa",
        title: "Set virtual office",
        isChecked: true,
        progressCategory: {
            id: "001",
            title: 'Foundation',
            companyId: 'oaklab'
        }
    },
    {
        id: "bbbb",
        title: "Mission and vision",
        isChecked: true,
        progressCategory: {
            id: "001",
            title: 'Foundation',
            companyId: 'oaklab'
        }
    },
    {
        id: "cccc",
        title: "Create Roadmap",
        isChecked: false,
        progressCategory: {
            id: "mhgh",
            title: 'Discovery',
            companyId: 'oaklab'
        }
    },
    {
        id: "dddd",
        title: "Create Roadmap",
        isChecked: false,
        progressCategory: {
            id: "mhgh",
            title: 'Discovery',
            companyId: 'crvtch'
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
