import illustrationImg from 'assets/images/illustration.svg';
import logoImg from 'assets/images/logo.svg';

import Button from 'components/Button';
import * as S from './styles';

export default function NewRoom() {
  return (
    <S.Container>
      <S.Aside>
        <img
          src={illustrationImg}
          alt="Ilustração  simbolizando perguntas e respostas"
        />
        <strong>Toda pergunta tem uma resposta.</strong>
        <p>Aprenda e compartilhe conhecimento com outras pessoas</p>
      </S.Aside>
      <S.Main>
        <S.Center>
          <img src={logoImg} alt="Letmeask" />

          <S.Title>Crie uma nova sala</S.Title>
          <S.Form>
            <input type="text" placeholder="Nome da sala" />
            <Button type="submit">Criar sala</Button>
          </S.Form>

          <S.LinkHere>
            <p>Quer entrar em uma sala já existente?</p>
            <a href="/">Clique aqui</a>
          </S.LinkHere>
        </S.Center>
      </S.Main>
    </S.Container>
  );
}
