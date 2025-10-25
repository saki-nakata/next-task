"use client";
import { deleteTask } from "@/actions/task";
import { useEffect } from "react";
import { useFormState, useFormStatus } from "react-dom";
import { FaTrashAlt } from "react-icons/fa";

interface Props {
  id: string;
}

const TaskDeleteButton = ({ id }: Props) => {
  const deleteTaskWithId = deleteTask.bind(null, id);
  const [state, formAction] = useFormState(deleteTaskWithId, {
    error: "",
    success: "",
  });

  useEffect(() => {
    if (state && state.error != "") {
      alert(state.error);
    }
  }, [state]);
  const SubmitButton = () => {
    const { pending } = useFormStatus();
    return (
      <button
        type="submit"
        disabled={pending}
        className="hover-text-gray-700 text-lg cursor-pointer disabled:bg-gray-400"
      >
        <FaTrashAlt />
      </button>
    );
  };
  return (
    <form action={formAction}>
      <SubmitButton />
    </form>
  );
};

export default TaskDeleteButton;
