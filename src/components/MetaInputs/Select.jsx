import React from "react";
import PropTypes from "prop-types";
import SelectWithOptionManager from "./utils/SelectWithOptionManager";

function Select({ value, onChange, additional, onAdditionalChange }) {
  return (
    <SelectWithOptionManager
      value={value}
      additional={additional}
      onChange={onChange}
      onAdditionalChange={onAdditionalChange}
    />
  );
}

Select.defaultValue = "";
Select.defaultAdditional = {
  options: [],
};

Select.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  additional: PropTypes.shape({
    options: PropTypes.array,
  }).isRequired,
  onAdditionalChange: PropTypes.func.isRequired,
};

export default Select;
