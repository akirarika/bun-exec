import { env, type SpawnOptions } from "bun";

export const exec = (cwd: string, command: Array<string>, options: Partial<SpawnOptions.OptionsObject> = {}) => {
  return new Promise((resolve, reject) => {
    if (!("cwd" in options)) options.cwd = cwd;
    if (!("stdin" in options)) options.stdin = "inherit";
    if (!("stdout" in options)) options.stdout = "inherit";
    if (!("env" in options)) options.env = { ...env };

    options.onExit = (proc, exitCode, signalCode, error) => {
      if (exitCode !== 0) reject({ proc, exitCode, signalCode, error });
      else resolve({ proc, exitCode, signalCode, error });
    };

    try {
      Bun.spawn(command, options);
    } catch (error) {
      reject(error);
    }
  });
};
