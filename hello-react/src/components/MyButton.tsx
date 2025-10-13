import React, { type PropsWithChildren, type MouseEvent } from "react";

// interface MyButtonProps {
//   children?: ReactNode;
// }

// type MyBtnProps = { onClick: () => void;} & PropsWithChildren;

interface MyButtonProps extends PropsWithChildren {
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
}

const MyButton = (props: MyButtonProps) => {
  return <button onClick={props.onClick}>{props.children}</button>;
};

export default MyButton;
