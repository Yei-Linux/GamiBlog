import styled from "@emotion/styled";
import { Container } from "@gamiui/standard";

export const Aside = styled(Container)`
  grid-area: aside;
`;
export const Body = styled(Container)`
  grid-area: body;
`;

export const Sections = styled(Container)`
  display: grid;
  grid-template-areas: "aside aside body body body";

  grid-template-rows: auto;
`;
