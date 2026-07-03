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

    title: "Commit Push",

    iconBackground:
        "bg-blue-100",

    iconColor:
        "text-blue-600",

    markerColor:
        "bg-blue-500",
},

  pull_request: {

    icon: GitPullRequest,

    title: "Pull Request",

    iconBackground:
        "bg-purple-100",

    iconColor:
        "text-purple-600",

    markerColor:
        "bg-purple-500",
  },

  deployment: {

    icon: Rocket,

    title:"Deployment",

    iconBackground:
        "bg-green-100",

    iconColor:
        "text-green-600",

    markerColor:
        "bg-green-500",
  },

  issue: {

    icon: Bug,

    title:"Issue",

    iconBackground:
        "bg-red-100",

    iconColor:
        "text-red-600",

    markerColor:
        "bg-red-500",
  },

  release: {

    icon: Tag,

    title:"Release",

    iconBackground:
        "bg-amber-100",

    iconColor:
        "text-amber-600",

    markerColor:
        "bg-amber-500",
  },
};

export default activityConfig;
