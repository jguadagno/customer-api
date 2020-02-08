export interface Name {
	first: string;
	last: string;
}

export interface Friend {
	id: number;
	name: string;
}

export interface Picture {
	large: string;
	medium: string;
	thumbnail: string;
}

export interface Customer {
	id: number;
	guid: string;
	isActive: boolean;
	balance: string;
	age: number;
	eyeColor: string;
	name: Name;
	company: string;
	email: string;
	phone: string;
	address: string;
	about: string;
	registered: string;
	latitude: string;
	longitude: string;
	tags: string[];
	gender: string;
	profileId: number;
	friends: Friend[];
	picture: Picture;
	greeting: string;
	favoriteFruit: string;
}