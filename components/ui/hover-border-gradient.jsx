"use client";
import React, { useState, useEffect } from "react";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function HoverBorderGradient({
	children,
	containerClassName,
	className,
	as: Tag = "button",
	duration = 1,
	clockwise = true,
	...props
}) {
	const [hovered, setHovered] = useState(false);
	const [direction, setDirection] = useState("TOP");

	const rotateDirection = (currentDirection) => {
		const directions = ["TOP", "LEFT", "BOTTOM", "RIGHT"];
		const currentIndex = directions.indexOf(currentDirection);
		const nextIndex = clockwise
			? (currentIndex - 1 + directions.length) % directions.length
			: (currentIndex + 1) % directions.length;
		return directions[nextIndex];
	};

	const movingMap = {
		TOP: "radial-gradient(30% 50% at 50% 0%, hsl(0, 0%, 100%) 0%, rgba(255, 255, 255, 0) 100%)",
		LEFT: "radial-gradient(50% 30% at 0% 50%, hsl(0, 0%, 100%) 0%, rgba(255, 255, 255, 0) 100%)",
		BOTTOM:
			"radial-gradient(30% 50% at 50% 100%, hsl(0, 0%, 100%) 0%, rgba(255, 255, 255, 0) 100%)",
		RIGHT:
			"radial-gradient(50% 30% at 100% 50%, hsl(0, 0%, 100%) 0%, rgba(255, 255, 255, 0) 100%)",
	};

	const highlight =
		"radial-gradient(75% 181.15942028985506% at 50% 50%, #3275F8 0%, rgba(255, 255, 255, 0) 100%)";

	useEffect(() => {
		if (!hovered) {
			const interval = setInterval(() => {
				setDirection((prevState) => rotateDirection(prevState));
			}, duration * 1000);
			return () => clearInterval(interval);
		}
	}, [hovered]);
	return (
		<Tag
			onMouseEnter={(event) => {
				setHovered(true);
			}}
			onMouseLeave={() => setHovered(false)}
			className={cn(
				"relative flex rounded-full border content-center bg-black/20 hover:bg-black/10 transition duration-500 dark:bg-white/20 items-center flex-col flex-nowrap gap-4 md:gap-10 h-min justify-center overflow-visible p-[1.5px] md:p-px decoration-clone w-fit",
				containerClassName
			)}
			{...props}
		>
			<div
				className={cn(
					"w-auto text-white z-10 bg-black px-3 py-1.5 md:px-4 md:py-2 rounded-[inherit] text-sm md:text-base",
					className
				)}
			>
				{children}
			</div>
			<motion.div
				className={cn(
					"flex-none inset-0 overflow-hidden absolute z-0 rounded-[inherit]"
				)}
				style={{
					filter: "blur(1.5px) saturate(150%)",
					position: "absolute",
					width: "100%",
					height: "100%",
				}}
				initial={{ background: movingMap[direction] }}
				animate={{
					background: hovered
						? [movingMap[direction], highlight]
						: movingMap[direction],
				}}
				transition={{ ease: "linear", duration: duration ?? 1 }}
			/>
			<div className="bg-black absolute z-1 flex-none inset-[1.5px] md:inset-[2px] rounded-[100px]" />
		</Tag>
	);
}
