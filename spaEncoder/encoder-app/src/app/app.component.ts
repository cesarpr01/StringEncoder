import { Component, Input } from '@angular/core';
import{EncoderService} from './services/encoder.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'encoder-app';
  /**
   *
   */
   textList:string[]=[];
   @Input() text:string='';


  constructor(private encoderService:EncoderService) {
  }
  getEncodedText(){    
    
    this.encoderService.getEncodedString(this.text,this.textList);    
  }
  cancellEncoding(){
    this.encoderService.cancellEncoding();    
  }
}
