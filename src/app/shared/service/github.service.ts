import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GitHubService {
  private readonly apiUrl = 'https://api.github.com';

  constructor(private http: HttpClient) {}

  // Function to search for GitHub repositories based on a query
  searchRepositories(query: string): Observable<any[]> {
    const searchUrl = `${this.apiUrl}/search/repositories?q=${query}`;
    return this.http.get<any>(searchUrl).pipe(map((data) => data?.items));
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
