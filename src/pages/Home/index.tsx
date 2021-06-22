import { useCallback } from 'react';
import { useHistory } from 'react-router-dom';

import illustrationImg from 'assets/images/illustration.svg';
import logoImg from 'assets/images/logo.svg';
import googleIconImg from 'assets/images/google-icon.svg';

import { useAuth } from 'hooks/auth';
import Button from 'components/Button';
import * as S from './styles';

export default function Home() {
  const history = useHistory();
  const { signInWithGoogle, user } = useAuth();

  const navigateCreateRoom = useCallback(async () => {
    if (!user) {
      await signInWithGoogle();
    }

    history.push('/rooms/new');
  }, [history, user, signInWithGoogle]);

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
          <button type="button" onClick={navigateCreateRoom}>
            <img src={googleIconImg} alt="Logo do Google" />
            Crie sua sala com o Google
          </button>
          <S.Line>ou entre em uma sala</S.Line>
          <S.Form>
            <input type="text" placeholder="Digite o código da sala" />
            <Button type="submit">Entrar na sala</Button>
          </S.Form>
        </S.Center>
      </S.Main>
    </S.Container>
  );
}
