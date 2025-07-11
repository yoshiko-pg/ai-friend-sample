import { mastra } from "@/mastra";

export async function POST(req: Request) {
  const { messages } = await req.json();

  const friendAgent = mastra.getAgent("friendAgent");

  const stream = await friendAgent.stream(messages, {
    memory: {
      thread: "default-thread", // 任意のスレッドID
      resource: "default-user", // 任意のユーザーID
      options: { lastMessages: 10 }, // 10メッセージを取得
    },
  });

  return stream.toDataStreamResponse();
}
