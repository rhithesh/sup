/**
 * v0 by Vercel.
 * @see https://v0.dev/t/BWMTKyHI6Q5
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";
export default function Component() {
	return (
		<div className=" flex flex-col">
			<Header />

			<div className="flex flex-col items-center justify-center min-h-screen py-2 screen bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 ">
				<div className="flex flex-col items-center justify-center bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden max-w-2xl w-full p-8 space-y-6">
					<h1 className="text-3xl font-bold text-center">Write a Review</h1>
					<p className="text-gray-600 dark:text-gray-400 text-center">
						We appreciate your feedback. Please share your experience with us.
					</p>
					<div className="w-full">
						<Label className="text-lg" htmlFor="review-content">
							Your Review
						</Label>
						<Textarea
							className="mt-1 w-full h-32"
							id="review-content"
							placeholder="Write your review here..."
						/>
					</div>
					<div className="flex flex-col items-center justify-center space-y-2">
						<div className="text-lg">Rate Us</div>
						<div className="flex items-center gap-1">
							<Button size="icon" variant="ghost">
								<StarIcon className="w-6 h-6 fill-current text-gray-400 hover:text-yellow-500" />
							</Button>
							<Button size="icon" variant="ghost">
								<StarIcon className="w-6 h-6 fill-current text-gray-400 hover:text-yellow-500" />
							</Button>
							<Button size="icon" variant="ghost">
								<StarIcon className="w-6 h-6 fill-current text-gray-400 hover:text-yellow-500" />
							</Button>
							<Button size="icon" variant="ghost">
								<StarIcon className="w-6 h-6 fill-current text-gray-400 hover:text-yellow-500" />
							</Button>
							<Button size="icon" variant="ghost">
								<StarIcon className="w-6 h-6 fill-current text-gray-400 hover:text-yellow-500" />
							</Button>
						</div>
					</div>
					<Button className="w-full" size="lg">
						Submit Review
					</Button>
				</div>
			</div>
		</div>
	);
}

function StarIcon(props: any) {
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
			<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
		</svg>
	);
}
