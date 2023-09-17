import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { createRequestOption } from '../util/request-util';
import { Pageable, Paginated } from '../model/pagination/pagination.model';

@Injectable({
  providedIn: 'root',
})
export class GitHubService {
  private readonly apiUrl = 'https://api.github.com';

  constructor(private http: HttpClient) {}

  // Function to search for GitHub repositories based on a query
  searchRepositories(query: string, pageable: Pageable): Observable<Paginated<any[]>> {
    const params = createRequestOption({
      q: query,
      order: pageable?.order,
      sort: pageable?.sort,
      per_page: pageable?.size,
      page: pageable?.page,
    });
    return this.http
      .get<any>(`${this.apiUrl}/search/repositories`, {
        params,
        observe: 'response',
      })
      .pipe(
        map((res) => {
          return {
            items: res?.body?.items,
            total: res?.body?.total_count,
          };
        })
      );
  }

  // Function to get the list of committers for a repository
  getCommitters(repoFullName: string): Observable<any> {
    const committersUrl = `${this.apiUrl}/repos/${repoFullName}/contributors`;
    return this.http.get(committersUrl);
  }

  // Function to get the last 100 commits for a repository
  getCommits(repoFullName: string): Observable<any> {
    const commitsUrl = `${this.apiUrl}/repos/${repoFullName}/commits?per_page=100`;
    return this.http.get(commitsUrl);
  }
}
