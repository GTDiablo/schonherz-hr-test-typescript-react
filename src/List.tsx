import React, {memo} from 'react';
//
import {Item} from "./App";
import ListItem from "./ListItem";

export type ListProps = {
    list: Item[]
}

const MyList: React.FC<ListProps> = ({list}: ListProps) => {
    return (
        <div className='flex flex-row gap-5 p-5 border-2 border-solid border-black rounded-lg w-fit'>
            {list.map((item: Item, index: number) => (
                <ListItem key={index} item={item}/>
            ))}
        </div>
    )
}

export default memo(MyList);