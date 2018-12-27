import { Injectable } from '@angular/core';
import { feature_list } from '../../data/features';
import { Feature } from '../../models/feature';

@Injectable({
	providedIn: 'root'
})
export class FeatureService {
	private features: Feature[] = [];
	constructor() {
		feature_list.forEach((fe) => {
			const feature = new Feature();
			Object.assign(feature, fe);
			this.features.push(feature);
		});
	}

	getFeatures(): Feature[] {
		return this.features;
	}
}
