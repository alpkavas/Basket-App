import React from "react";
import { useState } from "react";
import {
  Container,
  SimpleGrid,
  Input,
  Indicator,
  Button,
  Grid,
  Drawer,
} from "@mantine/core";
import { IconBasketFilled } from "@tabler/icons-react";
import CardComponent from "./components/Card";
import ListItems from "./components/List";
import "./App.css";

const storeItems = [
  {
    id: 100,
    name: "Futbol Topu",
    price: 50,
    img: "ball.jpg",
    desc: "Yüksek işçilik ve çok kaliteli malzemelerden yapılan bu futbol topu, hem amatör hem de profesyonel futbolcular için özenle tasarlanmıştır. Bu futbol topu, dayanıklı ve tam dairesel bir yapıya sahiptir ve herhangi bir sahada kullanılabilir.",
  },
  {
    id: 101,
    name: "Spor Ayakkabı",
    price: 75,
    img: "shoes.jpg",
    desc: "Kaliteli ayakkabı, havalandırmalı tasarımı ile ayaklarınızın terlemesini önleyerek rahatlığı garanti eder. Alt tabanı, daha iyi tutunmayı sağlayarak yürüyüş sırasında ekstra destek sunar. Uzun ömürlü kullanımı ile kaliteyi bir arada sunar.",
  },
  {
    id: 102,
    name: "Deri Cüzdan",
    price: 40,
    img: "wallet.jpg",
    desc: "Deri bir cüzdan, stil ve işlevselliği bir araya getiren bir aksesuardır. Üstün kaliteli deri malzemeden üretilmiştir ve dayanıklı bir yapıya sahiptir. Aynı zamanda şık bir görünüme sahiptir ve herhangi bir kıyafetle uyumlu olacak şekilde tasarlanmıştır.",
  },
  {
    id: 103,
    name: "Klasik Saat",
    price: 35,
    img: "saat.jpg",
    desc: "Bu saat yüksek bir işçiliğe sahip ve kaliteli malzemelerden üretilmiştir. Uzun ömürlü bir kullanım sunar. Suya dayanıklı özellikleri ile de her türlü hava koşulunda kullanılabilir. Geçmişin klasik estetik anlayışıyla modern gereksinimleri, tarz sahibi ve kalite arayanlar için mükemmel bir seçimdir.",
  },
  {
    id: 104,
    name: "Kar Küresi",
    price: 25,
    img: "kure.jpg",
    desc: "Estetik ve işlevsellik açısından öne çıkan ve İçindeki minik parçacıkların hareketiyle harika bir görsel sunan bu küre odanıza renk katar. Kaliteli malzemelerden üretilmiş ve dayanıklıdır. Her dekorasyon stiline uyum sağlayacak şekilde tasarlanmıştır.",
  },
  {
    id: 105,
    name: "Kulaklık",
    price: 55,
    img: "kulaklık.jpg",
    desc: "Üstün kaliteli malzemelerden üretilmiştir ve dayanıklı bir yapıya sahiptir. Aynı zamanda şık bir tasarıma sahiptir ve herhangi bir kıyafetle uyum sağlar. İster müzik dinlemek, ister telefon görüşmesi yapmak için kullanın, kristal netliğinde ses kalitesi sunar.",
  },
];

function App() {
  let [basketItems, setbasketItems] = useState([]);
  let [search, setSearch] = useState("");
  let [opened, setOpened] = useState(false);

  // Fiyat ve harfe göre filtreleme fonksiyonu küçük büyük harf duyarlı değil.
  let filteredItems = storeItems.filter(
    item =>
      item.name.toLowerCase().indexOf(search) >= 0 ||
      item.price.toString().indexOf(search) >= 0
  );
  let addFilterBasketProduct = ({ id, name, price, count = 1 }) => {
    //id eşleştirmesi yapar
    let itemIndex = basketItems.findIndex(item => item.id === id);
    if (itemIndex >= 0) {
      // Arrayi alıp, idsi eşleşenin index numarısındaki elemanın count'unu 1 arttırıyor.
      let _basketItems = [...basketItems];
      _basketItems[itemIndex].count += 1;

      setbasketItems(_basketItems);
    } else {
      setbasketItems([...basketItems, { name, price, count, id }]); // diziye ekleme yapar
    }
  };

  return (
    <Container size="sm" px="xs" className="Store">
      <Grid grow gutter="xs" className="inputGrid">
        <Grid.Col span={5}>
          {" "}
          <Input.Wrapper>
            <Input
              className="inputSearch"
              placeholder="Search products"
              value={search}
              onChange={e => setSearch(e.target.value.toLowerCase())}
            />
          </Input.Wrapper>
        </Grid.Col>
        <Grid.Col span={1}>
          <Button onClick={() => setSearch("")}>Clear</Button>
        </Grid.Col>
        <Indicator
          position="top-end"
          size={25}
          offset={0}
          withBorder
          label={basketItems.length}>
          <Button
            size="md"
            leftIcon={<IconBasketFilled />}
            variant="gradient"
            gradient={{ from: "#ed6ea0", to: "#ec8c69", deg: 35 }}
            onClick={() => setOpened(true)}>
            Store
          </Button>
        </Indicator>
      </Grid>
      <SimpleGrid cols={3} spacing="xs" verticalSpacing="xs">
        {filteredItems.map(({ name, price, img, desc, id }, i) => {
          return (
            <CardComponent
              key={i}
              name={name}
              price={price}
              image={img}
              description={desc}
              onAdd={() => addFilterBasketProduct({ name, price, id })}
            />
          );
        })}
      </SimpleGrid>

      {/* Drawer content  */}
      <Drawer
        opened={opened}
        position="right"
        onClose={() => setOpened(false)}
        title="Sepetim">
        <ListItems filterItem={basketItems} />
        {/*Fitreli arama değerini List companentine gönderir*/}
      </Drawer>
    </Container>
  );
}

export default App;
