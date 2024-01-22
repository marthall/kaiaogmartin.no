import { Nav } from "./nav.tsx";

export default function () {
  return (
    <>
      <Nav includeBack={true} />
      <div className={"center-container"}>
        <h1>Program</h1>
        <p className={"coming"}>Kommer</p>
      </div>
    </>
  );
}
