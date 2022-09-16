<script>   
import "../app.css"
    import TodoItem from "$lib/todo-component.svelte"   
    const title="TODO"
</script>

<svelte:head>
    <title>{title}</title>
</svelte:head>

 
<style>
    /*this is locally scoped changes wil happen to the file only*/
    .todos{
        width:100%;
        max-width: 42rem;
        margin:4rem auto 0 auto
    }
    .new{
        margin:0 0 0.4rem 0
    }

    .new input{
        font-size: 28px;
        width:100%;
        padding: 0.5em 1em 0.3em 1em;
        box-sizing: border-box;
        border-radius: 8px;
        background-color: rgba(255, 255, 255, 0.05);
        text-align: center;
    }
    
    /*this will apply the style deeply and nested*/

    .todos :global(input){
        border: 1px solid transparent;
    }

    .todos :global(input:focus-visible){
        box-shadow: inset 1px 1px 6px rgba(0, 0, 0, 0.1);
        outline: none;
        border: 1px solid #ff3e00 !important;
    }
</style>

<div class="todos">
    <h1>{title}</h1>
    <form action="" method="" class="new">
        <input type="text" name="text" aria-label="add a todo" placeholder="+ add your todo">
    </form>
    <TodoItem></TodoItem>
</div>

