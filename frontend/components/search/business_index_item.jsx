import React from 'react';
import { withRouter } from 'react-router-dom';

// import BusinessShowContainer from '../business_show/business_show_container';

class BusinessIndexItem extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        const businessId = this.props.business.id;
        this.props.history.push(`/businesses/${businessId}`);
    }

    render() {
        const { average_rating, description, picture_url,name } = this.props.business;
        return (
            <div
                className="business-index-item"
                onClick={this.handleClick}
            >
                <div className="index-item-info">
                    <span className="index-item-title"><b>Title: </b></span>
        <span>{name}</span>

        <br/>
        <br/>
                    <span className="index-item-category"><b> Rating:</b> </span>
                    <span className="index-item-copy">
                        {average_rating || 'No reviews yet'}
                    </span>
                    <br />
<br/>
                    <span className="index-item-category"><b>Description: </b> </span>
                    <span className="index-item-copy">{description}</span>
                </div>
                <img className="picture-url" src={picture_url} />
            </div>
        );
    }
}

export default withRouter(BusinessIndexItem);
