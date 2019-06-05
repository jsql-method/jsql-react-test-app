import React, {Component} from 'react';
import {Cases} from "./cases";

import './App.css';


class App extends Component {

    constructor(props) {

        super(props);

        this.state = {
            results: []
        }
    }

    componentDidMount() {

        let cases = new Cases();
        cases.init(this, this.state);
        cases[cases.cases.names.caseName1]();

    }

    render() {
        return (

            <div id="app">
                <p><span>JSQL React (16.8.6) </span> - unit testing</p>
                <table>
                    <thead>
                        <th>Case</th>
                        <th>Duration (ms)</th>
                        <th>Status</th>
                    </thead>
                    <tbody>
                    {this.state.results ?
                        this.state.results.map((result, index) => {
                            return (
                                <tr key={index}>
                                    <td>{result.caseName}</td>
                                    <td>{result.duration}</td>
                                    <td className={result.status.toLowerCase()}>{result.status}</td>
                                </tr>
                            )
                        }) : null
                    }
                    </tbody>
                </table>
            </div>

        );
    }
}

export default App;import JsqlService from 'jsql-superagent';

export class Cases {

    cases = {
        fn: {},
        cases: {},
        names: {},
        resultCase: function (reference, state, status, duration, caseName) {
            state.results.unshift({
                status: status,
                duration: duration,
                caseName: caseName
            });
            reference.forceUpdate();
        }
    };

    init(reference, state) {

        var jsqlConfig = new JsqlService({
            host: window.host,
            apiKey: window.apiKey,
            devKey: window.devKey
        });

        var jsql = jsqlConfig.getInstance();

        console.log(jsql);

        var self = this;

        self.cases.names.caseName1 = 'Insert person';
        self[self.cases.names.caseName1] = function () {

            var start = new Date().getTime();

            var resultCallback = function (status) {
                var end = new Date().getTime();
                var duration = end - start;

                self.cases.resultCase(reference, state, status, duration, self.cases.names.caseName1);
                self[self.cases.names.caseName2]();

            };

            try {

                jsql.insert("insert into person (id, name, surname, age) values (nextval('person_id_seq'), :name, :surname, :age)")
                    .params({
                        name: 'Mirek',
                        surname: 'Wołyński',
                        age: 38
                    })
                    .then(function (result) {
                        console.log(self.cases.names.caseName1, result.body);
                        resultCallback('SUCCESS');
                    })
                    .catch(function (error) {
                        console.error(error);
                        resultCallback('FAILED');
                    })

            } catch (error) {
                console.error(error);
                resultCallback('FAILED');
            }


        };


        self.cases.names.caseName2 = 'Insert car';
        self[self.cases.names.caseName2] = function () {

            var start = new Date().getTime();

            var resultCallback = function (status) {
                var end = new Date().getTime();
                var duration = end - start;

                self.cases.resultCase(reference, state, status, duration, self.cases.names.caseName2);
                self[self.cases.names.caseName3]();

            };

            try {

                jsql.insert("insert into car (id, price, year, model) values (nextval('car_id_seq'), ?, ?, ?)")
                    .params([19.500, 2000, 'Audi A3'])
                    .then(function (result) {
                        console.log(self.cases.names.caseName2, result.body);
                        resultCallback('SUCCESS');
                    })
                    .catch(function (error) {
                        console.error(error);
                        resultCallback('FAILED');
                    })

            } catch (error) {
                console.error(error);
                resultCallback('FAILED');
            }


        };


        self.cases.names.caseName3 = 'Update persons';
        self[self.cases.names.caseName3] = function () {

            var start = new Date().getTime();

            var resultCallback = function (status) {
                var end = new Date().getTime();
                var duration = end - start;

                self.cases.resultCase(reference, state, status, duration, self.cases.names.caseName3);
                self[self.cases.names.caseName4]();

            };

            try {

                jsql.update("update person set salary = 4000 where age > :age")
                    .param('age', 30)
                    .then(function (result) {
                        console.log(self.cases.names.caseName3, result.body);
                        resultCallback('SUCCESS');
                    })
                    .catch(function (error) {
                        console.error(error);
                        resultCallback('FAILED');
                    })

            } catch (error) {
                console.error(error);
                resultCallback('FAILED');
            }


        };


        self.cases.names.caseName4 = 'Update cars';
        self[self.cases.names.caseName4] = function () {

            var start = new Date().getTime();

            var resultCallback = function (status) {
                var end = new Date().getTime();
                var duration = end - start;

                self.cases.resultCase(reference, state, status, duration, self.cases.names.caseName4);
                self[self.cases.names.caseName5]();

            };

            try {

                // jsql.update("update car set created_at = ?")
                //     .params([ new Date().getTime() ])
                jsql.update("update car set type = ?")
                    .params(['osobowy'])
                    .then(function (result) {
                        console.log(self.cases.names.caseName4, result.body);
                        resultCallback('SUCCESS');
                    })
                    .catch(function (error) {
                        console.error(error);
                        resultCallback('FAILED');
                    })

            } catch (error) {
                console.error(error);
                resultCallback('FAILED');
            }


        };


        self.cases.names.caseName5 = 'Select person';
        self[self.cases.names.caseName5] = function () {

            var start = new Date().getTime();

            var resultCallback = function (status) {
                var end = new Date().getTime();
                var duration = end - start;

                self.cases.resultCase(reference, state, status, duration, self.cases.names.caseName5);
                self[self.cases.names.caseName6]();

            };

            try {

                jsql.selectOne("select * from person where age > :ageMin and age < :ageMax limit 1")
                    .param('ageMin', 30)
                    .param('ageMax', 50)
                    .then(function (result) {
                        console.log(self.cases.names.caseName5, result.body);

                        if (!jsql.isArray(result)) {
                            resultCallback('SUCCESS');
                        } else {
                            resultCallback('FAILED');
                        }

                    })
                    .catch(function (error) {
                        console.error(error);
                        resultCallback('FAILED');
                    })


            } catch (error) {
                console.error(error);
                resultCallback('FAILED');
            }


        };

        self.cases.names.caseName6 = 'Select cars';
        self[self.cases.names.caseName6] = function () {

            var start = new Date().getTime();

            var resultCallback = function (status) {
                var end = new Date().getTime();
                var duration = end - start;

                self.cases.resultCase(reference, state, status, duration, self.cases.names.caseName6);
                self[self.cases.names.caseName7]();

            };

            try {

                jsql.select("select id, price from car")
                    .then(function (result) {

                        console.log(self.cases.names.caseName6, result.body);

                        if (jsql.isArray(result.body)) {
                            resultCallback('SUCCESS');
                        } else {
                            resultCallback('FAILED');
                        }

                    })
                    .catch(function (error) {
                        console.error(error);
                        resultCallback('FAILED');
                    })


            } catch (error) {
                console.error(error);
                resultCallback('FAILED');
            }


        };

        self.cases.names.caseName7 = 'Delete persons';
        self[self.cases.names.caseName7] = function () {

            var start = new Date().getTime();

            var resultCallback = function (status) {
                var end = new Date().getTime();
                var duration = end - start;

                self.cases.resultCase(reference, state, status, duration, self.cases.names.caseName7);
                self[self.cases.names.caseName8]();

            };

            try {

                jsql.remove("delete from person where age > 30 ")
                    .then(function (result) {
                        console.log(self.cases.names.caseName7, result.body);
                        resultCallback('SUCCESS');
                    })
                    .catch(function (error) {
                        console.error(error);
                        resultCallback('FAILED');
                    })

            } catch (error) {
                console.error(error);
                resultCallback('FAILED');
            }


        };

        self.cases.names.caseName8 = 'Delete cars';
        self[self.cases.names.caseName8] = function () {

            var start = new Date().getTime();

            var resultCallback = function (status) {
                var end = new Date().getTime();
                var duration = end - start;

                self.cases.resultCase(reference, state, status, duration, self.cases.names.caseName8);
                self[self.cases.names.caseName9]();

            };

            try {

                jsql.remove("delete from car where price <> :price")
                    .params({
                        price: 10.000
                    })
                    .then(function (result) {
                        console.log(self.cases.names.caseName8, result.body);
                        resultCallback('SUCCESS');
                    })
                    .catch(function (error) {
                        console.error(error);
                        resultCallback('FAILED');
                    })

            } catch (error) {
                console.error(error);
                resultCallback('FAILED');
            }


        };


        self.cases.names.caseName9 = 'Transaction insert and rollback';
        self[self.cases.names.caseName9] = function () {

            var start = new Date().getTime();

            var resultCallback = function (status) {
                var end = new Date().getTime();
                var duration = end - start;

                self.cases.resultCase(reference, state, status, duration, self.cases.names.caseName9);
                self[self.cases.names.caseName10]();

            };

            try {

                var transaction = jsql.tx();

                transaction.insert("insert into car (id, price, year, model) values (nextval('car_id_seq'), ?, ?, ?)")
                    .params([180000, 2018, 'Audi A6'])
                    .then(function (result) {
                        console.log(self.cases.names.caseName9, result.body);

                        transaction.rollback().then(function (result) {
                            console.log(self.cases.names.caseName9, result.body);
                            resultCallback('SUCCESS');
                        });

                    })
                    .catch(function (error) {
                        console.error(error);
                        resultCallback('FAILED');
                    })

            } catch (error) {
                console.error(error);
                resultCallback('FAILED');
            }


        };

        self.cases.names.caseName10 = 'Transaction insert and commit';
        self[self.cases.names.caseName10] = function () {

            var start = new Date().getTime();

            var resultCallback = function (status) {
                var end = new Date().getTime();
                var duration = end - start;

                self.cases.resultCase(reference, state, status, duration, self.cases.names.caseName10);
                // self[self.cases.names.caseName11]();

            };

            try {

                var transaction = jsql.tx();

                transaction.insert("insert into car (id, price, year, model) values (nextval('car_id_seq'), ?, ?, ?)")
                    .params([200000, 2019, 'Volkswagen Variant'])
                    .then(function (result) {
                        console.log(self.cases.names.caseName10, result.body);

                        transaction.commit().then(function (result) {
                            console.log(self.cases.names.caseName10, result.body);
                            resultCallback('SUCCESS');
                        });

                    })
                    .catch(function (error) {
                        console.error(error);
                        resultCallback('FAILED');
                    })

            } catch (error) {
                console.error(error);
                resultCallback('FAILED');
            }


        };

    }

}import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));