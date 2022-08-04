import React from "react";

class Question extends React.Component {
    
    constructor(props) {
        super(props);
        this.progressWidth = 300;
        this.timeLimit = 15;

        this.questions = props.questions[0];

        this.state = {
            loader: this.progressWidth,
            seconds: this.timeLimit,
            questionID: 0,        
            langue: this.props.langue, // 1: française, 0: anglaise
            bonneReponse: null,
            progressClass: 'green-progress'
        }
    }

    componentDidMount() {
        this.timerProgressID = setInterval(() => {
            this.tickProgress()
        }, this.timeLimit * 1000 / this.progressWidth);
        this.setState({langue: this.props.langue})
    }

    componentWillUnmount() {
        clearInterval(this.timerProgressID);
    }
    
    tickProgress() {
            if (this.state.loader > 0) {
                const second = Math.round((this.timeLimit * this.state.loader - 1) / this.progressWidth);
                this.setState({ 
                    loader: this.state.loader - 1,
                    seconds: second >= 10 ? second : "0" + second,
                    bonneReponse: this.questions.data[this.state.questionID].reponse[this.state.langue],
                    progressClass: second <= 5 ? 'red-progress' : second < 10 ? 'yellow-progress' : 'green-progress',
                });
                
            }
            else {
                this.nextQuestion();
            }
    }

    nextQuestion = () => {
        // question suivante
        if (this.state.questionID < this.questions.data.length - 1) {
            this.setState({
                loader: this.progressWidth,
                seconds: this.timeLimit,
                questionID: this.state.questionID + 1
            });
            
        }  else {
            // finish
            this.finished();
        }
    }

    finished() {
        // question fini
        clearInterval(this.timerProgressID);
        clearInterval(this.timerID);
        // reinit questionID
        // this.setState({ questionID: 0 })
        this.props.onFinish();
    }

    onSelect = (e) => {
        // vérifier réponse
        const reponse = e.target.textContent === this.state.bonneReponse; // vrai
        // mettre à jour le score
        this.props.onSelectChoix(reponse ? 1 : 0);

        // question suivante
        this.nextQuestion();

    }

    render() {
        return (
        <div>

            <div className="time-container">
                <div className="time">{this.state.seconds}</div>
                <div className="progress-container">
                    <div className={"progress " + this.state.progressClass} style={{width: `${this.state.loader}px`}}></div>
                </div>
            </div>

            <div className="question-container">
                <p className="question-theme">
                    {this.questions.theme[this.state.langue]}
                </p>
                <p className="question-text" dangerouslySetInnerHTML={{__html: this.questions.data[this.state.questionID].question[this.state.langue]}} />
                <ul className="question-choix">
                    {this.questions.data[this.state.questionID].choix[this.state.langue].map((item, idx) =>
                        <li onClick={this.onSelect} key={idx}>{item}</li>  
                    )}
                </ul>
            </div>

            <div className="question-pager">
                {this.questions.data.map((item, index) =>
                    <span key={index} className={index <= this.state.questionID ? 'active' : 'not-active'}></span>
                )}
            </div>

        </div>
        )
    }
}

export default Question;