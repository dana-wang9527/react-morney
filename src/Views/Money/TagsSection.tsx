import styled from 'styled-components';
import React from 'react';
import {useTags} from '../../Hooks/useTags';


const Wrapper = styled.section`
  background: #ffffff;
  padding: 12px 16px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;

  > ol {
    margin: 0 -12px;

    > li {
      background: #D9D9D9;
      border-radius: 18px;
      display: inline-block;
      padding: 3px 18px;
      font-size: 14px;
      margin: 8px 12px;
      &.selected{
        background:#f60 ;
      }
    }
  }

  > button {
    background: none;
    border: none;
    color: #666;
    padding: 2px 4px;
    border-bottom: 1px solid #333;
    margin-top: 8px;
  }
;
`;

type Props={
    value: number[];
    onChange: (value: number[])=>void
}
const TagsSection: React.FC<Props> = (props) => {
    const {tags} = useTags();
    const selectedTagIds=props.value
    const onToggleTag=(tagId: number)=>{
const index=selectedTagIds.indexOf(tagId)
        if(index>=0){
           props.onChange(selectedTagIds.filter(t=>t!==tagId)) //如果tag 被选中，就复制所以没有被选中的tag作为新的selectedTags
        }else{
            props.onChange([tagId])
        }
    }
    return (
        <Wrapper>
            <ol>
                {tags.map((tag) =>
                    (<li key={tag.id} onClick={
                        ()=>{onToggleTag(tag.id)}}
                         className={selectedTagIds.indexOf(tag.id)>=0?'selected':''}>{tag.name}</li>)
                )}
            </ol>
        </Wrapper>
    );
};

export {TagsSection};