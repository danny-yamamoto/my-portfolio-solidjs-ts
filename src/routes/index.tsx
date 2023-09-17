import { Title } from "solid-start";
import { useRouteData } from "@solidjs/router"
import { createServerData$ } from "solid-start/server";
import { getExperience } from "../utils/experience"

type CombinedJson = {
  displayExperience: any[];
}

export function routeData() {
  return createServerData$(async (_, { request }) => {
    const experience = await getExperience();

    const combinedJson:CombinedJson = {
      displayExperience: experience,
    }

    return combinedJson;
  });
}

export default function Home() {
  const data = useRouteData<typeof routeData>();
  return (
    <div>
      <section id="intro">
        <h1>Experience</h1>
        <ul>
          {data()?.displayExperience.map(({ id, company, position }) => (
          <li id={id}>{id}: {position} @ {company}</li>
          ))}
        </ul>
      </section>
    </div>
  );
}
