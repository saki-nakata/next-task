"use client";

import { FormState, updateTask } from "@/actions/task";
import { TaskDocument } from "@/models/task";
import { useActionState, useEffect, useState } from "react";

interface Props {
  task: TaskDocument;
}

const EditTaskForm = ({ task }: Props) => {
  const [stateTitle, setStateTitle] = useState(task.title);
  const [stateDescription, setStateDescription] = useState(task.description);
  const [stateLimit, setStateLimit] = useState(task.limit);
  const [stateIsClosed, setStateIsClosed] = useState(task.isClosed);

  const updateTaskWithId = updateTask.bind(null, task._id);
  const [state, formAction, isPending] = useActionState(updateTaskWithId, {
    error: "",
    success: "",
  });
  useEffect(() => {
    if (state && state.success != "") {
      alert(state.success);
    }
  }, [state]);
  return (
    <div className="mt-10 mx-auto w-full max-w-sm">
      <form action={formAction}>
        <div>
          <label htmlFor="title" className="block text-sm font-medium">
            タイトル
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={stateTitle}
            onChange={(e) => setStateTitle(e.target.value)}
            required
            className="block mt-2 py-1.5 px-2 w-full rounded-md border-0 shadow-sm ring-1 ring-inset ring-gray-300"
          />
        </div>
        <div className="mt-6">
          <label htmlFor="description" className="block text-sm font-medium">
            説明
          </label>
          <input
            type="text"
            id="description"
            name="description"
            value={stateDescription}
            onChange={(e) => setStateDescription(e.target.value)}
            required
            className="block mt-2 py-1.5 px-2 w-full rounded-md border-0 shadow-sm ring-1 ring-inset ring-gray-300 "
          />
        </div>
        <div className="mt-6">
          <label htmlFor="limit" className="block text-sm font-medium">
            期限
          </label>
          <input
            type="date"
            id="limit"
            name="limit"
            min="2020-01-01"
            max="2100-12-31"
            value={stateLimit}
            onChange={(e) => setStateLimit(e.target.value)}
            required
            className="block mt-2 py-1.5 px-2 w-full rounded-md border-0 shadow-sm ring-1 ring-inset ring-gray-300"
          />
        </div>
        <div className="mt-6 flex items-center">
          <input
            type="checkbox"
            id="isClosed"
            name="isClosed"
            checked={stateIsClosed}
            onChange={(e) => setStateIsClosed(e.target.checked)}
            className="mr-2 w-4 h-4"
          />
          <label htmlFor="isClosed" className="text-sm">
            タスクを完了
          </label>
        </div>
        <button
          type="submit"
          disabled={isPending}
          className="mt-8 py-2 w-full rounded-md text-white bg-gray-800 hover:bg-gray-700 text-sm font-semibold shadow-sm disabled:bg-gray-400"
        >
          編集
        </button>
        {state.error !== "" && (
          <p className="mt-2 text-red-500 text-sm">{state.error}</p>
        )}
      </form>
    </div>
  );
};

export default EditTaskForm;
