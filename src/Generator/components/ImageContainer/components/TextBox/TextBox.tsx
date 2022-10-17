import React, { useEffect, useRef, RefObject, useContext } from "react";
import { Box } from "types/Box";
import { TextBoxDiv } from "./styles";
import { SelectImageContext } from "context/context";

type TextBoxProp = {
  containerRef: RefObject<HTMLDivElement> | null;
  textBoxElement: Box;
  index: number;
};
const TextBox: React.FC<TextBoxProp> = (props) => {
  const { textBoxes, setTextBoxes } = useContext(SelectImageContext);
  const boxRef = useRef<HTMLDivElement>(null);
  const isClicked = useRef<boolean>(false);
  const coords = useRef<{
    startX: number;
    startY: number;
    lastX: number;
    lastY: number;
  }>({
    startX: 0,
    startY: 0,
    lastX: 0,
    lastY: 0,
  });
  useEffect(() => {
    const handleUpdateFieldChanged = (value: any, fieldName: keyof Box) => {
      let newArr: Box[] = textBoxes ? [...textBoxes] : [];
      // @ts-ignore
      newArr[props.index][fieldName] = value;
      setTextBoxes(newArr);
    };

    if (!props.containerRef) return;
    if (!boxRef.current || !props.containerRef.current) return;

    const box = boxRef.current;
    const container = props.containerRef.current;
    let isBoxOutOfTheX: boolean;
    let isBoxOutOfTheY: boolean;
    const onMouseDown = (e: MouseEvent) => {
      isClicked.current = true;
      coords.current.startX = e.clientX;
      coords.current.startY = e.clientY;
    };

    const onMouseUp = (e: MouseEvent) => {
      isClicked.current = false;
      coords.current.lastX = box.offsetLeft;
      coords.current.lastY = box.offsetTop;
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!isClicked.current) return;
      const nextX = e.clientX - coords.current.startX + coords.current.lastX;
      const nextY = e.clientY - coords.current.startY + coords.current.lastY;
      isBoxOutOfTheX =
        container.offsetWidth < nextX + box.offsetWidth || nextX < 0;
      isBoxOutOfTheY =
        container.offsetHeight < nextY + box.offsetHeight || nextY < 0;
      if (!isBoxOutOfTheY) handleUpdateFieldChanged(nextY, "y");
      if (!isBoxOutOfTheX) handleUpdateFieldChanged(nextX, "x");
    };

    box.addEventListener("mousedown", onMouseDown);
    box.addEventListener("mouseup", onMouseUp);
    container.addEventListener("mousemove", onMouseMove);
    container.addEventListener("mouseleave", onMouseUp);

    const cleanup = () => {
      box.removeEventListener("mousedown", onMouseDown);
      box.removeEventListener("mouseup", onMouseUp);
      container.removeEventListener("mousemove", onMouseMove);
      container.removeEventListener("mouseleave", onMouseUp);
    };

    return cleanup;
  });

  return (
    <TextBoxDiv
      ref={boxRef}
      className="box"
      x={props.textBoxElement.x}
      y={props.textBoxElement.y}
      fontWeight={props.textBoxElement.fontWeight}
      color={props.textBoxElement.color}
      colorOutlined={props.textBoxElement.colorOutlined}
      outlineWeight={props.textBoxElement.outlineWeight}
    >
      {props.textBoxElement.text}
    </TextBoxDiv>
  );
};

export default TextBox;
