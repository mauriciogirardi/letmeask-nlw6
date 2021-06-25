import { ReactNode, ButtonHTMLAttributes } from 'react';
import * as S from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  isOutlined?: boolean;
}

export default function Button({
  children,
  isOutlined = false,
  ...rest
}: ButtonProps) {
  return (
    <S.Container className={`${isOutlined ? 'outlined' : ''}`} {...rest}>
      {children}
    </S.Container>
  );
}
