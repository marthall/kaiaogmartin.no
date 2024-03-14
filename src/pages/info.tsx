import { Nav } from "./nav.tsx";

export default function () {
  return (
    <>
      <Nav includeBack={true} />
      <div className={"center-container"}>
        <h1>Praktisk info</h1>

        <h2>Toastmaster</h2>
        <p>
          <s>
            Adrian Austevoll er vår eminente toastmaster. Ta kontakt med ham på
            telefon <a href="tel:94974009">949 74 009</a> dersom du har lyst til
            å si noen ord.
          </s>
        </p>
        <p>
          Anders Bentsen tar over som toastmaster da Adrian dessverre har blitt
          syk. Anders er en ringrev med lokalkunnskap om Grefsen og diverse
          løkkaleker, så dette blir bra. Han kan nåes på telefon{" "}
          <a href="tel:99468197">994 68 197</a>.
        </p>

        <h2>Transport og parkering</h2>
        <h3>Vielse i Oslo Rådhus</h3>
        <p>
          Trikk, tog, t-bane eller buss til Nationaltheatret. Dersom du kjører
          bil, finner du en{" "}
          <a href="https://no.parkopedia.com/parking/carpark/vika_p_hus/0250/oslo/?arriving=202402041600&leaving=202402041800">
            oversikt over parkeringshus i Oslo her.
          </a>{" "}
        </p>
        <p>
          Det er generelt få offentlige parkeringsplasser i rundt Rådhuset. Vika
          P-hus eller Oslo Konserthus P-hus er nærmest.
        </p>
        <p>
          Det er ikke tillatt med ballonger, såplebobler, alkohol eller å kaste
          ris, roseblader eller konfetti. Dette gjelder både inne og utenfor
          rådhuset.
        </p>
        <h3>Grefsenkollen Resturant</h3>
        <p>
          Buss <i>56B Grefsenkollen</i> tar deg fra Nydalen eller Storo hele
          veien opp til Grefsenkollen Resturant. Bussen som går kl 15:45 fra
          Storo ankommer Grefsenkollen i perfekt tid!
        </p>
        <p>
          Dersom du kjører bil er det mange kommunale parkeringsplasser
          tilgjengelig rett utenfor restauranten. Det er gratis å stå parkert
          her. Det er også en stor parkeringsplass 200 meter ned i bakken. Her
          er det også gratis å stå.
        </p>

        <h2>Hva i all verden betyr kleskoden Mørk dress eller bunad?</h2>
        <p>
          Mørk dress for menn er en formell kleskode som gjerne innebærer en
          mørkeblå, sort eller mørkegrå dressjakke og bukse, kombinert med en
          hvit eller lys skjorte og et slips eller en sløyfe. For kvinner
          innebærer mørk dress ofte en formell kjole eller drakt, gjerne i
          knelengde eller lengre. Bunad er også veldig lov. Men, husk at det
          viktigste er at DU føler deg fin!
        </p>
        <h2>Leker</h2>
        <p>
          Vil du gjennomføre en lek istedenfor tale? Gøy! Kontakt toastmaster
          Adrian.
        </p>
        <h2>Allergier</h2>
        <p>
          Dersom du er allergisk eller er pesceterianer, vegetarianer, veganer
          eller lignende er det viktig at du gir oss beskjed på forhånd så vi
          kan melde fra videre til Grefsenkollen.
        </p>
      </div>
    </>
  );
}
