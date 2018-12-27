import { Injectable } from '@angular/core';
import { realtor_list } from '../../data/realtors';
import { Realtor } from 'src/models/realtor';

@Injectable({
	providedIn: 'root'
})
export class RealtorService {
	private realtors: Realtor[] = [];
	constructor() {
		realtor_list.forEach((re) => {
			const realtor = new Realtor();
			Object.assign(realtor, re);
			this.realtors.push(realtor);
		});
	}

	getRealtors(): Realtor[] {
		return this.realtors;
	}
}
