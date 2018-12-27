import { Component, OnInit } from '@angular/core';
import { FeatureService } from '../services/feature.service';
import { Feature } from 'src/models/feature';

@Component({
	selector: 'app-feature',
	templateUrl: './feature.component.html',
	styleUrls: [ './feature.component.scss' ]
})
export class FeatureComponent implements OnInit {
	private features: Feature[] = [];
	constructor(private featureService: FeatureService) {
		this.features = featureService.getFeatures();
	}

	ngOnInit() {}
}
