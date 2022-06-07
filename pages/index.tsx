import styled from "@emotion/styled";
import type { NextPage } from "next";
import Topics from "../src/components/Topics";
import WithLayout from "../src/hocs/WithLayout";
import Sections from "../src/layouts/Sections";

const SectionHome = styled(Sections)`
  margin: auto;
`;

const Home: NextPage = () => {
  return (
    <SectionHome>
      <Sections.Aside>Test</Sections.Aside>
      <Sections.Body>
        <Topics />
      </Sections.Body>
    </SectionHome>
  );
};

export default WithLayout()(Home);
