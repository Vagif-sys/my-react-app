import React, { useState, useEffect } from "react";
import axios from "axios";
import image from "../images/chart.png";
import image1 from "../images/usd.png";
import image2 from "../images/chiacoin.png";
//import "./ChiaAPI.scss";

const ChiaAPI = () => {
  const [coins, setCoins] = useState([]);
  const [euro, setEuro] = useState([]);
  const [lira, setLira] = useState([]);
  const [rub, setRub] = useState([]);
  const [gbp, setGbp] = useState([]);
  const [uah, setUah] = useState([]);
  const [pln, setPln] = useState([]);

  console.log("euro: " + euro);
  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=chia&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      )
      .then((res) => {
        setCoins(res.data);
        console.log(res.data);
      })
      .catch((error) => console.log(error));

    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&ids=chia&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      )
      .then((res) => {
        setEuro(res.data);
        console.log("euro: " + res.data);
      })
      .catch((error) => console.log(error));

    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=try&ids=chia&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      )
      .then((res) => {
        setLira(res.data);
      })
      .catch((error) => console.log(error));

    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=rub&ids=chia&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      )
      .then((res) => {
        setRub(res.data);
      })
      .catch((error) => console.log(error));

    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=gbp&ids=chia&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      )
      .then((res) => {
        setGbp(res.data);
      })
      .catch((error) => console.log(error));

    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=uah&ids=chia&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      )
      .then((res) => {
        setUah(res.data);
      })
      .catch((error) => console.log(error));

    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=ils&ids=chia&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      )
      .then((res) => {
        setPln(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="api">
      <marquee direction="left" scrollamount="9">
        <div className="ticker">
          {euro.map((coin) => {
            return (
              <div className="divp">
                <div style={{ marginRight: "6px" }}>Chia (XCH)</div>
                <div>-</div>
                <span style={{ marginLeft: "6px", marginRight: "8px" }}>
                  € {coin.current_price}
                </span>
                <div style={{ marginBottom: "2px" }}>/</div>
                {coin.price_change_percentage_24h < 0 ? (
                  <h4 className="redp">
                    <i class="fas fa-arrow-down"></i>
                    {coin.price_change_percentage_24h.toFixed(2)}%
                  </h4>
                ) : (
                  <h4 className="greenp">
                    <i class="fas fa-arrow-up"></i>
                    {coin.price_change_percentage_24h.toFixed(2)}%
                  </h4>
                )}
              </div>
            );
          })}

          {lira.map((coin) => {
            return (
              <div className="divp">
                <div style={{ marginRight: "6px" }}>Chia (XCH)</div>
                <div>-</div>
                <span style={{ marginLeft: "6px", marginRight: "8px" }}>
                  ₤ {coin.current_price}
                </span>
                <div style={{ marginBottom: "2px" }}>/</div>
                {coin.price_change_percentage_24h < 0 ? (
                  <h4 className="redp">
                    <i class="fas fa-arrow-down"></i>
                    {coin.price_change_percentage_24h.toFixed(2)}%
                  </h4>
                ) : (
                  <h4 className="greenp">
                    <i class="fas fa-arrow-up"></i>
                    {coin.price_change_percentage_24h.toFixed(2)}%
                  </h4>
                )}
              </div>
            );
          })}

          {rub.map((coin) => {
            return (
              <div className="divp">
                <div style={{ marginRight: "6px" }}>Chia (XCH)</div>
                <div>-</div>
                <span style={{ marginLeft: "6px", marginRight: "8px" }}>
                  ₽ {coin.current_price}
                </span>
                <div style={{ marginBottom: "2px" }}>/</div>
                {coin.price_change_percentage_24h < 0 ? (
                  <h4 className="redp">
                    <i class="fas fa-arrow-down"></i>
                    {coin.price_change_percentage_24h.toFixed(2)}%
                  </h4>
                ) : (
                  <h4 className="greenp">
                    <i class="fas fa-arrow-up"></i>
                    {coin.price_change_percentage_24h.toFixed(2)}%
                  </h4>
                )}
              </div>
            );
          })}

          {gbp.map((coin) => {
            return (
              <div className="divp">
                <div style={{ marginRight: "6px" }}>Chia (XCH)</div>
                <div>-</div>
                <span style={{ marginLeft: "6px", marginRight: "8px" }}>
                  £ {coin.current_price}
                </span>
                <div style={{ marginBottom: "2px" }}>/</div>
                {coin.price_change_percentage_24h < 0 ? (
                  <h4 className="redp">
                    <i class="fas fa-arrow-down"></i>
                    {coin.price_change_percentage_24h.toFixed(2)}%
                  </h4>
                ) : (
                  <h4 className="greenp">
                    <i class="fas fa-arrow-up"></i>
                    {coin.price_change_percentage_24h.toFixed(2)}%
                  </h4>
                )}
              </div>
            );
          })}

          {uah.map((coin) => {
            return (
              <div className="divp">
                <div style={{ marginRight: "6px" }}>Chia (XCH)</div>
                <div>-</div>
                <span style={{ marginLeft: "6px", marginRight: "8px" }}>
                  ₴ {coin.current_price}
                </span>
                <div style={{ marginBottom: "2px" }}>/</div>
                {coin.price_change_percentage_24h < 0 ? (
                  <h4 className="redp">
                    <i class="fas fa-arrow-down"></i>
                    {coin.price_change_percentage_24h.toFixed(2)}%
                  </h4>
                ) : (
                  <h4 className="greenp">
                    <i class="fas fa-arrow-up"></i>
                    {coin.price_change_percentage_24h.toFixed(2)}%
                  </h4>
                )}
              </div>
            );
          })}

          {pln.map((coin) => {
            return (
              <div className="divp">
                <div style={{ marginRight: "6px" }}>Chia (XCH)</div>
                <div>-</div>
                <span style={{ marginLeft: "6px", marginRight: "8px" }}>
                  Zł {coin.current_price}
                </span>
                <div style={{ marginBottom: "2px" }}>/</div>
                {coin.price_change_percentage_24h < 0 ? (
                  <h4 className="redp">
                    <i class="fas fa-arrow-down"></i>
                    {coin.price_change_percentage_24h.toFixed(2)}%
                  </h4>
                ) : (
                  <h4 className="greenp">
                    <i class="fas fa-arrow-up"></i>
                    {coin.price_change_percentage_24h.toFixed(2)}%
                  </h4>
                )}
              </div>
            );
          })}

          {coins.map((coin) => {
            return (
              <div className="divp">
                <div style={{ marginRight: "6px" }}>Chia (XCH)</div>
                <div>-</div>
                <span style={{ marginLeft: "6px", marginRight: "8px" }}>
                  $ {coin.current_price}
                </span>
                <div style={{ marginBottom: "2px" }}>/</div>
                {coin.price_change_percentage_24h < 0 ? (
                  <h4 className="redp">
                    <i class="fas fa-arrow-down"></i>
                    {coin.price_change_percentage_24h.toFixed(2)}%
                  </h4>
                ) : (
                  <h4 className="greenp">
                    <i class="fas fa-arrow-up"></i>
                    {coin.price_change_percentage_24h.toFixed(2)}%
                  </h4>
                )}
              </div>
            );
          })}
        </div>
      </marquee>
      <div className="divtitle">
        <div className="liveeffect"></div>
        <span>Chia Network Live Exchange</span>
        <div className="liveeffect"></div>
      </div>
      {coins.map((coin) => {
        return (
          <div>
            <div className="div1">
              <img src={coin.image} alt="coin" />
              <span>Chia Network</span>
              <h3>{coin.symbol}</h3>
              <img src={image2} alt="chiacoin" />
            </div>
            <div className="div2">
              <span>Chia Network Price (XCH)</span>
              <img src={image1} alt="dollar" /> <h1>${coin.current_price}</h1>
            </div>
            <div className="div3">
              {coin.price_change_percentage_24h < 0 ? (
                <h4 className="red1">
                  <i class="fas fa-arrow-down"></i>
                  {coin.price_change_percentage_24h.toFixed(2)}%
                </h4>
              ) : (
                <h4 className="green1">
                  <i class="fas fa-arrow-up"></i>
                  {coin.price_change_percentage_24h.toFixed(2)}%
                </h4>
              )}
            </div>
            <div className="div4">
              <div className="div4div1">
                <i class="far fa-clock fa-spin"></i>
                <span>24 saat ərzində maksimum ve minumum dəyər</span>
              </div>
              <span className="span1">
                Maksimum: ${coin.high_24h}
                <i class="fas fa-arrow-up"></i>
              </span>
              <span className="span1">
                Minimum: ${coin.low_24h}
                <i class="fas fa-arrow-down"></i>
              </span>
            </div>
            <div className="div5">
              <span className="span1">Ümumi həcm dəyəri</span>
              <span className="span2">
                ${coin.total_volume.toLocaleString()}
              </span>
            </div>
            <div className="div6">
              <img src={image} alt="" />
              <div>
                <span>Chia Price and Market Stats</span>
                <ul>
                  <li>
                    <span className="span1">XCH Price</span>
                    <span className="span2">${coin.current_price}</span>
                  </li>
                  <li>
                    <span className="span1">Market Cap</span>
                    <span className="span2">
                      ${coin.market_cap.toLocaleString()}
                    </span>
                  </li>
                  <li>
                    <span className="span1">Trading Volume</span>
                    <span className="span2">
                      ${coin.total_volume.toLocaleString()}
                    </span>
                  </li>
                  <li>
                    <span className="span1">Market Cap Rank</span>
                    <span className="span2">#{coin.market_cap_rank}</span>
                  </li>
                  <li>
                    <span className="span1">All-Time High</span>
                    <span className="span2">
                      ${coin.ath}
                      <br />
                      <br />
                      Bu Tarixdən: {coin.ath_date.slice(0, 10)}
                    </span>
                  </li>
                  <li>
                    <span className="span1">All-Time Low</span>
                    <span className="span2">
                      ${coin.atl} <br />
                      <br />
                      Bu Tarixdən: {coin.atl_date.slice(0, 10)}
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        );
      })}
      <coingecko-coin-compare-chart-widget
        coin-ids="chia"
        currency="usd"
        locale="tr"
      ></coingecko-coin-compare-chart-widget>
    </div>
  );
};

export default ChiaAPI;

//<h2>${coin.total_volume.toLocaleString()}</h2>
