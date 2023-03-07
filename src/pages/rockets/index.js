import React, { useEffect, useState } from "react";
import { Col, Container, Row, Badge, Stack } from "react-bootstrap";
import { getMethod } from "../../apis";
import { timeconvertdays } from "../../helpers";
import "./style.css";
import { Images } from "../../helpers";
import CardsSkeleton from "../../components/CardsSkeleton";
import { useNavigate } from "react-router-dom";

const contextPerRow = 3;

const RocketPage = () => {
  const [rocketData, setRocketData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [next, setNext] = useState(contextPerRow);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const filtered = rocketData.filter((item) => {
    return item.name.toLowerCase().includes(search.toLowerCase());
  });
  const onSearchTable = (e) => {
    let val = e.target.value;
    setSearch(val);
  };

  const handleMoreContent = () => {
    setNext(next + contextPerRow);
  };

  const getSpaceXRockets = async () => {
    try {
      setLoading(true);
      let url = "v4/rockets";
      let response = await getMethod({ url });
      // console.log("rockets res", response);
      setRocketData(response);
      setLoading(false);
    } catch (e) {
      console.log("err in get history", e);
    }
  };
  useEffect(() => {
    getSpaceXRockets();
  }, []);

  const rocketListing = () => {
    return (
      <>
        {filtered.length > 0 ? (
          <Row>
            {filtered?.slice(0, next)?.map((item) => (
              <Col
                xxl={4}
                xl={4}
                lg={4}
                md={6}
                sm={12}
                xs={12}
                className="mb-3"
              >
                <div className="spacex_card h-100">
                  <div className="between">
                    <h6 className="fw-bold mb-0">{item.name}</h6>
                    {item.active ? (
                      <Badge bg="success">Active</Badge>
                    ) : (
                      <Badge bg="danger">Inactive</Badge>
                    )}
                  </div>
                  <small className="text-gray">{item.country}</small>
                  <div className="card_img_box">
                    <img
                      src={item.flickr_images[0]}
                      alt="rockets"
                      className="img-cover img-zoom-animation"
                    />
                  </div>
                  <div className="between">
                    <small className="text-gray">Launched</small>
                    <small>{timeconvertdays(item.first_flight)}</small>
                  </div>
                  <div className="between">
                    <small className="text-gray">Cost</small>
                    <small>${formatter.format(item.cost_per_launch)}</small>
                  </div>
                  <div
                    class="box-3 center w-100 mt-1"
                    onClick={() =>
                      navigate(`/rockets/${item.name}`, {
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
        ) : (
          <div className="center">No Results</div>
        )}
        <div className="center">
          {next < rocketData?.length && (
            <div class="box-3 mt-4" onClick={handleMoreContent}>
              <div class="btn center btn-three">
                <span>Load More +</span>
              </div>
            </div>
          )}
        </div>
      </>
    );
  };

  var formatter = new Intl.NumberFormat("en-US", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  });
  return (
    <Container>
      <div className="history_container">
        <Stack gap={3}>
          <div className="between">
            <h4 className="center fw-bold mb-0">
              Rockets ({rocketData?.length})
            </h4>
            <div className="search_input_box">
              <img
                src={Images.search_menu}
                alt="search"
                className="img-contain"
              />
              <input
                type="text"
                className="search_input"
                placeholder="Search Name"
                value={search}
                onChange={onSearchTable}
              />
            </div>
          </div>
          {loading ? (
            <CardsSkeleton render="rockets" count={3} />
          ) : (
            rocketListing()
          )}
        </Stack>
      </div>
    </Container>
  );
};

export default RocketPage;
