import React, { useState } from 'react';
import './PixelInput.css';

interface PixelInputProps {
  label?: string;
  placeholder?: string;
  initialValue?: string;
  onChange?: (value: string) => void;
}

export default function PixelInput({
  label,
  placeholder = 'Type something...',
  initialValue = '',
  onChange,
}: PixelInputProps) {
  const [value, setValue] = useState<string>(initialValue);

  // Type the event handler explicitly for a text input
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setValue(newValue);

    // Fire optional callback if provided by parent
    if (onChange) {
      onChange(newValue);
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', maxWidth: '300px' }}>
      {label && <label>{label}</label>}
      <span className='pixel-box'>
        <input
          type='text'
          value={value}
          onChange={handleChange}
          placeholder={placeholder}
          className='invisible-input'
        />
      </span>
    </div>
  );
}
