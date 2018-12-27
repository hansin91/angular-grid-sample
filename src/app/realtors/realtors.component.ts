import { Component, OnInit } from '@angular/core';
import { RealtorService } from '../services/realtor.service';
import { Realtor } from 'src/models/realtor';

@Component({
	selector: 'app-realtors',
	templateUrl: './realtors.component.html',
	styleUrls: [ './realtors.component.scss' ]
})
export class RealtorsComponent implements OnInit {
	private realtors: Realtor[] = [];
	constructor(private realtorService: RealtorService) {
		this.realtors = realtorService.getRealtors();
	}

	ngOnInit() {}
}
