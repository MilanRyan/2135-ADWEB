import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { AboutComponent } from './about/about.component';
import { SkillsComponent } from './skills/skills.component';
import { EducationComponent} from './education/education.component';
import { ReferencesComponent } from './references/references.component';



@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent,AboutComponent,SkillsComponent,EducationComponent,ReferencesComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
