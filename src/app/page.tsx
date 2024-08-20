/* eslint-disable react/jsx-no-undef */
"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
	const [count, setCount] = useState(0);

	return (
		<main className="flex min-h-screen flex-col items-center">
			{/* Navbar */}
			<section className="sticky flex justify-between top-0 left-0 bg-slate-200 w-full px-6 py-4 text-xl">
				<Image src="/next.svg" width={80} height={80} alt="Adaba Logo" />
				<ul>
					<Link href="/contact">Contact</Link>
				</ul>
			</section>

			{/*  */}
			<section className="min-h-[100dvh] px-12 mt-4">Panel</section>

			{/* Button section */}
			<section className="flex gap-2 items-center mt-5">
				<Button
					className="text-slate-100 bg-slate-700 hover:bg-white hover:text-black px-12 py-4"
					onClick={() => alert("Botón")}
				>
					Botón
				</Button>
				<Button
					className="text-slate-100 bg-green-600 hover:bg-white hover:text-black px-12 py-4"
					onClick={() => setCount(count + 1)}
				>
					+
				</Button>
				<Button
					className="text-slate-100 bg-red-600 hover:bg-white hover:text-black px-12 py-4"
					onClick={() => setCount(count - 1)}
				>
					-
				</Button>
				<p className="ml-4 rounded-md border-opacity-10 border-2 px-[20px]">{count}</p>
			</section>
		</main>
	);
}
