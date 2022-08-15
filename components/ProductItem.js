import {
  Card,
  CardActionArea,
  Box,
  CardMedia,
  Typography,
} from '@mui/material';
import NextLink from 'next/link';
import React from 'react';
import { urlForThumbnail } from '../utils/image';

export default function productItem({ product }) {
  return (
    <div style={{ margin: 'auto' }}>
      <Card>
        <NextLink href={`/product/${product.slug.current}`} passHref>
          <CardActionArea>
            <CardMedia
              component="img"
              image={urlForThumbnail(product.image)}
              title={product.name}
            ></CardMedia>
          </CardActionArea>
        </NextLink>
      </Card>
      <Box sx={{ width: 'wrap', height: 50 }}>
        <div
          style={{
            backgroundColor: '#fff',
            position: 'relative',
            top: '-25px',
            height: 50,
            paddingTop: 13,
            marginLeft: 30,
            marginRight: 30,
            boxShadow:
              '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19',
          }}
        >
          <Typography align="center">
            <b> {product.name} </b>
          </Typography>
        </div>
      </Box>
    </div>
  );
}
