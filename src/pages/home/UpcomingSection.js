import React, { useEffect, useState } from "react";
import CardsSkeleton from "../../components/CardsSkeleton";
import { DateConverter } from "../../helpers";
import { Col, Container, Row, Badge, Stack } from "react-bootstrap";
import { Images } from "../../helpers";
import { getMethod } from "../../apis";
import { useNavigate } from "react-router-dom";

const UpcomingSection = () => {
  const [upcomingData, setUpcomingData] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const getSpaceXUpcoming = async () => {
    try {
      setLoading(true);
      let url = "v4/launches";
      let response = await getMethod({ url });
      let filter = response.filter((item) => item.upcoming);
      setUpcomingData(filter.slice(0, 3));
      setLoading(false);
    } catch (e) {
      console.log("err in get history", e);
    }
  };
  useEffect(() => {
    getSpaceXUpcoming();
  }, []);

  const launchesListing = () => {
    return (
      <>
        <Row>
          {upcomingData?.map((item) => (
            <Col xxl={4} xl={4} lg={4} md={6} sm={12} xs={12} className="mb-3">
              <div className="spacex_card h-100">
                <div className="between">
                  <h6 className="fw-bold mb-0">{item.name}</h6>
                  {item.upcoming ? (
                    <Badge bg="info">Upcoming</Badge>
                  ) : (
                    <Badge bg="danger">Launched</Badge>
                  )}
                </div>
                <div className="card_img_box center">
                  {!item.links.patch.small ? (
                    <img
                      src={Images.placeholder}
                      alt="rockets"
                      style={{ height: "10em", width: "10em" }}
                      className="img-contain img-zoom-animation"
                    />
                  ) : (
                    <img
                      src={item.links.patch.small}
                      alt="rockets"
                      style={{ height: "10em", width: "10em" }}
                      className="img-cover img-zoom-animation"
                    />
                  )}
                </div>
                <div className="between">
                  <small className="text-gray">Precision</small>
                  <small>{item.date_precision}</small>
                </div>
                <div className="between">
                  <small className="text-gray">Date</small>
                  <small>{DateConverter(item.date_unix)}</small>
                </div>
                <div
                  class="box-3 center w-100 mt-1"
                  onClick={() =>
                    navigate(`/launches/${item.id}`, {
                      state: { data: item },
                    })
                  }
                >
                  <div class="btn center w-100 btn-three">
                    <span>View in Detail</span>
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </>
    );
  };
  return (
    <Container>
      <div className="history_container">
        <div className="between mb-3">
          <h4 className="fw-bold mb-0">Upcoming Launches</h4>
          <small
            onClick={() => navigate("/launches")}
            className="text-gray pointer"
          >
            Explore
          </small>
        </div>
        {loading ? (
          <CardsSkeleton render="launches" count={6} />
        ) : (
          launchesListing()
        )}
      </div>
    </Container>
  );
};

export default UpcomingSection;
