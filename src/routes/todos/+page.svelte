<script lang="ts">
    import TodoItem from "$lib/todo-component.svelte";
    
    import type { PageData } from ".svelte-kit/types/src/routes/todos/$types";

    const title = "TODO";

    export let data: PageData;
    let todos = data.todos["body"];
    //let t: Todo = todos["body"][0];

    // console.log(t);
</script>

<svelte:head>
    <title>{title}</title>
</svelte:head>

<div class="todos">
    <h1>{title}</h1>
    <form action="/todos/todoapi" method="POST" class="new">
        <input
            action="/todos/todoapi"
            method="POST"
            type="text"
            name="text"
            aria-label="add a todo"
            placeholder="+ add your todo ⚡"
        />
    </form>

    {#each todos as todo}
        <TodoItem {todo} />
    {/each}
</div>

<style>
    /*this is locally scoped changes wil happen to the file only*/
    .todos {
        width: 100%;
        max-width: 42rem;
        margin: 4rem auto 0 auto;
    }
    .new {
        margin: 0 0 0.4rem 0;
    }

    .new input {
        font-size: 28px;
        width: 100%;
        padding: 0.5em 1em 0.3em 1em;
        box-sizing: border-box;
        border-radius: 8px;
        background-color: rgba(255, 255, 255, 0.05);
        text-align: center;
    }

    /*this will apply the style deeply and nested*/

    .todos :global(input) {
        border: 1px solid transparent;
    }

    .todos :global(input:focus-visible) {
        box-shadow: inset 1px 1px 6px rgba(0, 0, 0, 0.1);
        outline: none;
        border: 1px solid #ff3e00 !important;
    }
</style>
