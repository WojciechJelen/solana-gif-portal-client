import React, { useState, useCallback } from "react";

type PropsType = {
  onSubmit: (data: string) => void;
};

const SubmitGifForm: React.FC<PropsType> = ({ onSubmit }) => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = useCallback(
    async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      try {
        await onSubmit(inputValue);
      } catch (error) {
        console.error(error);
      } finally {
        setInputValue("");
      }
    },
    [inputValue, onSubmit]
  );

  const onInputChange = (event: React.FormEvent<HTMLInputElement>) => {
    const { value } = event.currentTarget;
    setInputValue(value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter gif link!"
        onChange={onInputChange}
        value={inputValue}
      />
      <button type="submit" className="cta-button submit-gif-button">
        Submit
      </button>
    </form>
  );
};

export default SubmitGifForm;
