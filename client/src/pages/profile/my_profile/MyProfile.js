import React, { Component } from "react";
import "./MyProfile.css";
import ProfileForm from "../../../components/profileform/ProfileForm";

export default class EditProfile extends Component {
  render() {
    return (
      <div className="ProfilePage">
        <ProfileForm />
      </div>
    );
  }
}
