This is a [Next.js 15](https://nextjs.org) starter kit for 2025, using [Bun](https://bun.sh), [Biome](https://biomejs.dev), and [Better Auth](https://better-auth.com). Hence, B.B.B.-etter Starter.

## Features

- Modern framework: [Next.js 15](https://nextjs.org) and [React 19](https://react.dev)
- Ultra-fast tooling: [Bun](https://bun.sh) and [Biome](https://biomejs.dev)
- Effortless authentication: [Better Auth](https://better-auth.com)
- Clean styling: [Tailwind CSS](https://tailwindcss.com) and [shadcn/ui](https://ui.shadcn.com)
- And more to come!

## Notes

- Refer to [this issue](https://github.com/shadcn-ui/ui/issues/6593) for shadcn/ui init problems using Bun at this time. I used the workaround listed here to get it working without the "--force" flag being required. I'll remove this note once the issue is resolved.
- There are also currently some quirks with shadcn/ui still being in the process of upgrading to Tailwind v4. [This issue](https://github.com/shadcn-ui/ui/issues/6585) contains their guide for upgrading that I've followed for this starter. Once the upgrade is complete and stable, I'll remove this note, as well.

## Get Started

```bash
git clone this-repo your-app-name
cd your-app-name
bun install
```
## To Run the App

```bash
bun dev
```

## To Add New shadcn/ui Components (for now)

```bash
bunx shadcn@canary add [component]
```