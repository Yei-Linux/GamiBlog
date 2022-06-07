import { Container, Icon, Link, RichText, Title } from "@gamiui/standard";
import * as React from "react";
import * as S from "./styles";
import classNames from "classnames";
import NextLink from "next/link";

export interface ITopic {
  title: string;
  description: string;
  tags: string[];
  releaseDate: string;
  src: string;
  link: string;
}

const Topic = ({
  title,
  description,
  tags,
  releaseDate,
  src,
  link,
}: ITopic) => {
  return (
    <S.Topic
      width="fit"
      margin="2rem 0"
      padding="1rem"
      className={classNames("flex", "justify-between", "items-center")}
    >
      <Container className={classNames("topic__image")}>
        <S.TopicImage src={src} />
      </Container>

      <Container className={classNames("topic__body")}>
        <Container className={classNames("topic__bodychild")}>
          <RichText text={releaseDate?.toUpperCase()} />
        </Container>
        <Container className={classNames("topic__bodychild")}>
          <Title level="h3">{title}</Title>
        </Container>
        <Container className={classNames("topic__bodychild")}>
          <Title level="h5" fontWeight="medium">
            {description}
          </Title>
        </Container>
        <S.Tags className={classNames("flex", "topic__bodychild")}>
          {tags.map((tag) => (
            <S.TagCustom text={tag} padding="8px" />
          ))}
        </S.Tags>
        <S.Actions
          className={classNames("flex", "justify-end", "topic__bodychild")}
        >
          <NextLink href={link}>
            <Link href={link}>
              <S.ActionsButton rounded="full" padding="10px 12px">
                <Icon name="preview" />
              </S.ActionsButton>
            </Link>
          </NextLink>
          <S.ActionsButton rounded="full" padding="10px 12px">
            <Icon name="code" />
          </S.ActionsButton>
        </S.Actions>
      </Container>
    </S.Topic>
  );
};

export default Topic;
