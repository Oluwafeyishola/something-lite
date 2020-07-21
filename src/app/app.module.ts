import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskviewComponent } from './pages/taskview/taskview.component';
import { HttpClientModule } from '@angular/common/http';
import { NewlistComponent } from './pages/newlist/newlist.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskviewComponent,
    NewlistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
