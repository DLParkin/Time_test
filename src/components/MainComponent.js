import React, { useState, Fragment } from "react";
import {
  Form,
  Button,
  InputGroup,
  Input,
  InputGroupAddon,
  Row,
  Col,
} from "reactstrap";
import {
  hours,
  isNumber,
  isValidLength,
  getMinutes,
} from "../_helper/timeHelper";
import { TimeDisplay } from "./TimeDisplay";

export function MainComponent() {
  const [time, setTime] = useState("");
  const [hour, setHour] = useState("");
  const [isHourValid, setIsHourValid] = useState(false);
  const [minute, setMinute] = useState("");
  const [isMinValid, setIsMinValid] = useState(false);
  const [timeOfDay, setTimeOfDay] = useState("");
  const [isValid, setIsValid] = useState(false);

  function setHours(hour) {
    setIsHourValid(hour <= 23);
    setHour(hours[hour]);
    setTimeOfDay(hour <= 11 ? "am" : "pm");
  }

  function setMinutes(minute) {
    setIsMinValid(true);
    if (minute >= 60) {
      setIsValid(false);
      setIsMinValid(false);
    } else {
      const min = getMinutes(minute);
      setMinute(min);
    }
  }

  function validateInput() {
    // this could be handled better
    if (!time.length === 5) {
      setIsValid(false);
    }
    // split the time into an array
    const splitTime = time.split(":");

    // parse to int so we can do some cleaner checking
    const hour = parseInt(splitTime[0]);
    const minute = parseInt(splitTime[1]);

    // check if input is number
    setIsValid(isNumber(hour) && isNumber(minute));
    // check the input looks right could have used a regex instead?
    if (isValidLength(splitTime[0]) && isValidLength(splitTime[1])) {
      // set minutes and hours
      setMinutes(minute);
      setHours(hour);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    validateInput();
  }

  return (
    <Fragment>
      <Form onSubmit={handleSubmit}>
        <InputGroup>
          <Input
            type="text"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />
          <InputGroupAddon addonType="append">
            <Button color="primary">Submit</Button>
          </InputGroupAddon>
        </InputGroup>
        <Row>
          <Col>
            {!isValid && <p>Please enter a valid time hh:mm</p>}
            {isValid && isHourValid && isMinValid && (
              <TimeDisplay
                hour={hour}
                minute={minute}
                timeOfDay={timeOfDay}
              ></TimeDisplay>
            )}
          </Col>
        </Row>
      </Form>
    </Fragment>
  );
}
