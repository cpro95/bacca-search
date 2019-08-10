import React from "react";

const Detail = props => {
  const detailData = props.location.state;
  var data = detailData.split("");
  var totalCount = detailData.length;
  var playerWins = detailData.match(new RegExp("P","g") || []).length;
  var BankerWins = detailData.match(new RegExp("B","g") || []).length;
  var TieCount = totalCount - playerWins - BankerWins;

  var logic = [];
  data.map((item, index) => {
    if (item === "P") {
      logic.push(
        <span key={index} className="btn btn-primary btn-circle">
          {item}
        </span>
      );
    } else if (item === "B") {
      logic.push(
        <span key={index} className="btn btn-danger btn-circle">
          {item}
        </span>
      );
    } else {
      logic.push(
        <span key={index} className="btn btn-warning btn-circle">
          {item}
        </span>
      );
	}
	
	return logic;
  });

  return (
    <section>
	  <h5>Total Play : {totalCount}</h5>
    <h6>Player : Tie : Banker = {playerWins} : {TieCount} : {BankerWins}</h6>
      <table className="table table-striped">
        <thead className="thead-dark">
          <tr>
            <th scope="col">Pattern</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{logic}</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};

export default Detail;
