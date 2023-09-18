import { useRouteData } from "@solidjs/router"
import { createServerData$ } from "solid-start/server";
import { getExperience } from "../utils/experience"
import Introduction from "../components/Introduction";
import Experience from "../components/Experience";
import { IExperience, IIntroduction } from "../types"

type CombinedJson = {
  displayExperience: any[];
}

export function routeData() {
  return createServerData$(async (_, { request }) => {
    const experience: any[] = await getExperience();

    const combinedJson:CombinedJson = {
      displayExperience: experience,
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
  return (
    <div>
      <Introduction introduction={iIntroduction} />
      <Experience experience={iExperience}/>
    </div>
  );
}
