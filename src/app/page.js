import About from "@/components/About";
import Blogs from "@/components/Blogs";
import Contact from "@/components/Contact";
import Partner from "@/components/Partner";
import Services from "@/components/Services";
import Slider from "@/components/slider/Slider";

export default function Home() {
	return (
		<main className="">
			<Slider/>
			<About/>
			<Services/>
			<Partner/>
			<Blogs/>
			<Contact/>
		</main>
	);
}
