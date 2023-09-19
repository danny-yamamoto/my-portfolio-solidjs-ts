import { useRouteData } from "@solidjs/router"
import { createServerData$ } from "solid-start/server";
import { getExperience } from "../utils/experience.server"
import Introduction from "../components/Introduction";
import Experience from "../components/Experience";
import { IArticles, ICertificates, IExperience, IFooter, IIntroduction, IRepositories } from "../types"
import Articles from "~/components/Articles";
import { getArticles } from "../utils/articles.server";
import Footer from "~/components/Footer";
import { getRepositories } from "~/utils/repositories.server";
import Repositories from "~/components/Repositories";
import { getCertificates } from "~/utils/certificates.server";
import { Certificate } from "crypto";
import Certificates from "~/components/Certificates";

type CombinedJson = {
  displayExperience: any[];
  displayArticles: any[];
  displayRepositories: any[];
  displayCertificates: any[];
}

export function routeData() {
  return createServerData$(async (_, { request }) => {
    const vars: any = import.meta.env;
    const ghEndpoint: string = vars.VITE_GRAPHQL_API;
    const ghToken: string = vars.VITE_GH_TOKEN;
    const experience: any[] = await getExperience();
    const articles = await getArticles(20);
    const repositories = await getRepositories(ghEndpoint, ghToken);
    const certificates: any[] = await getCertificates();

    const combinedJson:CombinedJson = {
      displayExperience: experience,
      displayArticles: articles,
      displayRepositories: repositories,
      displayCertificates: certificates,
    }

    return combinedJson;
  });
}

export default function Home() {
  const data = useRouteData<typeof routeData>();
  const iIntroduction: IIntroduction = {
    title: "Daisuke Yamamoto",
    description: "Welcome to my portfolio",
  }
  const iExperience: IExperience = {
    title: "Experience",
    detail: data()?.displayExperience,
  }
  const iArticles: IArticles = {
    title: "Top 20 Articles",
    detail: data()?.displayArticles,
  }
  const iRepositories: IRepositories = {
    title: "Repositories",
    detail: data()?.displayRepositories,
  }
  const iCertificates: ICertificates = {
    title: "Certificates",
    detail: data()?.displayCertificates,
  }
  const iFooter:IFooter = {
    title: "Daisuke Yamamoto",
    github: "https://github.com/danny-yamamoto",
    twitter: "https://twitter.com/dai_s_a_n",
  }
  return (
    <div>
      <Introduction introduction={iIntroduction} />
      <Experience experience={iExperience}/>
      <Articles articles={iArticles}/>
      <Repositories repositories={iRepositories} />
      <Certificates certificates={iCertificates} />
      <Footer footer={iFooter} />
    </div>
  );
}
