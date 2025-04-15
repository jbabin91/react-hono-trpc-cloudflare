export function createContext({
  req,
  env,
  workerCtx,
}: {
  req: Request;
  env: Env;
  workerCtx: ExecutionContext;
}) {
  return {
    env,
    req,
    workerCtx,
  };
}

export type Context = Awaited<ReturnType<typeof createContext>>;
