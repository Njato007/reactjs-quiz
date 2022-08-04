import React from "react";
import crying from './icons/crying_96px.png'
import angel from './icons/angel_96px.png'
import flex_biceps from './icons/flex_biceps_96px.png'
import sad from './icons/sad_96px.png'
import star from './icons/star_100px.png'

class Score extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            score: 0,
            total: 0,
            icon: flex_biceps,
            star: 2,
            langue: this.props.langue,
            mention: '',
            retry: 'Retry',
            see: 'See anwers'
        }

    }

    componentDidMount() {
        this.Text = [
            ['Sorry!', 'Désolé!'],
            ['Not enough!', 'Insuffisant!'],
            ['Very good!', 'Très bien!'],
            ['Congrat!', 'Félicitation!'],
        ];
        this.btnText = [
            ['Retry', 'Réessayer'],
            ['Menu', 'Menu'],
            ['See answers', 'Voir les réponses'],
        ]

        
        this.setState({
            see: this.btnText[2][this.state.langue],
            retry: this.btnText[0][this.state.langue],
        });

        if (this.props.score >= this.props.total) {
            this.setState({
                icon: flex_biceps,
                star: 3,
                mention: this.Text[3][this.state.langue]
            });
        } else if (this.props.score > this.props.total / 2) {
            this.setState({
                icon: angel,
                star: 2,
                mention: this.Text[2][this.state.langue]
            });
        } else if (this.props.score >= 1) {
            this.setState({
                icon: sad,
                star: 1,
                mention: this.Text[1][this.state.langue]
            });
        } else {
            this.setState({ 
                icon: crying,
                star: 0,
                mention: this.Text[0][this.state.langue]
            });
        }
    }

    render() {
        return (
            <div className="score-container">
                <p className="score-title">SCORE</p>
                <div className="score-stars">
                    <img src={star} className={this.state.star >= 1 ? 'active' : 'not-active'} alt="" />
                    <img src={star} className={this.state.star >= 2 ? 'active' : 'not-active'} alt="" />
                    <img src={star} className={this.state.star >= 3 ? 'active' : 'not-active'} alt="" />
                </div>
                <div className="score-emoji">
                    <img src={this.state.icon} alt="" />
                </div>
                <p className="score-note">{`${this.props.score}/${this.props.total}`}</p>
                <p className="score-mention">{this.state.mention}</p>
                <div className="score-options">
                    <button onClick={this.props.onRetry}>{this.state.retry}</button>
                    <button onClick={this.props.onMenu}>Menu</button>
                    <button onClick={this.props.onShowResponses}>{this.state.see}</button>
                </div>
            </div>
        )
    }
}

export default Score;