import React from 'react';

// interface to declare all our prop types
interface Props {
  children: React.ReactNode;
  onClick: () => void;
  variant?: string, // default, primary, info, success, warning, danger, dark
  size?: string, // sm, md, lg
  disabled?: boolean;
  className?:string;
  id?:string;
}

// button component, consuming props
const Button: React.FC<Props> = ({
  children,
  onClick,
  variant = 'default',
  disabled,
  id,
  ...rest
}) => {
  return (
    <button
      id={`${id}`}
      className={'btn'}
      onClick={onClick}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
