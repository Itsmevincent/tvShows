import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FooterComponent } from 'src/common/footer/footer.component';
import { HeaderComponent } from 'src/common/header/header.component';
import { TvShowsModule } from '../tvshows/tvshows.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    TvShowsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
