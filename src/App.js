import React, {Component} from 'react';
import {Cases} from "./cases";

import './App.css';
import JsqlService from "jsql-superagent";

class App extends Component {

    constructor(props) {

        super(props);

        this.state = {
            results: []
        }
    }

    componentDidMount() {

        let jsqlConfig = new JsqlService({
            host: window.host,
            apiKey: window.apiKey,
            devKey: window.devKey
        });

        var jsql = jsqlConfig.getInstance();

        let cases = new Cases(jsql);
        cases.init(this, this.state);
        cases[cases.cases.names.caseName1]();

    }

    render() {
        return (

            <div id="app">
                <p><span>JSQL React (16.8.6) </span> - unit testing</p>
                <table>
                    <thead>
                        <td>Case</td>
                        <td>Duration (ms)</td>
                        <td>Status</td>
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

export default App;