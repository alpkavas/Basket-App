import React from "react";
import { useState } from "react";
import { Container, SimpleGrid, Input } from "@mantine/core";
import CardComponent from "./components/Card";
import ListItems from "./components/List";
import "./App.css";

const storeItems = [
  {
    name: "Futbol Topu",
    price: 20,
    img: "ball.jpg",
    desc: "Yüksek işçilik ve çok kaliteli malzemelerden yapılan bu futbol topu, hem amatör hem de profesyonel futbolcular için özenle tasarlanmıştır. Bu futbol topu, dayanıklı ve tam dairesel bir yapıya sahiptir ve herhangi bir sahada kullanılabilir.",
  },
  {
    name: "Spor Ayakkabı",
    price: 30,
    img: "shoes.jpg",
    desc: "Bu üstün kaliteli ayakkabı, havalandırmalı tasarımı ile ayaklarınızın terlemesini önleyerek rahatlığı garanti eder. Alt tabanı, daha iyi tutunmayı sağlayarak yürüyüş sırasında ekstra destek sunar. Uzun ömürlü kullanımı ile kaliteyi bir arada sunar.",
  },
  {
    name: "Deri Cüzdan",
    price: 40,
    img: "wallet.jpg",
    desc: "Deri bir cüzdan, stil ve işlevselliği bir araya getiren bir aksesuardır. Üstün kaliteli deri malzemeden üretilmiştir ve dayanıklı bir yapıya sahiptir. Aynı zamanda şık bir görünüme sahiptir ve herhangi bir kıyafetle uyumlu olacak şekilde tasarlanmıştır.",
  },
];

function App() {
  let [basketItems, setbasketItems] = useState([]);
  let [search, setSearch] = useState("");

  // Fiyat ve harfe göre filtreleme fonksiyonu küçük büyük harf duyarlı değil.
  let filteredItems = basketItems.filter(
    item =>
      item.name.toLowerCase().indexOf(search) >= 0 ||
      item.price.toString().indexOf(search) >= 0
  );
  return (
    <Container size="xs" px="xs" className="Store">
      <SimpleGrid cols={3} spacing="xs" verticalSpacing="xs">
        {storeItems.map(({ name, price, img, desc }, i) => {
          return (
            <CardComponent
              key={i}
              name={name}
              price={price}
              image={img}
              description={desc}
              onAdd={() => {
                setbasketItems([...basketItems, { name, price }]); // diziye ekleme yapar
              }}
            />
          );
        })}
      </SimpleGrid>
      <Input.Wrapper>
        <Input
          className="inputSearch"
          placeholder="Search"
          onChange={e => setSearch(e.target.value.toLowerCase())}
        />
      </Input.Wrapper>
      <ListItems filterItem={filteredItems} />
      {/*Fitreli arama değerini List companentine gönderir*/}
    </Container>
  );
}

export default App;
