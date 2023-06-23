import Image from "next/image";
import { useEffect, useState } from "react";
import GithubLogo from "../assets/img/GithubLogo.svg";
import { github } from "../lib/axios";

export default function Github() {
  const [user, setUser] = useState({});

  async function getGitHubUser(name) {
    const { data, status } = await github.get(name);
    setUser({ ...data, status });
  }

  useEffect(() => {
    getGitHubUser("joelsondiasti");
  }, []);

  return (
    <>
      <div>
        <Image src={GithubLogo} alt="" />
        <span>GitCredential</span>
      </div>
      <Avatar src={user.avatar_url} alt="" />
      <h1>{user.name}</h1>
      <Bio>{user.login}</Bio>
    </>
  );
}
