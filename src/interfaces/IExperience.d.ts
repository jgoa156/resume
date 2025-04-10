import { IDefaultComponentProps } from "./IDefaultComponent";

export interface IExperience extends IDefaultComponentProps {
	name: string;
	type: string;
	institution?: string;
	company?: string;
	icon: string;
	iconProps?: any;
	start: string;
	end: string;
	bullets: string[];
	description: any[];
}
