import FestivalDates from "@/components/festivalDates/festivalDates";
import HeroImageHome from "@/components/heroImageHome/heroImageHome";
import Sponsors from "@/components/sponsors/sponsors";

import FESTIVAL_DATES from "../database/FESTIVAL_DATES.json"
import EVENTS from "../database/EVENTS.json"
import Accordion from "@/components/acorddion/accordion";

import BottonPushNotification from "@/components/bottonPushNotification/BottonPushNotiftication";

export default function Home() {
  const { dates } = FESTIVAL_DATES
  
  return (
    <main>      
      <HeroImageHome/>
      <BottonPushNotification/>
      <Sponsors/>
      <FestivalDates dates={ dates } events={ EVENTS }/>
      <Accordion image="FAQ.jpg"/>
    </main>
  )
}
