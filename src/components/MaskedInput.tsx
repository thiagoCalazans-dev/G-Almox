import React, { ChangeEventHandler, FormEvent, ReactEventHandler } from 'react';
import InputMask from 'react-input-mask';

const onlyNumbers = (str: string) => str.replace(/[^0-9]/g, '');

type Props = {
    value: string;
    onChange: ({}) => void;
    name: string;
    mask: string;
    className: string;
    placeholder: string;
}


const MaskedInput = ({ value, onChange, name, mask, className, placeholder }: Props) => {
    
function handleChange(event: any ) {
    onChange({
      ...event,
      target: {
        ...event.target,
        name,
        value: onlyNumbers(event.target.value)
      }
    });
  }

   return (
    <InputMask
    className={className}
      name={name}
      mask={mask}
      value={value}
      type="text"
      onChange={handleChange}
      placeholder={placeholder}
    />
  );
};

export default MaskedInput;
