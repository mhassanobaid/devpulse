class ActivitiesController < ApplicationController
  def index
    render json: [
      {
        id: 1,
        type: "push",
        repository: "devpulse",
        developer: "Ali",
        description: "Pushed 5 commits",
        timestamp: "2026-06-27T10:20:00Z"
      },
      {
        id: 2,
        type: "pull_request",
        repository: "quote-editor",
        developer: "Sara",
        description: "Opened PR #18",
        timestamp: "2026-06-27T11:45:00Z"
      }
    ]
  end
end
