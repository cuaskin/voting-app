import React from 'react';
import { connect } from 'react-redux';
import { setData } from 'store/actions';

const Index = ({ count = 0, setData }) => {
  const onClick = () => {
    setData({
      count: count + 1,
    });
  };
  return (
    <>
      <h1>Lists of Employee</h1>
      <p>{count}</p>
      <button onClick={onClick}>count +</button>
    </>
  );
};

const mapStateToProps = (state) => ({
  count: state.count,
});

export default connect(mapStateToProps, { setData })(Index);
