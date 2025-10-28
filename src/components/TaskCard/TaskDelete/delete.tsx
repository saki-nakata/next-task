"use client";

import { deleteTask } from "@/actions/task";
import { useActionState, useEffect } from "react";
import { FaTrashAlt } from "react-icons/fa";

interface Props {
  id: string;
}

const TaskDeleteButton = ({ id }: Props) => {
  const deleteTaskWithId = deleteTask.bind(null, id);
  const [state, formAction, isPending] = useActionState(deleteTaskWithId, {
    error: "",
    success: "",
  });

  useEffect(() => {
    if (state && state.error != "") {
      alert(state.error);
    }
  }, [state]);

  return (
    <form action={formAction}>
      <button
        type="submit"
        disabled={isPending}
        className="hover-text-gray-700 text-lg cursor-pointer disabled:bg-gray-400"
      >
        <FaTrashAlt />
      </button>
    </form>
  );
};

export default TaskDeleteButton;
