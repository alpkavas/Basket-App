import { Card, Image, Text, Badge, Button, Group } from "@mantine/core";

const CardComponent = ({ name, onAdd, image, price, description }) => {
  return (
    <Card shadow="sm" padding="xs" radius="md" withBorder>
      <Card.Section>
        <Image src={"img/" + image} height={160} alt="Norway" />
      </Card.Section>

      <Group position="apart" mt="md" mb="xs">
        <Text weight={500}>{name}</Text>
        <Badge color="green" variant="light">
          {price} &#8378;
        </Badge>
      </Group>

      <Text size="xs" color="dimmed" align="justify">
        {description}
      </Text>

      <Button
        variant="light"
        color="blue"
        fullWidth
        mt="md"
        radius="md"
        onClick={onAdd}>
        Add
      </Button>
    </Card>
  );
};

export default CardComponent;
