import React from 'react'

interface IinputField {
    label: string;
    id?: string;
    onChange: any;
    onFocus?: any;
    name?: any;
    type: any;
    autoComplete?: any;
    onBlur? : any;
    disabled? : boolean;
    value: any;
    placeholder?: any;
    required?: boolean

}

function InputField({id, name, label, required, type, autoComplete, placeholder, onFocus, onChange, onBlur, disabled, value}: IinputField) {
  return (
<div>
    <div className="flex items-center justify-between">
        <label htmlFor={name} className="block text-sm font-medium leading-6">
            {label}
        </label>

    </div>
    <div className="mt-2">
        <input
            id={id}
            name={name}
            type={type}
            autoComplete={autoComplete}
            onFocus ={onFocus}
            onChange={ onChange}
            onBlur={onBlur}
            value={value}
            placeholder={placeholder}
            required={required}
            className="block w-full border-2 border-zinc-300 bg-white/5 p-3 shadow-sm ring-gray-300 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
        />
    </div>
</div>
  )
}

export default InputField
