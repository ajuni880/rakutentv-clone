import React from 'react';
import { ContentsList, ContentsListItem, ContentsListTitle, ScrollableSlider, Loading } from 'shared/components';
import useFetchContents from 'hooks/useFetchContents';


const ContentsSection = ({ section }) => {
  const { data } = useFetchContents(section);
  return  data ? (
    <ContentsList>
      <ContentsListTitle>{data.name}</ContentsListTitle>
      <ScrollableSlider>
        {data.contents.data.map((c) => (<ContentsListItem key={c.id} content={c}/>) )}
      </ScrollableSlider>
    </ContentsList>
  ) : <Loading />;
};

export default React.memo(ContentsSection);
