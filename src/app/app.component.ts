import { Component } from '@angular/core';
import { TranslateService } from './translate.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'HBBApp';

  constructor(private translate: TranslateService) {}
  
  setLang(lang: string) {
    this.translate.use(lang);
  }

  
}
