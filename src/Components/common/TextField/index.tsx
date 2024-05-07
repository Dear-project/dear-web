import React from "react";
import * as S from "./style";

interface TextFieldProps {
  id: string;
  name: string;
  type: string;
  value: string;
  children: React.ReactNode;
  onchange?: React.ChangeEventHandler<HTMLInputElement>;
  functions: (() => void) | string;
  labelStyle?: React.CSSProperties;
}

const TextField: React.FC<TextFieldProps> = ({
  id,
  name,
  type,
  value,
  children,
  onchange,
  functions,
  labelStyle,
}) => {
  return (
    <>
      <S.TextField>
        <S.TextFieldInput
          required
          id={id}
          name={name}
          onChange={onchange}
          type={type}
          value={value}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              if (typeof functions === "function") {
                functions();
              } else {
                const elemId = functions;
                document.getElementById(elemId)?.focus();
              }
            }
          }}
        />
        <label style={labelStyle}>{children}</label>
      </S.TextField>
    </>
  );
};

export default TextField;
