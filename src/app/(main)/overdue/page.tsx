import TaskCard from "@/components/TaskCard/card";
import { TaskDocument } from "@/models/task";

const getOverdueTask = async () => {
  const response = await fetch(`${process.env.API_URL}/task/overdue`);
  if (response.status !== 200) {
    throw new Error();
  }
  const data = await response.json();
  return data.task as TaskDocument[];
};

const OverdueTaskPage = async () => {
  const overdueTask = await getOverdueTask();
  return (
    <div className="text-gray-800 p-8 h-full overflow-y-auto pb-24">
      <header className="flex justify-between items-center">
        <h1 className="text-2xl font-bold flex items-center">期限切れタスク</h1>
      </header>
      <div className="mt-8 flex flex-wrap gap-4">
        {overdueTask.map((task) => (
          <TaskCard key={task._id} task={task} />
        ))}
      </div>
    </div>
  );
};

export default OverdueTaskPage;
