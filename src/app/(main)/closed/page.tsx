import TaskCard from "@/components/TaskCard/card";
import { TaskDocument } from "@/models/task";

const getClosedTask = async () => {
  const response = await fetch(`${process.env.API_URL}/task/closed`, {
    cache: "no-store",
  });
  if (response.status !== 200) {
    throw new Error();
  }
  const data = await response.json();
  return data.task as TaskDocument[];
};

const ClosedTaskPage = async () => {
  const closedTask = await getClosedTask();
  return (
    <div className="text-gray-800 p-8 h-full overflow-y-auto pb-24">
      <header className="flex justify-between items-center">
        <h1 className="text-2xl font-bold flex items-center">完了タスク</h1>
      </header>
      <div className="mt-8 flex flex-wrap gap-4">
        {closedTask.map((task) => (
          <TaskCard key={task._id} task={task} />
        ))}
      </div>
    </div>
  );
};

export default ClosedTaskPage;
