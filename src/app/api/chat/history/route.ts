import { mastra } from "@/mastra";

export async function GET() {
  const friendAgent = mastra.getAgent("friendAgent");
  const memory = friendAgent.getMemory();

  const threadId = "default-thread";
  const resourceId = "default-user";
  const limit = 50;

  if (!memory) {
    return Response.json({ messages: [] });
  }

  try {
    const { messages } = await memory.query({
      threadId,
      resourceId,
      selectBy: {
        last: limit,
      },
    });

    return Response.json({ messages });
  } catch (error) {
    console.error("Failed to fetch chat history:", error);
    return Response.json({ messages: [] }, { status: 500 });
  }
}
