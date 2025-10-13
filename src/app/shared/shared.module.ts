import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NavComponent } from './nav/nav.component';

@NgModule({
  declarations: [
    // No declarations needed for standalone components
  ],
  imports: [
    CommonModule,
    FormsModule,
    NavComponent // ✅ import standalone component here
  ],
  exports: [
    CommonModule,
    FormsModule,
    NavComponent // ✅ export so other modules (like AppModule) can use it
  ]
})
export class SharedModule {}
