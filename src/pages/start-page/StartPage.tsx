import {Header} from "../../modules/header/Header.tsx";
import StartScreenHero from "../../modules/start-screen-hero/StartScreenHero.tsx";
import WhyEduTrack from "../../modules/why-edu-track/WhyEduTrack.tsx";
import Footer from "../../modules/footer/Footer.tsx";

export default function StartPage() {
  return(
    <>
      <div className="bg-[linear-gradient(to_right,_#96B1DD,_#515F77)]">
        <Header />
        <StartScreenHero />
      </div>
      <WhyEduTrack />
      <Footer />
    </>
  )
}