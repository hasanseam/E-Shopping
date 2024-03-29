import { NgModule } from '@angular/core';

import { LayoutModule } from '@angular/cdk/layout';

//
// Form Controls
//

import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSliderModule } from '@angular/material/slider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatIconModule} from '@angular/material/icon';
import { MatNativeDateModule } from '@angular/material/core';
// import { MatMomentDateModule } from '@angular/material-moment-adapter';

//
// Navigation
//

import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';


import { MatDividerModule } from '@angular/material/divider';

import { MatGridListModule } from '@angular/material/grid-list';

import { MatStepperModule } from '@angular/material/stepper';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTreeModule } from '@angular/material/tree';
import {MatListModule} from '@angular/material/list';
//
// Buttons & Indicators
//

import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatBadgeModule } from '@angular/material/badge';
import { MatChipsModule } from '@angular/material/chips';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatProgressBarModule } from '@angular/material/progress-bar';

//
// Popups & Modals
//

import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTooltipModule } from '@angular/material/tooltip';

//
// Data Table
//

import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatAccordion, MatExpansionModule, MatExpansionPanel } from '@angular/material/expansion';
import {MatCardModule} from '@angular/material/card';

const modules: any[] = [

  LayoutModule,
  MatCardModule,
  MatAutocompleteModule,
  MatCheckboxModule,
  MatDatepickerModule,
  MatFormFieldModule,
  MatInputModule,
  MatRadioModule,
  MatSelectModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatListModule,
  MatTooltipModule,
  

  MatNativeDateModule,
  // MatMomentDateModule,

  MatMenuModule,
  MatSidenavModule,
  MatToolbarModule,

  MatDividerModule,
  MatGridListModule,
  MatStepperModule,
  MatTabsModule,
  MatTreeModule,

  MatButtonModule,
  MatButtonToggleModule,
  MatBadgeModule,
  MatChipsModule,
  MatProgressSpinnerModule,
  MatProgressBarModule,

  MatBottomSheetModule,
  MatDialogModule,
  MatSnackBarModule,
  MatTooltipModule,

  MatPaginatorModule,
  MatSortModule,
  MatTableModule,
  MatIconModule,
  MatExpansionModule,
  
 
  

];

@NgModule({
  imports: [ ...modules ],
  exports: [ ...modules ]
})
export class AngularMaterialModule {}