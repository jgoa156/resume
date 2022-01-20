import React from 'react';
import styles from './Icons.module.css';

function GenericIcon({ defaultSize, children, ...props }) {
	const viewBox = `0 0 ${defaultSize[0]} ${defaultSize[1]}`;

	const { className, style, ...rest } = props;

	return (
		<div className={`${styles.icon} ${className}`} style={style} {...rest}>
			<svg viewBox={viewBox} className={`${styles.svg} ${styles.svgColor}`}>
				{children}
			</svg>
		</div>
	);
}

/*
Ícones gerados a partir do guia:
https://stackoverflow.com/questions/11529470/is-there-a-tool-to-create-svg-paths-from-an-svg-file
*/

export function IconC(props: any) {
	return (
		<GenericIcon {...props} defaultSize={[257, 283]}>
			<path d="M1076,337V470c-2,5.67-6.1,9.07-11.24,11.92-25.13,13.91-50.1,28.11-75.2,42.07-13.44,7.48-27,14.68-40.56,22h-3c-2.86-1.27-5.84-2.32-8.56-3.84-36.14-20.22-72.19-40.6-108.39-60.7-7.23-4-10.38-9.31-10.33-17.64q.38-60.19,0-120.4c-.05-8.66,3.12-14.29,10.74-18.5q53.28-29.42,106.24-59.43c7.75-4.4,14.69-4.63,22.48-.23q53,29.94,106.27,59.37C1069.79,327.59,1073.87,331.27,1076,337Zm-47.92,18.66c-14.43-32.5-61.38-52.75-101-44.41-45,9.46-75.42,52.45-74.28,94.61,1.18,43.64,32.89,81.87,77.93,90.63,36.73,7.13,79-9.84,98.26-46.35q-10-5.52-20-11c-6.8-3.73-13.61-7.44-20.36-11.12-19.73,29.22-54.16,27.93-73.3,10.69s-20.6-47.34-2.62-67.29a44.71,44.71,0,0,1,32.64-15.11c18.19-.64,32.3,7.4,42.7,22.37Z" transform="translate(-818.72 -262.07)"/>
		</GenericIcon>
	);
}

export function IconCSS(props: any) {
	return (
		<GenericIcon {...props} defaultSize={[232, 264]}>
			<path d="M1225,506h-7a36.75,36.75,0,0,0-4.4-1.87q-41.25-11.65-82.51-23.23c-2.7-.75-4.78-1.53-5.07-5q-3.36-40.28-7-80.52c-2.83-31.64-5.75-63.27-8.57-94.91q-2.3-25.83-4.35-51.7c-.17-2.2.6-4.48.93-6.73h232v4a15.06,15.06,0,0,0-1.06,3.16c-1.3,13.08-2.6,26.16-3.76,39.25q-8.22,93-16.31,186c-.31,3.64-1.54,5.56-5.3,6.57-18.15,4.85-36.24,9.92-54.31,15.07C1247.14,499.24,1236.09,502.68,1225,506Zm34.46-129.5c-.73,12.11-1.49,23-2,34-.17,3.62-1.85,5.15-5.23,6.08-9.61,2.65-19.13,5.66-28.7,8.47a8.82,8.82,0,0,1-3.85.45c-10.64-1.94-21.23-4.12-31.89-6-3.06-.54-4.19-2-4.38-4.91-.32-5-1.17-9.95-1.26-14.93-.08-4-1.72-5.23-5.48-5.12-6.32.19-12.65.18-19,0-3.42-.08-4.82,1-4.4,4.66q2,17.85,3.55,35.76c.28,3.15,1.45,4.58,4.61,5.36,18.57,4.6,37,9.52,55.62,14.11a17.82,17.82,0,0,0,8.28,0c17.74-4.47,35.42-9.19,53.11-13.83,8-2.09,7.85-2.1,8.5-10.15q3.1-37.83,6.39-75.65c.53-6.14.57-6.27-5.49-6.27q-25,0-50,0h-5a11.75,11.75,0,0,1,4.88-3.41c17.68-7.71,35.34-15.48,53-23.1,3.59-1.54,5.59-3.71,5.78-7.8.27-6,1-11.94,1.5-17.91.6-7.11.59-7.12-6.56-7.12h-143c-1,0-2,0-3,0-2.61-.05-3.47,1.14-3.12,3.76.78,5.77,1.55,11.56,1.93,17.36.29,4.43,2.13,5.86,6.6,5.81,17.49-.19,35,0,52.47.09,4.66,0,9.32.39,14,.6a13.46,13.46,0,0,1-4.86,3.19c-19.71,8.48-39.38,17-59.15,25.35-3.87,1.63-5.32,3.7-4.67,7.95,1,6.24,1.49,12.57,1.82,18.88.21,3.86,1.77,5.13,5.57,5.07,12.82-.23,25.65-.13,38.48-.25,10.15-.09,20.3-.39,30.45-.46C1236.21,376.43,1247.34,376.5,1259.46,376.5Z" transform="translate(-1106.05 -242)"/>
		</GenericIcon>
	);
}

export function IconExpress(props: any) {
	return (
		<GenericIcon {...props} defaultSize={[143, 82]}>
			<path d="M225.13,438.1c-2.41,7.31-6.53,13.63-14,16.72-10.29,4.3-20.63,4.26-30-2.3-10-7-12.42-17.77-13-30h65c-.5-5.31-.49-10-1.44-14.43-3.39-16-14.53-26.44-29.25-27.92-16.44-1.66-29.58,5.89-36.11,21.56a63.83,63.83,0,0,0-3.21,11.9c-.39,2.84-.94,5.74-1.16,8.62v.24c0,.24,0,.48,0,.72.12,1.49.19,3,.33,4.47.31,1.37.61,2.73.82,4.11,3.17,20.54,16.64,31.8,37.2,31,16.76-.61,29.39-11.92,31.24-28.06C228.21,433.45,226.37,434.35,225.13,438.1Zm-27.22-52.7c16.55-.18,28.37,12.62,28.69,31.5H169C168.77,399.32,181.52,385.58,197.91,385.4Z" transform="translate(-162 -379.99)"/><path d="M274.83,419.46c10.36,13.84,20.41,27.24,30.7,41-4.78,1.34-7.78.59-10.54-3.42-7.53-10.94-15.57-21.52-23.73-32.68a47.18,47.18,0,0,0-3.25,3.48c-7.19,9.59-14.49,19.09-21.41,28.87-2.54,3.59-5.21,5.36-10.23,3.76l30.54-41-28.29-36.86c4.58-1.44,7.72-.92,10.49,3,5.92,8.45,12.25,16.61,18.43,24.87,1,1.28,2.06,2.47,3.52,4.22,4.53-5.93,8.75-11.43,12.94-16.95,3-4,6.17-7.87,8.9-12,2.36-3.61,5.27-4.67,9.94-3.16Z" transform="translate(-162 -379.99)"/>
		</GenericIcon>
	);
}

export function IconHTML(props: any) {
	return (
		<GenericIcon {...props} defaultSize={[231, 263]}>
			<path d="M1231,544h-5a23.3,23.3,0,0,0-2.7-1.12q-43.92-12.42-87.88-24.78c-2.27-.64-4.27-1-4.52-4.2-2.87-36.35-5.91-72.69-8.89-109q-3.81-46.29-7.59-92.59c-.86-10.56-1.68-21.13-2.53-31.85h231.2c-.14,3.05-.18,5.67-.41,8.27q-3.75,43-7.54,86.08-6,69.15-11.9,138.33c-.26,3.13-1.55,4.19-4.3,5q-22.82,6.4-45.55,13.12C1259.23,535.37,1245.13,539.72,1231,544Zm-67.94-112.15c1.27,14.22,2.61,27.79,3.61,41.39.24,3.32,1.63,4.51,4.59,5.31,17.49,4.76,34.93,9.71,52.42,14.49a10.58,10.58,0,0,0,5.27.13c18.14-4.93,36.27-9.93,54.32-15.17a6.13,6.13,0,0,0,3.57-4.22c2.17-21.71,4.08-43.44,6-65.17.6-6.72,1.09-13.46,1.68-20.77H1202c-13.55,0-13.57,0-14.79-13.35-.52-5.7-.94-11.4-1.43-17.49h6.3l99,.16a13.44,13.44,0,0,0,4-.11c1-.34,2.53-1.38,2.63-2.25.94-8.54,1.63-17.1,2.41-25.87H1153.88c2.7,29.41,5.36,58.36,8.08,88h101.1c-1.36,12.52-2.56,24.25-4,35.95-.12,1-1.74,2.31-2.91,2.69-17,5.58-34.09,10.62-51.61,1.59a25,25,0,0,0-7.18-2.07c-3.06-.52-4-2.25-4.2-5.13-.3-6-.82-11.88-1.27-18.12Z" transform="translate(-1111.89 -280.43)"/>
		</GenericIcon>
	);
}

export function IconJava(props: any) {
	return (
		<GenericIcon {...props} defaultSize={[179, 242]}>
			<path d="M356.67,612.69c-.26.06-.34-.18-.48-.31-4.56-4.41-8.85-9.09-13-13.86a142.21,142.21,0,0,1-11.84-15.27,48.33,48.33,0,0,1-4.22-7.74,14.69,14.69,0,0,1,0-11.63,33.46,33.46,0,0,1,5.2-8.59,97.64,97.64,0,0,1,11.82-12c7-6.21,14.28-12.09,21.54-18a53,53,0,0,0,11.47-12.52,41.64,41.64,0,0,0,6.46-18,38.44,38.44,0,0,0-.41-11.28c-.07-.41-.34-1,.08-1.24s.67.46.92.79a11.69,11.69,0,0,1,1.91,4,48.87,48.87,0,0,1,1.82,13.55,38.65,38.65,0,0,1-6.29,20.7,53.66,53.66,0,0,1-8.34,9.65c-6.84,6.49-13.75,12.91-20.31,19.68a84.67,84.67,0,0,0-9.68,11.54,35.56,35.56,0,0,0-3.88,7.44,15.62,15.62,0,0,0-.49,9.2,58,58,0,0,0,5.42,14A159.87,159.87,0,0,0,354.21,609c.64,1,1.36,1.84,2,2.78.19.27.5.5.43.9Z" transform="translate(-268.31 -482.19)"/><path d="M306.09,687.5c-2.2.41-4.18.76-6.14,1.15a57.92,57.92,0,0,0-10,2.7,24,24,0,0,0-3.93,1.88,6.59,6.59,0,0,0-1.95,1.84,2,2,0,0,0,.43,3.1,9.42,9.42,0,0,0,2.82,1.53,45,45,0,0,0,7,1.84c4.83,1,9.71,1.58,14.6,2.13,5.85.65,11.73,1.08,17.61,1.48,6.71.46,13.44.36,20.16.25,2.81,0,5.62-.06,8.42-.15,6.65-.2,13.31-.43,19.95-.77,5.12-.27,10.24-.59,15.35-1,4.67-.37,9.33-.79,14-1.33a140.23,140.23,0,0,0,19.32-3.4,29.61,29.61,0,0,0,7.46-2.81,11.83,11.83,0,0,0,1.86-1.33,3.17,3.17,0,0,0,1-3.59c-.15-.48-.34-.95-.57-1.61a6.22,6.22,0,0,1,3,3.09,2.45,2.45,0,0,1-.36,2.55,13.14,13.14,0,0,1-3,2.84,42.2,42.2,0,0,1-9.72,4.89,116.49,116.49,0,0,1-19.39,5c-5.52,1-11.09,1.71-16.68,2.23-4.28.4-8.56.69-12.86.94-6.36.36-12.74.6-19.11.78q-12.37.36-24.75.13c-5.79-.1-11.58-.26-17.36-.6-6.67-.38-13.35-.85-20-1.65a113.34,113.34,0,0,1-15.94-2.89,26.74,26.74,0,0,1-5.91-2.24,7.68,7.68,0,0,1-2.15-1.6,3.12,3.12,0,0,1-.75-3,7.63,7.63,0,0,1,2.88-4.09,24.74,24.74,0,0,1,6.73-3.67A79.34,79.34,0,0,1,294.52,688a56.48,56.48,0,0,1,8.9-.77A15.16,15.16,0,0,1,306.09,687.5Z" transform="translate(-268.31 -482.19)"/><path d="M411.24,531.09a2.25,2.25,0,0,1-.9.73c-6.3,4-12.58,8-18.54,12.45a96.4,96.4,0,0,0-11.72,10.11,38.28,38.28,0,0,0-5.85,7.66,13.2,13.2,0,0,0-.2,13.56c1.43,2.66,3.11,5.16,4.76,7.68a54.74,54.74,0,0,1,5,8.88,30.07,30.07,0,0,1,1.43,4.33,14.18,14.18,0,0,1-1.74,10.8,32.62,32.62,0,0,1-6.32,7.67,61.19,61.19,0,0,1-9.07,6.94,1.23,1.23,0,0,1-.93.34,1.53,1.53,0,0,1,.37-.66,61.1,61.1,0,0,0,4.08-6.14,18.65,18.65,0,0,0,2.12-4.84,11.71,11.71,0,0,0-1.06-8.07,50.16,50.16,0,0,0-4-6.33c-2-2.81-4.08-5.52-5.83-8.48a30.15,30.15,0,0,1-4-11.59A23.4,23.4,0,0,1,361,563a35.07,35.07,0,0,1,8.23-10.87,75.71,75.71,0,0,1,17.1-11.52A138.43,138.43,0,0,1,410,531.27,2.9,2.9,0,0,1,411.24,531.09Z" transform="translate(-268.31 -482.19)"/><path d="M324.39,669.65a2.21,2.21,0,0,1-.5,1,2.61,2.61,0,0,0,.7,3.68,8.94,8.94,0,0,0,3,1.39,29.21,29.21,0,0,0,6.77,1c7.27.34,14.54.48,21.82.2a174.69,174.69,0,0,0,17.7-1.43,52.62,52.62,0,0,0,7.14-1.38,3.3,3.3,0,0,1,2.79.23,69.39,69.39,0,0,0,12,6.27,3.72,3.72,0,0,1-1.53.76c-4.54,1.51-9.14,2.79-13.78,3.91A116.56,116.56,0,0,1,365.83,688a100.9,100.9,0,0,1-14,.57c-3.85-.12-7.69-.33-11.52-.7a73.49,73.49,0,0,1-17.78-3.54,18.51,18.51,0,0,1-6.17-3.34,5.29,5.29,0,0,1-1.93-3.12,4.62,4.62,0,0,1,1.31-4,9.86,9.86,0,0,1,2.44-1.92,18.08,18.08,0,0,1,5.75-2.31A.49.49,0,0,1,324.39,669.65Z" transform="translate(-268.31 -482.19)"/><path d="M399.36,654.53a34.58,34.58,0,0,1-6.14,2.05,149.25,149.25,0,0,1-16.72,3.68c-4,.64-8.1,1.12-12.18,1.38s-8.31.43-12.47.29c-4.71-.15-9.42-.28-14.13-.56a118.59,118.59,0,0,1-21.38-2.89,27.82,27.82,0,0,1-6.13-2.25l-.46-.25c-2.61-1.55-3.25-3.75-1.87-6.44a8.23,8.23,0,0,1,2.06-2.59,19.42,19.42,0,0,1,9.08-3.9c0,.43-.31.58-.49.8a8.17,8.17,0,0,0-1.48,2.12,2.62,2.62,0,0,0,.65,3.31,8.9,8.9,0,0,0,3.65,1.91,34.76,34.76,0,0,0,6.93,1.25,169,169,0,0,0,21.82.37q7-.24,13.9-.81c6.35-.53,12.69-1.19,19-2.2,1.7-.28,3.41-.55,5.12-.85a3.6,3.6,0,0,1,3.27.84A23.69,23.69,0,0,0,396,653,26.64,26.64,0,0,0,399.36,654.53Z" transform="translate(-268.31 -482.19)"/><path d="M327.63,615.13c-1.82.52-3.61,1-5.39,1.53a85,85,0,0,0-11.16,4,19.3,19.3,0,0,0-3.88,2.2,5.24,5.24,0,0,0-1.54,1.67,1.48,1.48,0,0,0,.47,2.09,8,8,0,0,0,2.56,1.12,44.38,44.38,0,0,0,7.68,1.24,273.12,273.12,0,0,0,30.54,1c4.47,0,8.93-.33,13.39-.69,3-.23,6.08-.43,9.12-.69,3.28-.27,6.56-.56,9.83-.9,4-.42,7.92-.89,11.87-1.37q7-.85,14-2c1-.16,2-.33,3-.47.22,0,.46-.15.67,0,0,.24-.15.29-.29.38l-8.76,5.4a4.46,4.46,0,0,1-1.67.56c-5.13.76-10.27,1.54-15.43,2.17-4.61.56-9.22,1.07-13.83,1.59q-6.36.72-12.74,1.14a221.9,221.9,0,0,1-25.66.57c-4.5-.22-9-.38-13.5-.69-4.7-.33-9.39-.77-14.06-1.38a71.18,71.18,0,0,1-8.59-1.53,29.33,29.33,0,0,1-4-1.25,6.14,6.14,0,0,1-1.93-1.2,1.59,1.59,0,0,1-.21-2.4,6.07,6.07,0,0,1,1.4-1.37,29.67,29.67,0,0,1,5.82-3.19,100.48,100.48,0,0,1,20.12-6.19,81.9,81.9,0,0,1,10.69-1.53c.31,0,.62,0,.93,0A.7.7,0,0,1,327.63,615.13Z" transform="translate(-268.31 -482.19)"/><path d="M302.37,717.15a31.39,31.39,0,0,1,3.78.27c5.15.42,10.29.94,15.43,1.33,3.77.3,7.54.48,11.31.67,9.25.46,18.5.72,27.76.67q10.55-.06,21.09-.7c7.85-.48,15.68-1.26,23.45-2.47a137,137,0,0,0,24.12-5.76,63.12,63.12,0,0,0,17.44-9.07c.16-.12.34-.24.51-.35a.66.66,0,0,1,.24,0,8.13,8.13,0,0,1-1.92,3.73,27,27,0,0,1-7.66,6.16,69.45,69.45,0,0,1-19.51,7.21c-6.3,1.37-12.67,2.35-19.06,3.16-7.33.93-14.68,1.53-22.05,2-9.2.58-18.42.65-27.64.39q-8-.23-16-1a158.49,158.49,0,0,1-30-5.57A2.3,2.3,0,0,1,302.37,717.15Z" transform="translate(-268.31 -482.19)"/><path d="M410.34,659.82c1.08-.81,2.14-1.4,3.16-2a84.66,84.66,0,0,0,15.69-12.26,34.52,34.52,0,0,0,6.66-8.86,16.18,16.18,0,0,0,2-8.5c-.48-6-3.59-10.31-9.54-11.93a26.06,26.06,0,0,0-10.62-.53l-1.54.22c.13-.41.47-.55.74-.75A13.38,13.38,0,0,1,422,613a22.58,22.58,0,0,1,13.29.72,19.49,19.49,0,0,1,10.1,8,15.15,15.15,0,0,1,1,14.17,25.51,25.51,0,0,1-5.22,7.71A47.71,47.71,0,0,1,429,652.69a84.23,84.23,0,0,1-17.52,7A1.9,1.9,0,0,1,410.34,659.82Z" transform="translate(-268.31 -482.19)"/><path d="M356.65,612.71l.16.07-.11.09,0-.18Z" transform="translate(-268.31 -482.19)"/>
		</GenericIcon>
	);
}

export function IconJest(props: any) {
	return (
		<GenericIcon {...props} defaultSize={[144, 160]}>
			<path d="M1116.31,289.08h96.47c-.62,3.57-.8,6.83-1.78,9.83q-7.47,22.77-15.34,45.41c-1.1,3.17-1,4.85,2.45,6.59,9.09,4.63,12.44,13.77,9.6,23.73a10.41,10.41,0,0,0,.16,6.13c7.47,19.79-2.62,39.4-23.73,42.52-20,3-38.13,10-55.8,19.18-9.23,4.8-19,7.75-29.69,7.38a31.76,31.76,0,0,1-30.2-29.62,61.9,61.9,0,0,1,7.61-33.12c1.77-3.3,2.11-5.95-.12-9.57-5.5-8.94-2-20.86,7-26.06a19.34,19.34,0,0,1,20.56,32.73c-5.15,3.58-6.55,7.31-4.86,13,2,6.69,6.09,8.76,11.7,4.8,6.2-4.38,11.72-9.73,17.46-14.74,2-1.74,1.71-3.37-.11-5.48-9.5-11.07-7.4-23.91,5.13-31.09,2.72-1.56,2.79-2.94,1.89-5.56-5.75-16.68-11.36-33.4-17-50.13C1117.11,293.25,1116.83,291.34,1116.31,289.08ZM1090,385.83c-2.29,1-4.32,1.25-4.87,2.27-5.11,9.46-9.08,19.27-8.27,30.38,1.11,15.23,12.28,25.36,27.32,22.53,10.1-1.9,20-6.14,29.31-10.62,14.37-6.87,28.79-12.94,44.85-14.44a36.07,36.07,0,0,0,11-3.12c11.22-5,15.94-18.18,10.34-28.2-15,4.78-20.81,2.19-28.64-11.78-.88-1.56-4.82-2-7.31-1.89a6.16,6.16,0,0,0-4.5,3.12c-3.31,7.82-8.91,12.07-17.39,13a8.87,8.87,0,0,0-5.44,3.21c-7.58,9.82-16.71,17.51-28.17,22.48a7.78,7.78,0,0,1-8.72-1C1091.2,405.58,1088.09,397.36,1090,385.83Zm93.08-35.77,1.69.09c5.91-17.45,11.81-34.91,17.86-52.81h-75.18c6.09,18,12,35.41,17.92,52.86l1.59-.1,18.15-36.61C1171.51,326.59,1177.28,338.33,1183.05,350.06Zm-31.17,18.15a10.5,10.5,0,0,0-10.47-10.87,10.74,10.74,0,0,0-11.07,10.88A10.93,10.93,0,0,0,1141.17,379,10.72,10.72,0,0,0,1151.88,368.21Zm-69.91.05a10.59,10.59,0,0,0,10.74,10.79,10.91,10.91,0,0,0,10.75-10.92,10.76,10.76,0,0,0-10.88-10.72A10.48,10.48,0,0,0,1082,368.26Zm118.28-.19a10.73,10.73,0,1,0-21.46.05,10.73,10.73,0,1,0,21.46-.05Zm-35.19-35.29c-3.27,6.57-5.49,12-8.53,16.86-3.26,5.25.48,9,3.27,11.07,2.44,1.84,7.71,1.87,10.67.46,2.26-1.08,4.63-6.18,3.89-8.54C1172.36,346.21,1168.74,340.31,1165.06,332.78Z" transform="translate(-1068.36 -289.08)"/>
		</GenericIcon>
	);
}

export function IconJS(props: any) {
	return (
		<GenericIcon {...props} defaultSize={[201, 201]}>
			<path d="M1234,944V742.8h201V944Zm119.68-35.13a1.75,1.75,0,0,0,.07.35c.11.24.23.47.35.7A33.61,33.61,0,0,0,1366.76,923a39.79,39.79,0,0,0,17.31,5.15,43.06,43.06,0,0,0,18.34-2.18c7-2.56,12.38-7,15.23-14.05a28,28,0,0,0,1.71-12.7,24.43,24.43,0,0,0-5.93-14.92,34,34,0,0,0-10.68-8c-5.18-2.55-10.48-4.85-15.73-7.27a22.88,22.88,0,0,1-6.77-4.25c-3.39-3.33-3.48-11.55,3.61-13.57a13.2,13.2,0,0,1,6.4-.09c3.42.74,5.75,2.95,7.62,5.75.43.64.84,1.3,1.29,2l14.77-9.49c-3-5.22-6.67-9.59-12.08-12.12-8.38-3.91-17.07-4.11-25.79-1.33a23.28,23.28,0,0,0-14.68,13,26.06,26.06,0,0,0-2,13.12,24.8,24.8,0,0,0,6.36,15.25,29.39,29.39,0,0,0,8.42,6.51c4.52,2.28,9.17,4.27,13.73,6.47,2.87,1.39,5.73,2.84,8.49,4.44a8,8,0,0,1,3.49,4.24c1.66,4.53-.28,9.05-4.94,11a19.56,19.56,0,0,1-15.36-.09c-4.37-1.74-7.37-5.09-9.88-8.94-.21-.32-.43-.63-.67-1Zm-51.42-7.25c-5,3-10,6-15,9.09a.91.91,0,0,0-.13.86c3,6.19,7.5,11,13.88,13.83a35.68,35.68,0,0,0,26.2,1,21.94,21.94,0,0,0,13.67-12.53,32.94,32.94,0,0,0,2.6-13.28c0-21.45,0-42.9,0-64.36,0-.87-.33-1-1.09-1-5,0-10.07,0-15.11,0-.65,0-1.31,0-2,0s-1,.24-.94,1a6.44,6.44,0,0,1,0,.88q0,30.86,0,61.71a32.54,32.54,0,0,1-.63,6.31,6.84,6.84,0,0,1-4.47,5.44,12.77,12.77,0,0,1-8.83.11,11.32,11.32,0,0,1-5.46-4.6C1304.11,904.62,1303.24,903.16,1302.26,901.62Z" transform="translate(-1234 -742.8)"/>
		</GenericIcon>
	);
}

export function IconMySQL(props: any) {
	return (
		<GenericIcon {...props} defaultSize={[361, 245]}>
			<path d="M168.66-408.25a2.1,2.1,0,0,0-.58,1.2q-10.2,31.88-20.36,63.77a1.51,1.51,0,0,1-1.79,1.26q-4-.11-7.94,0a1.43,1.43,0,0,1-1.71-1.21q-6.5-20.64-13.07-41.25L116-407.24a2.12,2.12,0,0,0-.5-1.06c-.2,2.66-.44,5.22-.59,7.79q-.77,13.32-1.47,26.66c-.21,4.14-.34,8.28-.45,12.43q-.26,9.23-.43,18.44c0,.76-.22,1-1,1q-5.42-.06-10.84,0c-.67,0-.93-.15-.9-.88.26-8.22.53-16.44,1-24.65.31-5,.59-9.92.91-14.87.44-6.67,1-13.33,1.66-20q.87-8.47,1.79-16.94c.19-1.78.44-3.55.63-5.32.06-.53.24-.76.79-.76,5.33,0,10.66,0,16,0,.73,0,.77.5.92,1q3.6,10.94,7.19,21.88,6.14,18.66,12.26,37.34a1.53,1.53,0,0,0,.48.92c.13-.35.26-.65.37-1q9.75-29.49,19.49-59c.27-.83.6-1.18,1.54-1.17,4.75.06,9.51.05,14.27,0,.85,0,1.15.2,1.24,1.09.58,5.69,1.27,11.36,1.85,17,.66,6.51,1.31,13,1.85,19.53s.94,12.76,1.38,19.14c.58,8.38.89,16.78,1.2,25.17.05,1.43.08,1.43-1.29,1.43-3.83,0-7.66,0-11.48,0-.95,0-1.23-.25-1.24-1.17-.06-3.61-.16-7.22-.28-10.83q-.47-14-1.43-28.06c-.46-6.56-1-13.11-1.6-19.66C169.15-403.89,168.89-406,168.66-408.25Z" transform="translate(-99.81 565.67)"/><path d="M367.47-347.62c4.87,2.41,9.53,4.75,14.22,7,.86.42,1.06.71.51,1.6-1.44,2.33-2.78,4.74-4.17,7.11-.82,1.41-.52,1.31-1.94.48q-8.89-5.16-17.78-10.36a2.3,2.3,0,0,0-1.9-.27,41.5,41.5,0,0,1-20.68-.09c-9.19-2.36-15-8.37-18.28-17.13a57.35,57.35,0,0,1-3.17-15.7,84.47,84.47,0,0,1,1-22.11A42.26,42.26,0,0,1,322.15-414a28.58,28.58,0,0,1,18.57-11.87,40.34,40.34,0,0,1,18.79.7c8.11,2.32,13.71,7.55,17.16,15.17a51.21,51.21,0,0,1,4.07,17.32,88.67,88.67,0,0,1-.23,17.24c-1,8.57-3.26,16.67-8.76,23.57A29.34,29.34,0,0,1,367.47-347.62Zm-.68-35.64c0-2,.1-4.08,0-6.11a53.47,53.47,0,0,0-2.55-14.51c-2.87-8.37-8.29-12.39-16.82-12.47q-10.61-.12-15.34,9.36c-2.37,4.71-3.24,9.8-3.67,15a94.41,94.41,0,0,0,0,15.32,51,51,0,0,0,2.53,13.22c2.39,6.8,6.75,11.29,14.2,12.1,5.67.61,10.84-.46,14.88-4.86a21.51,21.51,0,0,0,4.4-7.79C366.55-370.25,366.91-376.74,366.79-383.26Z" transform="translate(-99.81 565.67)"/><path d="M434.46-446.1a8.06,8.06,0,0,0,2.94,3.66,44.21,44.21,0,0,0,6,3.8,43.66,43.66,0,0,1,12.1,10.46,16,16,0,0,0,2.39,2.61,11,11,0,0,1,3.29,5.11,2.54,2.54,0,0,1-1.29-.73,57.4,57.4,0,0,0-16.05-10.35,44.86,44.86,0,0,1-13.21-9,22.11,22.11,0,0,1-4.65-7.26.92.92,0,0,1,.14-.9,2.54,2.54,0,0,1,1.44-1,51.92,51.92,0,0,1,20.66-3.59c.37,0,.95.2,1.09-.12s-.25-.86-.57-1.17a14.48,14.48,0,0,0-1.8-1.52c-4.18-2.87-8.4-5.7-12.58-8.57-3.42-2.34-7.38-3.39-11.2-4.76-1.81-.65-3.69-1.11-5.47-1.88a6.74,6.74,0,0,1-2.94-2.4,57.41,57.41,0,0,1-5.49-10.29c-2.75-6.32-6-12.43-8.6-18.8-8.27-19.91-22.33-34.38-41.46-44a27.2,27.2,0,0,0-8.24-3c-2.18-.32-4.41-.33-6.62-.55-1.13-.11-2.27-.22-3.41-.24a3.85,3.85,0,0,1-2.53-1.29c-4.07-3.87-9.17-5.86-14.27-7.83a5.92,5.92,0,0,0-4.59-.27,2.65,2.65,0,0,0-1.67,2.71,8.23,8.23,0,0,0,1.53,4.28,51.09,51.09,0,0,0,4.57,6.08,47.84,47.84,0,0,1,8.55,17.26,47.42,47.42,0,0,0,6,13.92,15.8,15.8,0,0,0,2.49,2.8,5.6,5.6,0,0,1,1.73,6.1c-.77,2.84-2.11,5.48-2.8,8.32-2.29,9.44-1.95,18.7,2.05,27.68a14,14,0,0,0,1.43,2.64,5.81,5.81,0,0,0,2.41,2.06c1,.43,1.19.32,1.34-.79.45-3.47.69-7,1.47-10.39a17.25,17.25,0,0,1,3.85-7.91c.57-.64,1.07-1.35,1.62-2,.22-.25.32-.75.74-.66s.56.53.66.91a48.23,48.23,0,0,0,2.57,6.58,119.08,119.08,0,0,0,15.63,26.16,23.56,23.56,0,0,0,4.9,4.92,4.42,4.42,0,0,1,.7.67,1.5,1.5,0,0,1,.12.39,4.19,4.19,0,0,1-1.81-1c-4.94-4.92-10.78-8.86-15.29-14.24a30,30,0,0,1-4.57-7.21c-.78-1.75-1.71-3.44-2.63-5.25a2.54,2.54,0,0,0-.51,1.47c-.49,3-.91,6.07-1.52,9.08s-2.43,4.76-5.3,5.08a6.05,6.05,0,0,1-4.22-1.25,16.83,16.83,0,0,1-4.85-5.66,36,36,0,0,1-4.26-13.6,47.63,47.63,0,0,1,1.83-20.44c.68-2.21.82-4.57,2-6.66.33-.59-.11-1.22-.53-1.64-4.78-4.87-7-11.11-9.27-17.33-1-2.75-2-5.5-2.71-8.35a15.63,15.63,0,0,0-3-5.42c-2.27-3.07-4.65-6.07-6.86-9.19a12.68,12.68,0,0,1-2.7-7.54,8.12,8.12,0,0,1,8.08-8.18c4.18-.1,7.93,1.35,11.59,3.09a29.82,29.82,0,0,1,8.37,5.34,5.32,5.32,0,0,0,4,1.48,39.53,39.53,0,0,1,16.54,3.5c4.09,1.8,7.72,4.46,11.42,7a98.16,98.16,0,0,1,30,32.64c1.74,3,2.79,6.33,4.14,9.52,3.3,7.84,7.22,15.39,10.82,23.09a9.23,9.23,0,0,0,5.64,5c9.1,3.35,16.91,8.85,24.39,14.92a53.11,53.11,0,0,1,7.69,8.18c.56.68.35,1.15-.55,1.46a48.65,48.65,0,0,1-11.21,2.23c-2.69.26-5.18,1.35-7.81,1.83Z" transform="translate(-99.81 565.67)"/><path d="M279.23-340.95c-8,0-15.62-2.74-22.69-7.36-.57-.38-.53-.69-.26-1.21,1-1.84,1.89-3.69,2.77-5.56.33-.69.64-.76,1.3-.44a43.84,43.84,0,0,0,11.28,3.95,25.66,25.66,0,0,0,13.95-.75c5.46-2,8.43-6.55,8-12.19a11.22,11.22,0,0,0-3.31-6.92,31,31,0,0,0-8.07-5.78c-5.13-2.89-10.36-5.64-15.36-8.75-5.87-3.65-9.51-8.87-9.93-16-.31-5.47.64-10.63,4.06-15.08a23.47,23.47,0,0,1,16-9.06,37.81,37.81,0,0,1,25.14,5c1.28.76,1.29.77.7,2.08-.72,1.64-1.5,3.24-2.16,4.9-.34.84-.71.92-1.51.59a37.31,37.31,0,0,0-17.27-2.93c-4.7.37-8.48,2.38-10.46,6.85-1.83,4.17-.77,8,2.09,11.34a22.41,22.41,0,0,0,6.25,5c6,3.41,12.2,6.6,18.09,10.23,8.42,5.2,11,11.79,10.21,20.59-.93,10.27-8.74,18-18.94,20.43A42.18,42.18,0,0,1,279.23-340.95Z" transform="translate(-99.81 565.67)"/><path d="M221.57-352.06c1.47-3.58,2.67-7.23,3.8-10.9a242.64,242.64,0,0,0,8.12-37.2c.12-.85.22-1.7.3-2.56.06-.56.24-.88.92-.87,3.86,0,7.73,0,11.59,0,.75,0,.82.31.7.91-3.29,17.09-7.2,34-13.91,50.16C230-345,226.25-337.73,221-331.41c-3.69,4.42-7.92,8.13-13.47,10.08a19.46,19.46,0,0,1-14.61-.74.76.76,0,0,1-.57-.78c0-2.07,0-4.15,0-6.22,0-.69.32-.6.81-.56a29,29,0,0,0,9.06-.16c6-1.27,10.51-7,10.07-12.9a39.24,39.24,0,0,0-2-8.86q-7.38-23.1-14.8-46.19c-.55-1.69-1.07-3.4-1.65-5.09-.18-.56-.13-.76.51-.75q6.18,0,12.34,0c.74,0,.77.48.91.94q2.74,8.85,5.46,17.7c2.3,7.55,4.83,15,6.84,22.65A48.5,48.5,0,0,1,221.57-352.06Z" transform="translate(-99.81 565.67)"/><path d="M393.16-383.73q0-20.22,0-40.44c0-1.07.31-1.28,1.32-1.27,3.61.06,7.22.07,10.83,0,1,0,1.22.31,1.22,1.27q0,35.24,0,70.47c0,1.07.2,1.42,1.36,1.41,7.94-.06,15.88,0,23.81,0,.9,0,1.14.24,1.12,1.13-.06,2.71-.05,5.43,0,8.15,0,.76-.13,1-1,1q-18.83,0-37.65,0c-1,0-1-.48-1-1.17Q393.17-363.45,393.16-383.73Z" transform="translate(-99.81 565.67)"/><path d="M342.77-540.26a9.25,9.25,0,0,1,3.65-.48,3.92,3.92,0,0,1,2.3,1.44c2.56,2.46,2.62,5.22.25,7.66-.21.23-.58.66-.79,0C347-534.87,344.79-537.43,342.77-540.26Z" transform="translate(-99.81 565.67)"/>
		</GenericIcon>
	);
}

export function IconNext(props: any) {
	return (
		<GenericIcon {...props} defaultSize={[206, 206]}>
			<path d="M684.39,510.24,659.85,473.1q-27.66-41.85-55.33-83.7a10.3,10.3,0,0,0-11.94-3.72c-2.15.89-2.46,2.67-2.46,4.79q0,34.54,0,69.1c0,2.41,0,4.82,0,7.22,0,3.09,1.36,4.73,4.57,4.63,1.14,0,2.29,0,3.43,0,2.81,0,4.28-1.37,4.36-4.16q.15-4.8.17-9.62.07-23.2.12-46.41c0-.63,0-1.26,0-2.31l74,105.4c-27.6,17.74-87.1,21.73-126.2-23.39-39-44.94-31.61-113.55,15.9-149.67,45.71-34.76,114.33-25.83,148.37,25.48C745.87,413.61,733.51,478.87,684.39,510.24Zm-18.47-52.39c.12-1.51.21-2.06.21-2.61q0-33.69,0-67.39c0-4.47-1-5.25-6-5.27-5.54,0-6.54.77-6.56,5.46q-.09,24.24-.06,48.48a6.44,6.44,0,0,0,.68,3.26C657.84,445.58,661.64,451.29,665.92,457.85Z" transform="translate(-525.45 -320.43)"/>
		</GenericIcon>
	);
}

export function IconNode(props: any) {
	return (
		<GenericIcon {...props} defaultSize={[198, 223]}>
			<path d="M1040.25,390a16.65,16.65,0,0,0-1,2.34A17.16,17.16,0,0,1,1031,403q-39.84,23.13-79.72,46.22c-6.85,4-13.7,4-20.55-.11-8.35-5-16.75-9.95-25.11-14.95a31.91,31.91,0,0,1-2.76-2.07c4.62-2.2,8.81-4.36,13.15-6.14,1-.4,2.65.24,3.74.87,5.73,3.31,11.43,6.68,17,10.2a6.25,6.25,0,0,0,7.26.2q39.15-22.86,78.4-45.52a5.77,5.77,0,0,0,3.22-5.72q-.11-45.74,0-91.47a5.78,5.78,0,0,0-3.34-5.64q-38.82-22.29-77.53-44.78c-3-1.78-5.35-1.91-8.5-.06q-38.49,22.5-77.21,44.6c-2.76,1.59-3.69,3.48-3.68,6.6q.14,45.17,0,90.35c0,2.95.79,4.85,3.5,6.32,6.69,3.63,13.11,7.78,19.87,11.26a25,25,0,0,0,9.92,2.72c5.85.29,10.34-4.21,10.93-10.1.21-2.11.29-4.24.29-6.36q0-42.36,0-84.73c0-5.66.23-5.86,5.93-5.88,9,0,8.24-.48,8.24,8.37,0,30,.07,60-.11,90-.09,15.6-10.59,24.45-26.68,22.81a38.36,38.36,0,0,1-13.16-3.83C865.55,411.84,857.23,407,849,402c-4.92-3-7.22-7.76-7.22-13.59,0-31.61,0-63.23,0-94.84,0-7.08,3-12.17,9-15.67q32.1-18.58,64.16-37.22c5.29-3.07,10.63-6.07,15.86-9.24,6.63-4,13.15-3.91,19.79,0q35.94,20.92,71.91,41.77c.44.25.85.54,1.3.76,7.55,3.71,14.34,8.14,16.48,17.07Z" transform="translate(-841.75 -228.47)"/><path d="M964.12,296.36c7.62-.14,15.64.6,23.26,3.88,9.38,4,14.2,11.45,15.76,21.23.71,4.48,0,5.18-4.69,5.2-.75,0-1.5,0-2.25,0-6.24-.12-6.34,1-8.4-5.75-1.66-5.48-6-8.53-11.41-9.79a53.58,53.58,0,0,0-25.21-.06,19.42,19.42,0,0,0-6.38,3c-3,2.13-3.89,5.41-3.54,9s2.68,5.47,5.75,6.15c7,1.57,14.16,2.74,21.24,4.11,7.57,1.47,15.25,2.55,22.67,4.59,7.7,2.11,14,6.5,15.24,15.2,1.52,10.28-.49,19.41-9.46,26-7,5.15-15.24,6.9-23.6,7.51-9.33.67-18.75.46-27.86-2.19-10.26-3-18.4-8.42-21.18-19.54a22.16,22.16,0,0,1-1-6.61c.07-1.13,1.52-2.4,2.64-3.17.69-.48,1.94-.13,2.94-.14,7.6,0,7.6,0,10.17,7a13.52,13.52,0,0,0,9.07,8.82,62,62,0,0,0,35,.16,13.32,13.32,0,0,0,5.37-3.24c5.63-5.52,4.23-13.92-3.23-16.17s-15.32-3-23-4.53c-7.44-1.46-15-2.46-22.24-4.67-8.56-2.62-13.38-9-13.88-18.09-.47-8.48,2.27-15.75,9.44-20.85C943.84,297.31,953.55,296.19,964.12,296.36Z" transform="translate(-841.75 -228.47)"/>
		</GenericIcon>
	);
}

export function IconPHP(props: any) {
	return (
		<GenericIcon {...props} defaultSize={[341, 165]}>
			<path d="M796.74,576c1-5.23,1.92-10.12,2.88-15q11-55.92,22.1-111.83c.83-4.21.78-4.27,5.14-4.26,19.47.08,39-.1,58.42.4,9.36.24,18.2,3.11,25.48,9.47a30.84,30.84,0,0,1,10.4,20.79c2.84,27.9-10.81,52.36-35.1,62.62a52.81,52.81,0,0,1-21.1,4.22c-9.24-.08-18.48,0-27.71-.1-2.22,0-3.16.7-3.56,2.95-1.64,9.28-3.56,18.51-5.2,27.79-.44,2.46-1.42,3.26-4,3.21-8-.17-16.06,0-24.09-.07C799.37,576.21,798.3,576.11,796.74,576ZM841,517.12c6.91,1.29,23.11.43,28.85-1.46,6.38-2.1,11.72-5.82,14.24-12.09a64.43,64.43,0,0,0,4.33-16.45c1.19-10.21-3.71-16.08-14-17-7.78-.66-15.63-.37-23.45-.56-1.94-.05-2.27,1.1-2.53,2.62-1.54,9.3-3.15,18.58-4.7,27.88C842.78,505.71,841.91,511.33,841,517.12Z" transform="translate(-580.33 -410.97)"/><path d="M580.33,576c1-5.26,1.84-10.16,2.81-15q10.47-53,21-105.91c.46-2.36,1-4.71,1.34-7.09s1.43-3.11,3.79-3.09c11.74.11,23.49,0,35.24.07,7.23,0,14.47-.18,21.68.24a67.59,67.59,0,0,1,14.48,2.39c14.48,4.16,22.82,14,24.11,29,1.73,20.1-4,37.79-19.28,51.6a53.61,53.61,0,0,1-37.36,14.25c-9,0-18.08,0-27.11-.08-2.27,0-3.37.5-3.8,3-1.56,9.09-3.45,18.12-5.07,27.19-.46,2.63-1.23,3.93-4.35,3.82-7.92-.28-15.86-.09-23.8-.11C582.92,576.2,581.85,576.09,580.33,576Zm44-58.11c8.36-.34,16.11-.17,23.73-1.08,10.38-1.25,17.94-6.85,21.24-17.07a62.59,62.59,0,0,0,2.74-13.2c.9-9.28-3.91-15.4-13.22-16.25-8.17-.74-16.43-.46-24.64-.69-1.85-.05-2,1.1-2.25,2.49-1.33,8.11-2.72,16.22-4.07,24.32C626.75,503.33,625.63,510.24,624.37,517.9Z" transform="translate(-580.33 -410.97)"/><path d="M698.71,541.84c1-5.42,2-10.81,3.1-16.18q11.06-55.77,22.08-111.56c.46-2.38,1.34-3.16,3.7-3.13,8.23.11,16.47,0,24.7,0,1,0,2,.14,3.34.25-2.12,11.19-4.17,22.07-6.29,33.32,1.64.13,2.9.3,4.16.32,9.23.13,18.48,0,27.7.43a39.51,39.51,0,0,1,19.39,5.86c8.52,5.4,11.8,13.32,10.23,23-3.55,21.87-7.45,43.69-11.16,65.53-.26,1.57-.62,2.66-2.51,2.65-9.74,0-19.49,0-29.23-.06a6.46,6.46,0,0,1-1.34-.41c.74-4.15,1.45-8.34,2.24-12.52q4.6-24.22,9.25-48.46c.07-.39.13-.79.18-1.19.82-7.27-1-9.71-8.29-10-7.92-.32-15.87,0-23.8-.13-2.11,0-2.17,1.45-2.43,2.76-2.09,10.32-4.12,20.65-6.18,31-2.43,12.2-4.82,24.4-7.37,36.57-.2.94-1.49,2.35-2.3,2.37-9.24.15-18.48.08-27.72,0A6,6,0,0,1,698.71,541.84Z" transform="translate(-580.33 -410.97)"/>
		</GenericIcon>
	);
}

export function IconPython(props: any) {
	return (
		<GenericIcon {...props} defaultSize={[217, 216]}>
			<path d="M1201.72,249.6h14.11c.22.31.55.16.83.17a103,103,0,0,1,18.43,2.4,49,49,0,0,1,16.69,6.84,24.49,24.49,0,0,1,9.38,11.18,23.23,23.23,0,0,1,1.34,8.95c-.06,15.48,0,31,0,46.46a40.14,40.14,0,0,1-.53,6.93c-1.15,6.59-4.15,12.1-9.63,16.08a32.79,32.79,0,0,1-19.6,6.07c-17.18.06-34.36,0-51.54,0a42.17,42.17,0,0,0-8,.68c-7.44,1.44-13.48,5.05-17.6,11.53a34.29,34.29,0,0,0-5.23,18.61c0,8.32,0,16.64,0,25,0,.77-.15,1-1,1-5.93,0-11.87,0-17.81,0a16,16,0,0,1-2.07-.12,26,26,0,0,1-16.17-8.91,42.45,42.45,0,0,1-8.54-15.86,85,85,0,0,1-3.44-19.25,13.73,13.73,0,0,0-.34-3.26V352c.2-.11.16-.31.17-.48a86.28,86.28,0,0,1,1.29-11.66,53.5,53.5,0,0,1,6.65-18.69,30.78,30.78,0,0,1,16.72-13.77,34.27,34.27,0,0,1,11.31-1.51c18.38.07,36.76,0,55.15,0,5.6,0,11.21,0,16.82,0,.76,0,1.05-.14,1-1-.08-1.8-.08-3.62,0-5.42,0-.87-.21-1.09-1.09-1.09-16.87,0-33.75,0-50.63,0-.89,0-1.07-.25-1.07-1.1,0-7.77.06-15.55-.1-23.32a16.32,16.32,0,0,1,5.06-12.23c3.65-3.72,8.19-6,13-7.66,7.4-2.58,15.08-3.63,22.85-4.19A14.43,14.43,0,0,0,1201.72,249.6ZM1180,285.27a9.49,9.49,0,1,0-9.44-9.5A9.45,9.45,0,0,0,1180,285.27Z" transform="translate(-1101 -249.6)"/><path d="M1318,342.73v30a18,18,0,0,0-.53,2.91,54.78,54.78,0,0,1-6.7,19.06,30.83,30.83,0,0,1-17,13.93,34.34,34.34,0,0,1-11,1.39c-21.73-.06-43.46,0-65.18,0-2.29,0-4.59,0-6.88,0-.77,0-1,.24-.93,1,0,1.78,0,3.55,0,5.33,0,1.16,0,1.16,1.19,1.16q25.26,0,50.53,0c.89,0,1.09.25,1.09,1.11q0,11.48,0,23a18.35,18.35,0,0,1-.15,3.78,17.62,17.62,0,0,1-6.49,10.35c-4.66,3.89-10.17,6-16,7.54a99.93,99.93,0,0,1-21.43,2.95,136.94,136.94,0,0,1-29.45-1.51,57.41,57.41,0,0,1-18.46-6.14,28.32,28.32,0,0,1-8.88-7.44,22,22,0,0,1-4.39-14.25c.19-15.49.07-31,.07-46.47a39.18,39.18,0,0,1,.39-6.31c1.06-6.8,4-12.52,9.67-16.64a32.56,32.56,0,0,1,19.51-6.14c17.17-.09,34.35,0,51.53,0a42.56,42.56,0,0,0,7.56-.56c8.43-1.48,15-5.68,19.19-13.29a35.2,35.2,0,0,0,4.26-16.91c.06-8.35,0-16.7,0-25.05,0-.8.22-1,1-1,5.51,0,11,.07,16.54,0a24.17,24.17,0,0,1,15.2,5.13c5.33,4,8.75,9.43,11.24,15.51a59.66,59.66,0,0,1,3.43,11.77C1317.31,338.76,1317.65,340.75,1318,342.73Zm-68.72,97.37a9.49,9.49,0,1,0-9.49,9.48A9.48,9.48,0,0,0,1249.28,440.1Z" transform="translate(-1101 -249.6)"/>
		</GenericIcon>
	);
}

export function IconReact(props: any) {
	return (
		<GenericIcon {...props} defaultSize={[243, 217]}>
			<path d="M1254.38,461.68a122.82,122.82,0,0,1,3.26-27.48c.33-1.48,0-2-1.43-2.47-11.58-3.64-22.69-8.29-32.68-15.33a46.88,46.88,0,0,1-12.25-11.87c-6.25-9.22-6-18.46.76-27.36,5-6.64,11.67-11.35,18.81-15.41A131.24,131.24,0,0,1,1256.2,351c1.21-.38,1.58-.74,1.27-2.13-2.35-10.65-3.82-21.42-3.32-32.36.34-7.49,1.52-14.82,5.08-21.57,4.7-8.91,12.81-12.83,23-11.76,8.77.92,16.5,4.63,23.94,9a129.25,129.25,0,0,1,20.57,15.51c1.92,1.73,1.88,1.75,3.84-.06a129.55,129.55,0,0,1,18.85-14.55c7-4.42,14.31-8.1,22.51-9.68,5.55-1.06,11-.94,16.25,1.62,6.12,3,9.49,8.31,11.73,14.46a55,55,0,0,1,3,16.14,124.68,124.68,0,0,1-3.18,33c-.28,1.28-.09,1.88,1.31,2.33,11.72,3.72,23,8.42,33.09,15.59a47.27,47.27,0,0,1,11.51,11q10.25,14.52-.72,28.56c-4.78,6.1-10.9,10.59-17.55,14.43a128.13,128.13,0,0,1-26,11.18c-1.29.4-1.6,1-1.32,2.24a124,124,0,0,1,3.4,26.14c.17,9.41-.6,18.72-5,27.33-5,9.8-13.57,13.43-24,12-11-1.52-20.32-6.83-29.27-13a130.41,130.41,0,0,1-15.22-12.31c-1-1-1.54-.39-2.25.27-8.61,7.92-17.84,15-28.4,20.15a48.69,48.69,0,0,1-18.36,5.36c-10.55.66-18.7-4.78-22.78-15.06C1255.43,478.28,1254.35,471.46,1254.38,461.68Zm74.1-30.63c7,.19,13.92-.27,20.88-.71a3,3,0,0,0,2.58-1.36,271.68,271.68,0,0,0,20.83-36.38,2.69,2.69,0,0,0,0-2.61c-1.47-2.85-2.84-5.76-4.32-8.61a260.7,260.7,0,0,0-16.59-27.53,2.24,2.24,0,0,0-1.74-1.29c-7.21-.59-14.45-.83-21.68-.83-6.9,0-13.81.24-20.7.83a2.56,2.56,0,0,0-2.18,1.14,268.53,268.53,0,0,0-21.06,36.8,2.29,2.29,0,0,0,0,2.16,268.1,268.1,0,0,0,21.26,36.7,2,2,0,0,0,1.72,1C1314.45,430.73,1321.45,431.25,1328.48,431.05Zm111-39.29a12.11,12.11,0,0,0-2-6.44,31.81,31.81,0,0,0-7.84-8.23c-9.62-7.33-20.59-11.89-32-15.57-1-.31-1.19.06-1.44.9a232.22,232.22,0,0,1-10.1,27.55,3.08,3.08,0,0,0,0,2.65,226.25,226.25,0,0,1,10.22,27.68c.29,1,.67,1.23,1.69.88a133.37,133.37,0,0,0,21.22-8.82c5.76-3.12,11.23-6.68,15.68-11.59C1437.33,398.12,1439.24,395.17,1439.5,391.76ZM1378.6,294a32.53,32.53,0,0,0-14.38,3.57c-9.74,4.51-18.14,11-26,18.12-1.7,1.55-1.72,1.57-.17,3.2a229.49,229.49,0,0,1,18.42,22.26,2.21,2.21,0,0,0,1.71,1,227.94,227.94,0,0,1,28.89,4.95c1.42.35,1.77-.06,2-1.29,2.09-10.38,3.53-20.81,2.66-31.42a38.58,38.58,0,0,0-3.37-13.87C1386.2,296.1,1382.86,293.71,1378.6,294ZM1265.54,461.61c0,2-.12,4,0,6a40.45,40.45,0,0,0,3.28,14.39c2.11,4.53,5.56,7,10.67,6.87a24.75,24.75,0,0,0,6.74-1.1c13.29-4.14,23.87-12.56,34-21.68.63-.57.27-.87-.12-1.3a234.1,234.1,0,0,1-19.19-23.1,2.82,2.82,0,0,0-2.18-1.19,213.55,213.55,0,0,1-28.42-4.84c-1.27-.31-1.83-.05-2.09,1.32C1266.69,445.15,1265.33,453.29,1265.54,461.61Zm-47.74-70.1a11.46,11.46,0,0,0,1.27,4.55c2,4,5.27,7.06,8.79,9.74,9.56,7.29,20.49,11.8,31.82,15.5,1.08.35,1.18-.21,1.39-.94a230.83,230.83,0,0,1,10.22-27.85,2.21,2.21,0,0,0,0-2A223.63,223.63,0,0,1,1261,362.7c-.34-1.16-.75-1.39-1.93-1a122,122,0,0,0-23.34,10c-5.34,3.1-10.41,6.57-14.35,11.42A14.07,14.07,0,0,0,1217.8,391.51Zm174.31,70.27a113.77,113.77,0,0,0-2.89-24.39c-.48-2.17-.5-2.15-2.68-1.62a218.87,218.87,0,0,1-27.6,4.71,3.39,3.39,0,0,0-2.71,1.46,206.42,206.42,0,0,1-18.62,22.48c-.82.85-.74,1.3.09,2a132.66,132.66,0,0,0,16.18,12.66c6.65,4.32,13.55,8.14,21.55,9.29,3.6.52,7.21.53,10.17-2.17a14.2,14.2,0,0,0,3.55-5.41C1391.6,474.71,1392.14,468.29,1392.11,461.78ZM1265.19,319.14a126.61,126.61,0,0,0,3,26.86c.24,1.13.62,1.45,1.87,1.15a215.14,215.14,0,0,1,27.27-4.77c1.52-.16,2.91-.3,4-1.87a199.85,199.85,0,0,1,18.39-22.27c.86-.92.59-1.35-.18-2a131.65,131.65,0,0,0-17-13.18c-6.61-4.18-13.47-7.84-21.39-8.81-4.12-.5-8,.11-10.7,3.73a18.07,18.07,0,0,0-2.31,4.11A47.72,47.72,0,0,0,1265.19,319.14Zm76.74,21.73a2.39,2.39,0,0,0-.21-.64c-4-5-8.14-9.91-12.59-14.54-.78-.81-1.09-.14-1.51.29-3.56,3.74-6.93,7.65-10.16,11.68a14.86,14.86,0,0,0-2.29,3.2C1324.2,340.66,1333,340.6,1341.93,340.87ZM1315,441.8c4.28,5.57,8.63,10.43,13,15.22.64.69,1,.46,1.54-.15,2.37-2.69,4.84-5.3,7.18-8a75.54,75.54,0,0,0,5.56-7A251.71,251.71,0,0,1,1315,441.8Zm64.14-37.05a273.25,273.25,0,0,1-13.61,23.74c1.85-.29,3.35-.49,4.83-.76,4.81-.86,9.61-1.75,14.35-2.93.59-.15,1.37-.15,1-1.19C1383.82,417.32,1381.72,411.11,1379.11,404.75Zm-101-27.08c.61-.36.73-.93,1-1.4,3.46-6.49,7-12.91,10.93-19.13.48-.77,1.58-1.66,1.2-2.34s-1.65,0-2.53,0a2.63,2.63,0,0,0-.49,0c-5.25.89-10.47,1.9-15.66,3.09-.84.19-1.19.44-.85,1.43.8,2.25,1.38,4.58,2.16,6.84C1275.11,370.07,1276.41,373.92,1278.06,377.67Zm.25,27.56c-.22.19-.33.24-.36.32-2.41,5.94-4.44,12-6.28,18.14-.28.92.22,1,.86,1.13,2.86.61,5.71,1.3,8.58,1.84,3.44.65,6.89,1.19,10.72,1.85C1286.85,420.73,1282.34,413.14,1278.31,405.23Zm100.8-27.33c2.47-6.25,4.45-12.22,6.34-18.23.39-1.23.09-1.6-1.06-1.83-3.68-.71-7.32-1.59-11-2.23a42.45,42.45,0,0,0-7.74-1.09A268.89,268.89,0,0,1,1379.11,377.9Z" transform="translate(-1206.78 -282.79)"/><path d="M1306,391.31a22.64,22.64,0,1,1,45.28.15,22.66,22.66,0,0,1-22.82,22.62C1316.14,414.11,1305.63,403.59,1306,391.31Z" transform="translate(-1206.78 -282.79)"/>
		</GenericIcon>
	);
}