import { Injectable } from '@angular/core';
import { home_list } from '../../data/homes';
import { Home } from '../../models/home';

@Injectable({
	providedIn: 'root'
})
export class HomeService {
	private homes: Home[] = [];
	constructor() {
		home_list.forEach((h) => {
			const home = new Home();
			Object.assign(home, h);
			this.homes.push(home);
		});
	}

	getHomes(): Home[] {
		return this.homes;
	}
}
