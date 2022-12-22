import Main from "../components/layouts/Main";
import Intro from "../components/layouts/Intro";
import ContentPane from "../components/layouts/ContentPane";
import Construction from "../components/layouts/Construction";

export default function Home() {
  return (
    <>
      <Main>
        {/* <Construction /> */}
        <Intro />
        <ContentPane />
      </Main>
    </>
  );
}
