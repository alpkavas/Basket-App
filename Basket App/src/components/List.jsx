import { List, ThemeIcon } from "@mantine/core";
import { IconCircleCheck } from "@tabler/icons-react";

// Gelen değere göre Listeleme yapar fiyat ve harfe göre

function ListItems({ filterItem }) {
  return (
    <div className="List">
      <List
        spacing="sm"
        size="sm"
        center
        icon={
          <ThemeIcon color="teal" size={24} radius="xl">
            <IconCircleCheck size="1rem" />
          </ThemeIcon>
        }>
        {filterItem.map(({ name, price }, i) => (
          <div className="listItem" key={i}>
            <List.Item>
              {name} {price} &#8378;
            </List.Item>
          </div>
        ))}
      </List>
    </div>
  );
}

export default ListItems;
