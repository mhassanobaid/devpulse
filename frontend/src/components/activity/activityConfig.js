import {
  GitCommit,
  GitPullRequest,
  Rocket,
  Bug,
  Tag,
} from "lucide-react";

const activityConfig = {
  push: {
    icon: GitCommit,
    title: "Push",
  },

  pull_request: {
    icon: GitPullRequest,
    title: "Pull Request",
  },

  deployment: {
    icon: Rocket,
    title: "Deployment",
  },

  issue: {
    icon: Bug,
    title: "Issue",
  },

  release: {
    icon: Tag,
    title: "Release",
  },
};

export default activityConfig;
