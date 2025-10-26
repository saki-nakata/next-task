import { TaskModel } from "@/models/task";
import { connectDB } from "@/utils/database";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (
  request: NextRequest,
  context: { params: { id: string } }
) => {
  try {
    await connectDB();
    const { id } = context.params;
    const task = await TaskModel.findById(id);
    if (!task) {
      return NextResponse.json(
        { message: "該当するタスクがありません。" },
        { status: 404 }
      );
    }
    return NextResponse.json({ message: "タスク取得成功", task });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "タスク取得時エラー" },
      { status: 500 }
    );
  }
};

export const dynamic = "force-dynamic";
