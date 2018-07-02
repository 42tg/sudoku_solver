import React, { Component } from 'react';

const fieldStyle = { width: 50, height: 50, float: 'left', border: '1px solid #ddd',     justifyContent: 'center', alignItems: 'center', display: 'flex'}
const clearfix = {clear: 'both', display:'table', content:""}
class Board extends Component {
    constructor(props)
    {
        super(props)
        console.log(props)
    }
    render(){
        return (
            <div>
                { this.props.board &&
                    <div>
                        { this.props.board.board.map((row,x)=>{
                            return <div key={x}> {row.map((field, y) => {
                                return <div style={fieldStyle} key={x+''+y}>{field.value}</div>
                            }) }<div className="clearfix" style={clearfix}/> </div>
                        })}
                    </div>
                }
            </div>
        )
    }
}

export default Board;