import React, { Component } from 'react'
import { Jumbotron } from 'react-bootstrap';
// import Button from '@atlaskit/button';
import rollDice from '../utils/rollDice';
// const Table = props => <div style={{ display: 'table' }} {...props} />;
// const Row = props => <div style={{ display: 'table-row' }} {...props} />;
// const Cell = props => (
    // <div style={{ display: 'table-cell', padding: 4 }} {...props} />
// );
// const Btn = props => (
//     <Cell>
//         <Button {...props} />
//     </Cell>
// );
export default class JumbotronPlay extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isSelected: false,
            luckySelected: [],
            winning: 0,
            frow: [],
            srow: [],
            trow: [],
            ftrow: [],
            firstSelect: [],
            fSelect: [],
            lucky: [],
            lSelect: [],
            condition: false,
            gameId: 1
        };
        this.handlefClick = this.handlefClick.bind(this);
        this.handlelClick = this.handlelClick.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handlefClick(c) {
        console.log('clicked')
        var els = this.state.firstSelect;
        console.log(c.target.value);
        var id = c.target.id;
        var el = document.getElementById(id);
        console.log(id);
        console.log(els);
        if (els.length < 5) {
            console.log(els.includes(id));
            if (els.includes(id) === true) {
                console.log('Found')
                els.splice(els.indexOf(id), 1);
                el.classList.toggle("active");
                this.setState((prevState) => {
                    return ({ fSelect: [...els] })
                },
                    () => console.log(this.state.fSelect)
                )
            }
            else {
                console.log("Not found")
                els.push(id);
                el.classList.toggle("active");
                this.setState((prevState) => {
                    return ({ fSelect: [...els] })
                },
                    () => console.log(this.state.fSelect)
                )
            }
        }
        else {
            if (els.includes(id) === true) {
                console.log('Found')
                els.splice(els.indexOf(id), 1);
                el.classList.toggle("active");
                this.setState((prevState) => {
                    return ({ fSelect: [...els] })
                },
                    () => console.log(this.state.fSelect)
                )
            }
        }
        console.log(els)
    }

    handlelClick(c) {
        var els = this.state.lSelect;
        console.log(c.target.value);
        var id = c.target.id;
        var va = c.target.value;
        var el = document.getElementById(id);
        console.log(id);
        console.log(els);
        if (els.length < 1) {
            console.log(els.includes(va));
            if (els.includes(id) === true) {
                console.log('Found')
                els.splice(els.indexOf(va), 1);
                el.classList.toggle("active");
                this.setState((prevState) => {
                    return ({ lucky: [...els] })
                },
                    () => console.log(this.state.lucky)
                )
            }
            else {
                console.log("Not found")
                els.push(va);
                el.classList.toggle("active");
                this.setState((prevState) => {
                    return ({ lucky: [...els] })
                },
                    () => console.log(this.state.lucky)
                )
            }
        }
        else {
            if (els.includes(va) === true) {
                console.log('Found')
                els.splice(els.indexOf(va), 1);
                el.classList.toggle("active");
                this.setState((prevState) => {
                    return ({ lucky: [...els] })
                },
                    () => console.log(this.state.lucky)
                )
            }
        }
        console.log(els)
    }

    async handleSubmit() {

        const data = {
            firstR: this.state.fSelect,
            lastR: this.state.lucky[0],
            gameId: 0
        }
        console.log(data)
        try {
            await rollDice(data)

        } catch (error) {
            console.log(error);
        }
    }

    componentDidMount() {
        this.generateButtons()
    }
    generateButtons() {
        for (var counter = 0; counter < 23; counter++) {
            this.state.frow.push(counter);
        }
        for (var counter2 = 23; counter2 < 44; counter2++) {
            this.state.srow.push(counter2);
        }
        for (var counter3 = 44; counter3 < 61; counter3++) {
            this.state.trow.push(counter3);
        }
        for (var counter4 = 0; counter4 < 11; counter4++) {
            this.state.ftrow.push(counter4);
        }
    }
    render() {
        return (
            <Jumbotron>
                <h4>Select 5 Numbers between 0 - 60</h4>
                <hr></hr>
                <div className="row d-flex justify-content-center">

                    {this.state.frow.map(a => (
                        <div className="btn-group mr-2" role="group" aria-label="First group" key={a}>
                            <button type="button"  value={a} id={a} className="btn btn-outline-primary btn-lg" onClick={this.handlefClick}>{a}</button>
                        </div>
                    ))}
                </div>
                <hr></hr>
                <div className="row d-flex justify-content-center">

                    {this.state.srow.map(a => (
                        <div className="btn-group mr-2" role="group" key={a} aria-label="First group">
                            <button type="button" key={a} value={a} id={a} className="btn btn-outline-primary btn-lg" onClick={this.handlefClick}>{a}</button>
                        </div>
                    ))}
                </div>
                <hr></hr>
                <div className="row d-flex justify-content-center">

                    {this.state.trow.map(a => (
                        <div className="btn-group mr-2 d-flex justify-content-center" key={a} role="group" aria-label="First group">
                            <button type="button" key={a} value={a} id={a} className="btn btn-outline-primary btn-lg" onClick={this.handlefClick}>{a}</button>
                        </div>
                    ))}
                </div>
                <hr></hr>

                <h4>Select 1 Lucky Number from 0 - 10</h4>
                <br>
                </br>
                <div className="row d-flex">

                    {this.state.ftrow.map(a => (
                        <div className="btn-group mr-2" role="group" key={a} aria-label="First group">
                            <button type="button" key={a} value={a} id={"LK" + a} className="btn btn-outline-primary btn-lg"  onClick={this.handlelClick}>{a}</button>
                        </div>
                    ))}
                </div>
                <hr></hr>
                <div className="row">
                    <div className="col-md-6">
                        <h3>Selected Numbers</h3>
                        {this.state.fSelect.length > 0 ? this.state.fSelect.map((selectedNum, index) => {
                            return (<span className="badge badge-pill badge-warning ">{selectedNum}</span>)
                        }) :
                            <p>No Selected Numbers yet &nbsp; <button className="btn btn-primary btn-sm">I'm Feeling Lucky!</button></p>

                        }
                    </div>
                    <div className="col-md-6">
                        <h3>Selected Lucky Number</h3>
                        {this.state.lucky.length > 0 ? this.state.lucky.map((selectedNum, index) => {
                            return (<span className="badge badge-pill badge-warning ">{selectedNum}</span>)
                        }) :
                            <p>No Selected Lucky Number yet &nbsp; <button className="btn btn-primary btn-sm">I'm Feeling Lucky!</button></p>

                        }
                        <hr></hr>
                    </div>

                    {
                        this.state.lucky.length > 0 && this.state.fSelect.length > 0 && this.state.fSelect.length > 4 &&
                        <button className="btn btn-primary btn-sm btn-block" onClick={this.handleSubmit}>Submit</button>
                    }

                </div>
            </Jumbotron>
        )
    }
}
