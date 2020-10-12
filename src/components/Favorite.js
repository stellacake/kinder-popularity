import React from 'react';
import '../styles/css/Favorite.css';

class Favorite extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            liked: this.props.liked,
        };
    }
    render() {
        return (
            <div className="liking-box" onClick={event => {
                const newLiked = !this.state.liked;
                this.setState({ liked: newLiked });
            }}>
                <p className={this.state.liked ? "liked-icon" : "unliked-icon"} >&#10084;</p>
                {this.state.liked ? <p className="liked-text">Ajouté aux favoris</p> : <p className="unliked-text">Ajoutez ce Kinder en favori</p>}
            </div>
        );

    }
}

export default Favorite;