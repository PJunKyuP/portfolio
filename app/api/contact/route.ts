import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, subject, message } = body

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json({ success: false, message: "모든 필드를 입력해주세요." }, { status: 400 })
    }

    // In a real implementation, you would send an email or store the message
    // For example, using a service like SendGrid, Nodemailer, or a database

    console.log("Contact form submission:", { name, email, subject, message })

    // Return success response
    return NextResponse.json({ success: true, message: "메시지가 성공적으로 전송되었습니다." }, { status: 200 })
  } catch (error) {
    console.error("Contact form submission error:", error)
    return NextResponse.json({ success: false, message: "메시지 전송 중 오류가 발생했습니다." }, { status: 500 })
  }
}

