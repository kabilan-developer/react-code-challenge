import React from "react";
import { Badge, Col, Container, Row, Stack } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import ImageSwiper from "../../components/ImageSwiper";
import { Images } from "../../helpers";

const LaunchesDetails = () => {
  const location = useLocation();
  const item = location.state.data;
  console.log("lanches item", item);

  const coresShow = (cores) => {
    return (
      <Row>
        {cores.map((ele) => (
          <Col xxl={3} xl={3} lg={3} md={6} sm={6} xs={6}>
            <div className="spacex_card">
              <div className="between">
                <span className="mb-0">Landing</span>
                {ele.landing_success ? (
                  <Badge bg="success">Success</Badge>
                ) : (
                  <Badge bg="danger">Failed</Badge>
                )}
              </div>
              <div className="between">
                <span className="mb-0">Landing Attempt</span>
                {ele.landing_attempt ? (
                  <Badge bg="success">Success</Badge>
                ) : (
                  <Badge bg="danger">Failed</Badge>
                )}
              </div>
              <div className="between">
                <span className="mb-0">Gridfins</span>
                {ele.gridfins ? (
                  <Badge bg="success">Yes</Badge>
                ) : (
                  <Badge bg="danger">No</Badge>
                )}
              </div>
              <div className="between">
                <span className="mb-0">Legs</span>
                {ele.legs ? (
                  <Badge bg="success">Yes</Badge>
                ) : (
                  <Badge bg="danger">No</Badge>
                )}
              </div>
              <div className="between">
                <span className="mb-0">Reused</span>
                {ele.reused ? (
                  <Badge bg="success">Yes</Badge>
                ) : (
                  <Badge bg="danger">No</Badge>
                )}
              </div>
            </div>
          </Col>
        ))}
      </Row>
    );
  };
  return (
    <Container>
      <div className="history_container">
        <Stack gap={3}>
          <h4 className="fw-bold text-center">{item.name}</h4>
          <div className="bg-light center launches_img_box">
            {item.links.flickr.original.length > 0 ? (
              <ImageSwiper
                imagesData={item.links.flickr.original}
                height="450px"
              />
            ) : (
              <img
                src={
                  !item.links.patch.large
                    ? Images.placeholder
                    : item.links.patch.large
                }
                alt="lanches"
                height="450px"
                width={!item.links.patch.large && "100%"}
              />
            )}
          </div>
          <div className="">
            <h5 className="fw-bold">Details</h5>
            <span>{item.details ? item.details : "No Details"}</span>
          </div>
          <div className="">
            <h5 className="fw-bold">Cors</h5>
            {item.cores.length > 0 ? coresShow(item.cores) : "No Cors"}
          </div>
        </Stack>
      </div>
    </Container>
  );
};

export default LaunchesDetails;
