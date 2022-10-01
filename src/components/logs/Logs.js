import React, { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

// Actions
import { getLogs } from "../../actions/logActions";

// Components
import LogItem from "./LogItem";
import Preloader from "../layout/Preloader";

const Logs = ({ log: { logs, loading }, getLogs }) => {
  useEffect(() => {
    getLogs();
    //eslint-disable-next-line
  }, []);

  if (loading || logs === null) {
    return <Preloader />;
  }

  return (
    <ul className="collection with-header">
      <li className="collection-header">
        <h4 className="center">System Logs</h4>
      </li>
      {!loading && logs.length === 0 ? (
        <p className="center">No logs to show...</p>
      ) : (
        logs.map((log) => <LogItem log={log} key={log.id} />)
      )}
    </ul>
  );
};

Logs.propTypes = {
  log: PropTypes.object.isRequired,
};

// In order to get anything from your App Level State and bring it into your component you have to bring it in as a Prop
const mapStateToProps = (state) => ({
  log: state.log,
});

// Connect componet to Redux
export default connect(mapStateToProps, { getLogs })(Logs);

// Explanation of mapStateToProps
// log is the prop name and we can call it as we want
// state.log is the log in the root reducer and we have to name it exactly as it is named in the root reducer(../reducers/index.js)

// ********************************************************************************************************************************************* //
// ********************************************************************************************************************************************* //

// ********* COMPONENT LEVEL STATE VERSION ********* //

// import React, { useState, useEffect } from "react";
// import { connect } from "react-redux";
// import PropTypes from "prop-types";

// // Components
// import LogItem from "./LogItem";
// import Preloader from "../layout/Preloader";

// const Logs = ({ log: { logs, loading } }) => {
//   const [logs, setLogs] = useState([]);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     getLogs();
//     //eslint-disable-next-line
//   }, []);

//   const getLogs = async () => {
//     setLoading(true);

//     const res = await fetch("/logs"); // We do not need to write http://localhost:5000/logs because we have added it to proxy
//     const data = await res.json();

//     setLogs(data);
//     setLoading(false);
//   };

//   if (loading) {
//     return <Preloader />;
//   }

//   return (
//     <ul className="collection with-header">
//       <li className="collection-header">
//         <h4 className="center">System Logs</h4>
//       </li>
//       {!loading && logs.length === 0 ? (
//         <p className="center">No logs to show...</p>
//       ) : (
//         logs.map((log) => <LogItem log={log} key={log.id} />)
//       )}
//     </ul>
//   );
// };

// Logs.propTypes = {
//   log: PropTypes.object.isRequired,
// };

// // In order to get anything from your App Level State and bring it into your component you have to bring it in as a Prop
// const mapStateToProps = (state) => ({
//   log: state.log,
// });

// // Connect componet to Redux
// export default connect(mapStateToProps)(Logs);
