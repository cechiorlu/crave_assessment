import { CheckList } from "../entities/CheckList";
import { Resolver, Query, ObjectType, Field, Mutation, Arg } from "type-graphql";
import { CheckListsStore } from '../store'
import { searchById } from "../utils";


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

        const listItem = searchById(id, CheckListsStore)

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
