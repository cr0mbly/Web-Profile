//library imports
import { BrowserModule} from '@angular/platform-browser';
import { RouterModule, Routes} from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule} from '@angular/core';
import { ReactiveFormsModule, FormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import {MdTabsModule, MdDialogModule, MdCardModule, MdInputModule, MdMenuModule, MdIconModule, MdRippleModule, MdToolbarModule, MdSidenavModule, MdButtonModule} from '@angular/material';
//
// //local imports
import { AppComponent } from './app.component';
import {RestQueryService} from './sharedModules/restQueryService'
import {navRouterLayout} from './navRouterLayout/navRouterLayout.component'
import {Landing} from "./landing/landing.component";
import {Link1} from "./link1/link1.component";
import {SharedBody} from "./sharedBodyView/sharedBody.component";
import {LoginDialog} from "./dialogs/loginDialog/loginDialog";
import {SharedServices} from "./sharedModules/SharedServices";


// Route mapping
const appRoutes: Routes = [
  { path : '', component: SharedBody},
  { path: 'link-1', component: Link1 },
  { path: 'hello', component: Landing ,children: [
    { path: 'test', component: SharedBody }
  ]}
];




@NgModule({
  declarations: [
    AppComponent,
    navRouterLayout,
    Landing,
    SharedBody,
    Link1,
    LoginDialog
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MdButtonModule,
    MdSidenavModule,
    MdMenuModule,
    MdIconModule,
    MdInputModule,
    MdRippleModule,
    MdToolbarModule,
    MdCardModule,
    RouterModule.forRoot(appRoutes),
    MdDialogModule,
    MdTabsModule
  ],
  providers: [RestQueryService, SharedServices],
  entryComponents : [LoginDialog],
  bootstrap: [AppComponent]
})
export class AppModule {

}
