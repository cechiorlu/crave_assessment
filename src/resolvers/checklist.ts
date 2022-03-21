import { CheckList } from "../entities/CheckList";
import { Resolver, Query, ObjectType, Field, Mutation, Arg } from "type-graphql";
import { CheckListsStore, ProgressCategoryStore, searchById } from '../utils'


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
    listItem?: CheckList;
}


@Resolver(of => CheckList)
export class ChecklistResolver {

    // Query to get all checklist items
    @Query(() => [CheckList], { nullable: true })
    async getListItems() {

        try {
            const listItems = CheckListsStore;
            return listItems
        }
        catch (error) {
            return {
                errors: [
                    {
                        message: error.message
                    }
                ]
            }
        }

    }

    // mutation to toggle checklist item completed state
    @Mutation(() => Response)
    async toggleCompleted(
        @Arg('id') id: string
    ): Promise<Response> {
        // meant to return one item with a real db. This might return an array
        const possibleListItems = await searchById(id, CheckListsStore)

        // lazy maneuver
        const listItem = possibleListItems.pop()

        if (!listItem) {
            return {
                errors: [
                    {
                        message: 'list item not found'
                    }
                ]
            }
        }

        listItem.isChecked = !listItem.isChecked

        return {
            // @ts-ignore
            listItem
        }
    }
}
