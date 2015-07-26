/** @jsx React.DOM */

var React = require('react/addons');

var shoppingList = require('../data/shoppingList.js');

var resultsPerPage = 200;

var FrankyApp = React.createClass({
      getInitialState: function() {
        return {data: shoppingList};
      },

      componentDidMount: function () {
        console.log(shoppingList);
      },

      render: function () {
        if (this.state.data) {

          var FrankyList = this.state.data.shoppingList.map(function (shopping) {
            return (
              <a href={shopping.source_link} className="pg-toDetail pg-comm-item-outer" onmousedown="$.G.gaq('/_trc/Temaihui/_/toDetailH5')">
              <div className="pg-comm-item  clr">
                <div className="pg-item-l">
                  <img className="pg-item-img" src="http://img4q.duitang.com/uploads/people/201504/11/20150411H1519_THcLC.png"/>
                  <p className="pg-item-p">已抢完</p>
                  <img src={shopping.photo_url} />
                  <div className="pg-item-time">
                    <i className="pg-clock-icon">
                      <img src="http://img4q.duitang.com/uploads/people/201504/10/20150410H1108_HNci4.png"/>
                    </i>
                  </div>
                </div>
                <div className="pg-item-r">
                  <div className="pg-item-r-inner">
                    <h1>{shopping.title}</h1>
                    <p className="pg-item-cnt">{shopping.desc}</p>
                    <p className="pg-item-price">
                      <del>
                      <span>市场价:</span>
                      <span>&nbsp;¥&nbsp;</span>
                      <span>{shopping.price}</span>
                      </del>
                    </p>
                    <div className="pg-item-ticket">
                      <div className="pg-item-ticket-l">
                        <div className="pg-item-ticket-icon l">￥</div>
                        <div className="pg-item-ticket-price l">{shopping.price}</div>
                        <div className="pg-item-ticket-sale l"><span>5.6折</span></div>
                        <div className="pg-item-ticket-r r">去抢购</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </a>
            );
          })
        }
        return (
          <div className="pg-shopping-item">
            {FrankyList}
          </div>
        )
      }
  });

module.exports = FrankyApp;