import { NextResponse } from "next/server"

export async function GET() {
  // In a real implementation, you would serve an actual PDF file
  // For this example, we'll redirect to a placeholder PDF

  // If you have a real PDF file in the public folder, you can use:
  // return new NextResponse(
  //   fs.readFileSync(path.join(process.cwd(), 'public', 'resume.pdf')),
  //   {
  //     headers: {
  //       'Content-Type': 'application/pdf',
  //       'Content-Disposition': 'attachment; filename="박준규_이력서.pdf"'
  //     }
  //   }
  // )

  // For now, we'll redirect to a placeholder PDF
  return NextResponse.redirect("https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf")
}

