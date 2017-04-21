import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CssComponent } from './css.component';
import { BasicsComponent } from './basics/basics.component';
import { FloatComponent } from './float/float.component';
import { FlexComponent } from './flex/flex.component';

const Router: ModuleWithProviders = RouterModule.forChild( [
    { path:'css', component:CssComponent },
    { path:'css/basics', component:BasicsComponent },
    { path:'css/float', component:FloatComponent },
    { path:'css/flex', component:FlexComponent }
] );

@NgModule( {
    imports     :[
        CommonModule,
        Router
    ],
    declarations:[
        CssComponent,
        BasicsComponent,
        FloatComponent,
        FlexComponent
    ]
} )
export class CssModule {
}
