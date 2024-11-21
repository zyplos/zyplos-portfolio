interface FullscreenProps {
	children: React.ReactNode;
	style?: React.CSSProperties;
	className?: string;
}

export default function Fullscreen({
	children,
	style,
	className,
}: FullscreenProps) {
	const baseStyle: React.CSSProperties = {
		width: "100%",
		height: "100%",
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "center",
	};

	const mergedStyle = { ...baseStyle, ...style };

	return (
		<>
			<div style={mergedStyle} className={className}>
				{children}
			</div>
		</>
	);
}
