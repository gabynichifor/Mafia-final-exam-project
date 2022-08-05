import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { EditComponent } from './edit/edit.component';
import { CreateComponent } from './create/create.component';
import { ListComponent } from './list/list.component';
import { DeleteComponent } from './delete/delete.component';
import { DetailComponent } from './detail/detail.component';
import { CustomPIPE3Pipe } from './custom-pipe3.pipe';
import { Custompipe2Pipe } from './custompipe2.pipe';
import { Custompipe1Pipe } from './custompipe1.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    EditComponent,
    CreateComponent,
    ListComponent,
    DeleteComponent,
    DetailComponent,
    CustomPIPE3Pipe,
    Custompipe2Pipe,
    Custompipe1Pipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
