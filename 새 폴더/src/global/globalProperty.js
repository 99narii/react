import {atom} from 'recoil';

export const ItemListAtom = atom({
    key : 'ItemList',
    default : []
})

export const IdAtom = atom({
    key : 'Id',
    default : ''
})

export const ValueAtom = atom({
    key : 'Value',
    default : ''
})