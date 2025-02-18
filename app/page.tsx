import { Button } from "@/components/ui/button";
import { Github, Terminal } from "lucide-react";
import Link from "next/link";

export default function Home() {
	return (
		<div className="flex min-h-screen flex-col font-[family-name:var(--font-geist-mono)]">
			<header className="border-white/10 border-b">
				<nav className="container mx-auto flex h-14 items-center justify-between px-4">
					<div className="flex items-center gap-2">
						<Terminal className="h-5 w-5" />
						<span className="font-bold">Better Starter</span>
					</div>
					<div className="flex items-center gap-6">
						<Link
							href="#features"
							className="text-sm transition-colors hover:text-green-500"
						>
							01. Stack
						</Link>
						<Link
							href="#docs"
							className="text-sm transition-colors hover:text-green-500"
						>
							02. Docs
						</Link>
						<Link
							href="#about"
							className="text-sm transition-colors hover:text-green-500"
						>
							03. Examples
						</Link>
						<Link
							href="https://github.com"
							className="flex items-center gap-2 text-sm transition-colors hover:text-green-500"
						>
							<Github className="h-4 w-4" />
							Source
						</Link>
					</div>
				</nav>
			</header>

			<main className="container mx-auto flex-1 px-4 py-12">
				<div className="grid items-center gap-12 lg:grid-cols-2">
					<div className="space-y-6">
						<div className="space-y-2">
							<h1 className="font-bold text-4xl tracking-tighter">
								Bleeding Edge Next.js 15 Starter
							</h1>
							<p className="text-muted-foreground">
								Get up to speed with Bun, Biome, and Better Auth.
							</p>
						</div>
						<div className="flex gap-4">
							<Button
								asChild
								className="h-10 bg-green-500 px-8 font-medium text-black text-sm transition-colors hover:bg-green-400"
							>
								<Link href="#docs">Get Started</Link>
							</Button>
							<Button
								asChild
								variant="outline"
								className="h-10 border border-white/20 px-8 font-medium text-sm transition-colors hover:bg-white/10"
							>
								<Link href="https://github.com">View on GitHub</Link>
							</Button>
						</div>
					</div>
					<div className="terminal">
						<div className="terminal-header">
							<div className="terminal-dot bg-red-500" />
							<div className="terminal-dot bg-yellow-500" />
							<div className="terminal-dot bg-green-500" />
							<span className="ml-2 text-sm text-white/40">terminal</span>
						</div>
						<div className="space-y-2">
							<div className="flex gap-2">
								<span className="text-white/40">$</span>
								<span>git clone better-starter-repo your-app-name</span>
							</div>
							<div className="flex gap-2">
								<span className="text-white/40">$</span>
								<span>cd your-app-name</span>
							</div>
							<div className="flex gap-2">
								<span className="text-white/40">$</span>
								<span>bun install</span>
							</div>
							<div className="pl-4 text-white/60">
								Installing...
								<br />
								├── next 15.0.0
								<br />
								├── react 19.0.0
								<br />
								└── tailwindcss 4.0.0
							</div>
						</div>
					</div>
				</div>

				<div className="mt-24 grid gap-8 md:grid-cols-3">
					<div className="space-y-2">
						<h3 className="font-semibold text-lg">Ultra-Modern Stack</h3>
						<p className="text-muted-foreground text-sm">
							Next.js 15, React 19, and Tailwind v4 are the latest and greatest
							for 2025.
						</p>
					</div>
					<div className="space-y-2">
						<h3 className="font-semibold text-lg">Ultra-Fast Tooling</h3>
						<p className="text-muted-foreground text-sm">
							Bun and Biome make for speedy DX and even speedier build times.
						</p>
					</div>
					<div className="space-y-2">
						<h3 className="font-semibold text-lg">Ultra-Clean Codebase</h3>
						<p className="text-muted-foreground text-sm">
							Better Auth, shadcn/ui, and more provide clean and comprehensible
							code.
						</p>
					</div>
				</div>
			</main>

			<footer className="border-white/10 border-t">
				<div className="container mx-auto flex h-14 items-center justify-between px-4 text-muted-foreground text-sm">
					<span>© {new Date().getFullYear()} Better Starter. MIT License</span>
					<nav className="flex gap-6">
						<Link href="#" className="transition-colors hover:text-white">
							Privacy
						</Link>
						<Link href="#" className="transition-colors hover:text-white">
							Terms
						</Link>
					</nav>
				</div>
			</footer>
		</div>
	);
}
