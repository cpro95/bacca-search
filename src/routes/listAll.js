import React, { useState } from 'react';
import * as deckDB from '../allresult.json';
import Header from '../components/header';
import { Link } from 'react-router-dom';

const ListAll = () => {
  // importing array from files returns Object, your data is Object.default
  let totalDeck = deckDB.default;
  var countedResult = {
    playerCount: 0,
    bankerCount: 0,
    tieCount: 0
  };
  var leastSearchNumber = 5;

  const [search, setSearch] = useState('');
  // deck is results of play
  const [deck, setDeck] = useState(totalDeck);
  const [counted, setCounted] = useState(countedResult);

  const guessNext = (arr, count) => {
    var countedResult = {
      playerCount: 0,
      bankerCount: 0,
      tieCount: 0
    };
    arr.map(item => {
      switch (item[count]) {
        case 'P':
          countedResult.playerCount++;
          break;
        case 'B':
          countedResult.bankerCount++;
          break;
        case 'T':
          countedResult.tieCount++;
          break;
        default:
      }
      return null;
    });
    return countedResult;
  };

  const handleChange = e => {
    e.target.value = e.target.value.toUpperCase();
    setSearch(e.target.value);
    // at least 5 search inputs
    if (e.target.value.trim().length >= leastSearchNumber) {
      var filteredDeck = totalDeck.filter(dd => {
        // startsWith function return true or false
        if (dd.toUpperCase().startsWith(e.target.value.toUpperCase()))
          return true;
        else return false;
      });
      if (e.target.value.trim() !== '') {
        setDeck(filteredDeck);
        var returnedResult = guessNext(
          filteredDeck,
          e.target.value.trim().length
        );
        setCounted(returnedResult);
      } else setDeck(totalDeck);
    }
  };

  return (
    <section>
      <Header />
      <div className="input-group input-group-sm mb-3">
        <input
          type="text"
          className="form-control"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-sm"
          value={search}
          autoFocus
          onChange={handleChange}
          placeholder="Search Data with P,B,T (at least 5 inputs required)"
        />
      </div>
      <h6>Total : {deck.length}</h6>
      {search.length >= leastSearchNumber ? (
        <table className="table table-striped">
          <thead className="thead-dark">
            <tr>
              <th scope="col">
                [Next Guess] P = {counted.playerCount}(
                {((counted.playerCount / deck.length) * 100).toFixed(0)}%) / B ={' '}
                {counted.bankerCount}(
                {((counted.bankerCount / deck.length) * 100).toFixed(0)}%) / T ={' '}
                {counted.tieCount}(
                {((counted.tieCount / deck.length) * 100).toFixed(0)}%)
              </th>
            </tr>
          </thead>
          <tbody>
            {deck.map((d, i) => (
              <tr key={i}>
                <td>
                  <span className="text-white bg-dark">{search}</span>
                  <Link
                    to={{
                      pathname: `${i}`,
                      state: d
                    }}
                  >
                    {d.slice(search.length)}
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div />
      )}
    </section>
  );
};

export default ListAll;
