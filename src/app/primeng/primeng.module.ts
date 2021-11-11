import { NgModule } from '@angular/core';
import { TabViewModule } from 'primeng/tabview';
import { TooltipModule } from 'primeng/tooltip';
import { InputSwitchModule } from 'primeng/inputswitch';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { SplitterModule } from 'primeng/splitter';
import { FieldsetModule } from 'primeng/fieldset';
import { InputNumberModule } from 'primeng/inputnumber';
import { CheckboxModule } from 'primeng/checkbox';
import { RadioButtonModule } from 'primeng/radiobutton';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService, MessageService } from 'primeng/api';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { DialogService, DynamicDialogModule } from 'primeng/dynamicdialog';
import { TabMenuModule } from 'primeng/tabmenu';
import { DragDropModule } from 'primeng/dragdrop';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { DropdownModule } from 'primeng/dropdown';
import { CalendarModule } from 'primeng/calendar';
import { BadgeModule } from 'primeng/badge';
import { ToastModule } from 'primeng/toast';
import { MultiSelectModule } from 'primeng/multiselect';
import { ContextMenuModule } from 'primeng/contextmenu';
import { RatingModule } from 'primeng/rating';

@NgModule({
  declarations: [],
  imports: [
    TabViewModule,
    TooltipModule,
    InputSwitchModule,
    ProgressSpinnerModule,
    CardModule,
    ButtonModule,
    SplitterModule,
    FieldsetModule,
    InputNumberModule,
    CheckboxModule,
    RadioButtonModule,
    ConfirmDialogModule,
    TableModule,
    InputTextModule,
    DynamicDialogModule,
    TabMenuModule,
    DragDropModule,
    AutoCompleteModule,
    DropdownModule,
    CalendarModule,
    BadgeModule,
    ToastModule,
    MultiSelectModule,
    ContextMenuModule,
    RatingModule,
  ],
  providers: [DialogService, MessageService, ConfirmationService],
  exports: [
    TabViewModule,
    TooltipModule,
    InputSwitchModule,
    ProgressSpinnerModule,
    CardModule,
    ButtonModule,
    SplitterModule,
    FieldsetModule,
    InputNumberModule,
    CheckboxModule,
    RadioButtonModule,
    ConfirmDialogModule,
    TableModule,
    InputTextModule,
    DynamicDialogModule,
    TabMenuModule,
    DragDropModule,
    AutoCompleteModule,
    DropdownModule,
    CalendarModule,
    BadgeModule,
    ToastModule,
    MultiSelectModule,
    ContextMenuModule,
    RatingModule,
  ],
})
export class PrimeNgModule {}
