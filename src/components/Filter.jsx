import { useEffect, useState } from "react"
import data from "../data.json"
import Input from "./UI/input/Input"

const Filter = ({books, filter, setFilter}) => {
  const [count, setCount] = useState(0)
  useEffect(() => {
    setCount(books.length)
  }, [books])
  return (
    <div className="Filter">
      <div className="filter__wrapper">
        <div className="filter__sort">
             <div className="filter__count">Количество книг: <span style={{fontSize: "20px"}}>{count} </span></div>
        <div className="filter__price">
          <select value={filter.sort.price} onChange={(e) => setFilter({...filter, sort: {...filter.sort, price: e.target.value}})} id="">
            <option value="default">Сортировка по цене</option>
            <option value="lowPrice">Дешевле</option>
            <option value="highPrice">Дороже</option>
          </select>
        </div>
        <div className="filter__cover">
          <select value={filter.sort.cover} onChange={(e) => setFilter({...filter, sort: {...filter.sort, cover: e.target.value}})} id="">
            <option value="default">Сортировка по обложке</option>
            <option value="hardcover">Твердая</option>
            <option value="papercover">Мягкая</option>
          </select>
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