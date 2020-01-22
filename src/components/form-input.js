import React from 'react';

const Input = React.forwardRef(({label, name, type, ...props}, ref) => (
  <>
    <label>{label || getLabel(name)}</label>
    <input
      className="form-control"
      type={type}
      name={name}
      ref={ref}
      {...props}
    />
  </>
));

const Select = React.forwardRef(({name, options}, ref) => (
  <>
    <label>{getLabel(name)}</label>
    <select className="form-control" name={name} ref={ref}>
      {options.map((g, i) => (
        <option value={g.value} key={i}>
          {g.label}
        </option>
      ))}
    </select>
  </>
));

const CheckBox = React.forwardRef(
  ({name, type, label, checked, handleChange}, ref) => (
    <>
      <label className="form-check-label">
        {label}
        <input
          className="form-check-input"
          type={type}
          defaultChecked={checked}
          ref={ref}
          name={name}
          onChange={() => handleChange(label)}
        />
      </label>
    </>
  )
);

export {Input, Select, CheckBox};

function getLabel(str = '') {
  str = str.replace(/([a-z](?=[A-Z]))/g, '$1 ');
  const label = str.charAt(0).toUpperCase() + str.slice(1);

  return label;
}
