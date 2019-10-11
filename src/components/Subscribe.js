import React from 'react';

class Subscribe extends React.Component {
    state = { term: '' };

    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.onSubscribeSubmit(this.state.term);
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <h2>Subscription Status</h2>
                    <div>Have you taken the plunge and SUBSCRIBED to the channel?</div>
                    <input
                        type="text"
                        value={this.state.term}
                        onChange={e => this.setState({ term: e.target.value })}
                    />
                </form>
            </div>

        );
    }

}

export default Subscribe;