"use client";
import React, { useRef, useState } from "react";
import { IconArrowNarrowLeft, IconArrowNarrowRight } from "@tabler/icons-react";
import { motion } from "framer-motion";

const BydCashbackPromotion = () => {
	const carouselRef = useRef(null);
	const [canScrollLeft, setCanScrollLeft] = useState(false);
	const [canScrollRight, setCanScrollRight] = useState(true);

	const promotions = [
		{
			src: "/images/byd-dolphin-free-home-charger.jpg",
			alt: "BYD DOLPHIN รับเงินคืน 50,000 บาท",
			model: "BYD SEAL",
			cashback: "100,000",
			category: "แคมเปญพิเศษ",
		},
		{
			src: "/images/byd-atto3-cashback-100000.jpg",
			alt: "BYD ATTO 3 รับเงินคืน 100,000 บาท",
			model: "BYD ATTO 3",
			cashback: "80,000",
			category: "แคมเปญพิเศษ",
		},
		{
			src: "/images/byd-seal-cashback-50000.jpg",
			alt: "BYD SEAL รับเงินคืน 50,000 บาท",
			model: "BYD DOLPHIN",
			cashback: "50,000",
			category: "แคมเปญพิเศษ",
		},
	];

	const checkScrollability = () => {
		if (carouselRef.current) {
			const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
			setCanScrollLeft(scrollLeft > 0);
			setCanScrollRight(scrollLeft < scrollWidth - clientWidth);
		}
	};

	const scrollLeft = () => {
		if (carouselRef.current) {
			carouselRef.current.scrollBy({ left: -300, behavior: "smooth" });
		}
	};

	const scrollRight = () => {
		if (carouselRef.current) {
			carouselRef.current.scrollBy({ left: 300, behavior: "smooth" });
		}
	};

	return (
		<div className="-mx-4 h-auto bg-gradient-to-b from-pink-50 to-accent w-[calc(100%+2rem)] overflow-hidden">
			<div className="py-8">
				<div className="text-center mb-8 px-4">
					<h1 className="text-3xl md:text-4xl font-bold text-pink-600 mb-4">
						💸 โปรแรง! Cashback BYD สูงสุด 100,000 บาท 💸
					</h1>
					<p className="text-xl md:text-2xl text-pink-500 mb-6">
						✨ รับเงินคืนทันที เมื่อออกรถรุ่นที่ร่วมรายการ ✨
					</p>
				</div>

				<div className="relative w-full">
					<div
						className="flex w-full overflow-x-scroll overscroll-x-auto py-10 md:py-20 scroll-smooth [scrollbar-width:none] snap-x snap-mandatory"
						ref={carouselRef}
						onScroll={checkScrollability}
					>
						<div className="flex flex-row justify-start w-full">
							{promotions.map((promo, index) => (
								<motion.div
									initial={{
										opacity: 0,
										y: 20,
									}}
									animate={{
										opacity: 1,
										y: 0,
										transition: {
											duration: 0.5,
											delay: 0.2 * index,
											ease: "easeOut",
										},
									}}
									key={index}
									className="w-full flex-none snap-center"
								>
									<div className="rounded-none md:rounded-3xl bg-gray-100 dark:bg-neutral-900 h-80 md:h-[40rem] w-full overflow-hidden relative">
										<div className="absolute h-full top-0 inset-x-0 bg-gradient-to-b from-black/50 via-transparent to-transparent z-30" />
										<div className="relative z-40 p-4 md:p-8">
											<p className="text-white text-sm md:text-base font-medium">
												{promo.category}
											</p>
											<p className="text-white text-xl md:text-3xl font-semibold mt-2">
												{promo.model}
											</p>
											<p className="text-yellow-400 text-lg md:text-2xl font-bold mt-2">
												คืนเงิน {promo.cashback} บาท
											</p>
										</div>
										<img
											src={promo.src}
											alt={promo.alt}
											className="absolute inset-0 w-full h-full object-cover z-10"
										/>
									</div>
								</motion.div>
							))}
						</div>
					</div>

					<div className="absolute inset-0 flex items-center justify-between px-2 md:px-4 pointer-events-none">
						<button
							className="relative z-40 h-10 w-10 rounded-full bg-white/80 hover:bg-white flex items-center justify-center disabled:opacity-50 pointer-events-auto transition-all"
							onClick={scrollLeft}
							disabled={!canScrollLeft}
						>
							<IconArrowNarrowLeft className="h-6 w-6 text-gray-700" />
						</button>
						<button
							className="relative z-40 h-10 w-10 rounded-full bg-white/80 hover:bg-white flex items-center justify-center disabled:opacity-50 pointer-events-auto transition-all"
							onClick={scrollRight}
							disabled={!canScrollRight}
						>
							<IconArrowNarrowRight className="h-6 w-6 text-gray-700" />
						</button>
					</div>
				</div>

				<div className="text-center mt-8 space-y-4 px-4">
					<p className="text-lg text-gray-700">
						🔥 จองวันนี้ รับ Cashback ทันที
					</p>
					<p className="text-lg text-gray-700">🚗 ออกรถง่าย ไม่ต้องรอนาน</p>
					<p className="text-lg text-gray-700">
						💰 รับเงินคืนสูงสุด 100,000 บาท
					</p>
				</div>
			</div>
		</div>
	);
};

export default BydCashbackPromotion;
