import React from "react";

import {
  Container,
  ContentAreaContainer,
  Category,
  Description,
  Item,
  Title,
  WatchButton,
} from "./styles";
import VideoIframeResponsive from "./VideoIframeResponsive";

function getYouTubeId(youtubeURL: string) {
  return youtubeURL.replace(
    /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/,
    "$7",
  );
}
interface BannerMainProps {
  videoTitle: string;
  videoDescription: string;
  url: string;
}

const BannerMain: React.FC<BannerMainProps> = ({
  videoTitle,
  videoDescription,
  url,
}) => {
  const youTubeID = getYouTubeId(url);

  console.log(youTubeID);
  const bgUrl = `https://img.youtube.com/vi/${youTubeID}/maxresdefault.jpg`;

  return (
    <Container backgroundImage={bgUrl}>
      <ContentAreaContainer>
        <Item>
          <Title>{videoTitle}</Title>
          <Description>{videoDescription}</Description>
        </Item>

        <Item>
          <VideoIframeResponsive youtubeID={youTubeID} />
          <WatchButton>Assistir</WatchButton>
        </Item>
      </ContentAreaContainer>
    </Container>
  );
};

export default BannerMain;
