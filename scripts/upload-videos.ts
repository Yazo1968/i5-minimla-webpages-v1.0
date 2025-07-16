import { put } from "@vercel/blob"
import { readFile } from "fs/promises"
import { join } from "path"

async function uploadVideos() {
  try {
    console.log("Starting video upload to Vercel Blob...")

    // Read the video files
    const mp4Path = join(process.cwd(), "publichttps://hebbkx1anhila5yf.public.blob.vercel-storage.com/278c21f0-d74c-4401-800b-0ccad2cb9d27-video-ddRGlKQ4KsIYvaChkwYLprbq1yEXTZ.mp4")
    const webmPath = join(process.cwd(), "publichttps://hebbkx1anhila5yf.public.blob.vercel-storage.com/278c21f0-d74c-4401-800b-0ccad2cb9d27-video-y41onHM4ynVVoK2DlD6opZQCj2iDwM.webm")

    const mp4Buffer = await readFile(mp4Path)
    const webmBuffer = await readFile(webmPath)

    console.log("Files read successfully, uploading...")

    // Upload MP4
    const mp4Blob = await put("hero-background.mp4", mp4Buffer, {
      access: "public",
      contentType: "video/mp4",
    })

    // Upload WebM
    const webmBlob = await put("hero-background.webm", webmBuffer, {
      access: "public",
      contentType: "video/webm",
    })

    console.log("✅ Upload successful!")
    console.log("MP4 URL:", mp4Blob.url)
    console.log("WebM URL:", webmBlob.url)

    console.log("\n📋 Copy these URLs to update your video sources:")
    console.log(`NEXT_PUBLIC_HERO_VIDEO_MP4=${mp4Blob.url}`)
    console.log(`NEXT_PUBLIC_HERO_VIDEO_WEBM=${webmBlob.url}`)
  } catch (error) {
    console.error("❌ Upload failed:", error)
  }
}

uploadVideos()
