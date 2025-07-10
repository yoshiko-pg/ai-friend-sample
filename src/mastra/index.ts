import { Mastra } from "@mastra/core/mastra";
import { LibSQLStore } from "@mastra/libsql";

import { friendAgent } from "./agents/friend";

export const mastra = new Mastra({
  agents: { friendAgent },
  storage: new LibSQLStore({
    // workaround: https://github.com/mastra-ai/mastra/issues/2806
    url: "file:../../mastra.db",
  }),
});
