import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
const options =[
    {
        label: 'The color of Red',
        value: "red"
    },
    {
        label: 'The color of Green',
        value: 'green',
    },
    {
        label: 'A shade of Blue',
        value: 'blue'
    }
]
const items = [
    {
        title: 'What is React',
        content: 'React is Frontend JavaScript Framework'
    },
    {
        title:'Why use React',
        content: 'React is the favorite JavaScipt Framework'
    },
    {
        title: 'How do you use React',
        content:'You use React by creating components'
    }
];
export default ()=>{
    const [selected,setSelected] = useState(options[0])
    return (
        <div>
           <Dropdown 
           selected = {selected}
           OnSelectedChange = {setSelected}
           options={options}
           />
        </div>
    );
};