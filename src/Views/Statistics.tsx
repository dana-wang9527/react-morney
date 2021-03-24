import Layout from '../components/Layout';
import React, {useState} from 'react';
import {CategorySection} from './Money/CategorySection';
import styled from 'styled-components';
import {useRecord} from '../Hooks/useRecord';
import {useTags} from '../Hooks/useTags';
import dayjs from 'dayjs';

const CategoryWrapper = styled.div`
  background: white;
`;

const Item = styled.div`
  display: flex;
  justify-content: space-between;
  background: white;
  font-size: 18px;
  line-height: 20px;
  padding: 10px 16px;
  > .notes{
    margin-right: auto;
    margin-left: 16px;
    color:#999;
  }
`;

function Statistics() {
    const [category, setCategory] = useState<('-' | '+')>('-');
    const {records} = useRecord();
    const {getName} = useTags();
    return (
        <Layout>
            <CategoryWrapper>
                <CategorySection value={category}
                                 onChange={value => setCategory(value)}/>
            </CategoryWrapper>

            <div>
                {records.map(r => {
                    return <Item>
                        <div className="tags">
                            {r.tagIds.map(tagId => <span>{getName(tagId)}</span>)}
                        </div>
                        {r.note && <div className="notes">
                        {r.note}
                        </div>}
                        <div className="amount">
                            ￥{r.amount}
                        </div>
                        {/*{dayjs(r.createAt).format('YYYY年MM月DD日')}*/}
                    </Item>;
                })}
            </div>
        </Layout>
    );
}

export default Statistics;