import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";

const BydSealPromote = () => {
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
		<div className="relative h-auto bg-gradient-to-b from-pink-50 to-accent w-full">
			<div className="py-8">
				<Carousel className="w-full">
					<CarouselContent className="!ml-0">
						{images.map((image, index) => (
							<CarouselItem key={index} className="!pl-0">
								<Card className="border-none">
									<CardContent className="relative p-0">
										<img
											src={image.src}
											alt={image.alt}
											className="w-screen h-auto object-cover" /* เปลี่ยนจาก w-full เป็น w-screen */
										/>
										<CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-black/50 text-white hover:bg-black/70 rounded-full h-8 w-8 md:h-10 md:w-10 flex items-center justify-center" />
										<CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-black/50 text-white hover:bg-black/70 rounded-full h-8 w-8 md:h-10 md:w-10 flex items-center justify-center" />
									</CardContent>
								</Card>
							</CarouselItem>
						))}
					</CarouselContent>
				</Carousel>
				<div className="text-center mt-8 space-y-4 md:hidden">
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

export default BydSealPromote;
