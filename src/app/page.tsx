import FestivalDates from "@/components/festivalDates/festivalDates";
import HeroImageHome from "@/components/heroImageHome/heroImageHome";
import Sponsors from "@/components/sponsors/sponsors";

import FESTIVAL_DATES from "../database/FESTIVAL_DATES.json"
import EVENTS from "../database/EVENTS.json"

export default function Home() {
  const { dates } = FESTIVAL_DATES
  
  return (
    <main>
      <HeroImageHome/>
      <Sponsors/>
      <FestivalDates dates={ dates } events={ EVENTS }/>
    </main>
  )
}
