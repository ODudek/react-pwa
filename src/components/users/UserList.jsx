import React, { Component } from "react";
import User from "./User.jsx";
import { connect } from "react-redux";
import propTypes from "prop-types";
import { fetchUsers } from "../../actions/userActions";

class UserList extends Component {
  componentDidMount() {
    this.props.fetchUsers();
  }

  render() {
    const userNodes = this.props.users.map(user => (
      <User key={user["id"]}>
        {user.name}
        {user.username}
        {user.website}
      </User>
    ));
    return (
      <div>
        <h1>Users!</h1>
        {userNodes}
      </div>
    );
  }
}

UserList.propTypes = {
  users: propTypes.array.isRequired,
  fetchUsers: propTypes.func.isRequired
};

const mapStateToProps = state => ({
  users: state.users.items
});

export default connect(mapStateToProps, { fetchUsers })(UserList);
