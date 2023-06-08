import Link from "next/link";
import React from "react";
import Particles from "./components/particles";

const navigation = [
	{ name: "Projets", href: "/projects" },
	{ name: "Contact", href: "/contact" },
	
];

export default function Home() {
	return (
		<div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
			<nav className="my-16 animate-fade-in">
				<ul className="flex items-center justify-center gap-4">
					{navigation.map((item) => (
						<Link
							key={item.href}
							href={item.href}
							className="text-sm duration-500 text-zinc-500 hover:text-zinc-300"
						>
							{item.name}
						</Link>
					))}
				</ul>
			</nav>
			<div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
			<Particles
				className="absolute inset-0 -z-10 animate-fade-in"
				quantity={100}
			/>
			<div className="text-center animate-fade-in">
				<h2 className="mb-10 text-sm text-zinc-500 ">
					Hi, my name is Mohamed Sadek Rachidi and I'm 
				</h2>
			</div>
			<h1 className="z-10 text-4xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text ">
				a Full stack web-dev
			</h1>

			<div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
			<div className="my-10 text-center animate-fade-in">
				<h2 className="text-sm text-zinc-500 ">
				Also a computer science student with an unwavering passion for programming. 
				</h2>
			</div>
			<div className="flex flex-row gap-20">
			<button className="bg-white text-black font-bold py-2 px-4 rounded">Download my cv</button>
			<button className="bg-transparent hover:bg-white text-white font-semibold hover:text-black py-2 px-4 border border-white hover:border-transparent rounded"><Link target="_blank" href="https://github.com/MohamedRach">My Github</Link></button>
			</div>
		</div>
	);
}
