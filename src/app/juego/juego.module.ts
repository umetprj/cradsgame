import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartasComponent } from './cartas/cartas.component';
import { ButtonModule } from 'primeng/button';
import {ImageModule} from 'primeng/image';
import { AnimacionCartaComponent } from './animacion-carta/animacion-carta.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CartasComponent,
    AnimacionCartaComponent
  ],
  imports: [
    CommonModule,
		ButtonModule,
    ImageModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    FormsModule 
  ],
  exports:[
    CartasComponent
  ]
})
export class JuegoModule { }
