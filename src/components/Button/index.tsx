import { ReactNode, ButtonHTMLAttributes } from 'react';
import * as S from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  isOutlined?: boolean;
  isDelete?: boolean;
  isConfirmation?: boolean;
}

export default function Button({
  children,
  isOutlined = false,
  isDelete = false,
  isConfirmation = false,
  ...rest
}: ButtonProps) {
  return (
    <S.Container
      isOutlined={isOutlined}
      isDelete={isDelete}
      isConfirmation={isConfirmation}
      {...rest}
    >
      {children}
    </S.Container>
  );
}
