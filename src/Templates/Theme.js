import React from 'react';
import lessThan from './icons/icons8_less_than_32.png';
import moreThan from './icons/icons8_more_than_32.png';
class Theme extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = {
            langue: this.props.langue,
            language: '',
            text: '',
            random: '', 
            themes: this.props.themes.map((e, index) => <li key={index} onClick={this.onSelect}>{e[this.props.langue]}</li>)
        }
    }
    
    componentDidMount() {
        this.Text = ['English', 'Française'];
        this.Text2 = ['Select your theme!', 'Choisissez votre thème!'];
        this.Text3 = ['Random', 'Aléatoire'];
        this.setState({
            language: this.Text[this.props.langue],
            text: this.Text2[this.props.langue],
            randomText: this.Text3[this.props.langue],
        })
        this.timerID = null;
    }
    componentWillUnmount() {
        if (this.timerID)
            clearInterval(this.timerID)
    }

    onSelect = (e) => {
        this.props.onClick(e.target.textContent)
    }
    
    changeLangue = () => {
        const newLangue = this.state.langue === 0 ? 1 : 0;
        this.setState({
            langue: newLangue,
            language: this.Text[newLangue],
            text: this.Text2[newLangue],
            randomText: this.Text3[newLangue],
            themes: this.props.themes.map((e, index) => <li key={index} onClick={this.onSelect}>{e[newLangue]}</li>)
        })
        this.props.onChangeLangue(newLangue);
    }

    onRandomChoice = () => {
        if (!this.timerID) {
            this.timerID = setInterval(() => {
                let rand = Math.floor(Math.random() * this.props.themes.length)
                this.setState({
                    random: this.props.themes[rand][this.state.langue],
                    themes: this.props.themes.map((e, index) => <li key={index} className={rand === index ? 'in-random' : 'not-in-random'} onClick={this.onSelect}>{e[this.props.langue]}</li>)
                })
            }, 100);
            setTimeout(() => {
                clearTimeout(this.timerID);
                this.timerID = null;
                // send random choise
                this.props.onRandom(this.state.random)
            }, 3000);
        } else {
            // clearInterval(this.timerID);
            // this.timerID = null;
            // this.setState({ random: '' })
        }
    }

    render() {
        return (
            <div>
                <p className="quiz-title">QUIZ</p>
                <div className="quiz-language">
                    <img src={lessThan} onClick={this.changeLangue} alt="" />
                    <img src={moreThan} onClick={this.changeLangue} alt="" />
                    <p>{this.state.language}</p>
                </div>
                <p className="quiz-title-1">{this.state.text}</p>
                <ul className="list-theme">
                { this.state.themes }
                </ul>
                <div className="random-choice">
                    <button onClick={this.onRandomChoice}>
                        <p>{this.state.randomText}</p>
                    </button>
                </div>
            </div>
        )
    }
}

export default Theme;
