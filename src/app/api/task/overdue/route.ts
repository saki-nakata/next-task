import { TaskDocument, TaskModel } from "@/models/task";
import { connectDB } from "@/utils/database";
import { NextResponse } from "next/server";

export const GET = async () => {
  const activeDate = new Date()
    .toLocaleDateString("ja-JP", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    })
    .replace(/\//g, "-");
  try {
    await connectDB();
    const closedTask: TaskDocument[] = await TaskModel.find({
      isClosed: false,
      limit: { $lt: activeDate },
    });
    return NextResponse.json({ message: "API取得成功", task: closedTask });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "API取得失敗" }, { status: 500 });
  }
};

export const dynamic = "force-dynamic";
