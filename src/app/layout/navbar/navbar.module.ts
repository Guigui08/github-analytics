import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar.component';
import { LangSelectorModule } from '../../shared/component/lang-selector/lang-selector.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [NavbarComponent],
  exports: [NavbarComponent],
  imports: [CommonModule, LangSelectorModule, RouterModule],
})
export class NavbarModule {}
