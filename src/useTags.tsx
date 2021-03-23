import {useState} from 'react';
import {createId} from './lib/createId';

const deFaultTags = [
    {id: createId(), name: '衣'},
    {id: createId(), name: '食'},
    {id: createId(), name: '住'},
    {id: createId(), name: '行'}
];

const useTags = () => {//封装一个自定义Hook
    const [tags, setTags] = useState<{ id: number; name: string }[]>(deFaultTags);
    const findTag = (id: number) => tags.filter(tag => tag.id === id)[0];
    const upDateTag = (id: number, obj: { name: string }) => {
        setTags(tags.map(tag => tag.id === id ? {id, name: obj.name} : tag));
    };

    const deleteTag = (id: number) => {
        setTags(tags.filter(tag => tag.id !== id));
    };
    return {tags, setTags, findTag, upDateTag, deleteTag};
};

export {useTags};
