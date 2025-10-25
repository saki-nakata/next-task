import NewTaskForm from "@/components/NewTask/form";

const NewTaskPage = () => {
  return (
    <div className="flex flex-col justify-center pt-20">
      <h1 className="text-center text-2xl font-bold">新規タスク作成</h1>
      <NewTaskForm />
    </div>
  );
};

export default NewTaskPage;
