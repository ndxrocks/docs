import { NextResponse } from "next/server";

// In-memory store for development. Replace with a database or Resend audience in production.
const waitlist: string[] = [];

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const email = body.email;

    if (!email || typeof email !== "string" || !email.includes("@")) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }

    if (waitlist.includes(email)) {
      return NextResponse.json({ message: "Already registered" }, { status: 200 });
    }

    waitlist.push(email);

    // TODO: In production, integrate with Resend or your email service:
    // await resend.contacts.create({ email, audienceId: process.env.RESEND_AUDIENCE_ID });

    console.log(`[Waitlist] ${email} joined (${waitlist.length} total)`);

    return NextResponse.json({ message: "Added to waitlist" }, { status: 201 });
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}
