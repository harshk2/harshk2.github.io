import { NextRequest, NextResponse } from "next/server";
import { z } from 'zod';
import prisma from "@/prisma/client";

const createIssueSchema = z.object({
  title: z.string().min(1).max(255),
  description: z.string().min(1)
});

export async function POST(request: NextRequest) {
  const body = await request.json();
  
  // Validate the request body using the Zod schema
  const validation = createIssueSchema.safeParse(body);
  if (!validation.success) {
    return NextResponse.json(validation.error.errors, { status: 400 });
  }

  try {
    // Create a new issue using Prisma
    const newIssue = await prisma.issue.create({
      data: {
        title: body.title,
        description: body.description,
        updatedAt: new Date(),  // Provide an appropriate timestamp here
      }
    });

    // Return the newly created issue
    return NextResponse.json(newIssue, { status: 201 });
  } catch (error) {
    // Handle any errors that may occur during database operations
    console.error('Error creating issue:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
