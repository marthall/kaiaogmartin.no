import { Nav } from "./nav.tsx";

export default function () {
  return (
    <>
      <Nav includeBack={false} />
      <div className="top">
        <img className="upper-left" src="images/ring.png" alt="Ring" />
        <div className="header">
          <h2>Vi gifter oss!</h2>
          <h1>Kaia og Martin</h1>
        </div>
      </div>
      <div className={"center-container"}>
        <h1>Velkommen</h1>
        <p>
          Har du forvillet deg inn på denne nettsiden er du sannsynligvis
          invitert og har takket ja til å komme i vårt bryllup 16.mars. Og det
          er vi så glad for! Vi gleder oss skikkelig til å dele dagen med de
          fineste menneskene vi vet om.
        </p>
        <p>
          På denne siden kommer vi til å poste endel praktisk informasjon om hva
          som skal skje på selve dagen - og alle konkurranselekene dere må
          starte å øve til (neida…).
        </p>
        <h1>Vielse på Oslo Rådhus</h1>
        <p>
          Selve vielsessermonien finner sted på Oslo Rådhus i Munchrommet på
          dagen 16.mars klokken 13.00-13.15. En klassisk tradisjonell, offentlig
          og effektiv affære med andre ord. Her er det dessverre begrenset med
          plasser slik at det er nærmeste familie og forlovere som får være med
          inn. Det kan være noe kø i sikkerhetskontrollen, så det er lurt å møte
          opp minst 15 minutter før.
        </p>
        <p>
          For de av dere som ikke er nærmeste familie eller forlovere, så er det
          aldeles hyggelig dersom dere likevel ønsker å ta turen dit og ta oss i
          mot på vei ut igjen. Men det er er ingen forventning fra oss - vi ses
          jo til en hyggelig middag og heidundranes fest kl. 16.00!
        </p>
        <h1>
          Hyggelig middag og heidundranes fest på Grefsenkollen restaurant
        </h1>
        <p>
          Klokken 16.00 er det start av apertiff på flotte Grefsenkollen
          restaurant over Oslo. Her vil vi etter hvert få servert en deilig
          treretters middag. Utover kvelden blir det selvfølgelig dans og
          spillopper!
        </p>
      </div>

      <div className={"container-text"}>
        {/*<h1>Program</h1>*/}
        {/*<p>tabell</p>*/}

        {/*<h1>Ønskeliste</h1>*/}
        {/*<Link href="/onskeliste">Se ønskeliste på egen side</Link>*/}
      </div>

      {/*<div style={{ width: "600px", margin: "auto" }}>*/}
      {/*  <Program />*/}
      {/*</div>*/}

      {/*<div className={"container"}>*/}
      {/*  <div className={"left"}>*/}
      {/*    <img src="/images/img3.jpg" alt="Forlovelse" />*/}
      {/*  </div>*/}
      {/*</div>*/}

      {/*<div className="content">*/}
      {/*  <div className="left">*/}
      {/*    <h1>Ønskeliste</h1>*/}
      {/*    <p className="coming">Kommer snart</p>*/}
      {/*    /!*<Link href="/onskeliste">Ønskeliste</Link>*!/*/}
      {/*  </div>*/}
      {/*  <div className="center-divider"></div>*/}
      {/*  <div className="right">*/}
      {/*    <Program />*/}
      {/*  </div>*/}
      {/*</div>*/}
    </>
  );
}

// @ts-ignore
function Program() {
  return (
    <>
      <h1>Program</h1>
      <div className="program-list">
        <ProgramHappening time={"16:00"} what={"Ankomst"} />
        <ProgramHappening time={"16:15"} what={"Brudeparet kommer"} />
        <ProgramHappening time={"17:00"} what={"Middag"} />
        <ProgramHappening time={"19:00"} what={"Fest"} />
        <ProgramHappening time={"02:00"} what={"Hjemreise"} />
      </div>
    </>
  );
}

function ProgramHappening({ time, what }: { time: string; what: string }) {
  return (
    <>
      <span className="time">{time}</span>
      <span className="what">{what}</span>
    </>
  );
}
