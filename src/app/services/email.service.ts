import { Http,Headers,Response } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/Rx';

@Injectable()
export class EmailService {
  constructor(public http: Http){}

 public sendMail(){
        console.log("send");
        const headers = new Headers({
            'Content-Type' : 'application/json'
        });

       return this.http.post("http://formspree.io/tfh.help.me.queue@gmail.com", 
            {
                name: 'NEW SUPPORT REQUEST',
                _replyto: 'no-reply@help.me.queue.com',
                message: "A new support request has been created!"
            },
            {
                'headers' : headers
            }
        ).subscribe(res => console.log(res.json()));
    }

}