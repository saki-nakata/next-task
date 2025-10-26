import EditTaskForm from "@/components/EditTask/form";
import { TaskDocument } from "@/models/task";

interface Props {
  params: {
    id: string;
  };
}

const getTask = async (id: string) => {
  const response = await fetch(`${process.env.API_URL}/task/${id}`, {
    cache: "no-store",
  });
  const data = await response.json();
  return data.task as TaskDocument;
};
const EditTaskPage = async ({ params }: Props) => {
  const id = params.id;
  const task = await getTask(id);
  return (
    <div className="flex flex-col justify-center pt-20">
      <h1 className="text-center text-2xl font-bold">タスクの編集</h1>
      <EditTaskForm task={task} />
    </div>
  );
};

export default EditTaskPage;
