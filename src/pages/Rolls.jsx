import React, { Component } from 'react';
import MainSection from '../components/MainSection';
import ContentWrapper from '../components/ContentWrapper';
import PageTitle from '../components/PageTitle';
const { JsonRpc } = require('eosjs');
const fetch = require('node-fetch');           // node only; not needed in browsers
const rpc = new JsonRpc('https://api-kylin.eosasia.one', { fetch });
export default class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rolls: [],
            games: []
        }
        this.getGames = this.getGames.bind(this);
        this.getRolls = this.getRolls.bind(this);
    }

    async getGames() {
        const resp = await rpc.get_table_rows({
            json: true,
            code: 'mcryptolotto',
            scope: 'mcryptolotto',
            table: 'games',
            limit: 10,
        });
        this.setState((prevState) => {
            return ({ games: resp.rows })
        },
            () => console.log(this.state.games)
        )

    }

    async getRolls() {
        const resp = await rpc.get_table_rows({
            json: true,
            code: 'mcryptolotto',
            scope: 'mcryptolotto',
            table: 'pmoves',
            limit: 10,
        });
        this.setState((prevState) => {
            return ({ rolls: resp.rows })
        },
            () => console.log(this.state.rolls)
        )

    }

    componentDidMount() {
        this.getGames();
        this.getRolls();
        console.log(this.state)

    }
    render() {
        return (
            <ContentWrapper>
                <PageTitle>Rolls</PageTitle>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Game ID</th>
                            <th scope="col">Player</th>
                            <th scope="col">First Combo</th>
                            <th scope="col">Lucky Number</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.rolls.map((roll, index) => {
                                return (<tr>
                                    <th scope="row">{roll.id}</th>
                                    <td>{roll.gameId}</td>
                                    <td>{roll.player}</td>
                                    <td>{roll.first}</td>
                                    <td>{roll.last}</td>
                                </tr>)
                            })
                        }

                    </tbody>
                </table>
            </ContentWrapper>
        );
    }
}
