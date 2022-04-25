import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StaticPageComponent } from './static-page/static-page.component';
import { RouterModule } from '@angular/router';
import { RoomFilterPipe, TestFilteringComponent } from './test-filtering/test-filtering.component';
import { FilteredApiResultsComponent } from './filtered-api-results/filtered-api-results.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    StaticPageComponent,
    TestFilteringComponent,
    RoomFilterPipe,
    FilteredApiResultsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'static-page', component: StaticPageComponent},
      {path: 'test-filtering', component: TestFilteringComponent},
      {path: 'filtered-api-results', component: FilteredApiResultsComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
