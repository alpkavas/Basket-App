import React from "react";
import { useState } from "react";
import { Container, SimpleGrid, Input } from "@mantine/core";
import CardComponent from "./components/Card";
import ListItems from "./components/List";
import "./App.css";

const storeItems = [
  {
    name: "Futbol Topu",
    price: 50,
    img: "ball.jpg",
    desc: "Yüksek işçilik ve çok kaliteli malzemelerden yapılan bu futbol topu, hem amatör hem de profesyonel futbolcular için özenle tasarlanmıştır. Bu futbol topu, dayanıklı ve tam dairesel bir yapıya sahiptir ve herhangi bir sahada kullanılabilir.",
  },
  {
    name: "Spor Ayakkabı",
    price: 75,
    img: "shoes.jpg",
    desc: "Kaliteli ayakkabı, havalandırmalı tasarımı ile ayaklarınızın terlemesini önleyerek rahatlığı garanti eder. Alt tabanı, daha iyi tutunmayı sağlayarak yürüyüş sırasında ekstra destek sunar. Uzun ömürlü kullanımı ile kaliteyi bir arada sunar.",
  },
  {
    name: "Deri Cüzdan",
    price: 40,
    img: "wallet.jpg",
    desc: "Deri bir cüzdan, stil ve işlevselliği bir araya getiren bir aksesuardır. Üstün kaliteli deri malzemeden üretilmiştir ve dayanıklı bir yapıya sahiptir. Aynı zamanda şık bir görünüme sahiptir ve herhangi bir kıyafetle uyumlu olacak şekilde tasarlanmıştır.",
  },
  {
    name: "Klasik Saat",
    price: 35,
    img: "saat.jpg",
    desc: "Bu saat yüksek bir işçiliğe sahip ve kaliteli malzemelerden üretilmiştir. Uzun ömürlü bir kullanım sunar. Suya dayanıklı özellikleri ile de her türlü hava koşulunda kullanılabilir. Geçmişin klasik estetik anlayışıyla modern gereksinimleri, tarz sahibi ve kalite arayanlar için mükemmel bir seçimdir.",
  },
  {
    name: "Kar Küresi",
    price: 25,
    img: "kure.jpg",
    desc: "Estetik ve işlevsellik açısından öne çıkan ve İçindeki minik parçacıkların hareketiyle harika bir görsel sunan bu küre odanıza renk katar. Kaliteli malzemelerden üretilmiş ve dayanıklıdır. Her dekorasyon stiline uyum sağlayacak şekilde tasarlanmıştır.",
  },
  {
    name: "Kulaklık",
    price: 55,
    img: "kulaklık.jpg",
    desc: "Üstün kaliteli malzemelerden üretilmiştir ve dayanıklı bir yapıya sahiptir. Aynı zamanda şık bir tasarıma sahiptir ve herhangi bir kıyafetle uyum sağlar. İster müzik dinlemek, ister telefon görüşmesi yapmak için kullanın, kristal netliğinde ses kalitesi sunar.",
  },
];

function App() {
  let [basketItems, setbasketItems] = useState([]);
  let [search, setSearch] = useState("");

  // Fiyat ve harfe göre filtreleme fonksiyonu küçük büyük harf duyarlı değil.
  let filteredItems = storeItems.filter(
    item =>
      item.name.toLowerCase().indexOf(search) >= 0 ||
      item.price.toString().indexOf(search) >= 0
  );
  return (
    <Container size="sm" px="xs" className="Store">
      <Input.Wrapper>
        <Input
          className="inputSearch"
          placeholder="Search products"
          onChange={e => setSearch(e.target.value.toLowerCase())}
        />
      </Input.Wrapper>
      <SimpleGrid cols={3} spacing="xs" verticalSpacing="xs">
        {filteredItems.map(({ name, price, img, desc }, i) => {
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

      <ListItems filterItem={basketItems} />
      {/*Fitreli arama değerini List companentine gönderir*/}
    </Container>
  );
}

export default App;
