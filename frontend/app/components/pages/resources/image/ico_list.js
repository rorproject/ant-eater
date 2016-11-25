import React, { PropTypes } from 'react';
import './ico_list.scss'

export default class AvatarIco extends React.Component {
  navVisit = (event) => {
    axios.get('/be/users/'+this.props.user.id)
    .then((response) => { this.props.setProfile(response.data.data) })
  }

  render() {
    return (
      <a onClick={this.navVisit}>
        <figure className="pfofile-friend">
          <p><img src={this.props.img} /></p>
          <figcaption>{this.props.user.name}</figcaption>
        </figure>
      </a>
    );
  }
};