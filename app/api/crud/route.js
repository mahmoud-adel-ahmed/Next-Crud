import { connectDb } from "@/app/lib/connectDb";
import { Crud } from "@/app/models/crud";
import { NextResponse } from "next/server";

export async function GET(_req) {
  await connectDb();
  let crudItems = await Crud.find({});
  return NextResponse.json({ data: crudItems }, { status: 200 });
}

export async function POST(req) {
  await connectDb();
  let { description, title } = await req.json();
  let item = await Crud.create({ title, description });
  return NextResponse.json({ data: { item } }, { status: 201 });
}

export async function DELETE(req) {
  await connectDb();
  let id = req.nextUrl.search.split("=")[1];
  let item = await Crud.findByIdAndDelete({ _id: id });
  return NextResponse.json({ data: { item } }, { status: 200 });
}
