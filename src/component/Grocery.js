import React, {useState} from 'react'
import "./Grocery.css"
import { ItemList } from './ItemList';

export const Grocery = () => {

    const [list, setList] = useState([]);

    const [inputValue, setInputValue] = useState("");

    const onClickHandler = () => {
        setList((prevData) => {
            return [...prevData,{
                    name: inputValue,
                    purchased : false
                }
            ]
        })

        setInputValue("");
    }


  return (

    <div className='contain'>
        <div className='main'>
            <h1>Grocery List</h1>
            <div className='input-container'>
                <input className='input-text' type='text'
                    value={inputValue}
                    onChange={(e) => {
                        setInputValue(e.target.value)
                    }}
                ></input>
                <button className='btn' onClick={onClickHandler}>Add Item</button>
            </div>
            
            <div>
                {list.map((elem, index) => <ItemList index={index} list={list} setList={setList} itemName={elem.name} isPurchased={elem.purchased} key={index}></ItemList>)}
            </div>
        </div>
    </div>
    
  )
}
