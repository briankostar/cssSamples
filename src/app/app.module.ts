import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { CssModule } from './css/css.module';
import { ConceptsModule } from './concepts/concepts.module';
import { ComponentsModule } from "./components/components.module";

const Router = RouterModule.forRoot([{ path: '', component: HomeComponent}], {useHash: true});

@NgModule( {
    declarations:[
        AppComponent,
        HomeComponent
    ],
    imports     :[
        BrowserModule,
        FormsModule,
        HttpModule,
        Router,
        ConceptsModule,
        CssModule,
		ComponentsModule
    ],
    providers   :[],
    bootstrap   :[ AppComponent ]
} )
export class AppModule {
}
