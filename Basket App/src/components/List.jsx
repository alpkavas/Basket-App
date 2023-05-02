import { Table } from "@mantine/core";
import { useState, useEffect } from "react";

function ListItems({ filterItem }) {
  const [calcPrice, setCalcPrice] = useState(0);

  useEffect(() => {
    // filterItem prop'u değiştiğinde `calcPrice` değerini yeniden hesaplar
    setCalcPrice(
      filterItem.reduce((total, { price, count }) => total + price * count, 0)
    );
  }, [filterItem]);

  let filtredItem = filterItem.map(({ name, price, count }, i) => (
    <tr key={i}>
      <td>{name}</td>
      <td>{price}</td>
      <td>{count}</td>
      <td>{price * count} &#8378;</td>
    </tr>
  ));

  return (
    <Table horizontalSpacing="xs" striped>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
          <th>Piece</th>
          <th>Total Price</th>
        </tr>
      </thead>
      <tbody>{filtredItem}</tbody>
      <hr />
      <tfoot>
        <tr>
          <td>Total </td>
          <td colSpan="2" />
          <td> {calcPrice} &#8378;</td>
        </tr>
      </tfoot>
    </Table>
  );
}

export default ListItems;
