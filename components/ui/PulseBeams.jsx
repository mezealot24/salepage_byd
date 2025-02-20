"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { HoverBorderGradient } from "./hover-border-gradient";

const grad1 = {
	initial: {
		x1: "0%",
		x2: "0%",
		y1: "80%",
		y2: "100%",
	},
	animate: {
		x1: ["0%", "0%", "200%"],
		x2: ["0%", "0%", "180%"],
		y1: ["80%", "0%", "0%"],
		y2: ["100%", "20%", "20%"],
	},
};

const grad2 = {
	initial: {
		x1: "0%",
		x2: "0%",
		y1: "80%",
		y2: "100%",
	},
	animate: {
		x1: ["20%", "100%", "100%"],
		x2: ["0%", "90%", "90%"],
		y1: ["80%", "80%", "-20%"],
		y2: ["100%", "100%", "0%"],
	},
};
const grad3 = {
	initial: {
		x1: "0%",
		x2: "0%",
		y1: "80%",
		y2: "100%",
	},
	animate: {
		x1: ["20%", "100%", "100%"],
		x2: ["0%", "90%", "90%"],
		y1: ["80%", "80%", "-20%"],
		y2: ["100%", "100%", "0%"],
	},
};
const grad4 = {
	initial: {
		x1: "40%",
		x2: "50%",
		y1: "160%",
		y2: "180%",
	},
	animate: {
		x1: "0%",
		x2: "10%",
		y1: "-40%",
		y2: "-20%",
	},
};
const grad5 = {
	initial: {
		x1: "-40%",
		x2: "-10%",
		y1: "0%",
		y2: "20%",
	},
	animate: {
		x1: ["40%", "0%", "0%"],
		x2: ["10%", "0%", "0%"],
		y1: ["0%", "0%", "180%"],
		y2: ["20%", "20%", "200%"],
	},
};
export const PulseBeams = () => {
	const handleClick = () => {
		// Line URL Scheme สำหรับเพิ่มเพื่อน
		window.location.href = "line://ti/p/@bydmetromobile";

		// Fallback สำหรับกรณีที่ไม่มีแอพ Line
		setTimeout(() => {
			window.location.href = "https://line.me/R/ti/p/@bydmetromobile";
		}, 500);
	};

	return (
		<div className="flex h-[20rem] sm:h-[30rem] md:h-[40rem] relative items-center justify-center antialiased bg-slate-950 overflow-hidden">
			<HoverBorderGradient
				onClick={handleClick}
				className="text-xs sm:text-sm md:text-base"
				containerClassName="w-[100px] sm:w-[130px] md:w-[160px] h-[40px] sm:h-[50px] md:h-[60px]"
			>
				Line @official
			</HoverBorderGradient>
			{/* Core SVGs component */}
			<div className="absolute inset-0 flex items-center justify-center">
				<SVGs />
			</div>
		</div>
	);
};

export const SVGs = () => {
	return (
		<svg
			width="858"
			height="434"
			viewBox="0 0 858 434"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className="flex flex-shrink-0 scale-[0.45] sm:scale-[0.6] md:scale-[0.7] -translate-y-2"
		>
			<path
				d="M350 200H16.5C10.9772 200 6.5 204.477 6.5 210V378.5"
				stroke="var(--slate-800)"
			/>
			<path
				d="M520 200H841C846.523 200 851 195.523 851 190V40"
				stroke="var(--slate-800)"
			/>
			<path
				d="M493 254V313.226C493 318.749 497.477 323.226 503 323.226H760C765.523 323.226 770 327.703 770 333.226V407"
				stroke="var(--slate-800)"
			/>

			<path
				d="M425.5 254V313C425.5 318.523 421.023 323 415.5 323H152C146.477 323 142 327.477 142 333V406.5"
				stroke="var(--slate-800)"
			/>
			<path
				d="M380 200V17C380 11.4772 384.477 7 390 7H414"
				stroke="var(--slate-800)"
			/>

			{/* Gradient Beams */}

			<path
				d="M320 200H16.5C10.9772 200 6.5 204.477 6.5 210V378.5"
				stroke="url(#grad1)"
			/>
			<path
				d="M520 200H841C846.523 200 851 195.523 851 190V40"
				stroke="url(#grad2)"
			/>
			<path
				d="M425.5 254V313C425.5 318.523 421.023 323 415.5 323H152C146.477 323 142 327.477 142 333V406.5"
				stroke="url(#grad3)"
			/>
			<path
				d="M493 254V313.226C493 318.749 497.477 323.226 503 323.226H760C765.523 323.226 770 327.703 770 333.226V407"
				stroke="url(#grad4)"
			/>
			<path
				d="M380 200V17C380 11.4772 384.477 7 390 7H414"
				stroke="url(#grad5)"
			/>

			<defs>
				<motion.linearGradient
					variants={grad5}
					animate="animate"
					initial="initial"
					transition={{
						duration: 2,
						repeat: Infinity,
						repeatType: "loop",
						ease: "linear",
						repeatDelay: 2,
						delay: Math.random() * 2,
					}}
					id="grad5"
				>
					<GradientColors />
				</motion.linearGradient>
				<motion.linearGradient
					variants={grad1}
					animate="animate"
					initial="initial"
					transition={{
						duration: 2,
						repeat: Infinity,
						repeatType: "loop",
						ease: "linear",
						repeatDelay: 2,
						delay: Math.random() * 2,
					}}
					id="grad1"
				>
					<GradientColors />
				</motion.linearGradient>
				<motion.linearGradient
					variants={grad2}
					animate="animate"
					initial="initial"
					transition={{
						duration: 2,
						repeat: Infinity,
						repeatType: "loop",
						ease: "linear",
						repeatDelay: 2,
						delay: Math.random() * 2,
					}}
					id="grad2"
				>
					<GradientColors />
				</motion.linearGradient>
				<motion.linearGradient
					variants={grad3}
					animate="animate"
					initial="initial"
					transition={{
						duration: 2,
						repeat: Infinity,
						repeatType: "loop",
						ease: "linear",
						repeatDelay: 2,
						delay: Math.random() * 2,
					}}
					id="grad3"
				>
					<GradientColors />
				</motion.linearGradient>
				<motion.linearGradient
					variants={grad4}
					animate="animate"
					initial="initial"
					transition={{
						duration: 2,
						repeat: Infinity,
						repeatType: "loop",
						ease: "linear",
						repeatDelay: 2,
						delay: Math.random() * 2,
					}}
					id="grad4"
				>
					<GradientColors />
				</motion.linearGradient>
			</defs>
			<circle
				cx="851"
				cy="34"
				r="6.5"
				fill="var(--slate-700)"
				stroke="var(--slate-600)"
			/>
			<circle
				cx="770"
				cy="407"
				r="6.5"
				fill="var(--slate-700)"
				stroke="var(--slate-600)"
			/>
			<circle
				cx="142"
				cy="407"
				r="6.5"
				fill="var(--slate-700)"
				stroke="var(--slate-600)"
			/>
			<circle
				cx="6.5"
				cy="378.5"
				r="6"
				fill="var(--slate-700)"
				stroke="var(--slate-600)"
			/>
			<circle
				cx="420.5"
				cy="6.5"
				r="6"
				fill="var(--slate-700)"
				stroke="var(--slate-600)"
			/>
		</svg>
	);
};
const GradientColors = () => {
	return (
		<>
			<stop stopColor="#18CCFC" stopOpacity="0"></stop>
			<stop stopColor="#18CCFC"></stop>
			<stop offset="0.325" stopColor="#6344F5"></stop>
			<stop offset="1" stopColor="#AE48FF" stopOpacity="0"></stop>
		</>
	);
};
