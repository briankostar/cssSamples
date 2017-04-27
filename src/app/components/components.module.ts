import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ComponentsComponent } from "./components.component";
import { NavComponent } from './nav/nav.component';

const Router:ModuleWithProviders = RouterModule.forChild( [
	{ path:'components', component:ComponentsComponent },
	{ path:'components/nav', component:NavComponent }
] );


@NgModule( {
	imports     :[
		CommonModule,
		Router
	],
	declarations:[
		ComponentsComponent,
		NavComponent
	]
} )
export class ComponentsModule {
}
