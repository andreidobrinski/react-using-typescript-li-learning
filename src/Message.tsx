import React from 'react';

interface MessageProps {
  message: string;
  name: string;
}

const Message = (props: MessageProps) => {
  return (
    <p>{props.name}, {props.message}</p>
  );
};

export default Message;