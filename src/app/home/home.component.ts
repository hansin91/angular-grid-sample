import { Component, OnInit } from '@angular/core';
import { HomeService } from '../services/home.service';
import { Home } from 'src/models/home';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: [ './home.component.scss' ]
})
export class HomeComponent implements OnInit {
	private homes: Home[] = [];
	constructor(private homeService: HomeService) {
		this.homes = this.homeService.getHomes();
	}

	ngOnInit() {}
}
