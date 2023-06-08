import Link from "next/link";
import React from "react";
import { allProjects } from "contentlayer/generated";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import { Article } from "./article";
import { Redis } from "@upstash/redis";
import { Eye } from "lucide-react";


export default async function ProjectsPage() {

	return (
		<div className="relative pb-16">
			<Navigation />
			<div className="px-6 pt-16 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
				<div className="max-w-2xl mx-auto lg:mx-0">
					<h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
						Projects
					</h2>
					<p className="mt-4 text-zinc-400">
						Some of the projects are from work and some are on my own time.
					</p>
				</div>
				<div className="w-full h-px bg-zinc-800" />

				<div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-2 ">
					<Card>
						<Link href="/projects/1">
							<article className="relative w-full h-full p-4 md:p-8">
								<div className="flex items-center justify-between gap-2">
									<div className="text-xs text-zinc-100">
										june 6, 2023
									</div>
									
								</div>

								<h2
									id="featured-post"
									className="mt-4 text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl font-display"
								>
									Supply chain management App
								</h2>
								<p className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
								This Laravel project is part of the end-of-year project in my school, showcasing my skills in building web applications using the MVC (Model-View-Controller) architecture with a MySQL database. This project presents a comprehensive supply chain management application designed to streamline logistics operations.

								</p>
								<div className="absolute bottom-4 md:bottom-8">
									<p className="hidden text-zinc-200 hover:text-zinc-50 lg:block">
										Read more <span aria-hidden="true">&rarr;</span>
									</p>
								</div>
							</article>
						</Link>
					</Card>

					<div className="flex flex-col w-full gap-8 mx-auto border-t border-gray-900/10 lg:mx-0 lg:border-t-0 ">
						
							<Card>
								<Link href="/projects/2">
									<article className="p-4 md:p-8">
										<div className="flex justify-between gap-2 items-center">
											<span className="text-xs duration-1000 text-zinc-200 group-hover:text-white group-hover:border-zinc-200 drop-shadow-orange">
												April 2,2023
											</span>
											
										</div>
										<h2 className="z-20 text-xl font-medium duration-1000 lg:text-3xl text-zinc-200 group-hover:text-white font-display">
											Real time order tracking using websockets
										</h2>
										<p className="z-20 mt-4 text-sm  duration-1000 text-zinc-400 group-hover:text-zinc-200">
										The real-time order tracking app is an application that leverages web sockets to provide users with live updates on their orders. Built using Node.js, Express, and Socket.IO
										</p>
									</article>
								</Link>
							</Card>
							<Card>
								<Link href="/projects/3">
									<article className="p-4 md:p-8">
										<div className="flex justify-between gap-2 items-center">
											<span className="text-xs duration-1000 text-zinc-200 group-hover:text-white group-hover:border-zinc-200 drop-shadow-orange">
												June 7, 2023
											</span>
											
										</div>
										<h2 className="z-20 text-xl font-medium duration-1000 lg:text-3xl text-zinc-200 group-hover:text-white font-display">
											Next js Recipe App EnsiMeal
										</h2>
										<p className="z-20 mt-4 text-sm  duration-1000 text-zinc-400 group-hover:text-zinc-200">
										EnsiMeal is a recipe app that combines various technologies. Built using Next.js, Streaming SSR, Server Components, and Server Actions, along with Prisma and a PostgreSQL database, EnsiMeal offers a platform for discovering and creating delicious recipes.The app utilizes Streaming SSR (Server-Side Rendering) to efficiently generate and deliver HTML content to users, resulting in faster page loads and improved performance. This ensures that users can quickly access recipes and related information without delay
										</p>
									</article>
								</Link>
							</Card>
						
					</div>
				</div>
				<div className="hidden w-full h-px md:block bg-zinc-800" />

				<div className="grid grid-cols-1 gap-4 mx-auto lg:mx-0 md:grid-cols-3">
					<div className="grid grid-cols-1 gap-4">
						<Card>
							<Link href="/projects/4">
								<article className="p-4 md:p-8">
									<div className="flex justify-between gap-2 items-center">
										<span className="text-xs duration-1000 text-zinc-200 group-hover:text-white group-hover:border-zinc-200 drop-shadow-orange">
												June 1, 2023
										</span>
											
									</div>
									<h2 className="z-20 text-xl font-medium duration-1000 lg:text-3xl text-zinc-200 group-hover:text-white font-display">
											GraphQl CRUD API
									</h2>
									<p className="z-20 mt-4 text-sm  duration-1000 text-zinc-400 group-hover:text-zinc-200">
									This Books CRUD API is a backend solution that leverages GraphQL, Node.js, and Express to provide an efficient way to manage books data. This API utilizes MongoDB as the database and allows users to access books by their names, authors, and genres. Additionally, users can access authors by their names and ages.
									</p>
								</article>
							</Link>
						</Card>
					</div>
					
				</div>
			</div>
		</div>
	);
}
