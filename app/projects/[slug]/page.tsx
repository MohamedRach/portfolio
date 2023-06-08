import { notFound } from "next/navigation";
import { allProjects } from "contentlayer/generated";
import { Mdx } from "@/app/components/mdx";
import { Header } from "./header";
import "./mdx.css";
import Image from 'next/image'



type Props = {
	params: {
		slug: string;
	};
};



export async function generateStaticParams(): Promise<Props["params"][]> {
	return allProjects
		.filter((p) => p.published)
		.map((p) => ({
			slug: p.slug,
		}));
}

export default async function PostPage({ params }: Props) {
	const slug = params?.slug;
	switch (slug) {
		case "1":
			var project = {
				repository : "https://github.com/MohamedRach/scm-App",
				url: "https://scm-app-production.up.railway.app/",
				title:"Supply chain management App",
				description:"This Laravel project is part of the end-of-year project in my school, showcasing my skills in building web applications using the MVC (Model-View-Controller) architecture with a MySQL database. This project presents a comprehensive supply chain management application designed to streamline logistics operations.",
				paras : ["This Laravel project is part of the end-of-year project in my school, showcasing my skills in building web applications using the MVC (Model-View-Controller) architecture with a MySQL database. This project presents a comprehensive supply chain management application designed to streamline logistics operations.", "Users can effortlessly send shipments, track their status, and initiate returns if they are dissatisfied with a delivery, all within the user-friendly interface of the app. The Model component of the MVC architecture handles the data and business logic, seamlessly integrating with the MySQL database. The database stores and manages the necessary information, ensuring the smooth functioning of the supply chain processes.", "The project also includes a dedicated administration dashboard, accessible only to admins. Built with the MVC architecture in mind, the Controller component handles the CRUD (Create, Read, Update, Delete) operations seamlessly, allowing admins to manage shipments, returns, and other essential information.  NB: to register as an admin go to '/register'"],
				imgs: ["/asset/p1/p1-1png.png", "/asset/p1/p1-2.png", "/asset/p1/p1-3.png"],
				skills: ["Laravel", "MySQL", "MVC", "chartJs"]
			}
			break;
		case "2":
			var project = {
				repository : "https://github.com/MohamedRach/websockets",
				url: "https://order-tracking.onrender.com",
				title:"Real time order tracking using websockets",
				description:"The real-time order tracking app is an application that leverages web sockets to provide users with live updates on their orders. Built using Node.js, Express, and Socket.IO.",
				paras: ["The real-time order tracking app is an application that leverages web sockets to provide users with live updates on their orders. Built using Node.js, Express, and Socket.IO.", "Users can receive real-time updates as their orders progress through different stages. The app utilizes web sockets, powered by Socket.IO, to establish a persistent connection between the client and server. This enables instant communication and enables the server to push order status updates to the client in real time.", "When an admin updates the order status from the administration dashboard, the change is instantly reflected in real time for the client. eliminating the need for manual refreshes or constant status checks.  NB: please go to '/admin' to access the admin panel"],
				imgs: ["/asset/p2/p2-1.png", "/asset/p2/p2-2.png"],
				skills: ["WebSockets", "Socket.io", "NodeJs", "Express"]
			}
			break;
		case "3":
			var project = {
				repository : "https://github.com/MohamedRach/ensimeal",
				url: "https://ensimeal.vercel.app/",
				title:"Next js Recipe App EnsiMeal",
				description:"EnsiMeal is a recipe app that combines various technologies. Built using Next.js, Streaming SSR, Server Components, and Server Actions, along with Prisma and a PostgreSQL database, EnsiMeal offers a platform for discovering and creating delicious recipes.The app utilizes Streaming SSR (Server-Side Rendering) to efficiently generate and deliver HTML content to users, resulting in faster page loads and improved performance. This ensures that users can quickly access recipes and related information without delay",
				paras: ["EnsiMeal is a recipe app that combines various technologies. Built using Next.js, Streaming SSR, Server Components, and Server Actions, along with Prisma and a PostgreSQL database, EnsiMeal offers a platform for discovering and creating delicious recipes.The app utilizes Streaming SSR (Server-Side Rendering) to efficiently generate and deliver HTML content to users, resulting in faster page loads and improved performance. This ensures that users can quickly access recipes and related information without delay", "EnsiMeal also employs Server Components, a Next.js feature that allows for modular server-side rendering. This enables the app to render specific components on the server, reducing the amount of data transferred to the client and enhancing overall performance. The app utilizes Server Action for forms, enabling seamless and secure data submission, validation, and processing.", "Prisma, coupled with a PostgreSQL database, serves as the robust backend infrastructure for EnsiMeal. Prisma's intuitive and type-safe query building capabilities simplify database operations and improve productivity. The PostgreSQL database offers reliability, scalability, and strong data integrity, ensuring a seamless recipe management experience."],
				imgs: ["/asset/p3/p3-1.png", "/asset/p3/p3-2.png"],
				skills: ["NextJs", "Streaming SSR", "Prisma", "PostgreSQL"]
			}
			break;
		case "4":
			var project = {
				repository : "https://github.com/MohamedRach/graphqlApi",
				url: "https://graphqlcrud.onrender.com",
				title:"GraphQl CRUD API",
				description:"This Books CRUD API is a backend solution that leverages GraphQL, Node.js, and Express to provide an efficient way to manage books data. This API utilizes MongoDB as the database and allows users to access books by their names, authors, and genres. Additionally, users can access authors by their names and ages.",
				paras: ["This Books CRUD API is a backend solution that leverages GraphQL, Node.js, and Express to provide an efficient way to manage books data. This API utilizes MongoDB as the database and allows users to access books by their names, authors, and genres. Additionally, users can access authors by their names and ages.", "Built with GraphQL, the Books CRUD API uses a query language that enables clients to specify the exact data they need. Clients can request books by providing the book's name, author name, or genre, and retrieve specific book details. Similarly, they can query authors by their names and ages to retrieve specific author information.", "With the Books CRUD API, users can easily create, read, update, and delete books using a clear and consistent API structure. They can retrieve books based on specific criteria such as name, author, or genre. The API also allows users to access author details, including their names and ages."],
				imgs: ["/asset/p4/P4-1.png", "/asset/p4/p4-2.png"],
				skills: ["GraphQL", "NodeJs", "Express", "MongoDB"]
			}
			break;
	
		default:
			var project = {
				repository : "nothing",
				url: "https://graphqlcrud.onrender.com",
				title:"GraphQl CRUD API",
				description:" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore cumque deserunt ipsam aperiam rerum nesciunt impedit in illo corrupti dolores amet odit similique, nam ea excepturi voluptatibus facere expedita officiis!",
				paras:[""],
				imgs:[""],
				skills: [""]
			}
			break;
	}
	//const project = allProjects.find((project) => project.slug === slug);
	if(project.repository === "nothing"){
		notFound()
	}

	

	return (
		<div className="bg-zinc-50 min-h-screen">
			<Header project={project}></Header>
			

			<article className="px-4 py-12 mx-auto prose prose-zinc prose-quoteless">
				<Image src={project.imgs[0]} alt="project pics" width={1200 }height={1000}></Image>
				<p>{project.paras[0]}</p>
				<Image src={project.imgs[1]} alt="project pics" width={1200 }height={1000}></Image>
				<p>{project.paras[1]}</p>
				{project.imgs[2] && <Image src={project.imgs[2]} alt="project pics" width={1200 }height={1000}></Image>}
				<p>{project.paras[2]}</p>

			</article>
		</div>
	);
}
