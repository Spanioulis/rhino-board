"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Home() {
	const [count, setCount] = useState(0);

	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24 bg-stone-300 class">
			<div className="flex gap-2 items-center">
				<Button
					className="text-slate-100 bg-slate-700 hover:bg-white hover:text-black rounded-md px-12 py-4"
					onClick={() => alert("Botón")}
				>
					Botón
				</Button>
				<Button
					className="text-slate-100 bg-green-600 hover:bg-white hover:text-black rounded-lg px-12 py-4"
					onClick={() => setCount(count + 1)}
				>
					+
				</Button>
				<Button
					className="text-slate-100 bg-red-600 hover:bg-white hover:text-black rounded-md px-12 py-4"
					onClick={() => setCount(count - 1)}
				>
					-
				</Button>
				<p className="ml-4 rounded-md border-opacity-10 border-2 px-[20px]">{count}</p>
			</div>
		</main>
	);
}
