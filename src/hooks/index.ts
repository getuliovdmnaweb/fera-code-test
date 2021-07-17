import { useState } from "react";

interface UseInputProps {
  onFetch: () => void;
}

export const useInputSubmit = ({ onFetch }: UseInputProps) => {
  const [inputText, setInputText] = useState("");

  const clearInput = () => {
    setInputText("");
  };

  const onSubmit = () => {
    onFetch();
    clearInput();
  };

  return {
    inputText,
    setInputText,
    onSubmit,
  };
};
