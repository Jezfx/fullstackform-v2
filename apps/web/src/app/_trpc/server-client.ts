"server only";

import { appRouter } from "./router";

export const serverClient = appRouter.createCaller({});
