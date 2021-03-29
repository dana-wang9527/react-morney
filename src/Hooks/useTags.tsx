import {useEffect, useState} from 'react';
import {createId} from '../lib/createId';
import {useUpdate} from './useUpdate';



const useTags = () => {//封装一个自定义Hook
    const [tags, setTags] = useState<{ id: number; name: string }[]>([]);
    useEffect(() => {
        let localTags = JSON.parse(window.localStorage.getItem('tags') || '[]');
        if (localTags.length === 0) {
            localTags = [
                {id: createId(), name: '衣'},
                {id: createId(), name: '食'},
                {id: createId(), name: '住'},
                {id: createId(), name: '行'}
            ];
        }
        setTags(localTags);
    }, []); //挂载时执行
    useUpdate(() => {
        window.localStorage.setItem('tags', JSON.stringify(tags));
    }, tags);
    const findTag = (id: number) => tags.filter(tag => tag.id === id)[0];
    const upDateTag = (id: number, obj: { name: string }) => {
            const tagName= window.prompt('新标签的名称为');
        if (tagName !== null) {
            if (tagName === '') {
                window.alert('标签名不能为空');
            } else if (tags.filter(tag=>tag.name===tagName)[0]) {
                window.alert('标签名重复啦');
            } else {
                setTags(tags.map(tag => tag.id === id ? {id, name: tagName} : tag));
                window.alert("修改标签名成功");
            }
        }
    };

    const deleteTag = (id: number) => {
        if(window.confirm('确认要删除这条记录吗')){
        setTags(tags.filter(tag => tag.id !== id));
        window.alert('删除标签成功');
    }};


    const addTag = () => {
        const tagName = window.prompt('新标签的名称为');
        if (tagName !== null) {
            if (tagName === '') {
                window.alert('标签名不能为空');
            } else if ( tags.filter(tag=>tag.name===tagName)[0]) {
                window.alert('标签名重复啦');
            } else {
                setTags([...tags, {id: createId(), name: tagName}]);
                window.alert('创建成功');
            }
        }
    };

    const getName = (id: number) => {
        const tag = tags.filter(t => t.id === id)[0];
        return tag ? tag.name : '';
    };
    return {tags, setTags, findTag, upDateTag, deleteTag, addTag, getName};
};

export {useTags};
