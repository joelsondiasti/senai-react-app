import { github } from "@/lib/axios";
import { useState } from "react";

interface GitHubResponse {
  login: string;
  avatar_url: string;
  name: string;
}

export default function GitCredential() {
  const [user, setUser] = useState({});

  async function getGitHubUser(name: string) {
    const { data } = await github.get<GitHubResponse>(name);
    setUser(data);
  }

  return <h1>GitCredential</h1>;
}
