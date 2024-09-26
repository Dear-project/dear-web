'use client';
import { ReactNode, useEffect, useState } from "react";
import ReactDom from "react-dom";

export const Portal = ({ children }: { children: ReactNode }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true); // 컴포넌트가 마운트될 때만 실행
  }, []);

  if (!mounted) {
    return null; // SSR 단계에서는 아무것도 렌더링하지 않음
  }

  const element = document.getElementById("modal") as HTMLElement;
  return ReactDom.createPortal(children, element);
};
