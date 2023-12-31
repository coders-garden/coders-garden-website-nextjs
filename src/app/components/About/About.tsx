import { secondary } from "@/app/fonts";
import React from "react";

const About: React.FC = () => {
	return (
		<section
			className={
				"py-16 text-center min-h-screen flex flex-col justify-center items-center" +
				" " +
				secondary.className
			}
			id="about"
		>
			<h2 className="text-6xl md:text-8xl lg:text-9xl font-extrabold">
				About Us
			</h2>
			<p className="text-muted-foreground font-semibold md:text-lg lg:text-xl">
				We are a fantastic team doing great things.
			</p>
		</section>
	);
};

export default About;
