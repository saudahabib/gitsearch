import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { User } from '../user-class/user';
import { Repository } from '../repo-class/repository';

@Injectable()
export class GithubRequestService {
  user : User;
  reponame : Repository;
  constructor(private http: HttpClient) {
    this.user = new User ("kirandash");
    this.reponame = new Repository("", "");
    console.log(this.user.username)
   }


   apiRequest() {
     interface ApiResponse{
       login: string;
       public_repos: string;
       avatar_url : any;

     }
     let promise = new Promise ((resolve,reject)=>{
       this.http.get<ApiResponse>("https://api.github.com/users/" +  this.user.username +environment.apiKey).toPromise().then(response=>{
         this.user.username = response.login
         this.reponame.reponame = response.public_repos
         this.reponame.avatar = response.avatar_url


         resolve()

       }, error =>{
         this.user.username = "No such Username"
         this.reponame.reponame = "No such Repository"
         this.reponame.avatar = "Can't load image"


         reject(error)
       }
     )
     })
     return promise
   }
}
