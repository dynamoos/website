export interface Category {
	id: string;
	title: string;
	description: string;
}

export interface Service {
	id: string;
	categoryId: string;
	title: string;
	description: string;
}

export interface ServicesData {
	categories: Category[];
	services: Service[];
}
