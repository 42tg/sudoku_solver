import React, { Component } from 'react';

const surroundingStyle = {    display: 'flex', justifyContent: 'center'}
const fieldStyle = { width: 50, height: 50, float: 'left', border: '1px solid #ddd',     justifyContent: 'center', alignItems: 'center', display: 'flex'}
const clearfix = {clear: 'both', display:'table', content:""}
const highlightStyle = {backgroundColor: '#86ff86'}
class Board extends Component {
    isHighlighted = (x, y) => {
        return this.props.highlight.find((elem) => {
            return elem.x === x && elem.y === y
        })
    }
    render(){
        return (
            <div style={surroundingStyle}>
                { this.props.board &&
                    <div>
                        { this.props.board.board.map((row,x)=>{
                            return <div key={x}> {row.map((field, y) => {
                                return <div style={{...fieldStyle, ...this.isHighlighted(x,y) ? highlightStyle : {}}} key={x+''+y}>{field.value}</div>
                            }) }<div className="clearfix" style={clearfix}/> </div>
                        })}
                    </div>
                }
            </div>
        )
    }
}

export default Board;