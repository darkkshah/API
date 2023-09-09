import { Box, Typography, Container, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";

export default function Home() {
  const [productCard, setProductCard] = useState<any>([]);
  const navigate = useNavigate();
  const productDetails = (id: number) => {
    navigate(`product/${id}`);
  };

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res: any) => {
        console.log(res.data);
        setProductCard([...res.data]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <Box className="bg-dark">
        <Box>
          <Box className="text-center text-white py-3">
            <h1>
              <LocalMallOutlinedIcon className="fs-1" /> Shopping Online
            </h1>
          </Box>
          <Box className="text-center text-white py-3 d-flex justify-content-center">
            <h1 className="w-50">
              You want it, We deliver it!{" "}
              <LocalShippingOutlinedIcon className="fs-1" />
            </h1>
          </Box>
        </Box>
        <Box className="mt-4 px-5">
          <Box>
            <Typography variant="h4" className="fw-bold text-white">
              Fresh Recommendations
            </Typography>
          </Box>
          <Container className="mt-5">
            <Box className="row">
              {productCard.map((x: any, i: number) => {
                return (
                  <Box
                    key={i}
                    className="col-lg-3 col-md-6 col-sm-12 my-3 card-point"
                    onClick={() => productDetails(x.id)}
                  >
                    <div
                      className="card cardShadow pt-3 pb-2 px-2"
                      style={{ height: "100%" }}
                    >
                      <Box className=" d-flex justify-content-center align-items-center">
                        <Box className="w-75 p-4">
                          <img
                            src={x.image}
                            className="card-img-top"
                            alt="image"
                            style={{ height: "180px", width: "100%" }}
                          />
                        </Box>
                      </Box>
                      <div className="card-body d-flex flex-column align-items-start justify-content-between border-top">
                        <h5 className="card-title">{x.title}</h5>
                        {/* <p className="card-text">{x.description}</p> */}
                        <Button variant="contained" className="px-4 fs-6 my-2">
                          Details
                        </Button>
                      </div>
                    </div>
                  </Box>
                );
              })}
            </Box>
          </Container>
        </Box>
      </Box>
    </>
  );
}
