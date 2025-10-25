"use server";

import { Task, TaskModel } from "@/models/task";
import { connectDB } from "@/utils/database";
import { redirect } from "next/navigation";

export interface FormState {
  error: string;
  success: string;
}

export const createTask = async (state: FormState, formData: FormData) => {
  const newTask: Task = {
    title: formData.get("title") as string,
    description: formData.get("description") as string,
    limit: formData.get("limit") as string,
    isClosed: false,
  };
  try {
    await connectDB();
    await TaskModel.create(newTask);
  } catch (error) {
    state.error = "タスクの作成に失敗しました。";
    console.log(error);
    return state;
  }
  state.success = "タスクを作成しました。";
  redirect("/");
};

export const updateTask = async (
  id: string,
  state: FormState,
  formData: FormData
) => {
  const updateTask: Task = {
    title: formData.get("title") as string,
    description: formData.get("description") as string,
    limit: formData.get("limit") as string,
    isClosed: Boolean(formData.get("isClosed")),
  };
  try {
    await connectDB();
    await TaskModel.updateOne({ _id: id }, updateTask);
  } catch (error) {
    state.error = "タスクの更新に失敗しました。";
    console.log(error);
    return state;
  }
  state.success = "タスクを更新しました。";
  redirect("/");
};

export const deleteTask = async (id: string, state: FormState) => {
  try {
    await connectDB();
    await TaskModel.deleteOne({ _id: id });
  } catch (error) {
    state.error = "タスクの削除に失敗しました。";
    console.log(error);
    return state;
  }
  state.success = "タスクを削除しました。";
  redirect("/");
};
