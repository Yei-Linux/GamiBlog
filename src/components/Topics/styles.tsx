import styled from "@emotion/styled";
import { Button, Container, Image, Tag } from "@gamiui/standard";

export const TagCustom = styled(Tag)`
  font-size: 12px;
`;

export const Tags = styled(Container)`
  gap: 5px;
`;

export const TopicImage = styled(Image)`
  border-radius: 0.6em;
`;

export const ActionsButton = styled(Button)`
  background-color: transparent;
`;

export const Actions = styled(Container)`
  gap: 5px;
`;

export const Topic = styled(Container)`
  background-color: rgb(251 251 251);
  border-radius: 0.4em;
  gap: 15px;

  .topic__bodychild {
    margin-bottom: 1rem;
  }
`;
