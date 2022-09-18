import type { Todo } from "$lib/type/type"
import type { PageServerLoad } from ".svelte-kit/types/src/routes/todos/$types";
export const prerender = true;

import { error, type Actions, type Load } from '@sveltejs/kit';
/** @type {import('./$types').PageServerLoad} */


export const load: PageServerLoad = async () => {

    const res = await fetch("http://localhost:5174/todos/todoapi");

    if (res.status === 200) {
        return { todos: (await res.json() as Todo[]) }
        //converts the body to json
    }
    if (res.status === 404) {
        return {
            todos: [] as Todo[]
        }
    }


    throw error(res.status)


}



