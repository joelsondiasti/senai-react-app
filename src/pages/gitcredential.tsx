import { github } from "@/lib/axios";
import { CredentialCard, CredentialContainer } from "@/styles/github";
import Image from "next/image";
import { useEffect, useState } from "react";
import GithubLogo from "../assets/img/GithubLogo.svg";
interface GitHubResponse {
  login: string;
  avatar_url: string;
  name: string;
}

export default function GitCredential() {
  const [user, setUser] = useState<GitHubResponse>({} as GitHubResponse);

  async function getGitHubUser(name: string) {
    const { data } = await github.get<GitHubResponse>(name);
    setUser(data);
  }

  useEffect(() => {
    getGitHubUser("joelsondiasti");
  }, []);

  return (
    <CredentialContainer>
      <CredentialCard>
        <div>
          <Image src={GithubLogo} alt="" />
        </div>
        <h1>{user.name}</h1>
      </CredentialCard>
    </CredentialContainer>
  );
}
