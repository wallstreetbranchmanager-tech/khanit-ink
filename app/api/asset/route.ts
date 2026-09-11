import { readFile } from "fs/promises";
import path from "path";
import JSZip from "jszip";
import { NextRequest, NextResponse } from "next/server";

const PREFIX = "khanit-ink-finished/public/";

export async function GET(req: NextRequest) {
  const p = (req.nextUrl.searchParams.get("p") || "").replace(/^\/+/, "");
  if (!p || p.includes("..")) {
    return new NextResponse("bad path", { status: 400 });
  }

  const zipPath = path.join(process.cwd(), "public/assets/khanit-ink-finished-images.zip");
  const buf = await readFile(zipPath);
  const zip = await JSZip.loadAsync(buf);
  const file =
    zip.file(PREFIX + p) ||
    zip.file(PREFIX + "work/" + p) ||
    zip.file(p);

  if (!file) {
    return new NextResponse("not in zip: " + p, { status: 404 });
  }

  const data = await file.async("nodebuffer");
  const lower = p.toLowerCase();
  const type = lower.endsWith(".png") ? "image/png" : "image/jpeg";
  return new NextResponse(data, {
    headers: {
      "Content-Type": type,
      "Cache-Control": "public, max-age=86400, immutable",
    },
  });
}
