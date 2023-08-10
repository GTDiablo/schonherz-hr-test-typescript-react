import React, {memo, ReactNode, useEffect, useState} from 'react';
import cx from 'classnames';
import format from 'date-fns/format'
//
import {Item} from "./App";

type ListItemProps = {
    item: Item
}

const ListItem: React.FC<ListItemProps> = ({item}: ListItemProps) => {
    const [isSelected, setIsSelected] = useState<boolean>(false);
    const [timeoutId, setTimeoutId] = useState<ReturnType<typeof setTimeout>>();

    const onClickItem = () => {
        setIsSelected(prevState => !prevState);
    }

    useEffect(() => {
        if (!isSelected && !!timeoutId) {
            clearTimeout(timeoutId)
            setTimeoutId(undefined);
        }

        if (isSelected && !timeoutId) {
            setTimeoutId(setTimeout(() => {
                    setIsSelected(false);
                }, 1000)
            )
        }

    }, [isSelected, timeoutId]);

    const formatItem = (item: Item): ReactNode => {
        if (item instanceof Date) {
            return format(item, 'yyyy-mm-dd');
        }
        return item;
    }

    return (
        <div
            className={
                cx(
                    'cursor-pointer p-3 border-2 border-solid border-cyan-200 rounded-lg select-none bg-cyan-100',
                    {'!bg-cyan-300 !border-cyan-300': isSelected}
                )}

            onClick={onClickItem}>
            {formatItem(item)}
        </div>
    )
}

export default memo(ListItem);