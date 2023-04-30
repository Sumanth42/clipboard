import { Component, OnInit, Input } from '@angular/core';
import { ClipboardService } from 'src/app/shared/clipboard.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  items:any[]=[];
  value:string='';
  constructor(private clipboardService:ClipboardService ) { }

  ngOnInit(): void {
    this.clipboardService.firestoreCollection.valueChanges({idField:'id'}).subscribe(element=>{
      console.log(element)
      this.items=element
    })
  }
  // @Input() items=['']
  onClick(itemInput:HTMLInputElement){
    if(itemInput.value){
    this.clipboardService.addItem(itemInput.value);
    itemInput.value="";
    }
  }
  copyMessage(val: string){
    const selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = val;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
    alert('copied successfully')
  }
  onDelete(id:string){
    this.clipboardService.deleteItem(id);
  }
}
