import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { GithubRequestService } from './github-http/github-request.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { ProfileComponent } from './profile/profile.component';
import { HttpClientModule } from '@angular/common/http';
import { AboutComponent } from './about/about.component';
import { BackgroundDirective } from './background.directive';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProfileComponent,
    AboutComponent,
    BackgroundDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers : [GithubRequestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
