import React from "react";

import BannerMain from "../../components/BannerMain";
import Carousel from "../../components/Carousel";
import Header from "../../components/Header";
import DataFile from "../../data/dados_iniciais.json";
import { Container } from "./styles";

const Home: React.FC = () => {
  console.log(DataFile.categorias[0].videos[0].url);

  return (
    <Container>
      <Header />

      <BannerMain
        url={DataFile.categorias[0].videos[0].url}
        videoTitle={DataFile.categorias[0].videos[0].titulo}
        videoDescription={`${DataFile.categorias[0].videos[0].titulo} aopaaaa`}
      />

      {DataFile.categorias.map(category => (
        <Carousel ignoreFirstVideo category={category} key={Math.random()} />
      ))}
    </Container>
  );
};

export default Home;
