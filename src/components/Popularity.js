import React from 'react';
import '../styles/css/Popularity.css';

class Popularity extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            like: 0,
            dislike: 0,
        }
    };
    liking = () => {
        const like = this.state.like;
        this.setState({ like: like + 1 })
    }
    disliking = () => {
        const dislike = this.state.dislike;
        this.setState({ dislike: dislike + 1 })
    }

    render() {
        const like = this.state.like;
        const dislike = this.state.dislike;
        return (
            <div>
                <p>
                {like - dislike} people liked it!
                <br/>What about you?
                <br/>
                <button className="love-it" onClick={this.liking}> Love it! </button>
                <button className="meh" onClick={this.disliking}>Meh...</button>
            </p>
            </div>
        )
    }
}

export default Popularity;