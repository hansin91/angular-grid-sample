import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-footer',
	templateUrl: './footer.component.html',
	styleUrls: [ './footer.component.scss' ]
})
export class FooterComponent implements OnInit {
	public menus: any;
	constructor() {
		this.menus = [
			'Find your dream home',
			'Request proposal',
			'Download home planner',
			'Contact us',
			'Submit your property',
			'Come work with us!'
		];
	}

	ngOnInit() {}
}
