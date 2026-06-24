class RepositoriesController < ApplicationController
  def index
    repositories = [{
      id: 1,
      name: "devpulse"
    },
    {
      id: 2,
      name: "quote-editor"
    },
    {
      id: 3,
      name: "FYP"
    }]

    render json: repositories
  end
end
