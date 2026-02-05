import { NextRequest, NextResponse } from "next/server";
import { getImage } from "@/lib/db";

// GET - Serve an image
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ key: string }> }
) {
  try {
    const { key } = await params;
    const image = await getImage(key);

    if (!image) {
      return NextResponse.json({ error: "Image not found" }, { status: 404 });
    }

    return new NextResponse(image.data, {
      headers: {
        "Content-Type": image.contentType,
        "Cache-Control": "public, max-age=31536000, immutable",
      },
    });
  } catch (error) {
    console.error("Error serving image:", error);
    return NextResponse.json(
      { error: "Failed to serve image" },
      { status: 500 }
    );
  }
}
