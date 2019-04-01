import { Component, OnInit } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
import { User } from '../user-class/user';
import { Repository } from '../repo-class/repository';
import { GithubRequestService } from '../github-http/github-request.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  providers : [GithubRequestService],
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

user: User;
reponame: Repository;
repos:any[]
username: string;

  constructor(private githubService: GithubRequestService, private repoRequest: GithubRequestService) {
    this.githubService.apiRequest()
    this.githubService.repoRequest()
    this.user = this.githubService.user
    this.reponame = this.githubService.reponame
    this.repos= this.githubService.reponame.repos
  } //private http: HttpClient

   findProfile(){
     this.githubService.updateProfile(this.username);
   }

  ngOnInit() {


  }

}
