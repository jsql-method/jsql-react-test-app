import React, { Component } from 'react';
import JsqlService from 'jsql-superagent-plugin';

import logo from './logo.svg';
import './App.css';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            reactJSQL: new JsqlService({host:'http://localhost:18088'}),
            tab: this.createQuestions()
        }
    }

    componentDidMount() {
        this.state.tab[0].exec();
    }

    createQuestions() {
          let tab = [{
                key: 1,
                name: '1',
                status: 'not run',
                token: 'select',
                exec: () => {
                    this.updateToInProgressState(0);
                    this.state.reactJSQL.jsql.select('select * from person')
                        .then((res) => {
                            console.log(res);
                        }).catch((e) => {
                        console.log(e);
                    });
                }
            }, {
                key: 2,
                name: '2',
                status: 'not run',
                token: 'insert',
                exec: () => {
                    this.updateToInProgressState(1);
                    this.state.reactJSQL.jsql.insert('insert into ludzie (ids, imie, surname, age) values (nextval(\'hibernate_sequence\'), :names, :surname, :age)')
                        .then((res) => {
                            console.log(res);
                        }).catch((e) => {
                        console.log(e);
                    });
                }
            }, {
                key: 3,
                name: '3',
                status: 'not run',
                token: 'insert',
                exec: () => {
                    this.updateToInProgressState(2);
                    this.state.reactJSQL.jsql.insert('insert into person (name) values ("Zbyszek")')
                        .then((res) => {
                            console.log(res);
                        }).catch((e) => {
                        console.log(e);
                    });
                }
            }, {
                key: 4,
                name: '4',
                status: 'not run',
                token: 'insert',
                exec: () => {
                    this.updateToInProgressState(3);
                    this.state.reactJSQL.jsql.delete('delete from person where age = 30')
                        .then((res) => {
                            console.log(res);
                        }).catch((e) => {
                        console.log(e);
                    });
                }
            }, {
                key: 5,
                name: '5',
                status: 'not run',
                token: 'insert',
                exec: () => {
                    this.updateToInProgressState(4);
                    this.state.reactJSQL.jsql.delete('delete from trees where hight = 10')
                        .then((res) => {
                            console.log(res);
                        }).catch((e) => {
                        console.log(e);
                    });
                }
            }, {
                key: 6,
                name: '6',
                status: 'not run',
                token: 'update',
                exec: () => {
                    this.updateToInProgressState(5);
                    this.state.reactJSQL.jsql.delete('')
                        .then((res) => {
                            console.log(res);
                        }).catch((e) => {
                        console.log(e);
                    });
                }
            }, {
                key: 7,
                name: '7',
                status: 'not run',
                token: 'update',
                exec: () => {
                    this.updateToInProgressState(6);
                    this.state.reactJSQL.jsql.select('select * from person')
                        .then((res) => {
                            console.log(res);
                        }).catch((e) => {
                        console.log(e);
                    });
                }
            }, {
                key: 8,
                name: '8',
                status: 'not run',
                token: 'update',
                exec: () => {
                    this.updateToInProgressState(7);
                    this.state.reactJSQL.jsql.select('select * from person')
                        .then((res) => {
                            console.log(res);
                        }).catch((e) => {
                        console.log(e);
                    });
                }
            }, {
                key: 9,
                name: '9',
                status: 'not run',
                token: 'update',
                exec: () => {
                    this.updateToInProgressState(8);
                    this.state.reactJSQL.jsql.update('update person set age = 40 where age > :age')
                        .then((res) => {
                            console.log(res);
                        }).catch((e) => {
                        console.log(e);
                    });
                }
            }, {
                key: 10,
                name: '10',
                status: 'not run',
                token: 'update',
                exec: () => {
                    this.updateToInProgressState(9);
                    this.state.reactJSQL.jsql.update('update person set age = 40h')
                        .then((res) => {
                            console.log(res);
                        }).catch((e) => {
                        console.log(e);
                    });
                }
            }, {
                key: 11,
                name: '11',
                status: 'not run',
                token: 'select',
                exec: () => {
                    this.updateToInProgressState(10);
                    this
                        .state
                        .reactJSQL
                        .jsql.select("select * from public.person")
                        .then((res) => {
                            console.log(res);
                        }).catch((e) => {
                        console.log(e);
                    });
                }
            }, {
                key: 12,
                name: '12',
                status: 'not run',
                token: 'select',
                exec: () => {
                    this.updateToInProgressState(11);
                    this.state.reactJSQL.jsql.select('select MAX(value) from application_language')
                        .then((res) => {
                            console.log(res);
                        }).catch((e) => {
                        console.log(e);
                    });
                }
            }, {
                key: 13,
                name: '13',
                status: 'not run',
                token: 'select',
                exec: () => {
                    this.updateToInProgressState(12);
                    this.state.reactJSQL.jsql.select('select * from test_address where test_user_id = ?')
                        .then((res) => {
                            console.log(res);
                        }).catch((e) => {
                        console.log(e);
                    });
                }
            }, {
                key: 14,
                name: '14',
                status: 'not run',
                token: 'select',
                exec: () => {
                    this.updateToInProgressState(13);
                    this.state.reactJSQL.jsql.select('select MIN(value) from application_language;')
                        .then((res) => {
                            console.log(res);
                        }).catch((e) => {
                        console.log(e);
                    });
                }
            }, {
                key: 15,
                name: '15',
                status: 'not run',
                token: 'select',
                exec: () => {
                    this.updateToInProgressState(14);
                    this.state.reactJSQL.jsql.select('select name from application_language where name like p% ')
                        .then((res) => {
                            console.log(res);
                        }).catch((e) => {
                        console.log(e);
                    });
                }
            }, {
                key: 16,
                name: '16',
                status: 'not run',
                token: 'delete',
                exec: () => {
                    this.updateToInProgressState(15);
                    this.state.reactJSQL.jsql.delete('delete * from application_language')
                        .then((res) => {
                            console.log(res);
                        }).catch((e) => {
                        console.log(e);
                    });
                }
            }, {
                key: 17,
                name: '17',
                status: 'not run',
                token: 'delete',
                exec: () => {
                    this.updateToInProgressState(16);
                    this.state.reactJSQL.jsql.delete('delete from application_language where value like 2')
                        .then((res) => {
                            console.log(res);
                        }).catch((e) => {
                        console.log(e);
                    });
                }
            }, {
                key: 18,
                name: '18',
                status: 'not run',
                token: 'delete',
                exec: () => {
                    this.updateToInProgressState(17);
                    this.state.reactJSQL.jsql.delete('delete from application_language where name like french')
                        .then((res) => {
                            console.log(res);
                        }).catch((e) => {
                        console.log(e);
                    });
                }
            }, {
                key: 19,
                name: '19',
                status: 'not run',
                token: 'delete',
                exec: () => {
                    this.updateToInProgressState(18);
                    this.state.reactJSQL.jsql.delete('delete from application_language where value like 6 and name like chinese')
                        .then((res) => {
                            console.log(res);
                        }).catch((e) => {
                        console.log(e);
                    });
                }
            }, {
                key: 20,
                name: '20',
                status: 'not run',
                token: 'delete',
                exec: () => {
                    this.updateToInProgressState(19);
                    this.state.reactJSQL.jsql.delete('delete from application_language where value like 1')
                        .then((res) => {
                            console.log(res);
                        }).catch((e) => {
                        console.log(e);
                    });
                }
            }
            ]
        return tab;
    }

    updateToInProgressState = index => {
        const items = this.state.tab;
        items[index].status = 'in progress';
        this.setState({
            items,
        });
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">Welcome to React App Plugin</h1>
                    <img alt="logo      " className="App-logo" src={logo}  />
                </header>
                <div className="table">
                    <div className="table-number">Number</div>
                    <div className="table-cases">Case</div>
                    <div className="table-status">Status</div>
                </div>
                {this.state.tab ?
                    this.state.tab.map((cases, index) => {
                    return (
                        <div className="table"
                             key={index}
                             style={
                                 index%2 === 0 ? {color: 'yellow'}: {color: 'pink'}
                             }>
                            <div className="table-number">{cases.name}</div>
                            <div className="table-cases">{cases.token}</div>
                            <div className="table-status">{cases.status}</div>
                        </div>
                    )
                    })
                    :
                    null
                }
            </div>
        );
    }
}

export default App;
