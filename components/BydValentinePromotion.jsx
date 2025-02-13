import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";

const BydValentinePromotion = () => {
	const images = [
		{
			src: "/images/BYD1.jpg",
			alt: "BYD และ Metromobile นำเสนอแคมเปญ 'ดาวน์เริ่ม 5% ทุกรุ่น' แสดงรถยนต์ไฟฟ้า 6 รุ่น ได้แก่ BYD SEALION 6 DM-i ราคาเริ่ม 969,900 บาท, BYD DOLPHIN ราคา 569,900 บาท, BYD M6 ราคา 799,900 บาท, BYD ATTO 3 ราคา 899,900 บาท, BYD SEAL ราคา 999,900 บาท และ BYD SEALION 7 ราคา 1,249,900 บาท พร้อมพื้นหลังลายดอกซากุระสีชมพู",
		},
		{
			src: "/images/BYD2.jpg",
			alt: "โปรโมชั่นพิเศษ BYD SEAL สีขาว พร้อมแถมฟรีเพลชชาร์จมิก ฮีโร่ XUV MAX และบริการติดตั้ง ดาวน์เริ่มต้น 5% หรือผ่อน 49,995 บาทต่อเดือน พื้นหลังดอกซากุระสีชมพู",
		},
		{
			src: "/images/BYD3.jpg",
			alt: "โปรโมชั่นพิเศษ BYD SEALION 6 DM-i สีขาว พร้อมแถมฟรี Smart Home Charge AUTEL และบริการติดตั้ง ดาวน์เริ่มต้น 5% หรือผ่อน 48,495 บาทต่อเดือน พื้นหลังดอกซากุระสีชมพู",
		},
		{
			src: "/images/BYD4.jpg",
			alt: "โปรโมชั่นพิเศษ BYD M6 สีขาว พร้อมแถมฟรีเพลชชาร์จมิก ฮีโร่ XUV MAX และบริการติดตั้ง ดาวน์เริ่มต้น 5% หรือผ่อน 39,995 บาทต่อเดือน พื้นหลังดอกซากุระสีชมพู",
		},
		{
			src: "/images/BYD5.jpg",
			alt: "โปรโมชั่นพิเศษ NEW BYD DOLPHIN สีขาว พร้อมแถมฟรี Smart Home Charge ZHIDA และบริการติดตั้ง เฉพาะรุ่น Extended Range ดาวน์เริ่มต้น 5% หรือผ่อน 28,495 บาทต่อเดือน พื้นหลังดอกซากุระสีชมพู",
		},
		{
			src: "/images/BYD6.jpg",
			alt: "โปรโมชั่นพิเศษ NEW BYD ATTO 3 สีขาว พร้อมแถมฟรีเพลชชาร์จมิก ฮีโร่ XUV MAX และบริการติดตั้ง ดาวน์เริ่มต้น 5% หรือผ่อน 44,995 บาทต่อเดือน พื้นหลังดอกซากุระสีชมพู",
		},
	];

	return (
		<div className="h-auto bg-gradient-to-b from-pink-50 to-accent">
			<div className="container mx-auto px-4 py-8">
				<div className="text-center mb-8">
					<h1 className="text-3xl md:text-4xl font-bold text-pink-600 mb-4">
						💖หวานใจต้องมี หวานนี้พิเศษกับ BYD
					</h1>
					<p className="text-xl md:text-2xl text-pink-500 mb-6">
						✨ดาวน์เริ่ม 5% ทุกรุ่น✨
					</p>
				</div>

				<Carousel className="w-full max-w-4xl mx-auto">
					<CarouselContent>
						{images.map((image, index) => (
							<CarouselItem key={index}>
								<Card className="border-none shadow-xl">
									<CardContent className="p-0">
										<div className="relative aspect-square rounded-lg overflow-hidden">
											<img
												src={image.src}
												alt={image.alt}
												className="w-full h-full object-cover"
											/>
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
					<p className="text-lg text-gray-700">💞 ให้ BYD เป็นของขวัญแทนใจ</p>
					<p className="text-lg text-gray-700">
						💞 ดาวน์เริ่มต้น 5% ขับกลับบ้านได้เลย
					</p>
					<p className="text-lg text-gray-700">
						💞 ไม่ต้องรอวาเลนไทน์ มารับรถคู่ใจได้ทุกวัน
					</p>
				</div>
			</div>
		</div>
	);
};

export default BydValentinePromotion;
