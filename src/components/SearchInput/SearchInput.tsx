import React, { useState } from 'react';
import styled from 'styled-components';

export const SearchInput = () => {
  const [value, setValue] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <InputContainer>
      <SearchIcon>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7.33333 12.6667C10.2789 12.6667 12.6667 10.2789 12.6667 7.33333C12.6667 4.38781 10.2789 2 7.33333 2C4.38781 2 2 4.38781 2 7.33333C2 10.2789 4.38781 12.6667 7.33333 12.6667Z" stroke="#999999" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M14 14L11.1 11.1" stroke="#999999" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </SearchIcon>
      <StyledInput
        type="text"
        value={value}
        onChange={handleChange}
        placeholder="Введите блюдо или состав"
        hasIcon={true}
      />
      {value && (
        <ClearButton onClick={() => setValue('')}>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 4L4 12" stroke="#999999" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M4 4L12 12" stroke="#999999" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </ClearButton>
      )}
    </InputContainer>
  );
};

const InputContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 276px;
`;

const SearchIcon = styled.div`
  position: absolute;
  left: 16px;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledInput = styled.input<{ hasIcon?: boolean }>`
  width: 100%;
  padding: 12px 16px;
  padding-left: ${props => props.hasIcon ? '44px' : '16px'};
  padding-right: 40px;
  border: 1px solid #E0E0E0;
  border-radius: 8px;
  font-size: 14px;
  line-height: 1.5;
  color: #333;
  outline: none;
  transition: border-color 0.2s;

  &:focus {
    border-color: #4E60FF;
  }

  &::placeholder {
    color: #999999;
  }
`;

const ClearButton = styled.button`
  position: absolute;
  right: 16px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    opacity: 0.8;
  }
`;