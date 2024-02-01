import Image from "next/image";
import Register from "@/components/Register";
import { Header } from "@/components/Header";
import Mid from "@/components/Mid";
import Mid2 from "@/components/Mid2";
import Mid1 from "@/components/Mid1";

export default function Home() {
	return (
		<main className=" w-screen bg-gradient-to-r from-purple-500 via-pink-500 to-red-500  ">
			<Header />
			<Mid />
			<Mid1 />
			<Mid2 />
		</main>
	);
}
