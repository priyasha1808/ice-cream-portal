import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NodeutilityService {

  constructor(private HttpClient:HttpClient) { }
  url:string="http://localhost:5000/";


  insert(name:string,email:string,mobile:number,pw:string,favourite:string,gender:string):Observable<any>{
    return this.HttpClient.get(this.url+"insert?name="+name+"&email="+email+"&mobile="+mobile+"&pw="+pw+
      "&Favourite="+favourite+"&gender="+gender);
  }

  insert1(email:string,pw:string):Observable<any>{
    return this.HttpClient.get(this.url+"insert1?email="+email+"&pw="+pw);
  }

  insert2(email:string,pw:string):Observable<any>{
    return this.HttpClient.get(this.url+"insert2?email="+email+"&pw="+pw);
  }

  insertpay(cardno:string,cn:string,validtill:number,cvv:string,total:string):Observable<any>{
    return this.HttpClient.get(this.url+"insertpay?cardno="+cardno+"&cn="+cn+"&validtill="+validtill+"&cvv="+cvv+"&total="+total);
  }

  insert_prod(user:string,items:string,total:number):Observable<any>{
    return this.HttpClient.post(this.url + "insert_prod", { user,items, total });
  }



  update(email: string, oldpw: string, newpw: string): Observable<any> {
    return this.HttpClient.get(this.url + "update?email=" + email  + "&oldpw=" + oldpw+ "&newpw=" + newpw);
}

  display(): Observable<any> {
  return this.HttpClient.get(this.url + "findAll");
}

delete(email:string,pw:string): Observable<any> {
  return this.HttpClient.get(this.url + "delete?email="+email+"&pw="+pw);  

}
}
