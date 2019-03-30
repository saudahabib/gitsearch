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
    this.user = new User ("");
    this.reponame = new Repository("","");
   }

   apiRequest() {
     interface ApiResponse{
       login: string;
       public_repos: string;
       avatar_url: any;
     }
     let promise = new Promise ((resolve,reject)=>{
       this.http.get<ApiResponse>(environment.apiUrl).toPromise().then(response=>{
         this.user.username = response.login
         this.reponame.reponame = response.public_repos
         this.reponame.avatar = response.avatar_url

         resolve()
         console.log(response)
       }, error =>{
         this.user.username = "No such Username"
         this.reponame.reponame = "No such Repository"
         this.reponame.avatar = "No avatar"

         reject(error)
       }
     )
     })
     return promise
   }
}
