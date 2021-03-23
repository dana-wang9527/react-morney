import {useState} from 'react';
import {createId} from './lib/createId';

const deFaultTags=[
    {id: createId(), name: '衣'},
    {id: createId(), name: '食'},
    {id: createId(), name: '住'},
    {id: createId(), name: '行'}
]

const useTags = () => {//封装一个自定义Hook
    const [tags, setTags] = useState<{ id: number; name: string }[]>(deFaultTags);
    return {tags, setTags};
};

export {useTags};
