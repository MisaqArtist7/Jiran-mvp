import { getTodos } from "@/src/features/todos/services"
// features/todos/types.ts

type Todo = {
  id: number
  todo: string
  completed: boolean
  userId: number
}
export default async function HomePage() {
  const todos: Todo[] = await getTodos() 

  return (
    <div className="flex-col-center min-h-screen text-3xl">
      home page
      <div>
        {todos.map((todo) => (
          <div key={todo.id} className="text-gray-600 text-md">
            <div className="flex justify-start items-center gap-3">
              <span>{todo.id}:</span>
              <span>{todo.todo}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
