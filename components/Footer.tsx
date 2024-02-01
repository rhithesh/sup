import React from "react";
import Link from "next/link";

export default function Footer() {
	return (
		<>
			<footer className="w-full py-12 bg-gray-800 dark:bg-gray-900">
				<div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
					<div className="space-y-3">
						<h2 className="text-2xl font-bold tracking-tighter text-white sm:text-3xl md:text-4xl">
							SUPP A Hangout place
						</h2>
						<p className="mx-auto max-w-[700px] text-gray-400 md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed">
							© 2024 Meditation App. All rights reserved.
						</p>
					</div>
					<div className="flex flex-wrap justify-center gap-4">
						<Link className="text-gray-400 hover:text-white" href="#">
							Terms of Service
						</Link>
						<Link className="text-gray-400 hover:text-white" href="#">
							Privacy Policy
						</Link>
						<Link className="text-gray-400 hover:text-white" href="#">
							Contact Us
						</Link>
					</div>
				</div>
			</footer>
		</>
	);
}
