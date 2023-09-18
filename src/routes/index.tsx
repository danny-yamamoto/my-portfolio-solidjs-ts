import { useRouteData } from "@solidjs/router"
import { createServerData$ } from "solid-start/server";
import { getExperience } from "../utils/experience.server"
import Introduction from "../components/Introduction";
import Experience from "../components/Experience";
import { IArticles, IExperience, IFooter, IIntroduction } from "../types"
import Articles from "~/components/Articles";
import { getArticles } from "../utils/articles.server";
import Footer from "~/components/Footer";

type CombinedJson = {
  displayExperience: any[];
  displayArticles: any[];
}

export function routeData() {
  return createServerData$(async (_, { request }) => {
    const experience: any[] = await getExperience();
    const articles = await getArticles(20);

    const combinedJson:CombinedJson = {
      displayExperience: experience,
      displayArticles: articles,
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
  const iFooter:IFooter = {
    titile: "Daisuke Yamamoto",
    github: "https://github.com/danny-yamamoto",
    twitter: "https://twitter.com/dai_s_a_n",
  }
  return (
    <div>
      <Introduction introduction={iIntroduction} />
      <Experience experience={iExperience}/>
      <Articles articles={iArticles}/>
      <Footer footer={iFooter} />
    </div>
  );
}
