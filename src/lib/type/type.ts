export type Todo = {
    [x: string]: any;
    id: string;
    created_at: Date;
    text?: string;
    done: boolean
}