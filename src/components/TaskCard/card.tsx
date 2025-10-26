import { TaskDocument } from "@/models/task";
import TaskDeleteButton from "./TaskDelete/delete";
import TaskEditButton from "./TaskEdit/edit";

interface Props {
  task: TaskDocument;
}

const TaskCard = ({ task }: Props) => {
  return (
    <div className="w-64 h-52 p-4 bg-white rounded-md shadow-md flex flex-col justify-between">
      <header>
        <h1 className="text-lg font-semibold">{task.title}</h1>
        <div className="mt-1 text-sm line-clamp-3">{task.description}</div>
      </header>
      <div>
        <div className="text-sm">{task.limit}</div>
        <div className="flex justify-between items-center">
          <div
            className={`mt-1 text-sm px-2 py-1 w-24 text-center text-white rounded-full shadow-sm ${
              task.isClosed ? "bg-green-500" : "bg-red-500"
            }`}
          >
            {task.isClosed ? "完了" : "未完了"}
          </div>
          <div className="flex gap-4">
            <TaskEditButton id={task._id} />
            <TaskDeleteButton id={task._id} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
