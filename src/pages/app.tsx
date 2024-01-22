import Router, { Route } from "preact-router";
import Frontpage from "./frontpage.tsx";
import Onskeliste from "./onskeliste.tsx";
import Program from "./program.tsx";
import Info from "./info.tsx";

export function App() {
  return (
    <>
      <Router>
        <Route path="/" component={Frontpage} />
        <Route path="/program" component={Program} />
        <Route path="/info" component={Info} />
        <Route path="/onskeliste" component={Onskeliste} />
      </Router>
    </>
  );
}
