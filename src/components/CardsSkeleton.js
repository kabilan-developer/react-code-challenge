import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Col, Row } from "react-bootstrap";

const CardsSkeleton = (props) => {
  const { count, render } = props;
  return (
    <Row>
      {Array(count)
        .fill()
        .map((item, index) => {
          return (
            <Col
              xxl={4}
              xl={4}
              lg={4}
              md={6}
              sm={12}
              xs={12}
              key={index}
              className="mb-3"
            >
              <div className="spacex_card">
                <div className="between">
                  <Skeleton height="1.5em" width="7em" />
                  <Skeleton height=".8em" width="4em" />
                </div>
                {render == "rockets" && <Skeleton height=".8em" width="10em" />}
                <div className="my-1">
                  <Skeleton height="15em" />
                </div>
                <div className="between">
                  <Skeleton height=".8em" width="5em" />
                  <Skeleton height=".8em" width="5em" />
                </div>
                <div className="between">
                  <Skeleton height=".8em" width="5em" />
                  <Skeleton height=".8em" width="5em" />
                </div>
                <Skeleton height="2.5em" width="20em" />
              </div>
            </Col>
          );
        })}
    </Row>
  );
};

export default CardsSkeleton;
