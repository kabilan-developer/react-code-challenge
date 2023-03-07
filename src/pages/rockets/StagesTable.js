import React from "react";
import { Col, Row, Stack } from "react-bootstrap";
import "./style.css";

const StagesTable = (props) => {
    const {item} = props;
  return (
    <Row>
      <Col xxl={6} xl={6} lg={6} md={12} sm={12} xs={12}>
        <div className="h-100 stages_table">
          <h6 className="fw-bold text-center mb-0 py-2 bg-light">
            First Stage
          </h6>
          <Stack gap={2} className="p-2">
            <div className="between">
              <span className="text-gray">Thrust Sea Level (kN)</span>
              <small className="">
                {item.first_stage.thrust_sea_level.kN} kN
              </small>
            </div>
            <div className="between">
              <span className="text-gray">Thrust Sea Level (lbf)</span>
              <small className="">
                {item.first_stage.thrust_sea_level.lbf} lbf
              </small>
            </div>
            <div className="between">
              <span className="text-gray">Thrust Vacuum (kN)</span>
              <small className="">{item.first_stage.thrust_vacuum.kN} kN</small>
            </div>
            <div className="between">
              <span className="text-gray">Thrust Vacuum (lbf)</span>
              <small className="">
                {item.first_stage.thrust_vacuum.lbf} lbf
              </small>
            </div>
            <div className="between">
              <span className="text-gray">Reusable</span>
              <small className="">
                {item.first_stage.reusable ? "Yes" : "No"}
              </small>
            </div>
            <div className="between">
              <span className="text-gray">Engines</span>
              <small className="">{item.first_stage.engines}</small>
            </div>
            <div className="between">
              <span className="text-gray">Fuel Amount</span>
              <small className="">
                {item.first_stage.fuel_amount_tons} tons
              </small>
            </div>
            <div className="between">
              <span className="text-gray">Burn Time</span>
              <small className="">{item.first_stage.burn_time_sec} sec</small>
            </div>
          </Stack>
        </div>
      </Col>
      <Col xxl={6} xl={6} lg={6} md={12} sm={12} xs={12}>
        <div className="h-100 stages_table">
          <h6 className="fw-bold text-center mb-0 py-2 bg-light">
            Second Stage
          </h6>

          <Stack gap={2} className="p-2">
            <div className="between">
              <span className="text-gray">Thrust (kN)</span>
              <small className="">{item.second_stage.thrust.kN} kN</small>
            </div>
            <div className="between">
              <span className="text-gray">Thrust (lbf)</span>
              <small className="">{item.second_stage.thrust.lbf} lbf</small>
            </div>
            <div className="between">
              <span className="text-gray">Composite Fairing Height</span>
              <small className="">
                {item.second_stage.payloads.composite_fairing.height.meters}{" "}
                meters
              </small>
            </div>
            <div className="between">
              <span className="text-gray">Composite Fairing Height</span>
              <small className="">
                {item.second_stage.payloads.composite_fairing.height.feet} feet
              </small>
            </div>
            <div className="between">
              <span className="text-gray">Composite Fairing Diameter</span>
              <small className="">
                {item.second_stage.payloads.composite_fairing.diameter.meters}{" "}
                meters
              </small>
            </div>
            <div className="between">
              <span className="text-gray">Composite Fairing Diameter</span>
              <small className="">
                {item.second_stage.payloads.composite_fairing.diameter.meters}{" "}
                feet
              </small>
            </div>
            <div className="between">
              <span className="text-gray">Payloads Option</span>
              <small className="">{item.second_stage.payloads.option_1}</small>
            </div>
            <div className="between">
              <span className="text-gray">Reusable</span>
              <small className="">
                {item.second_stage.reusable ? "Yes" : "No"}
              </small>
            </div>
            <div className="between">
              <span className="text-gray">Engines</span>
              <small className="">{item.second_stage.engines}</small>
            </div>
            <div className="between">
              <span className="text-gray">Fuel Amount</span>
              <small className="">
                {item.second_stage.fuel_amount_tons} tons
              </small>
            </div>
            <div className="between">
              <span className="text-gray">Burn Time</span>
              <small className="">{item.second_stage.burn_time_sec} sec</small>
            </div>
          </Stack>
        </div>
      </Col>
    </Row>
  );
};

export default StagesTable;
