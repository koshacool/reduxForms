import React from 'react';
import Select from 'react-select';

const ReduxFormSelect = ({ input, options, ...restProps }) => (
  <Select
    {...input}
    {...restProps}
    options={options}
    onChange={value => input.onChange(value)}
    onBlur={() => input.onBlur(input.value)}
    isMulti
  />
);

export default ReduxFormSelect
