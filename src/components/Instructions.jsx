import React, { Component } from 'react'
import { Jumbotron } from 'react-bootstrap';
import Button from '@atlaskit/button';
import SectionMessage from '@atlaskit/section-message';
import Panel from '@atlaskit/panel';
import TableTree, {
    Headers,
    Header,
    Rows,
    Row,
    Cell,
    TableTreeDataHelper,
} from '@atlaskit/table-tree';
import JumbotronPlay from './JumbotronPlay';
const Purchasing = <span><strong>Purchasing Tickets</strong></span>;
const NumberSelection = <span><strong>Lucky Numbers</strong></span>;
let uuid = 0;
const ROOTS = [
    {
        title: '5',
        id: ++uuid,
        page: 'Jackpot',
        numbering: '1',
        // hasChildren: true,
    },
    {
        title: '5',
        id: ++uuid,
        page: '3% of Jackpot',
        numbering: '0',
        // hasChildren: true,
    },
    {
        title: '4',
        id: ++uuid,
        page: '1% of Jackpot',
        numbering: '1',
    },
    {
        title: '4',
        id: ++uuid,
        page: '0.5% of Jackpot',
        numbering: '0',
    },
    {
        title: '3',
        id: ++uuid,
        page: '50.0000 EOS',
        numbering: '1',
        // hasChildren: true,
    },
    {
        title: '3',
        id: ++uuid,
        page: '5.0000 EOS',
        numbering: '0',
        // children: [],
    },
    {
        title: '2',
        id: ++uuid,
        page: '3.0000 EOS',
        numbering: '1',
        // children: [],
    },
    {
        title: '1',
        id: ++uuid,
        page: '2.0000 EOS',
        numbering: '1',
        // children: [],
    },
];

function getChildren() {
    return [
        {
            title: 'There Will Be Code',
            id: ++uuid,
            page: 2,
            numbering: '1.1',
            hasChildren: true,
        },
        {
            title: 'Bad code',
            id: ++uuid,
            page: 3,
            numbering: '1.2',
        },
        {
            title: 'The Total Cost of Owning a Mess',
            id: ++uuid,
            page: 4,
            numbering: '1.3',
            hasChildren: true,
        },
    ];
}

function fetchRoots() {
    return Promise.resolve(ROOTS);
}

function fetchChildrenOf() {
    return Promise.resolve(getChildren());
}

function getData(parentItem: ?Object) {
    return !parentItem ? fetchRoots() : fetchChildrenOf();
}

const tableTreeHelper = new TableTreeDataHelper({ key: 'id' });
export default class Instructions extends Component {
    state = {
        items: [],
    };

    componentDidMount() {
        this.loadTableData();
    }

    loadTableData = (parentItem: ?Object) => {
        if (parentItem && parentItem.childIds) {
            return;
        }

        getData(parentItem).then(items => {
            this.setState({
                items: tableTreeHelper.updateItems(items, this.state.items, parentItem),
            });
        });
    };

    render() {
        const { items } = this.state;
        return (
            <div className="row">
                <div className="col-md-4">
                    <SectionMessage
                        title="Instructions"

                    >

                        <Panel header={Purchasing}>
                            <p>
                                All lottery tickets bought would be recorded on the EOS Blockchain and can be verified via smart contract for 100% transparency.
          </p>
                            <p>
                                No identification is required to bet as this is a decentralized space and each winner are personally responsible to pay taxes depending on lottery rules guiding the state or country of the winners.
          </p>
                            <p>
                                Lottery ticket will cost equivalent of one dollar $1 in cryptocurrency and the only form of payment would be Bitcoin, EOS and Ethereum. The tickets can be bought directly on the decentralized mobile app or from the website at www.megacryptoloto.com.
          </p>
                        </Panel>
                        <Panel header={NumberSelection}>
                            <p>
                                Each player can pick 5 numbers from 0 – 60 and one number from 0 – 10 for a chance to win the jackpot. The ticket / tickets that matched all six numbers wins the jackpot.
          </p>
                            <p>
                                If more that one ticket wins the jackpot, total value of the jackpot would be divided equally by the total amount of winning tickets.           </p>
                            <p>
                                There are 8 total ways to win the lottery, ranging from jackpot to $2. Please see table below for more details.
          </p>
                            <TableTree>
                                <Headers>
                                    <Header width={100}>Match</Header>
                                    <Header width={100}>Match</Header>
                                    <Header width={300}>Prize</Header>
                                </Headers>
                                <Rows
                                    items={items}
                                    render={({ title, numbering, page, hasChildren, children, id }) => (
                                        <Row
                                            expandLabel={'Expand'}
                                            collapseLabel={'Collapse'}
                                            itemId={numbering}
                                            onExpand={this.loadTableData}
                                            items={children}
                                            hasChildren={hasChildren}
                                            key={id}
                                        >
                                            <Cell singleLine>{title}</Cell>
                                            <Cell singleLine>{numbering}</Cell>
                                            <Cell singleLine>{page}</Cell>
                                        </Row>
                                    )}
                                />
                            </TableTree>
                        </Panel>

                    </SectionMessage>

                </div>
                <div className="col-md-8">
                    <JumbotronPlay />
                </div>
               
            </div>
        )
    }
}
