import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { RealtorsComponent } from './realtors/realtors.component';
import { FeatureComponent } from './feature/feature.component';
import { HomeComponent } from './home/home.component';
import { GalleryComponent } from './gallery/gallery.component';
import { FooterComponent } from './footer/footer.component';
import { StoryPictureComponent } from './story-picture/story-picture.component';
import { StoryContentComponent } from './story-content/story-content.component';

@NgModule({
	declarations: [
		AppComponent,
		SidebarComponent,
		HeaderComponent,
		RealtorsComponent,
		FeatureComponent,
		HomeComponent,
		GalleryComponent,
		FooterComponent,
		StoryPictureComponent,
		StoryContentComponent
	],
	imports: [ BrowserModule, AppRoutingModule ],
	providers: [],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
