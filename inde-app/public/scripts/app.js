"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Counter = function (_React$Component) {
    _inherits(Counter, _React$Component);

    function Counter(props) {
        _classCallCheck(this, Counter);

        var _this = _possibleConstructorReturn(this, (Counter.__proto__ || Object.getPrototypeOf(Counter)).call(this, props));

        _this.add = _this.add.bind(_this);
        _this.subtract = _this.subtract.bind(_this);
        _this.reset = _this.reset.bind(_this);

        _this.state = {
            count: 0
        };
        return _this;
    }

    _createClass(Counter, [{
        key: "add",
        value: function add() {
            this.setState(function (prevState) {
                return {
                    count: prevState.count + 1
                };
            });
            // this.state.count = this.state.count + 1;
            console.log(this.state);
        }
    }, {
        key: "subtract",
        value: function subtract() {
            this.setState(function (prevState) {
                if (prevState.count >= 1) {
                    return {
                        count: prevState.count - 1
                    };
                }
            });
        }
    }, {
        key: "reset",
        value: function reset() {
            this.setState(function () {
                return {
                    count: 0
                };
            });
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "h1",
                    null,
                    "Count: ",
                    this.state.count
                ),
                React.createElement(
                    "button",
                    { className: "btn-success", onClick: this.add },
                    "+"
                ),
                React.createElement(
                    "button",
                    { className: "btn-info", onClick: this.subtract },
                    "-"
                ),
                React.createElement(
                    "button",
                    { className: "btn-danger", onClick: this.reset },
                    "Reset"
                ),
                React.createElement("br", null)
            );
        }
    }]);

    return Counter;
}(React.Component);

ReactDOM.render(React.createElement(Counter, null), document.getElementById('app'));

// const template = (
//     <div>
//         <h1>{app.title}</h1>

//         {app.subTitle && <p>{app.subTitle}</p>}

//         {app.options.length > 0 ? 'Here are your options!' : 'No options'}

//         <ul>
//             <li>Item One</li>
//             <li>Item Two</li>
//         </ul>

//     </div>);

// let count = 0;
// const addOne = () => {
//     count++;
//     renderCounterApp();
// };

// const minusOne = () => {
//     count--;
//     renderCounterApp();
// };

// const reset = () => {
//     count = 0;
//     renderCounterApp();
// };


// // console.log(templateTwo);

// const renderCounterApp = () => {
//     const templateTwo = (
//         <div>
//             <h1>Count: {count}</h1>
//             <button id="add" className="button btn-info" onClick={addOne}>+1</button>
//             <button id="minus" className="button btn-info" onClick={minusOne}>-1</button>
//             <button id="clear" className="button btn-info" onClick={reset}>Clear</button>
//         </div>
//     );
//     ReactDOM.render(templateTwo, appRoot); //do not delete
// };
