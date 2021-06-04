import React, { Component } from "react";
import ProfileForm from "../../components/ProfileForm";
import "./Profile.css";

export default class Profile extends Component {
  render() {
    return (
      <div className="ProfilePage">
        <ProfileForm />
      </div>
    );
  }
}
