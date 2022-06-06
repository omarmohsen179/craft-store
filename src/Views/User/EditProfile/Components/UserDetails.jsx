import React, { useCallback, useRef, useState } from "react";
import PropTypes from "prop-types";
import {
  Card,
  CardHeader,
  Button,
  ListGroup,
  ListGroupItem,
  Progress,
} from "shards-react";
import ButtonComponent from "../../../../Components/ButtonComponent";

const UserDetails = ({ userDetails }) => {
  const defualtvalues = useRef({
    FullName: "",
    CPassword: "",
    Username: "",
    Password: "",
    Email: "",
  });
  const [values, setvalues] = useState(defualtvalues.current);
  const handleChange = useCallback((e) => {
    setvalues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }, []);

  return (
    <Card small className="mb-4 pt-3">
      <CardHeader className="border-bottom text-center">
        <div className="mb-3 mx-auto">
          {userDetails.avatar ? (
            <img
              className="rounded-circle"
              src={userDetails.avatar}
              alt={userDetails.name}
              width="110"
            />
          ) : (
            <i style={{ fontSize: "30px" }} className="fas fa-user"></i>
          )}
        </div>
        <h4 className="mb-0">{userDetails.name}</h4>
        <span className="text-muted d-block mb-2">{userDetails.jobTitle}</span>
        <ButtonComponent title={"Upload"} />
      </CardHeader>
      <ListGroup flush>
        <ListGroupItem className="px-4">
          <div className="progress-wrapper">
            <strong className="text-muted d-block mb-2">
              {userDetails.performanceReportTitle}
            </strong>
          </div>
        </ListGroupItem>
        <ListGroupItem className="p-4">
          <strong className="text-muted d-block mb-2">
            {userDetails.metaTitle}
          </strong>
          <span>{userDetails.metaValue}</span>
        </ListGroupItem>
      </ListGroup>
    </Card>
  );
};

UserDetails.propTypes = {
  /**
   * The user details object.
   */
  userDetails: PropTypes.object,
};

// const firstName = JSON.parse(localStorage.getItem("inputs")).FirstName;
// const lastName = JSON.parse(localStorage.getItem("inputs")).LastName;

UserDetails.defaultProps = {
  userDetails: {
    name: "sara ahmad",
    jobTitle: "Project Manager",
    performanceReportTitle: "Workload",
    performanceReportValue: 74,
    metaTitle: "Description",
    metaValue:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio eaque, quidem, commodi soluta qui quae minima obcaecati quod dolorum sint alias, possimus illum assumenda eligendi cumque?",
  },
};

export default UserDetails;
