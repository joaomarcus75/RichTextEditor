import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'richtexteditor';

  public customToolbar: Object ={
    items: ['Bold', 'Italic', 'Undo','Redo','CreateTable','Image','CreateLink']
  }
}
