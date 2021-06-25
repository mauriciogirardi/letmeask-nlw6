import { useCallback, useState, FormEvent } from 'react';
import { useHistory } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';

import illustrationImg from 'assets/images/illustration.svg';
import logoImg from 'assets/images/logo.svg';
import googleIconImg from 'assets/images/google-icon.svg';

import { database } from 'services/firebase';
import { useAuth } from 'hooks/auth';
import Button from 'components/Button';
import * as S from './styles';

export default function Home() {
  const history = useHistory();
  const { signInWithGoogle, user } = useAuth();
  const [roomCode, setRoomCode] = useState('');
  const [filled, setFilled] = useState(false);
  const [loading, setLoading] = useState(false);
  const [roomExists, setRoomExists] = useState(false);

  const navigateCreateRoom = useCallback(async () => {
    if (!user) {
      await signInWithGoogle();
    }

    history.push('/rooms/new');
  }, [history, user, signInWithGoogle]);

  const handleJoinRoom = useCallback(
    async (event: FormEvent) => {
      event.preventDefault();
      setLoading(true);

      if (!roomCode.trim()) {
        setLoading(false);
        return setFilled(true);
      }

      const roomRef = await database.ref(`rooms/${roomCode}`).get();

      setLoading(false);

      if (!roomRef.exists()) {
        return setRoomExists(true);
      }

      if (roomRef.val().endAt) {
        return toast.error(`A sala ${roomCode} já esta fechada!`);
      }

      history.push(`/room/${roomCode}`);
    },
    [roomCode, history],
  );

  const onChange = useCallback(e => {
    const { value } = e.target;

    if (value.trim()) {
      setFilled(false);
      setRoomExists(false);
    }
    setRoomCode(value);
  }, []);

  return (
    <S.Container>
      <Toaster position="top-right" />
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
          <S.Form onSubmit={handleJoinRoom} isFilled={!filled}>
            <input
              type="text"
              placeholder={
                filled
                  ? 'Para entrar na sala digite o código'
                  : 'Digite o código da sala'
              }
              value={roomCode}
              onChange={onChange}
            />
            {roomExists && <S.Warning>Sala não existe!</S.Warning>}
            <Button type="submit">
              {loading ? 'Carregando...' : 'Entrar na sala'}
            </Button>
          </S.Form>
        </S.Center>
      </S.Main>
    </S.Container>
  );
}
