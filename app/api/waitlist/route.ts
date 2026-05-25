import { NextResponse } from "next/server";
import { Resend } from "resend";

// Initialize Resend with the API key from environment variables
const resend = new Resend(process.env.RESEND_API_KEY);
const AUDIENCE_ID = process.env.RESEND_AUDIENCE_ID;

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const email = body.email;

    if (!email || typeof email !== "string" || !email.includes("@")) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }

    // Fallback for local development if Resend keys are not set
    if (!process.env.RESEND_API_KEY || !AUDIENCE_ID) {
      console.log(`[Waitlist Local] Would have added ${email} to audience`);
      return NextResponse.json({ message: "Added to waitlist (Local Mode)" }, { status: 201 });
    }

    // Add contact to Resend Audience
    const { error } = await resend.contacts.create({
      email,
      audienceId: AUDIENCE_ID,
    });

    if (error) {
      console.error("[Waitlist Error]", error);
      // If they are already subscribed, Resend might throw an error, we can just treat it as a success for the user to prevent enumeration
      return NextResponse.json({ message: "Already registered or error" }, { status: 200 });
    }

    console.log(`[Waitlist] ${email} successfully joined the waitlist!`);

    return NextResponse.json({ message: "Added to waitlist" }, { status: 201 });
  } catch (error) {
    console.error("[Waitlist Error]", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
