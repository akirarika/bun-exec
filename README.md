# bun-exec

Execute using Bun

## Usage

```bash
bun i bun-exec
```

## Basic Usage

```ts
import { exec } from "bun-exec";

await exec("/tmp", ["bun", "--version"]);
```

## Bash

You can use the shell to access various functionalities provided by bash, such as running multiple commands simultaneously. In Windows, PowerShell is the built-in shell.

```ts
import { exec } from "bun-exec";

await exec("/tmp", ["bash", "-c", 'ls && echo "Hello World!" && exit 0']);
```

## Interactive

By default, the terminal is set to be interactive. This means that the Node.js REPL works as expected.

```ts
import { exec } from "bun-exec";

await exec("/tmp", ["node"]);
```

## Error and exit

Determine whether the execution process fails by checking if the exit code is 0. If the status code is not 0, it is considered a failure and an exception will be thrown.

```ts
import { exec } from "bun-exec";

try {
  const { exitCode } = await exec("/tmp", ["bun", "run", "index.ts"]);
  console.log(exitCode);
} catch ({ exitCode }) {
  console.error(exitCode);
}
```
