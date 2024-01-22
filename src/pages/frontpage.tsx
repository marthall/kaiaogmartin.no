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
          Hei og velkommen! Vi gifter oss 16.mars 2024 i Oslo og gleder oss
          masse til å dele denne dagen med dere ❤️ Vielsen foregår i Oslo rådhus
          og er for de nærmeste før vi tar turen opp til Grefsenkollen
          restaurant for fest!
        </p>
        <p>
          På denne siden kommer vi til å poste litt informasjon om hva som skal
          skje i løpet av dagen.
        </p>
        <h1>Vielse</h1>
        <p className={"coming"}>Kommer</p>
        <h1>Middag og fest</h1>
        <p className={"coming"}>Kommer</p>
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
