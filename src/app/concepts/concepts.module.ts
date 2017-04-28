import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConceptsComponent } from './concepts.component';
import { RouterModule } from '@angular/router';
import { HorizontalAlignComponent } from './horizontal-align/horizontal-align.component';
import { MediaQueryComponent } from './media-query/media-query.component';

const Router: ModuleWithProviders = RouterModule.forChild( [
    { path:'concepts', component:ConceptsComponent },
    { path:'concepts/horizontal-align', component:HorizontalAlignComponent },
    { path:'concepts/media-query', component:MediaQueryComponent }
    ] );


@NgModule( {
    imports     :[
        CommonModule,
        Router
    ],
    declarations:[
        ConceptsComponent,
        HorizontalAlignComponent,
        MediaQueryComponent
    ]
} )
export class ConceptsModule {
}
