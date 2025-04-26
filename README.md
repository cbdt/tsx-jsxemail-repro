`pnpm i`

`pnpm start`

When there is references to `jsx-email`, the source map of the error is not correct

```bash
> @ start /Users/cb/Downloads/tsx-jsxemail-repro
> tsx index.tsx

hello
Error: test
    at file:///Users/cb/Downloads/tsx-jsxemail-repro/index.tsx:1:168

```

If we comment: (or any references to `jsx-email`)

```ts
// await render(<Template />)
```

We get a nice stack trace with the REAL location of the error.

```bash
> @ start /Users/cb/Downloads/tsx-jsxemail-repro
> tsx index.tsx

hello
/Users/cb/Downloads/tsx-jsxemail-repro/index.tsx:11
throw new Error("test");
      ^


Error: test
    at <anonymous> (/Users/cb/Downloads/tsx-jsxemail-repro/index.tsx:11:7)
    at ModuleJob.run (node:internal/modules/esm/module_job:271:25)
    at async onImport.tracePromise.__proto__ (node:internal/modules/esm/loader:547:26)
    at async asyncRunEntryPointWithESMLoader (node:internal/modules/run_main:116:5)

Node.js v22.13.1
 ELIFECYCLE  Command failed with exit code 1.
```

I don't know how to identify if this is cause by `jsx-email` or `tsx` but it seems to come from tsx as when I use `esbuild` to watch + node to watch, I got nice stack trace. But I can be wrong.