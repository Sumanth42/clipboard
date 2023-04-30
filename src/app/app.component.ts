import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'neurolab-angular';
  item:string='';
  items=[''];
  handleSend(){
    this.items.push(this.item);
    console.log(this.items);
    this.item='';
  }
}
