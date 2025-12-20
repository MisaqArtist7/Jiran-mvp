export const getTodos = async () => {
    try {   
        const response = await fetch('https://dummyjson.com/todos', {cache : 'no-store'})
        if(!response.ok) throw new Error('Failed to fetch todos')
        const todos = await response.json()
        return todos.todos
    } catch (error) {
        console.log(error)
        return []
    }
}
