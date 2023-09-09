import { Box, Typography, Container, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";

export default function Product() {
  const params = useParams();
  const [card, setCard] = useState<any>({});

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${params.id}`)
      .then((res: any) => {
        console.log(res.data);
        setCard({ ...res.data });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <Box className="bg-dark text-center" style={{ height: "100vh" }}>
        <Box>
          <Box className="text-center bg-black text-white py-3">
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
        <Box className="mt-4 text-center">
          <Container className="mt-5">
            <Box className="row justify-content-center ">
              <div
                className="card cardShadow mb-3 p-4"
                style={{ maxWidth: "768px" }}
              >
                <div className="row g-0 align-items-center">
                  <div className="col-md-4 p-3">
                    <img
                      src={card.image}
                      className="img-fluid rounded-start"
                      alt="image"
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body d-flex flex-column align-items-center">
                      <h2 className="card-title my-3">
                        <span className="fw-bold"> Category: </span>{" "}
                        {card.category}
                      </h2>
                      <h2 className="card-title my-3">
                        <span className="fw-bold"> Title: </span> {card.title}
                      </h2>
                      <p className="card-text fs-4 my-3">
                        <span className="fw-bold"> Description: </span>{" "}
                        {card.description}
                      </p>
                      <p className="card-text fs-1 my-3">
                        <span className="fw-bold"> Price: </span>${card.price}
                      </p>
                      <div>
                        <Button
                          variant="contained"
                          className="px-4 fs-5"
                          onClick={() => {
                            alert("Thanks you for Shopping");
                          }}
                        >
                          Buy Now
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Box>
          </Container>
        </Box>
      </Box>
    </>
  );
}
