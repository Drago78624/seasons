import React from "react";

export default function Spinner(props) {
  return (
    <div className="ui active dimmer">
      <div className="massive ui text loader">{props.loadingMsg}</div>
    </div>
  );
}

Spinner.defaultProps = {
    loadingMsg: "Please accept location request"
}
