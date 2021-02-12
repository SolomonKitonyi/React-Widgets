import React from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
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
    return (
        <div>
           <Search/>
        </div>
    );
};