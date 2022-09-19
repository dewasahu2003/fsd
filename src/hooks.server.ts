/** @type {import('@sveltejs/kit').Handle} */

import type { Handle } from "@sveltejs/kit";

export const handle: Handle = async ({ event, resolve }) => {
    if (event.url.searchParams.has("_method")) {
        event.request = new Request(event.url, { method: "DELETE" })

    }

    const response = await resolve(event);

    return response
}