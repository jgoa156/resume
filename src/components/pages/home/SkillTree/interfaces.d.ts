export type INodeType = "main" | "primary" | "secondary";

export interface INodeProps {
	type?: INodeType;
	title?: string;
	years?: number;
	proficiency?: number;
	details?: string | JSX.Element;
	icon?: string;
	imgSrc?: string;
	iconNode?: JSX.Element;
	childNodes?: INodeProps[];
}
