import { useCallback } from 'react';
import toast, { Toaster } from 'react-hot-toast';

import copyImg from 'assets/images/copy.svg';
import * as S from './styles';

type RoomCodeProps = {
  code: string;
};

export default function RoomCode({ code }: RoomCodeProps) {
  const copyRoomCodeToClipboard = useCallback(() => {
    navigator.clipboard.writeText(code);
    toast.success('Copiado!', {
      style: {
        padding: '5px',
        fontSize: '13px',
      },
    });
  }, [code]);

  return (
    <>
      <Toaster position="top-right" />

      <S.Container
        onClick={copyRoomCodeToClipboard}
        title="Copiar o código da Sala"
      >
        <div>
          <img src={copyImg} alt="Copy room code" />
        </div>
        <span>{code}</span>
      </S.Container>
    </>
  );
}
