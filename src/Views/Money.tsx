import Layout from '../components/Layout';
import React, {useState} from 'react';
import styled from 'styled-components';
import {TagsSection} from './Money/TagsSection';
import {CategorySection} from './Money/CategorySection';
import {NotesSection} from './Money/NotesSection';
import {NumberPadSection} from './Money/NumberPadSection';
import {useRecord} from '../Hooks/useRecord';

const MyLayout = styled(Layout)`
  display: flex;
  flex-direction: column;
`;

const defaultFormData = {
    tagIds: [] as number[],
    note: '',
    category: '-' as ('-' | '+'),
    amount: '0'
};

function Money() {
    const [selected, setSelected] = useState(defaultFormData);
    const {addRecord} = useRecord();
    const onChange = (obj: Partial<typeof selected>) => {
        setSelected({...selected, ...obj});
    };
    const submit = () => {
        if (addRecord(selected)) {
            window.alert('保存成功');
            setSelected(defaultFormData);
        }
    };
    return (
        <MyLayout>
            <TagsSection value={selected.tagIds}
                         onChange={(tagIds) => onChange({tagIds})}/>
            <NotesSection value={selected.note}
                          onChange={(note) => onChange({note})}/>
            <CategorySection value={selected.category}
                             onChange={(category) => onChange({category})}/>
            <NumberPadSection value={selected.amount}
                              onChange={(amount) => onChange({amount})}
                              onOK={submit}/>
        </MyLayout>
    );
}

export default Money;