import {ReactNode, memo} from 'react'
import './App.css'
//
import List from "./List";

export type Item = string | number | ReactNode | Date;

export default memo(function App() {

    const items: Item[] = [
        'This a string',
        12345,
        new Date(),
        <p>This is an element</p>
    ]

    return (
        <div className='p-5'>
            <List list={items}/>
        </div>
    )
})
