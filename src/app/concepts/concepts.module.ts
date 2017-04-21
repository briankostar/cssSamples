import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConceptsComponent } from './concepts.component';
import { RouterModule } from '@angular/router';
import { HorizontalAlignComponent } from './horizontal-align/horizontal-align.component';

const Router: ModuleWithProviders = RouterModule.forChild( [
    { path:'concepts', component:ConceptsComponent },
    { path:'concepts/horizontal-align', component:HorizontalAlignComponent }
    ] );


@NgModule( {
    imports     :[
        CommonModule,
        Router
    ],
    declarations:[
        ConceptsComponent,
        HorizontalAlignComponent
    ]
} )
export class ConceptsModule {
}
