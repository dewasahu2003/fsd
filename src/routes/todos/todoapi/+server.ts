import type { Todo } from "$lib/type/type"
import type { RequestHandler } from "@sveltejs/kit"
import { api } from "../api"


export const GET: RequestHandler = async ({ request }) => {
    return api(request, "get")

}

export const POST: RequestHandler = async ({ request }) => {
    const formData = await request.formData();

    const t: Todo = {
        id: `${Date.now()}`,
        created_at: new Date(),
        text: formData.get('text')?.toString(),
        done: false

    }
    return api(request, "post", t)
}