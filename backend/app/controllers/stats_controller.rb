class StatsController < ApplicationController
  def index
    render json: {
      total_repositories: 3,
      total_commits: 145,
      open_issues: 12,
      closed_issues: 38,
      pull_requests: 9,
      deployments: 24,
      active_developers: 4
    }
  end
end
