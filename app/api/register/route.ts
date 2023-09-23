import { NextResponse } from "next/server"
export async function POST(req: Request, res: Response) {
  try {
    const { name, email, password } = await req.json()

    const a = await fetch("http://localhost/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    })
    return NextResponse.json({ status: 200, message: "success" })
  } catch (e) {
    console.log(e)
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 }
    )
  }
}
