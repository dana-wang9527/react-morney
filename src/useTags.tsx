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
    const findTagIndex = (id: number) => {
        let result = -1;
        for (let i = 0; i < tags.length; i++) {
            if (tags[i].id === id) {
                result = i;
                break;
            }
        }
        return result;
    };
    const upDateTag = (id: number, obj: { name: string }) => {
        const index = findTagIndex(id);
        //拷贝tags得到tagsClone
        const tagsClone = JSON.parse(JSON.stringify(tags));
       //把tagClone的第index删掉，换成{id：id, name: obj.name}
        tagsClone.splice(index, 1, {id, name: obj.name});
        setTags(tagsClone);
    };
    return {tags, setTags, findTag,upDateTag,findTagIndex};
};

export {useTags};
