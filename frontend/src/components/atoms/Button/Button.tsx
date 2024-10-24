import { MouseEventHandler, ReactNode } from 'react';
import classNames from 'classnames';
import * as styles from './Button.css';

export interface Props {
  type?: 'primary' | 'secondary' | 'small';
  size?: 'xxsm' | 'xsm' | 'sm' | 'md' | 'lg' | 'xlg';
  disabled?: boolean;
  children: ReactNode;
  handleClick: MouseEventHandler<HTMLButtonElement>;
}

export const Button = (props: Props) => {
  const {
    type = 'small',
    disabled = false,
    size = 'fit',
    children,
    handleClick,
  } = props;
  return (
    <button
      className={classNames(
        styles.root,
        size && styles[size],
        type && styles[type],
      )}
      disabled={disabled}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};
