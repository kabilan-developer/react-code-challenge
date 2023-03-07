import React, { useState } from "react";
import { Col, Container, Row, Stack } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import ImageSwiper from "../../components/ImageSwiper";
import { timeconvertdays } from "../../helpers";
import StagesTable from "./StagesTable";
import "./style.css";

const RocketDetails = () => {
  const [activeEngine, setActiveEngine] = useState("ISP");
  const location = useLocation();
  const item = location.state.data;
  var formatter = new Intl.NumberFormat("en-US", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  });
  return (
    <Container>
      <div className="history_container">
        <Row>
          <Col xxl={4} xl={4} lg={4} md={12} sm={12} xs={12} className="mb-3">
            <Stack gap={3}>
              <div className="spacex_detailcard">
                <Stack gap={3}>
                  <div className="">
                    <h5 className="fw-bold mb-0 text-center">{item.name}</h5>
                    <span className="center">{item.company}</span>
                  </div>

                  <div className="">
                    <div className="between">
                      <span className="text-gray">Status</span>
                      <span>
                        {item.active ? (
                          <small className="text-success">Active</small>
                        ) : (
                          <small className="text-danger">InActive</small>
                        )}
                      </span>
                    </div>
                    <div className="between">
                      <span className="text-gray">Country</span>
                      <small>{item.country}</small>
                    </div>
                    <div className="between">
                      <span className="text-gray">Boosters</span>
                      <small>{item.boosters}</small>
                    </div>
                    <div className="between">
                      <span className="text-gray">Cost</span>
                      <small>${formatter.format(item.cost_per_launch)}</small>
                    </div>
                  </div>

                  <div className="">
                    <h6 className="fw-bold">Payload Weights</h6>
                    <Row>
                      {item.payload_weights.map((payload, i) => (
                        <Col
                          xxl={6}
                          xl={6}
                          lg={6}
                          md={12}
                          sm={12}
                          xs={12}
                          key={i}
                          className="mb-2"
                        >
                          <div className="props_box h-100 center flex-column">
                            <span className="text-gray">{payload.id}</span>
                            <small>{payload.kg} kg</small>
                            <small>{payload.lb} lb</small>
                          </div>
                        </Col>
                      ))}
                    </Row>
                  </div>
                  <div className="flex-column d-flex">
                    <h6 className="fw-bold">Wikipedia</h6>
                    <a href={item.wikipedia} target="_black">
                      {item.wikipedia}
                    </a>
                  </div>
                </Stack>
              </div>
              <div className="spacex_detailcard">
                <Stack gap={3}>
                  <Stack gap={3} className="">
                    <h6 className="fw-bold mb-0 text-center">Engines</h6>
                    <div className="between">
                      <div
                        style={{
                          backgroundColor:
                            activeEngine == "ISP" ? "#f5f5f5" : "transparent",
                        }}
                        className="engine_boxes"
                        onClick={() => setActiveEngine("ISP")}
                      >
                        <small>ISP</small>
                      </div>
                      <div
                        style={{
                          backgroundColor:
                            activeEngine == "TSL" ? "#f5f5f5" : "transparent",
                        }}
                        className="engine_boxes"
                        onClick={() => setActiveEngine("TSL")}
                      >
                        <small>TSL</small>
                      </div>
                      <div
                        style={{
                          backgroundColor:
                            activeEngine == "TV" ? "#f5f5f5" : "transparent",
                        }}
                        className="engine_boxes"
                        onClick={() => setActiveEngine("TV")}
                      >
                        <small>TV</small>
                      </div>
                    </div>
                    <div className="flex-column d-flex ">
                      {activeEngine == "ISP" ? (
                        <>
                          <span>
                            Sea Level : {item.engines.isp.sea_level}
                          </span>
                          <span>Vacuum : {item.engines.isp.vacuum}</span>
                        </>
                      ) : activeEngine == "TSL" ? (
                        <>
                          <span>
                            Thrust Sea Level (kN) :{" "}
                            {item.engines.thrust_sea_level.kN} kN
                          </span>
                          <span>
                            Thrust Sea Level (lbf) :{" "}
                            {item.engines.thrust_sea_level.lbf} lbf
                          </span>
                        </>
                      ) : (
                        <>
                          <span>
                            Thrust Vacuum (kN) : {item.engines.thrust_vacuum.kN}
                          </span>
                          <span>
                            Thrust Vacuum (lbf) :{" "}
                            {item.engines.thrust_vacuum.lbf}
                          </span>
                        </>
                      )}
                      <small></small>
                    </div>
                    <Stack gap={2} className="">
                      <div className="between">
                        <span className="text-gray">Number</span>
                        <small>{item.engines.number}</small>
                      </div>
                      <div className="between">
                        <span className="text-gray">Type</span>
                        <small>{item.engines.type}</small>
                      </div>
                      <div className="between">
                        <span className="text-gray">Version</span>
                        <small>{item.engines.version}</small>
                      </div>
                      <div className="between">
                        <span className="text-gray">Layout</span>
                        <small>{item.engines.layout}</small>
                      </div>
                      <div className="between">
                        <span className="text-gray">Engine Loss Max</span>
                        <small>{item.engines.engine_loss_max}</small>
                      </div>
                      <div className="between">
                        <span className="text-gray">Propellant 1</span>
                        <small>{item.engines.propellant_1}</small>
                      </div>
                      <div className="between">
                        <span className="text-gray">Propellant 2</span>
                        <small>{item.engines.propellant_2}</small>
                      </div>
                      <div className="between">
                        <span className="text-gray">Thrust To Weight</span>
                        <small>{item.engines.thrust_to_weight}</small>
                      </div>
                    </Stack>
                  </Stack>
                </Stack>
              </div>
            </Stack>
          </Col>
          <Col xxl={8} xl={8} lg={8} md={12} sm={12} xs={12} className="mb-3">
            <div className="h-100 spacex_detailcard">
              <ImageSwiper imagesData={item.flickr_images} height="300px" />
              <Stack gap={3} className="mt-2">
                <div className="between">
                  <span className="text-gray">
                    First Launched : {timeconvertdays(item.first_flight)}
                  </span>
                  <span className="text-gray">
                    Success Rate : {item.success_rate_pct}
                  </span>
                </div>
                <div className="">
                  <h6 className="fw-bold">Description</h6>
                  <span>{item.description}</span>
                </div>
                <StagesTable item={item}/>
                <div className="between">
                    <span>Height : <small>{item.height.meters} meters</small> {","} <small>{item.height.feet} feet</small></span>
                    <span>Diameter : <small>{item.diameter.meters} meters</small> {","} <small>{item.diameter.feet} feet</small></span>
                    <span>Mass : <small>{item.mass.kg} kg</small> {","} <small>{item.mass.lb} lb</small></span>
                </div>
              </Stack>
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default RocketDetails;
