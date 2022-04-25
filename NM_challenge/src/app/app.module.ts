import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, FormControl } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StaticPageComponent } from './static-page/static-page.component';
import { RouterModule } from '@angular/router';
import { RoomFilterPipe, TestFilteringComponent } from './test-filtering/test-filtering.component';



@NgModule({
  declarations: [
    AppComponent,
    StaticPageComponent,
    TestFilteringComponent,
    RoomFilterPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    //FormControl,
    RouterModule.forRoot([
      {path: 'static-page', component: StaticPageComponent},
      {path: 'test-filtering', component: TestFilteringComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
