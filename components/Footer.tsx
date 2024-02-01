export default function Footer() {
	return (
		<>
			<div className="border-2  border-black flex flex-col mx-6 p-5 space-y-3 rounded-lg">
				<div className="  bg-white flex   ">
					<div className="   flex flex-col space-y-2 w-[450px] ">
						<h4 className=" text-2xl">📢 Latest Updates & Announcements</h4>
						<p className=" text-wrap">
							Be the first to know about new features, updates, and exciting
							announcements. Follow us on social media and stay tuned for the
							latest from the Sup community!
						</p>
					</div>
					<div className=" w-[450px]  ">
						<h3 className=" text-2xl ">❤️ Refer a Friend Love using Sup?</h3>
						<p className=" text-wrap t">
							Share the joy with your friends! Refer a friend to Sup and both of
							you could enjoy exclusive benefits.
						</p>
					</div>
					<div className="  w-[450px]">
						<h4 className=" text-2xl">
							📄 Terms of Service | 🔐 Privacy Policy
						</h4>
						<p className=" text-wrap">
							Make sure to review our Terms of Service and Privacy Policy to
							understand how we prioritize your privacy and what you can expect
							from using Sup.
						</p>
					</div>
				</div>
				<div className=" flex">
					<h3 className="flex flex-col">
						<span>🌐 Visit our website: www.supapp.com</span>
						<span>📱 Download Sup on the App Store and Google Play</span>
						<span>👥 Follow us on Social Media:</span>
						<span>Twitter: @SupAppOfficial</span>
						<span>Instagram: @Sup_App</span>
						<span>Facebook: SupApp 💌</span>
						<span>Contact Us: Email: info@supapp.com</span>
						<span>Customer Support: support@supapp.com</span>
					</h3>
				</div>
			</div>
		</>
	);
}
