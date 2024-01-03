import { connectDb } from "@/app/lib/connectDb";
import { Crud } from "@/app/models/crud";
import { NextResponse } from "next/server";

export async function GET(_req, { params }) {
  await connectDb();
  let { id: _id } = params;
  let item = await Crud.findById(_id);
  return NextResponse.json({ data: { item } }, { status: 200 });
}

export async function PATCH(req, { params }) {
  await connectDb();
  let { id: _id } = params;
  let { newTitle, newDescription } = await req.json();
  let item = await Crud.findByIdAndUpdate(
    _id,
    { title: newTitle, description: newDescription },
    { new: true }
  );
  return NextResponse.json({ data: { item } }, { status: 200 });
}
