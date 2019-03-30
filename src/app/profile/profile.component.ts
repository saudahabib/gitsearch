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

  constructor(private githubService: GithubRequestService) {

  } //private http: HttpClient

  ngOnInit() {
    this.githubService.apiRequest()
    this.user = this.githubService.user
  }

}
