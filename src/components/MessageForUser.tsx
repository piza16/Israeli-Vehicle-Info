interface IProps {
    message: string;
  }
  const styling={
      color:"red",
      fontWeigth:"bold",
      fontSize:"2.5rem"
  }
  
  export const MessageForUser = (props: IProps) => {
    return <h2 style={styling} className="text-center">{props.message}</h2>;
  };
  