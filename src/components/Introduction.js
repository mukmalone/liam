import React from 'react';

class Introduction extends React.Component {
    state = { term: '' };

    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.onLikeSubmit(this.state.term);
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <h2>Like Status</h2>
                        <label>Did you slam that LIKE button on the Fantastic RDP Brother's YouTube channel?</label>
                    </div>
                    <div>
                        <input
                            type="text"
                            value={this.state.term}
                            onChange={e => this.setState({ term: e.target.value })}
                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default Introduction;