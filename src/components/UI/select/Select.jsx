import cl from "./Select.module.css"

const Select = ({defaultValue, value, onChange, options}) => {
  return (
    <select className={cl.Select}
            value={value}
            onChange={onChange}
            >
      <option value="default" >{defaultValue}</option>
      {options.map((option, index) => <option key={index} value={option.value}>{option.description}</option>)}
    </select>
  )
}

export default Select