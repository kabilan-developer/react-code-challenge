import React, { useEffect, useState } from "react";
import { Col, Container, Row, Badge, Stack } from "react-bootstrap";
import { getMethod } from "../../apis";
import { DateConverter } from "../../helpers";
import "./style.css";
import { Images } from "../../helpers";
import CardsSkeleton from "../../components/CardsSkeleton";
import LaunchesTab from "./LaunchesTab";
import { useNavigate } from "react-router-dom";

const contextPerRow = 6;

const LaunchesPage = () => {
  const [launchesData, setLaunchesData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [next, setNext] = useState(contextPerRow);
  const [search, setSearch] = useState("");
  const [activeTab, setActiveTab] = useState("All");
  const navigate = useNavigate();

  const filtered = launchesData.filter((item) => {
    return item.name.toLowerCase().includes(search.toLowerCase());
  });
  const onSearchTable = (e) => {
    let val = e.target.value;
    setSearch(val);
  };

  const handleMoreContent = () => {
    setNext(next + contextPerRow);
  };

  const getSpaceXLaunches = async () => {
    try {
      setLoading(true);
      let url = "v4/launches";
      let response = await getMethod({ url });
      // console.log("launches res", response);
      if (activeTab == "Upcoming") {
        let filter = response.filter((item) => item.upcoming);
        setLaunchesData(filter);
      } else if (activeTab == "Launched") {
        let filter = response.filter((item) => !item.upcoming);
        setLaunchesData(filter);
      } else {
        setLaunchesData(response);
      }
      setLoading(false);
    } catch (e) {
      console.log("err in get history", e);
    }
  };
  useEffect(() => {
    getSpaceXLaunches();
  }, [activeTab]);

  const launchesListing = () => {
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
        ) : (
          <div className="center">No Results</div>
        )}
        <div className="center">
          {next < launchesData?.length && (
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

  return (
    <Container>
      <div className="history_container">
        <Stack gap={3}>
          <div className="between">
            <h4 className="center fw-bold mb-0">
              Launches ({launchesData?.length})
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
          <LaunchesTab activeTab={activeTab} setActiveTab={setActiveTab} />
          {loading ? (
            <CardsSkeleton render="launches" count={6} />
          ) : (
            launchesListing()
          )}
        </Stack>
      </div>
    </Container>
  );
};

export default LaunchesPage;
