import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularproject1';

  name = "mark Smith";

  getMessage()
  {
    return "hi all";
  }

   isDisabled = false;
   imagepath = "C:/Users/Alchemy/Pictures/Screenshots/"
   imageName = "my img"
 
}
