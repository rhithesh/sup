/**
 * v0 by Vercel.
 * @see https://v0.dev/t/9PFhyu78TN0
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
export default function Mid() {
	return (
		<section className="w-full py-12 md:py-24 lg:py-32  dark:from-gray-800 dark:via-gray-700 dark:to-gray-600">
			<div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
				<div className="space-y-3">
					<h2 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl md:text-5xl">
						Choose Your Meditation Style
					</h2>
					<p className="mx-auto max-w-[700px] text-gray-200 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
						Select a meditation style that suits your needs and preferences.
					</p>
				</div>
				<div className="grid w-full grid-cols-1 md:grid-cols-3 items-stretch justify-center gap-8 md:gap-12">
					<div className="flex flex-col items-center p-4 sm:p-8 bg-white rounded-lg shadow-lg">
						<UserIcon className="h-12 w-12 mb-4 text-purple-500" />
						<h3 className="text-2xl font-bold mb-2">Solo Meditation</h3>
						<p className="text-gray-500">
							Experience a personal journey of tranquility and self-discovery.
						</p>
					</div>
					<div className="flex flex-col items-center p-4 sm:p-8 bg-white rounded-lg shadow-lg">
						<UsersIcon className="h-12 w-12 mb-4 text-pink-500" />
						<h3 className="text-2xl font-bold mb-2">Group Meditation</h3>
						<p className="text-gray-500">
							Join a community of like-minded individuals in a shared meditation
							session.
						</p>
					</div>
					<div className="flex flex-col items-center p-4 sm:p-8 bg-white rounded-lg shadow-lg">
						<HeadphonesIcon className="h-12 w-12 mb-4 text-red-500" />
						<h3 className="text-2xl font-bold mb-2">Guided Meditation</h3>
						<p className="text-gray-500">
							Follow along with a guided meditation for a structured experience.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}

function HeadphonesIcon(props: any) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round">
			<path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3" />
		</svg>
	);
}

function UserIcon(props: any) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round">
			<path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
			<circle cx="12" cy="7" r="4" />
		</svg>
	);
}

function UsersIcon(props: any) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round">
			<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
			<circle cx="9" cy="7" r="4" />
			<path d="M22 21v-2a4 4 0 0 0-3-3.87" />
			<path d="M16 3.13a4 4 0 0 1 0 7.75" />
		</svg>
	);
}
