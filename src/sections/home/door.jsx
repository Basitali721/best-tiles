import { Grid } from '@mui/material';
import React from 'react';
import ProductCard from 'src/components/cards/product-card';
import { Doorp } from 'src/_mock/Home';

const Door = () => (
  <Grid container spacing={4}>
    {Doorp.map((item, index) => (
      <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
        <ProductCard item={item} index={index} />
      </Grid>
    ))}
  </Grid>
);
export default Door;
