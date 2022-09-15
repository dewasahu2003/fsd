<script>
    import TodoItem from "$lib/todo-component.svelte"
    const title="TODO"
</script>

<svelte:head>
    <title>{title}</title>
</svelte:head>

<h1>{title}</h1>
<TodoItem></TodoItem>