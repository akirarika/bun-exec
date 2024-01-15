# bun-exec

Execute using Bun!

## Usage

```bash
bun i bun-exec
```

## Basic Usage

```ts
import { exec } from "bun-exec";

await exec("/tmp", ["bun", "--version"]);
```

## Bash or PowerShell

You can utilize various functionalities provided by bash by invoking bash, such as running multiple commands simultaneously. In Windows, PowerShell is the built-in shell.

```ts
import { exec } from "bun-exec";

// bash
await exec("/tmp", ["bash", "-c", 'ls && echo "Hello World!" && exit 0']);
// powershell
await exec("/tmp", ["powershell.exe", "-c", 'Get-ChildItem; Write-Output "Hello World!"; Exit 0;']);
```

## Environments

You can control the environments obtained by the command.

```ts
import { env } from "bun";
import { exec } from "bun-exec";

await exec("/tmp", ["echo", "$SAY"], {
  env: {
    ...env,
    SAY: "Hello World!",
  },
});
```

## Interactive

By default, the terminal is set to interactive. This means that the Node.js REPL will work as expected. Other programs that require user input will also function properly.

```ts
import { exec } from "bun-exec";

await exec("/tmp", ["node"]);
```

## Error and exit

The `bun-exec` determines whether the execution process has failed by checking if the exit code is 0. If the exit code is not 0, it is considered as a failure and an exception is thrown.

```ts
import { exec } from "bun-exec";

try {
  const { exitCode } = await exec("/tmp", ["bun", "run", "index.ts"]);
  console.log(exitCode);
} catch ({ exitCode }) {
  console.error(exitCode);
}
```
