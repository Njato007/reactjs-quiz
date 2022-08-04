import React from "react";
import lessThan from './icons/icons8_less_than_32.png';
import moreThan from './icons/icons8_more_than_32.png';

class Response extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            questionID: 0,
            langue: this.props.langue,
            nextText: '',
            previewText: '',
            bonneReponse: this.props.questions.data[0].reponse[1]
        }
    }


    componentDidMount() {
        this.Text = [
            ['Preview', 'Précédente'],
            ['Next', 'Suivante'],
            ['Leave', 'Quitter'],
        ];
        this.setState({
            previewText: this.Text[this.state.questionID === 0 ? 2 : 0][this.state.langue],
            nextText: this.Text[this.state.questionID === this.props.questions.data.length-2 ? 2 : 1][this.state.langue],
            bonneReponse: this.props.questions.data[this.state.questionID].reponse[this.state.langue],
        })
    }

    finish() {
        this.props.onLeave()
    }
    
    preview = (params) => {
        // leave 
        if (this.state.previewText === this.Text[2][this.state.langue]) {
            this.finish();
            return;
        }
        if (this.state.questionID > 0) {
            this.setState({
                questionID: this.state.questionID - 1,
                bonneReponse: this.props.questions.data[this.state.questionID - 1].reponse[this.state.langue],
                previewText: this.Text[this.state.questionID-1 === 0 ? 2 : 0][this.state.langue],
                nextText: this.Text[this.state.questionID-1 === this.props.questions.data.length-2 ? 2 : 1][this.state.langue]
            })
        }
    }

    next = (params) => {
        // leave 
        if (this.state.nextText === this.Text[2][this.state.langue]) {
            this.finish();
            return;
        }
        if (this.state.questionID < this.props.questions.data.length - 1) {
            this.setState({
                questionID: this.state.questionID + 1,
                bonneReponse: this.props.questions.data[this.state.questionID + 1].reponse[this.state.langue],
                previewText: this.Text[this.state.questionID+1 === 0 ? 2 : 0][this.state.langue],
                nextText: this.Text[this.state.questionID+1 === this.props.questions.data.length-1 ? 2 : 1][this.state.langue]
            })
            // this.check();
        }
    }
        
    render() {
        return (
        <div className="response-container">

            <p className="response-title">SOLUTION</p>
            <div className="response-options">
                <div>
                    <img src={lessThan} onClick={this.preview} alt="" />
                    <span>{this.state.previewText}</span>
                </div>
                <div>
                    <span>{this.state.nextText}</span>
                    <img src={moreThan} onClick={this.next} alt="" />
                </div>
            </div>
            <div className="question-container">
                <p className="question-theme">
                    {this.props.questions.theme[this.state.langue]}
                </p>
                <p className="question-text" dangerouslySetInnerHTML={{__html: this.props.questions.data[this.state.questionID].question[this.state.langue]}} />
                <ul className="response-choix">
                    {this.props.questions.data[this.state.questionID].choix[this.state.langue].map((item, idx) =>
                        <li onClick={this.onSelect} key={idx} className={this.state.bonneReponse === item ? 'response-correct-answer' : 'not-active'} >{item}</li>  
                    )}
                </ul>
            </div>
            <div className="question-pager">
                {this.props.questions.data.map((item, index) =>
                    <span key={index} className={index <= this.state.questionID ? 'active' : 'not-active'}></span>
                )}
            </div>

        </div>
        )
    }
}
export default Response;