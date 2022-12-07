import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import * as oboe from 'oboe';
@Injectable({
  providedIn: 'root'
})
export class EncoderService {

  constructor(private http:HttpClient) { }

  getEncodedString(text:string,textList:string[]){

    const oboeService = oboe({
      'url':`http://localhost:5119/Encoder/?text=${text}&cancel=${false}`,
      'method':"GET",
      'cached':false
    });

    oboeService.node('!.*', function (char:string) {            
      textList.push(char);
    });
  }
  cancellEncoding(){
    this.http.get<any>("http://localhost:5119/Cancel").subscribe();
  }
}
