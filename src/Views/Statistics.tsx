import Layout from '../components/Layout';
import React, {ReactNode, useState} from 'react';
import {CategorySection} from './Money/CategorySection';
import styled from 'styled-components';
import {RecordItem, useRecord} from '../Hooks/useRecord';
import {useTags} from '../Hooks/useTags';
import dayjs from 'dayjs';
import 'core-js';

const CategoryWrapper = styled.div`
  background: white;
`;

const Header = styled.h3`
  font-size: 18px;
  line-height: 20px;
  padding: 10px 16px;
`;

const Item = styled.div`
  display: flex;
  justify-content: space-between;
  background: white;
  font-size: 18px;
  line-height: 20px;
  padding: 10px 16px;

  > .notes {
    margin-right: auto;
    margin-left: 16px;
    color: #999;
  }
`;

function Statistics() {
    const [category, setCategory] = useState<('-' | '+')>('-');
    const {records} = useRecord();
    const {getName} = useTags();
    const hash: { [K: string]: RecordItem[] } = {};
    const selectedRecords = records.filter(r => r.category === category);
    selectedRecords.forEach(r => {
        const key = dayjs(r.createAt).format('YYYY年MM月DD日');
        if (!(key in hash)) {
            hash[key] = [];
        }
        hash[key].push(r);
    });
    const array = Object.entries(hash).sort((a, b) => {
        if (a[0] === b[0]) return 0;
        if (a[0] > b[0]) return 1;
        if (a[0] < b[0]) return -1;
        return 0;
    });
    return (
        <Layout>
            <CategoryWrapper>
                <CategorySection value={category}
                                 onChange={value => setCategory(value)}/>
            </CategoryWrapper>
            {array.map(([date, records]) => <div>
                <Header>
                    {date}
                </Header>
                <div>
                    {records.map(r => {
                        return <Item>
                            <div className="tags">
                                {r.tagIds.map(tagId => <span key={tagId}>{getName(tagId)}</span>)
                                    .reduce((result, span, index, array) => result.concat(index < array.length - 1 ? [span, '，'] : [span]), [] as ReactNode[])
                                }
                            </div>
                            {r.note && <div className="notes">
                                {r.note}
                            </div>}
                            <div className="amount">
                                {category === '-' ? '-' : null}￥{r.amount}
                            </div>
                        </Item>;
                    })}
                </div>
            </div>)}
        </Layout>
    );
}

export default Statistics;