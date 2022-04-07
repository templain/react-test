import { useState } from "react";

const style = {
  width: "100%",
  height: "200px",
  backgroundColor: "khaki"
};
const buttonStyle = {
    width:"100%",
    height:"90%",
    padding:"10px",
    fontSize:"60px"
};
export const ChildArea = (props) => {
  const { t1, t2 } = props;
  const [toggle, setToggle] = useState(true);
  const onClickToggle = () => setToggle(!toggle);
  return (
    <>
      <div style={style}>
        <button style={buttonStyle} onClick={onClickToggle}>{toggle ? t1 : t2}</button>
      </div>
    </>
  );
};
