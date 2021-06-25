import * as S from './styles';

type QuestionProps = {
  content: string;
  author: {
    name: string;
    avatar: string;
  };
};

export default function Question({ content, author }: QuestionProps) {
  return (
    <S.Container>
      <p>{content}</p>
      <S.Footer>
        <div>
          <img src={author.avatar} alt={author.name} />
          <span>{author.name}</span>
        </div>
      </S.Footer>
      <S.Wrapper />
    </S.Container>
  );
}
