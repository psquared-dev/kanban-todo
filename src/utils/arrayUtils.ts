type Item =  {
    id: string;
}

export const findItemIndexById = <TItem extends Item>(items: TItem[], id: string) => {
    return items.findIndex((item) => item.id === id)
}

// findItemIndexById([{text: "aa", id: "1"}], "11")

export function removeItemAtIndex<TItem>(array: TItem[], index: number) {
    return [...array.slice(index), ...array.slice(index + 1)];
}

export function insertItemAtIndex<TItem>(array: TItem[], item: TItem, index: number) {
    return [...array.slice(0, index), item, ...array.slice(index)];
}

export function moveItem<TItem>(array: TItem[], from: number, to: number){
    const item = array[from];
    return insertItemAtIndex(removeItemAtIndex(array, from), item, to);
}
