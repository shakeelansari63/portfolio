import { Injectable } from '@angular/core';
import { userData } from '../data/user-data';

@Injectable({
  providedIn: 'root',
})
export class GithubStatsService {
  constructor() {}
  private profileStatsBaseUrl =
    'http://github-profile-summary-cards.vercel.app';
  private githubStatsbaseUrl = 'https://github-readme-stats.vercel.app';
  private theme = 'bear';

  public getUserMainStats() {
    return `${this.profileStatsBaseUrl}/api/cards/profile-details?username=${userData.githubUser}&theme=${this.theme}`;
  }

  public getUserGithubStats() {
    return `${this.githubStatsbaseUrl}/api?username=${userData.githubUser}&show_icons=true&include_all_commits=true&theme=${this.theme}&hide_border=true`;
  }

  public getUserGithubStars() {
    return `${this.githubStatsbaseUrl}/api?username=${userData.githubUser}&show_icons=true&include_all_commits=true&theme=${this.theme}&hide_border=true&show=reviews,discussions_started,discussions_answered,prs_merged,prs_merged_percentage&hide=stars,commits,prs,issues,contribs`;
  }

  public getTopLanguageByRepo() {
    return `${this.profileStatsBaseUrl}/api/cards/repos-per-language?username=${userData.githubUser}&theme=${this.theme}`;
  }

  public getTopLanguageByCommit() {
    return `${this.profileStatsBaseUrl}/api/cards/most-commit-language?username=${userData.githubUser}&theme=${this.theme}`;
  }

  public getTopLanguages() {
    return `${this.githubStatsbaseUrl}/api/top-langs/?username=${userData.githubUser}&layout=compact&theme=${this.theme}&hide_border=true&&langs_count=8`;
  }
}
