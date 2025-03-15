import { NextResponse } from "next/server";
import connectToDatabase from "@/lib/mongodb";
import mongoose from "mongoose";

const deletedUserSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true },
    reason: { type: String },
    requestedAt: { type: Date, default: Date.now },
  },
  { collection: "deleted_users" }
);

let DeletedUser: mongoose.Model<any>;
try {
  DeletedUser = mongoose.model("DeletedUser");
} catch {
  DeletedUser = mongoose.model("DeletedUser", deletedUserSchema);
}

export async function POST(req: Request) {
  await connectToDatabase();
  const { email, reason } = await req.json();

  if (!email) {
    return NextResponse.json({ error: "Email is required" }, { status: 400 });
  }

  try {
    // Check if the email already exists in the deletion requests
    const existingUser = await DeletedUser.findOne({ email });

    if (existingUser) {
      return NextResponse.json({ alreadyRequested: true }, { status: 200 });
    }

    // If not found, create a new deletion request
    await DeletedUser.create({ email, reason });
    return NextResponse.json({ message: "Deletion request submitted" }, { status: 200 });
  } catch (error) {
    console.error("Database error:", error);
    return NextResponse.json({ error: "Database error" }, { status: 500 });
  }
}
