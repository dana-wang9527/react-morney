import {useEffect, useState} from 'react';
import {useUpdate} from './useUpdate';

type RecordItem = {
    tagIds: number[]
    note: string
    category: '-' | '+'
    amount: string
    createAt: string
}
type newRecordItem = Omit<RecordItem,'createAt'>
const useRecord = () => {
    const [records, setRecords] = useState<RecordItem[]>([]);
    useEffect(() => {
        setRecords(JSON.parse(window.localStorage.getItem('records') || '[]'));
    }, []);
    useUpdate(() => {
        window.localStorage.setItem('records', JSON.stringify(records));
    }, [records]);
    const addRecord = (newRecord: newRecordItem) => {
        const record={...newRecord,createAt:(new Date()).toISOString()}
        setRecords([...records, record]);
    };
    return {records, addRecord};
};


export {useRecord};