import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../../material.module';
import { RouterModule } from '@angular/router';
@NgModule({
  declarations: [FooterComponent, HeaderComponent, SidebarComponent],
  imports: [CommonModule, MaterialModule, FlexLayoutModule, RouterModule],
  exports: [FooterComponent, HeaderComponent, SidebarComponent],
})
export class CoreModule {}
