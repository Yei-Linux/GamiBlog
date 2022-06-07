import styled from "@emotion/styled";
import { useDevice } from "@gamiui/standard";
import type { NextPage } from "next";
import Topics from "../src/components/Topics";
import WithLayout from "../src/hocs/WithLayout";
import Aside from "../src/layouts/Aside";
import Sections from "../src/layouts/Sections";

const SectionAside = styled(Sections.Aside)`
  border: 1px solid rgb(219 219 219);
  border-radius: 0.5em;
  position: sticky;
  top: 100px;
  height: fit-content;
`;

const SectionHome = styled(Sections)`
  margin: auto;
  width: fit-content;
`;

const Home: NextPage = () => {
  const { device } = useDevice();
  const hasAside = device === "desktop";

  return (
    <SectionHome hasAside={hasAside}>
      {hasAside && (
        <SectionAside>
          <Aside />
        </SectionAside>
      )}
      <Sections.Body>
        <Topics />
      </Sections.Body>
    </SectionHome>
  );
};

export default WithLayout()(Home);
