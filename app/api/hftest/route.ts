import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { message } = await req.json();
    const HF_API_KEY = process.env.HF_API_KEY;

    const response = await fetch(
      "https://router.huggingface.co/v1/chat/completions",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${HF_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "meta-llama/Llama-3.1-8B-Instruct",
          messages: [
            {
              role: "user",
              content: message || "hello"
            }
          ],
          max_tokens: 150
        }),
      }
    );

    const data = await response.json();

    return NextResponse.json({
      success: true,
      raw: data,
      reply: data?.choices?.[0]?.message?.content || "No reply received",
    });

  } catch (error: any) {
    return NextResponse.json({
      success: false,
      error: error.message
    }, { status: 500 });
  }
}
