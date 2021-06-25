import { ReactNode } from 'react';
import * as S from './styles';

type QuestionProps = {
  content: string;
  author: {
    name: string;
    avatar: string;
  };
  children: ReactNode;
};

export default function Question({ content, author, children }: QuestionProps) {
  return (
    <S.Container>
      <p>{content}</p>
      <S.Footer>
        <div>
          <img src={author.avatar} alt={author.name} />
          <span>{author.name}</span>
        </div>
        <S.Wrapper>{children}</S.Wrapper>
      </S.Footer>
    </S.Container>
  );
}
