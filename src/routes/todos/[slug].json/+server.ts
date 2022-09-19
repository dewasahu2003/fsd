//done in other file bcz it i dynamic routing 
import type { RequestHandler } from "@sveltejs/kit";
import { api } from "../api";

export const DELETE: RequestHandler = ({ request, params }) => {


    return api(request, params, undefined)
}