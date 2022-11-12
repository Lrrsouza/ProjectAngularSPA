import { Component, OnInit } from '@angular/core';
import { ApiGitHubService } from '../services/api-git-hub.service';
@Component({
  selector: 'spa-home-spa',
  templateUrl: './home-spa.component.html',
  styleUrls: ['./home-spa.component.scss'],
})
export class HomeSpaComponent implements OnInit {
  userName: string = '';
  repositoryList: { name: string; url: string }[] = [];

  constructor(private service: ApiGitHubService) {}

  ngOnInit(): void {}

  listRepositories() {
    this.repositoryList = [];
    this.service.listRepository(this.userName).subscribe((data: any) => {
      console.log('resultadoApi', data);
      data.forEach((element: any) => {
        const repository: { name: string; url: string } = {
          name: element.name,
          url: element.html_url,
        };
        this.repositoryList.push(repository);
      });
      console.log('lista repositorios', this.repositoryList);
    });
  }
}
