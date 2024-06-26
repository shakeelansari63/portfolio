import { HeatMapDate } from '../lib/ngx-heatmap-calendar.interface';

export class GitProfileModel {
  avatar_url: string | null = null;
  bio: string | null = null;
  blog: string | null = null;
  company: string | null = null;
  created_at: string | null = null;
  email: string | null = null;
  events_url: string | null = null;
  followers: number | null = null;
  followers_url: string | null = null;
  following: number | null = null;
  following_url: string | null = null;
  gists_url: string | null = null;
  gravatar_id: string | null = null;
  hireable: string | null = null;
  html_url: string | null = null;
  id: string | null = null;
  location: string | null = null;
  login: string = '';
  name: string = '';
  node_id: string | null = null;
  organizations_url: string | null = null;
  public_gists: number | null = null;
  public_repos: number | null = null;
  received_events_url: string | null = null;
  repos_url: string | null = null;
  site_admin: boolean = false;
  starred_url: string | null = null;
  subscriptions_url: string | null = null;
  twitter_username: string | null = null;
  type: string | null = null;
  updated_at: string | null = null;
  url: string | null = null;
}

export class ProjectSearchResultModel {
  total_count: number | null = null;
  incomplete_results: boolean | null = null;
  items: GitProjectModel[] = [];
}

export class GitProjectModel {
  id: number | null = null;
  node_id: string | null = null;
  name: string | null = null;
  full_name: string | null = null;
  private: boolean = false;
  owner: any;
  html_url: string | null = null;
  description: string | null = null;
  fork: boolean | null = null;
  url: string | null = null;
  forks_url: string | null = null;
  keys_url: string | null = null;
  collaborators_url: string | null = null;
  teams_url: string | null = null;
  hooks_url: string | null = null;
  issue_events_url: string | null = null;
  events_url: string | null = null;
  assignees_url: string | null = null;
  branches_url: string | null = null;
  tags_url: string | null = null;
  blobs_url: string | null = null;
  git_tags_url: string | null = null;
  git_refs_url: string | null = null;
  trees_url: string | null = null;
  statuses_url: string | null = null;
  languages_url: string | null = null;
  stargazers_url: string | null = null;
  contributors_url: string | null = null;
  subscribers_url: string | null = null;
  subscription_url: string | null = null;
  commits_url: string | null = null;
  git_commits_url: string | null = null;
  comments_url: string | null = null;
  issue_comment_url: string | null = null;
  contents_url: string | null = null;
  compare_url: string | null = null;
  merges_url: string | null = null;
  archive_url: string | null = null;
  downloads_url: string | null = null;
  issues_url: string | null = null;
  pulls_url: string | null = null;
  milestones_url: string | null = null;
  notifications_url: string | null = null;
  labels_url: string | null = null;
  releases_url: string | null = null;
  deployments_url: string | null = null;
  created_at: string | null = null;
  updated_at: string | null = null;
  pushed_at: string | null = null;
  git_url: string | null = null;
  ssh_url: string | null = null;
  clone_url: string | null = null;
  svn_url: string | null = null;
  homepage: string | null = null;
  size: number | null = null;
  stargazers_count: number | null = null;
  watchers_count: number | null = null;
  language: string | null = null;
  has_issues: boolean | null = null;
  has_projects: boolean | null = null;
  has_downloads: boolean | null = null;
  has_wiki: boolean | null = null;
  has_pages: boolean | null = null;
  has_discussions: boolean | null = null;
  forks_count: number | null = null;
  mirror_url: string | null = null;
  archived: boolean | null = null;
  disabled: boolean | null = null;
  open_issues_count: number | null = null;
  license: string | null = null;
  allow_forking: boolean | null = null;
  is_template: boolean | null = null;
  web_commit_signoff_required: boolean | null = null;
  topics: any[] = [];
  visibility: string | null = null;
  forks: number | null = null;
  open_issues: number | null = null;
  watchers: number | null = null;
  default_branch: string | null = null;
  score: number | null = null;
}

export class ContributionData {
  date: string = '';
  intensity: string = '';
  count: string = '';
}

export class ContributionResult {
  total: number = 0;
  contributions: ContributionData[][] = [];
}

export interface ContribSubject {
  startDate: Date;
  endDate: Date;
  data: HeatMapDate[];
}
