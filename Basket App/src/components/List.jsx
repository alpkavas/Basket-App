import { List, ThemeIcon, Badge, Table } from "@mantine/core";
import { IconCircleCheck } from "@tabler/icons-react";

// Gelen değere göre Listeleme yapar fiyat ve harfe göre

function ListItems({ filterItem }) {
  let filtredItem = filterItem.map(({ name, price, count }, i) => (
    <tr key={i}>
      <td>{name}</td>
      <td>{price}</td>
      <td>{count}</td>
      <td>{count * price}</td>
    </tr>
  ));

  return (
    <Table horizontalSpacing="md" striped>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
          <th>Piece</th>
          <th>Total Price </th>
        </tr>
      </thead>
      <tbody>{filtredItem}</tbody>
    </Table>
    //     <div className="List">
    // </div>
  );
}

export default ListItems;

{
  /* <List
  spacing="sm"
  size="sm"
  center
  icon={
    <ThemeIcon color="teal" size={20} radius="xl">
      <IconCircleCheck size="1rem" />
    </ThemeIcon>
  }>
  {filterItem.map(({ name, price, count }, i) => (
    <div className="listItem" key={i}>
      <List.Item>
        {count}
        {name}
        {price * count} &#8378;
        <Badge className="listBadge">{price * count}</Badge>
      </List.Item>
    </div>
  ))}
</List> */
}
