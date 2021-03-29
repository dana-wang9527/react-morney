import {useEffect, useState} from 'react';
import {useUpdate} from './useUpdate';

export type RecordItem = {
    tagIds: number[]
    note: string
    category: '-' | '+'
    amount: string
    createAt: string
}
type newRecordItem = Omit<RecordItem, 'createAt'>
const useRecord = () => {
    const [records, setRecords] = useState<RecordItem[]>([]);
    useEffect(() => {
        setRecords(JSON.parse(window.localStorage.getItem('records') || '[]'));
    }, []);
    useUpdate(() => {
        window.localStorage.setItem('records', JSON.stringify(records));
    }, records);
    const addRecord = (newRecord: newRecordItem) => {
        if (newRecord.tagIds.length === 0) {
            alert('请选择标签');
            return false;
        }
        const record = {...newRecord, createAt: (new Date()).toISOString()};
        setRecords([...records, record]);
        return true
    };

    const deleteRecord =(oneRecord: RecordItem)=>{
        const index = records.indexOf(oneRecord);
        if(window.confirm('确认要删除这条记录吗')){
            const newRecords = JSON.parse(JSON.stringify(records));
            newRecords.splice(index, 1);
            window.alert("删除记录成功");
            setRecords(newRecords);
        }
    };


    return {records, addRecord,deleteRecord};
};


export {useRecord};