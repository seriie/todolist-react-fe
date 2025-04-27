export default function TaskToday() {
  const taskToday = [
    { id: 1, text: "Study", done: true },
    { id: 2, text: "Eat", done: true },
    { id: 3, text: "Watch anime", done: true },
    { id: 4, text: "Drink", done: true },
    { id: 5, text: "Exercise", done: true },
  ];

  return (
    <div className="mt-10">
      {taskToday.map((task, idx) => (
        <div key={task.id} className="flex p-2 justify-between mt-5 bg-slate-100">
          <p>{idx + 1}</p>
          <p>{task.text}</p>
          <p
            className={`text-md py-1 px-4 rounded-full ${
              task.done
                ? "text-green-500 bg-green-200"
                : "text-red-500 bt-red-200"
            }`}
          >
            {task.done ? "Done" : "undone"}
          </p>
        </div>
      ))}
    </div>
  );
}
