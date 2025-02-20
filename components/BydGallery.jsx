"use client";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";

import { PulseBeams } from "@/components/ui/PulseBeams";

const BydGallery = () => {
	const galleryData = {
		seal: {
			name: "BYD SEAL",
			images: {
				exterior: [
					"/images/seal/exterior-01.jpg",
					"/images/seal/exterior-02.jpg",
					"/images/seal/exterior-03.jpg",
				],
				interior: [
					"/images/seal/interior-01.jpg",
					"/images/seal/interior-02.jpg",
					"/images/seal/interior-03.jpg",
				],
			},
		},
		/* dolphin: {
			name: "BYD DOLPHIN",
			images: {
				exterior: [
					"/images/dolphin/exterior-01.jpg",
					"/images/dolphin/exterior-02.jpg",
					"/images/dolphin/exterior-03.jpg",
				],
				interior: [
					"/images/dolphin/interior-01.jpg",
					"/images/dolphin/interior-02.jpg",
					"/images/dolphin/interior-03.jpg",
				],
			},
		}, */
	};

	return (
		<div className="bg-background min-h-screen">
			<div className="relative aspect-video">
				<video
					className="w-full h-full object-cover"
					autoPlay
					muted
					loop
					controls
				>
					<source src="/videos/seal-video.mp4" type="video/mp4" />
					Your browser does not support the video tag.
				</video>
			</div>
			{Object.entries(galleryData).map(([model, data]) => (
				<section key={model} className="mb-8">
					{/* <motion.h2
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						className="text-2xl font-bold text-foreground py-4 px-4 text-shadow"
					>
						{data.name}
					</motion.h2> */}

					{/* Exterior Gallery */}
					<div className="mb-8">
						<Carousel className="w-full">
							<CarouselContent>
								{data.images.exterior.map((src, index) => (
									<CarouselItem key={index} className="pl-0">
										<div className="relative aspect-video">
											<img
												src={src}
												alt={`${data.name} exterior ${index + 1}`}
												className="w-full h-full object-cover md:object-center object-[center_25%] sm:object-[center_35%]"
											/>
										</div>
									</CarouselItem>
								))}
							</CarouselContent>
							<CarouselPrevious
								variant="ghost"
								className="-left-2 h-12 w-12 md:h-16 md:w-16 border-0 bg-transparent hover:bg-transparent"
							/>
							<CarouselNext
								variant="ghost"
								className="-right-2 h-12 w-12 md:h-16 md:w-16 border-0 bg-transparent hover:bg-transparent"
							/>
						</Carousel>
					</div>

					{/* Interior Gallery */}
					<div className="mb-8">
						<Carousel className="w-full">
							<CarouselContent>
								{data.images.interior.map((src, index) => (
									<CarouselItem key={index} className="pl-0">
										<div className="relative aspect-video">
											<img
												src={src}
												alt={`${data.name} interior ${index + 1}`}
												className="w-full h-full object-cover"
											/>
										</div>
									</CarouselItem>
								))}
							</CarouselContent>
							<CarouselPrevious
								variant="ghost"
								className="-left-2 h-12 w-12 md:h-16 md:w-16 border-0 bg-transparent hover:bg-transparent"
							/>
							<CarouselNext
								variant="ghost"
								className="-right-2 h-12 w-12 md:h-16 md:w-16 border-0 bg-transparent hover:bg-transparent"
							/>
						</Carousel>
					</div>
				</section>
			))}

			{/* Quick Specs Section */}
			{/* 			<section className="bg-card p-4">
				<div className="grid grid-cols-2 gap-4">
					<div className="bg-muted p-4 rounded-lg">
						<h3 className="text-primary font-medium mb-2">แบตเตอรี่</h3>
						<p className="text-muted-foreground">82.5 kWh</p>
					</div>
					<div className="bg-muted p-4 rounded-lg">
						<h3 className="text-primary font-medium mb-2">ระยะวิ่ง</h3>
						<p className="text-muted-foreground">460 กม.</p>
					</div>
					<div className="bg-muted p-4 rounded-lg">
						<h3 className="text-primary font-medium mb-2">กำลังสูงสุด</h3>
						<p className="text-muted-foreground">230 kW</p>
					</div>
					<div className="bg-muted p-4 rounded-lg">
						<h3 className="text-primary font-medium mb-2">แรงบิดสูงสุด</h3>
						<p className="text-muted-foreground">360 Nm</p>
					</div>
				</div>
			</section> */}
			<div className="max-w-screen mx-auto">
				<PulseBeams />
			</div>
		</div>
	);
};

export default BydGallery;
