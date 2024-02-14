import { Nav } from "./nav.tsx";
import "./program.css";

export default function () {
  return (
    <>
      <Nav includeBack={true} />
      <div className={"center-container"}>
        <h1>Program</h1>
        <div className={"program-list"}>
          <ProgramItem time={"13:00"} what={"Vielse i Oslo Rådhus"} />
          <ProgramItem
            time={"16:00"}
            what={"Aperitif på Gresenkollen restaurant"}
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

function ProgramItem({ time, what }: { time: string; what: string }) {
  return (
    <>
      <p className={"time"}>{time}</p>
      <p className={"what"}>{what}</p>
    </>
  );
}
