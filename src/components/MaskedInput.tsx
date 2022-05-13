import React, { ChangeEventHandler } from 'react';
import InputMask from 'react-input-mask';

const onlyNumbers = (str: string) => str.replace(/[^0-9]/g, '');

type Props = {
    value: string;
    onChange: ({}) => void;
    name: string;
    mask: string;
}


const MaskedInput = ({ value, onChange, name, mask }: Props) => {
    
// function handleChange(event: string) {
//     onChange({
//       ...event,
//       target: {
//         ...event.target,
//         name,
//         value: onlyNumbers(event.target.value)
//       }
//     });
//   }

   return (
    <InputMask
      name={name}
      mask={mask}
      value={value}
      onChange={onChange}
    />
  );
};

export default MaskedInput;
