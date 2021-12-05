import cl from "./Input.module.css"

const Input = ({...options}) => {
  return (
    <input className={cl.Input} {...options} />
  )
}

export default Input