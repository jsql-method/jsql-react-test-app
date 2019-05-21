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

export default App;