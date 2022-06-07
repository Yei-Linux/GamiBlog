import { Container, Title } from "@gamiui/standard";
import { topics } from "../../constants/topics";
import Topic from "./Topic";

const Topics = () => {
  return (
    <Container>
      <Container>
        <Title level="h2">Last Dev Posts 💪</Title>
      </Container>
      {topics.map(({ title, description, tags, releaseDate, src, link }) => (
        <Topic
          link={link}
          src={src}
          title={title}
          description={description}
          tags={tags}
          releaseDate={releaseDate}
        />
      ))}
    </Container>
  );
};

export default Topics;
