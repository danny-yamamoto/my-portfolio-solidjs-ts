import { useRouteData } from "@solidjs/router"
import { createServerData$ } from "solid-start/server";
import { getExperience } from "../utils/experience"
import Experience from "../components/Experience/Experience";
import { IExperience } from "../types"

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
  const iExperience: IExperience = {
    title: "Experience",
    detail: data()?.displayExperience,
  }
  return (
    <div>
      <Experience experience={iExperience}/>
    </div>
  );
}
