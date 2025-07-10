import { Mastra } from "@mastra/core/mastra";
import { LibSQLStore } from "@mastra/libsql";

import { weatherAgent } from "./agents/weather-agent";

export const mastra = new Mastra({
  agents: { weatherAgent },
  storage: new LibSQLStore({
    // workaround: https://github.com/mastra-ai/mastra/issues/2806
    url: "file:../../mastra.db",
  }),
});
