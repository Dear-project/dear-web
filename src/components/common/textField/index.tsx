import React from "react";
import * as S from "./style";
import { useRecoilState } from "recoil";
import { ErrorStateAtom } from "src/store/common/common.store";
import { CSSObject } from "styled-components";

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

const TextField = ({ id, name, type, value, children, onchange, functions, labelStyle }: TextFieldProps) => {
  const [errorState] = useRecoilState<Record<string, string>>(ErrorStateAtom);
  const error = errorState[id as keyof typeof errorState];
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
        <label style={type === "date" ? S.DateLabelStyle : labelStyle}>{children}</label>
      </S.TextField>
      {typeof error === "string" && (
        <S.ErrorText style={{ color: "#ED3B3B", fontSize: "12px" }}>
          <div>{error}</div>
        </S.ErrorText>
      )}
    </>
  );
};

export default TextField;
