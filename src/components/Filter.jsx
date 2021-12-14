import { useEffect, useState } from "react"
import data from "../data.json"
import Input from "./UI/input/Input"
import Select from "./UI/select/Select"
import toggleClassHandlers from "./utils/addClassHandlers"

const Filter = ({books, filter, setFilter}) => {
  const [count, setCount] = useState(0)
  useEffect(() => {
    setCount(books.length)
  }, [books])
  return (
    <div className="Filter">
      <div  onClick={() => toggleClassHandlers(document.body.querySelector('.filter__wrapper'), "open")}><i className="fa fa-sliders" aria-hidden="true"></i></div>
      <div className="filter__wrapper">
        <div className="filter__sort">
             
        <div className="filter__price">
          <Select defaultValue="Сортировка по цене" 
                  value={filter.sort.price} 
                  onChange={(e) => setFilter({...filter, sort: {...filter.sort, price: e.target.value}})}
                  options={[{value: "lowPrice", description: "Дешевле"}, {value: "highPrice", description: "Дороже"}]}
                  >
          </Select>
        </div>
        <div className="filter__cover">
          <Select defaultValue="Сортировка по обложке"
                  value={filter.sort.cover} 
                  onChange={(e) => setFilter({...filter, sort: {...filter.sort, cover: e.target.value}})} 
                  options={[{value: "hardcover", description: "Твердая"}, {value: "papercover", description: "Мягкая"}]}
                  >
          </Select>
        </div>
        </div>
        <div className="filter__query">
          <Input value={filter.query} onChange={(e) => {
            setFilter({...filter, query: e.target.value})}} type="text" placeholder="Поиск"/>
        </div>
      </div>
    </div>
  )
}

export default Filter