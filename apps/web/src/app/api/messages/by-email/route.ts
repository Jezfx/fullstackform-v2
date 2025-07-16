import { NextResponse } from "next/server";
import { serverClient } from "../../../_trpc/server-client";
import { TRPCError } from "@trpc/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const email = searchParams.get("email");

  if (!email) {
    return NextResponse.json(
      { error: "Email query parameter is required." },
      { status: 400 }
    );
  }

  try {
    const result = await serverClient.getMessagesByEmail({ email });

    return NextResponse.json(result.data);
  } catch (error) {
    if (error instanceof TRPCError) {
      // Translate tRPC errors to standard HTTP status codes
      if (error.code === "NOT_FOUND") {
        return NextResponse.json({ error: error.message }, { status: 404 });
      }
      if (error.code === "BAD_REQUEST") {
        return NextResponse.json(
          { error: "Invalid email format." },
          { status: 400 }
        );
      }
    }

    // For any other unexpected errors
    return NextResponse.json(
      { error: "An internal server error occurred." },
      { status: 500 }
    );
  }
}
