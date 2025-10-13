import React, { type PropsWithChildren, type MouseEvent } from "react";

interface MyButtonProps extends PropsWithChildren {
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  subTitle: string;
}

const MyButton = (props: MyButtonProps) => {
  return (
    <>
      <button onClick={props.onClick}>{props.children}</button>
      <p>{props.subTitle}</p>
    </>
  );
};

export default MyButton;
