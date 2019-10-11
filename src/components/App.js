import React from 'react';
import Introduction from './Introduction';
import Subscribe from './Subscribe';
import './App.css';

class App extends React.Component {
    state = {
        likeAnswerText: 'Please answer yes or no',
        likeAnswerStatus: 'undefined',
        subscribeAnswerText: 'Please answer yes or no',
        subscribeAnswerStatus: 'undefined'
    };

    onLikeSubmit = (term) => {
        if (term === 'yes') {
            this.setState({ likeAnswerText: 'You rock my brother!!', likeAnswerStatus: 'goodanswer' });
        } else if (term === 'no') {
            this.setState({ likeAnswerText: "What are you doing??", likeAnswerStatus: 'wronganswer' });
        } else {
            this.setState({ likeAnswerText: 'Please answer yes or no', likeAnswerStatus: 'undefined' });
        }
    }

    onSubscribeSubmit = (term) => {
        if (term === 'yes') {
            this.setState({ subscribeAnswerText: 'Good job you are in our family!!', subscribeAnswerStatus: 'goodanswer' });
        } else if (term === 'no') {
            this.setState({ subscribeAnswerText: 'What are you waiting for?', subscribeAnswerStatus: 'wronganswer' });
        } else {
            this.setState({ subscribeAnswerText: 'Please answer yes or no', subscribeAnswerStatus: 'undefined' });
        }
    }


    render() {
        console.log(this.state.subscribeAnswerStatus);
        return (
            <div>
                <div>
                    <h1 className={`title-display`}>Fantastic RDP Brothers Webpage</h1>
                    <div className={`title-display`}>The Fantastic RDP Brothers are a rocking group of boys who are hilarious</div>
                </div>
                <div>
                    <div className={`qbackground ${this.state.likeAnswerStatus}`}>
                        <Introduction onLikeSubmit={this.onLikeSubmit} />
                        <h3>{this.state.likeAnswerText}</h3>
                    </div>
                    <div className={`qbackground ${this.state.subscribeAnswerStatus}`}>
                        <Subscribe onSubscribeSubmit={this.onSubscribeSubmit} />
                        <h3>{this.state.subscribeAnswerText}</h3>
                    </div>
                </div>
            </div>
            
        );
    }
}

export default App;