import About from "@/components/About";
import Blogs from "@/components/Blogs";
import Contact from "@/components/Contact";
import Partner from "@/components/Video";
import Services from "@/components/Brands";
import Slider from "@/components/slider/Slider";
import Video from "@/components/Video";
import Brands from "@/components/Brands";
import Team from "@/components/Team";

export default function Home() {
	return (
		<main className="">
			<Slider />
			<About />
			<Brands/>
			<Video/>
			<Blogs />
			<Contact />
			<Team/>
		</main>
	);
}
