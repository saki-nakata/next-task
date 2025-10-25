import { TaskDocument, TaskModel } from "@/models/task";
import { connectDB } from "@/utils/database";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    await connectDB();
    const allTask: TaskDocument[] = await TaskModel.find();
    return NextResponse.json({ message: "API取得成功", task: allTask });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "API取得失敗" }, { status: 500 });
  }
};

export const dynamic = "force-dynamic";
