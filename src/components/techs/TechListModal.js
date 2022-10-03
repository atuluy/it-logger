// import React, { useState, useEffect } from "react";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

// Actions
import { getTechs } from "../../actions/techActions";

// Components
import TechItem from "./TechItem";

const TechListModal = ({ tech: { techs, loading }, getTechs }) => {
  // const [techs, setTechs] = useState([]);
  // const [loading, setLoading] = useState(false);

  useEffect(() => {
    getTechs();
    //eslint-disable-next-line
  }, []);

  // const getTechs = async () => {
  //   setLoading(true);

  //   const res = await fetch("/techs"); // We do not need to write http://localhost:5000/techs because we have added it to proxy
  //   const data = await res.json();

  //   setTechs(data);
  //   setLoading(false);
  // };

  return (
    <div id="tech-list-modal" className="modal">
      <div className="modal-content">
        <h4>Technician List</h4>
        <ul className="collection">
          {!loading &&
            techs !== null &&
            techs.map((tech) => <TechItem tech={tech} key={tech.id} />)}
        </ul>
      </div>
    </div>
  );
};

TechListModal.proptypes = {
  tech: PropTypes.object.isRequired,
  getTechs: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  tech: state.tech,
});

export default connect(mapStateToProps, { getTechs })(TechListModal);
