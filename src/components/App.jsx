import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import QuestionList from './quiz/QuestionList.jsx';
import Scorebox from './quiz/Scorebox.jsx';
import Results from './quiz/Results.jsx';

class App extends Component {
    constructor (props) {
        super(props);
        this.state = {  
            questions:[
                {
                    id: 1,
                    text: 'What is your name?',
                    choices: [
                        {
                            id: 'a',
                            text: 'Mike'
                        },
                        {
                            id: 'b',
                            text: 'Brad'
                        },
                        {
                            id: 'c',
                            text: 'Chuck'
                        }
                    ],
                    correct: 'b'
                },
                {
                    id: 2,
                    text: 'What is your occupation?',
                    choices: [
                        {
                            id: 'a',
                            text: 'Student'
                        },
                        {
                            id: 'b',
                            text: 'Full-Time'
                        },
                        {
                            id: 'c',
                            text: 'Part-time'
                        }
                    ],
                    correct: 'b'
                },
                {
                    id: 3,
                    text: 'What is your age?',
                    choices: [
                        {
                            id: 'a',
                            text: '33'
                        },
                        {
                            id: 'b',
                            text: '29'
                        },
                        {
                            id: 'c',
                            text: '32'
                        }
                    ],
                    correct: 'c'
                }
            ],
            score: 0,
            current: 1
        }
    }

    setCurrent(current) {
        this.setState({current});
    }

    setScore(score) {
        this.setState({score});
    }

    render() {
        if (this.state.current > this.state.questions.length) {
            var scorebox = '';
            var results = <Results {...this.state} />
        } else {
            var scorebox = <Scorebox {...this.state} />
            var results = '';
        }
        return (
            <div>
                {scorebox}
                <QuestionList {...this.state} setCurrent={this.setCurrent.bind(this)} setScore={this.setScore.bind(this)} />
                {results}
            </div>
        )
    }
}

export default App