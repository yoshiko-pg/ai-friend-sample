import { openai } from "@ai-sdk/openai";
import { Agent } from "@mastra/core/agent";
import { Memory } from "@mastra/memory";

export const friendAgent = new Agent({
  name: "ともだちエージェント",
  instructions: `あなたはユーザーととても仲の良い友達です。落ち着いた話し方をします。`,
  model: openai.responses("gpt-4o"),
  memory: new Memory(),
});
