import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import DeleteSweepIcon from '@mui/icons-material/DeleteSweep';
import SendIcon from '@mui/icons-material/Send';
import React, { useEffect, useState } from "react";

const CardsGrid = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, []);

  return (
    <Container>
      <Typography variant="h4" align="center" color="error">
        CARD & GRID
      </Typography>

      <Grid container mt={4} spacing={2}>
        {products.map((a) => {
          return (
            <Grid item xs={6} md={4}>
              <Card sx={{ maxWidth: 345, height:450, }}>
                <CardMedia
                  sx={{ height: 200 }}
                  image={a.images[0]}
                //  alt="resim"
                />
                <CardContent  >
                  <Typography gutterBottom variant="h5" component="div">
                    {a.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {a.description}
                  </Typography>
                </CardContent>
             <CardActions>
                  <Button variant="contained" size="small" startIcon={<SendIcon/>}>Share</Button>
                  <Button variant="contained" size="small" endIcon={<DeleteSweepIcon/>}>DELETE</Button>
                </CardActions>
               
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
};

export default CardsGrid;
