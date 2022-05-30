import React from "react";
import { Text } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import { Stack } from "@chakra-ui/react";
import { Heading } from "@chakra-ui/react";
import { Tag } from "@chakra-ui/react";
import { TagLabel } from "@chakra-ui/react";

const Product = (props) => {
 
//  console.log("fianl",props.title)

  return (
    <>
    <Stack data-cy="product">
              <Image data-cy="product-image" src={props.imageSrc} />
              <Text data-cy="product-category">{props.category}</Text>
              <Tag>
                <TagLabel data-cy="product-gender">{props.gender}</TagLabel>
              </Tag>
              <Heading data-cy="product-title">{props.title}</Heading>
              <Box data-cy="product-price">{props.price}</Box>
      </Stack>
     
    </>
  );
};

export default Product;
