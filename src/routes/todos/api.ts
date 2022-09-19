import type { Todo } from "$lib/type/type"
import { json, } from "@sveltejs/kit"


let todos: Todo[] = []
export const api = (request: Request, params?: string | Partial<Record<string, string>> | undefined, todo?: Todo,) => {
    console.log(`☝️☝️☝️☝️${params["slug"]}`)

    let body = {}
    let status = 500
    switch (request.method.toUpperCase()) {
        case "GET":
            body = todos
            status = 200
            return json({
                body, status
            })

        case "POST":
            todos.push(todo)
            status = 201
            break;
        case "DELETE":

            todos = todos.filter(t => t.id !== params["slug"])
            status = 200
            break;

        default:
            break;
    }
    if (request.method.toUpperCase() !== "GET") {
        console.log(request.method)
        let res: ResponseInit = {
            headers: { location: "/todos" },
            status: 303  //specially for staying at the same page and doing bg work
        }
        return new Response("null", res)

    }
}


