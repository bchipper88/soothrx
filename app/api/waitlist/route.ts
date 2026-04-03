import { NextRequest, NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

const DATA_FILE = path.join(process.cwd(), "waitlist.json");

interface WaitlistEntry {
  email: string;
  name?: string;
  condition?: string;
  timestamp: string;
}

async function readEntries(): Promise<WaitlistEntry[]> {
  try {
    const data = await fs.readFile(DATA_FILE, "utf-8");
    return JSON.parse(data);
  } catch {
    return [];
  }
}

async function writeEntries(entries: WaitlistEntry[]): Promise<void> {
  await fs.writeFile(DATA_FILE, JSON.stringify(entries, null, 2));
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { email, name, condition } = body;

    if (!email || typeof email !== "string" || !email.includes("@")) {
      return NextResponse.json(
        { error: "A valid email is required." },
        { status: 400 }
      );
    }

    const entries = await readEntries();

    if (entries.some((e) => e.email.toLowerCase() === email.toLowerCase())) {
      return NextResponse.json(
        { error: "This email is already on the waitlist." },
        { status: 409 }
      );
    }

    entries.push({
      email: email.trim().toLowerCase(),
      name: name?.trim() || undefined,
      condition: condition?.trim() || undefined,
      timestamp: new Date().toISOString(),
    });

    await writeEntries(entries);

    return NextResponse.json({ success: true }, { status: 201 });
  } catch {
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
