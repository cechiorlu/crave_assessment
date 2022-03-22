import { CheckList } from "../entities/CheckList";
import { Resolver, Query, ObjectType, Field, Mutation, Arg } from "type-graphql";
import { CheckListsStore, CheckListItem } from '../store'

@ObjectType()
class FieldError {
    @Field()
    message: string;
}

@ObjectType()
class Response {
    @Field(() => [FieldError], { nullable: true })
    errors?: FieldError[];

    @Field(() => CheckList, { nullable: true })
    listItem?: CheckListItem;
}


@Resolver(of => CheckList)
export class ChecklistResolver {

    // Query to get all checklist items
    @Query(() => [CheckList], { nullable: true })
    getListItems() {

        if (!CheckListsStore.length) {
            return null
        }
        return CheckListsStore;
    }

    // mutation to toggle checklist item completed state
    @Mutation(() => Response)
    toggleCompleted(
        @Arg('id') id: string
    ): Response {

        const itemIdx = CheckListsStore.findIndex((item) => item.id === id)

        if (itemIdx === -1) {
            return {
                errors: [
                    {
                        message: 'list item not found'
                    }
                ]
            }
        }

        CheckListsStore[itemIdx].isChecked = !CheckListsStore[itemIdx].isChecked
        const listItem = CheckListsStore[itemIdx]
        
        return {
            listItem
        }
    }
}
