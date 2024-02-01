export default function Mid2() {
	return (
		<section className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-800 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500">
			<div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
				<div className="space-y-3">
					<h2 className="text-3xl font-bold tracking-tighter text-gray-800 dark:text-gray-200 sm:text-4xl md:text-5xl">
						Creators of Supp
					</h2>
					<p className="mx-auto max-w-[700px] text-gray-600 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
						Meet The ideaters behind Supp, who had a visionary idea.
					</p>
				</div>
				<div className="grid w-full grid-cols-1 md:grid-cols-4 items-stretch justify-center gap-8 md:gap-12">
					<div className="flex flex-col items-center p-4 sm:p-8 bg-gray-100 dark:bg-gray-700 rounded-lg shadow-lg">
						<img
							className="h-24 w-24 rounded-full mb-4"
							height="200"
							src="/placeholder.svg"
							style={{
								aspectRatio: "200/200",
								objectFit: "cover",
							}}
							width="200"
						/>
						<h3 className="text-2xl font-bold mb-2">Hithesh</h3>
						<p className="text-gray-500 dark:text-gray-300">frontend dev</p>
					</div>
					<div className="flex flex-col items-center p-4 sm:p-8 bg-gray-100 dark:bg-gray-700 rounded-lg shadow-lg">
						<img
							className="h-24 w-24 rounded-full mb-4"
							height="200"
							src="/placeholder.svg"
							style={{
								aspectRatio: "200/200",
								objectFit: "cover",
							}}
							width="200"
						/>
						<h3 className="text-2xl font-bold mb-2"> Harsh T</h3>
						<p className="text-gray-500 dark:text-gray-300">
							Certified Meditation Instructor
						</p>
					</div>
					<div className="flex flex-col items-center p-4 sm:p-8 bg-gray-100 dark:bg-gray-700 rounded-lg shadow-lg">
						<img
							className="h-24 w-24 rounded-full mb-4"
							height="200"
							src="/placeholder.svg"
							style={{
								aspectRatio: "200/200",
								objectFit: "cover",
							}}
							width="200"
						/>
						<h3 className="text-2xl font-bold mb-2"> Ganashree</h3>
						<p className="text-gray-500 dark:text-gray-300">frontend dev</p>
					</div>
					<div className="flex flex-col items-center p-4 sm:p-8 bg-gray-100 dark:bg-gray-700 rounded-lg shadow-lg">
						<img
							className="h-24 w-24 rounded-full mb-4"
							height="200"
							src="/placeholder.svg"
							style={{
								aspectRatio: "200/200",
								objectFit: "cover",
							}}
							width="200"
						/>
						<h3 className="text-2xl font-bold mb-2">Dinesh kg</h3>
						<p className="text-gray-500 dark:text-gray-300">frontend dev</p>
					</div>
				</div>
			</div>
		</section>
	);
}
