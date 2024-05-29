import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import productlist from "../action";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Product() {
  const params = useParams();
  // console.log(params.id);
  const { data } = useSelector((state) => state.productreducer);
  console.log(data);
  const checkid = data.find((a) => a.id == params.id);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(productlist());
  }, []);

  return (
    <div>
      {checkid ? (
        <Card
          style={{ width: "20rem", borderRadius: "20px" }}
          className="ml-5 m-auto mt-5 cardp"
        >
          <div className=" mt-5  ">
            <div>
              <Button
                variant="outline-white"
                className=" text-white buttonnew"
                style={{ borderRadius: "10px", width: "80px" }}
              >
                NEW
              </Button>
            </div>

            <Card.Img
              variant="top"
              src={checkid.image}
              style={{ width: "100px", height: "130px" }}
            />
          </div>
          <Card.Body>
            <Card.Title>{checkid.title}</Card.Title>
            <Card.Title className="bg-success text-white w-75 m-auto mb-5 mt-5 p-1 rounded ">
              <h3> ${checkid.price}</h3>
            </Card.Title>
            <Card.Text>{checkid.description}</Card.Text>
            <Button
              variant="primary"
              style={{ borderRadius: "20px", width: "200px" }}
            >
              OrderNow
            </Button>
          </Card.Body>
        </Card>
      ) : (
        "nothing"
      )}
    </div>
  );
}

export default Product;
