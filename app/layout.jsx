import { Geist, Geist_Mono } from "next/font/google";
import { Kanit } from "next/font/google";
import "./globals.css";

// โหลดฟอนต์ Geist Sans
const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

// โหลดฟอนต์ Geist Mono
const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

// โหลดฟอนต์ Kanit (รองรับภาษาไทย)
const kanit = Kanit({
	variable: "--font-kanit",
	subsets: ["latin", "thai"],
	weight: ["300", "400", "500", "700"], // เพิ่มน้ำหนักที่ต้องการ
});

export const metadata = {
	title: "BYD โปรโมชั่นสุดพิเศษ | MetroMobile",
	description: "พบกับโปรโมชั่นรถยนต์ไฟฟ้า BYD สุดพิเศษ ต้อนรับวันวาเลนไทน์",
	keywords: "BYD, โปรโมชั่น BYD, รถยนต์ไฟฟ้า, EV, MetroMobile",
	viewport: "width=device-width, initial-scale=1",
	openGraph: {
		title: "BYD โปรโมชั่นสุดพิเศษ | MetroMobile",
		description: "โปรโมชั่นรถยนต์ไฟฟ้า BYD ที่คุณไม่ควรพลาด",
		url: "http://www.bydmetromobile.com/",
		site_name: "MetroMobile",
		images: [
			{
				url: "https://yourwebsite.com/images/byd-promotion.jpg",
				width: 1200,
				height: 630,
				alt: "โปรโมชั่น BYD",
			},
		],
		type: "website",
	},
};

export default function RootLayout({ children }) {
	return (
		<html lang="th">
			<head>
				<link rel="icon" href="/favicon.ico" type="image/x-icon" />
			</head>
			<body
				className={`${geistSans.variable} ${geistMono.variable} ${kanit.variable} antialiased`}
			>
				{children}
			</body>
		</html>
	);
}
