import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./components/home/home.component";
import { SearchComponent } from "./components/search/search.component";
import { CardComponent } from "./components/card/card.component";
import { ArtistComponent } from "./components/artist/artist.component";
import { NabvarComponent } from "./components/shared/nabvar/nabvar.component";
import { LoadingComponent } from "./components/shared/loading/loading.component";
import { ShowErrorComponent } from "./components/shared/show-error/show-error.component";
import { ShowInfoComponent } from './components/shared/show-info/show-info.component';

import { NoimagePipe } from "./pipes/noimage.pipe";
import { SafeDomPipe } from "./pipes/safedom.pipe";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    CardComponent,
    ArtistComponent,
    NabvarComponent,
    LoadingComponent,
    ShowErrorComponent,
    NoimagePipe,
    SafeDomPipe,
    ShowInfoComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
