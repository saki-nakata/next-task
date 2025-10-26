import { TaskModel } from "@/models/task";
import { connectDB } from "@/utils/database";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (request: NextRequest, { params }: { params: { id: string } | Promise<{ id: string }> }) => {
  try {
    await connectDB();

    // params が Promise の場合は await する
    const resolvedParams = params instanceof Promise ? await params : params;
    const { id } = resolvedParams;

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
