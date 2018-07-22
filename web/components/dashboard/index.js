import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const DashBoard = (props) => {
  const { hackerApplication } = props;
  if (!hackerApplication.isLoaded) return (<div />);
  if (hackerApplication.data) return (<div>you have one hacker application</div>);
  return (<div>you didn&#39;t apply as hacker</div>);
};

const mapStateToProps = (state) => {
  const { root: { hackerApplication } } = state;
  return {
    hackerApplication,
  };
};

DashBoard.propTypes = {
  hackerApplication: PropTypes.object.isRequired,
};

export default connect(mapStateToProps)(DashBoard);
