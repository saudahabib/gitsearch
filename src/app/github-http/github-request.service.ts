import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { User } from '../user-class/user';
import { Repository } from '../repo-class/repository';

@Injectable()
export class GithubRequestService {
  user : User;
  reponame : Repository;
  private username : string;
  private repositories : string;
  constructor(private http: HttpClient) {
    this.username = "saudahabib";
    this.user = new User ("");
    this.reponame = new Repository("","","","","",[]);

   }


   apiRequest() {
     interface ApiResponse{
       login: string;
       public_repos: string;
       avatar_url : any;
       html_url: string;
       following : string;
       followers : string;

     }
     let promise = new Promise ((resolve,reject)=>{
       this.http.get<ApiResponse>("https://api.github.com/users/" +  this.username +environment.apiKey).toPromise().then(response=>{
         this.user.username = response.login
         this.reponame.reponame = response.public_repos
         this.reponame.avatar = response.avatar_url
         this.reponame.html_url = response.html_url
         this.reponame.followers = response.followers
         this.reponame.following = response.following


         resolve()

       }, error =>{
         this.user.username = "No such Username"
         this.reponame.reponame = "No such Repository"
         this.reponame.avatar = "Can't load image"
         this.reponame.html_url = "404 page not found"
         this.reponame.followers = ""
         this.reponame.following = ""

         reject(error)
       }
     )
     })
     return promise
   }

   repoRequest() {
     interface Response{
       // html_url: string;
       // description : string;
       // language : string;
     }

     let promise = new Promise ((resolve,reject)=>{
       this.http.get<Response>("https://api.github.com/users/" +  this.username +"/repos" +environment.apiKey).toPromise().then(response=>{
         this.reponame.repos = response
         console.log(response)

         resolve()
console.log("sauda")
       }, error =>{
        this.reponame.repos = []

         reject(error)
       }
     )
     })
     return promise
   }

    updateProfile(username:string){
      this.username = username;
      this.apiRequest();
      this.repoRequest();
      // this.repoRequest();
    }

// repoRequest() {
// interface Response{
//   html_url: string;
//   description : string;
//   language : string;
// }
//
// let promise = new Promise ((resolve,reject)=>{
//   this.http.get<Response>("https://api.github.com/users/" +  this.user.username +"/repos" + environment.apiKey).toPromise().then(response=>{
//     console.log(response)
//
//     resolve()
//
//   }, error =>{
//
//
//     reject(error)
//   }
// )
// })
//
// }

}
