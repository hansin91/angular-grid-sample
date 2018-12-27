import { Component, OnInit } from '@angular/core';
import { gallery_list } from '../../data/galleries';

@Component({
	selector: 'app-gallery',
	templateUrl: './gallery.component.html',
	styleUrls: [ './gallery.component.scss' ]
})
export class GalleryComponent implements OnInit {
	private galleries: any;
	constructor() {
		this.galleries = gallery_list;
	}

	ngOnInit() {}
}
