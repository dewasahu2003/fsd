
import type { Todo } from "$lib/type/type"
import { json, type Actions, type RequestHandler } from "@sveltejs/kit"
export const GET: RequestHandler = async () => {
    return json({
        status: 200,
        body: todos
    })

}
let todo: Todo = {
    created_at: new Date(),
    text:
        'hello',
    done: false

}

let todos: Todo[] = [todo]
export const POST: RequestHandler = async ({ request }) => {
    const formData = await request.formData();
    let todo: Todo = {
        created_at: new Date(),
        text: formData.get('text')?.toString(),
        done: false

    }

    todos.push(todo)

    let res: ResponseInit = {
        headers: { location: "/todos" },
        status: 303  //specially for staying at the same page and doing bg work
    }

    return new Response(

        "null", res
    )
}