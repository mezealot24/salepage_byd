import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";

const BydCashbackPromotion = () => {
	const promotions = [
		{
			src: "/images/byd-dolphin-free-home-charger.jpg",
			alt: "BYD DOLPHIN รับเงินคืน 50,000 บาท",
			model: "BYD SEAL",
			cashback: "100,000",
		},
		{
			src: "/images/byd-atto3-cashback-100000.jpg",
			alt: "BYD ATTO 3 รับเงินคืน 100,000 บาท",
			model: "BYD ATTO 3",
			cashback: "80,000",
		},
		{
			src: "/images/byd-seal-cashback-50000.jpg",
			alt: "BYD SEAL รับเงินคืน 50,000 บาท",
			model: "BYD DOLPHIN",
			cashback: "50,000",
		},
	];

	return (
		<div className="h-auto bg-gradient-to-b from-pink-50 to-accent">
			<div className="container mx-auto px-4 py-8">
				<div className="text-center mb-8">
					<h1 className="text-3xl md:text-4xl font-bold text-pink-600 mb-4">
						💸 โปรแรง! Cashback BYD สูงสุด 100,000 บาท 💸
					</h1>
					<p className="text-xl md:text-2xl text-pink-500 mb-6">
						✨ รับเงินคืนทันที เมื่อออกรถรุ่นที่ร่วมรายการ ✨
					</p>
				</div>

				<Carousel className="w-full">
					<CarouselContent className="-ml-0">
						{promotions.map((promo, index) => (
							<CarouselItem key={index} className="pl-0">
								<Card className="border-none shadow-xl">
									<CardContent className="p-0">
										<div className="relative aspect-square rounded-lg overflow-hidden">
											<img
												src={promo.src}
												alt={promo.alt}
												className="w-full h-full object-cover"
											/>
											<div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-4">
												<h2 className="text-xl font-bold">{promo.model}</h2>
												<p className="text-lg">
													<span className="text-2xl font-bold text-yellow-400">
														คืนเงิน {promo.cashback} บาท
													</span>
												</p>
											</div>
										</div>
									</CardContent>
								</Card>
							</CarouselItem>
						))}
					</CarouselContent>
					<CarouselPrevious className="text-pink-600 hover:text-pink-700" />
					<CarouselNext className="text-pink-600 hover:text-pink-700" />
				</Carousel>

				<div className="text-center mt-8 space-y-4">
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
