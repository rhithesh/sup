"use client";
import { useState } from "react";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Register() {
	const [formData, setFormData] = useState({
		names: "",
		intrest: "",
	});

	const handleInputChange = () => {};

	return (
		<div className=" min-h-screen">
			<Card className="w-[350px] ">
				<CardHeader>
					<CardTitle>Become a Supp</CardTitle>
					<CardDescription>
						we ask small thing to make the right choices for you.
					</CardDescription>
				</CardHeader>
				<CardContent>
					<form
						onSubmit={(e) => {
							e.preventDefault();
							console.log(e);
						}}>
						<div className="flex flex-col w-full  gap-4">
							<div className="flex flex-col space-y-1.5">
								<Label htmlFor="name">Name</Label>
								<Input
									onChange={(e) => {
										setFormData({
											...formData,
											names: e.target.value,
										});
										console.log(formData);
									}}
									id="name"
									placeholder="Name of your project"
								/>
							</div>
							<div className="flex flex-col space-y-1.5">
								<Label htmlFor="linkings">Intrest's</Label>
								<Select
									onValueChange={(value) => {
										console.log(value);
										setFormData({
											...formData,
											intrest: value,
										});
										console.log(formData);
									}}>
									<SelectTrigger id="linkings">
										<SelectValue placeholder={"choose"} />
									</SelectTrigger>
									<SelectContent position="popper">
										<SelectItem value="trekking">trekking</SelectItem>
										<SelectItem value="Party">Party</SelectItem>
										<SelectItem value="Meditation">Meditation</SelectItem>
										<SelectItem value="Gym">Gym</SelectItem>
									</SelectContent>
								</Select>
							</div>
						</div>
					</form>
				</CardContent>
				<CardFooter className="flex justify-between">
					<Button
						variant="outline"
						onClick={() => {
							//logic for a fetch request is to be made and on true we sign the user in
						}}>
						Submit
					</Button>
				</CardFooter>
			</Card>
		</div>
	);
}
