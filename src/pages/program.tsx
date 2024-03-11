import { Nav } from "./nav.tsx";
import "./program.css";

export default function () {
  return (
    <>
      <Nav includeBack={true} />
      <div className={"center-container"}>
        <h1>Program</h1>
        <div className={"program-list"}>
          <ProgramItem
            time={"13:00"}
            what={"Vielse i Oslo Rådhus"}
            extra={
              "For familie og forlovere.\n" +
              "Oppmøte 12:45 ved Fridtjof Nansens plass"
            }
          />
          <ProgramItem
            time={"13:15"}
            what={"Hipp hurra utenfor Rådhuset"}
            extra={
              "For de som vil!\n" +
              "Mellom Oslo Rådhus og Grefsenkollen klarer\n" +
              "gjestene seg selv, imens brudeparet og forlovere tar\n" +
              "bilder. Det er veldig lov å ta en matbit eller øl\n" +
              "sammen med bekjente før turen går til Grefsenkollen"
            }
          />
          <ProgramItem
            time={"16:00"}
            what={"Aperitif på Gresenkollen restaurant"}
            extra={"Buss 56B kl 15:45 fra Storo er perfekt!"}
          />
          <ProgramItem time={"17:00"} what={"Middag med taler og ablegøyer"} />
          <ProgramItem time={"21:00"} what={"Leker, dans, kaffe og kaker"} />
          <ProgramItem time={"00:30"} what={"Nattmat"} />
          <ProgramItem time={"02:00"} what={"Hjemreise"} />
        </div>
      </div>
    </>
  );
}

function ProgramItem({
  time,
  what,
  extra,
}: {
  time: string;
  what: string;
  extra?: string;
}) {
  return (
    <>
      <p className={"time"}>{time}</p>
      <p className={"what"}>{what}</p>
      {extra && <p className={"extra"}>{extra}</p>}
    </>
  );
}
