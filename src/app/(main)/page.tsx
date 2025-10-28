import TaskCard from "@/components/TaskCard/card";
import { TaskDocument } from "@/models/task";
import Link from "next/link";
import { MdAddTask } from "react-icons/md";

const getAllTask = async () => {
  const response = await fetch(`${process.env.API_URL}/task`);
  if (response.status !== 200) {
    throw new Error();
  }
  const data = await response.json();
  return data.task as TaskDocument[];
};

export default async function MainPage() {
  const allTask = await getAllTask();

  return (
    <div className="text-gray-800 p-8 h-full overflow-y-auto pb-24">
      <header className="flex justify-between items-center">
        <h1 className="text-2xl font-bold flex items-center">全タスク</h1>
        <Link
          href="/new"
          className="items-center gap-1 font-semibold border px-4 py-2 rounded-full shadow-sm text-white bg-gray-800 hover:bg-gray-700"
        >
          <MdAddTask className="size-5" />
          <div>追加</div>
        </Link>
      </header>
      <div className="mt-8 flex flex-wrap gap-4">
        {allTask.map((task) => (
          <TaskCard key={task._id} task={task} />
        ))}
      </div>
    </div>
  );
}
