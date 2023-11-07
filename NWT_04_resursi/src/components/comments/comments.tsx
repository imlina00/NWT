// import * as React from 'react';
import React, {Component} from 'react';
import styles from "./comments.module.css";

export interface CommentsProps {

}

export interface CommentsState {

}

class Comments extends Component<CommentsProps, CommentsState> {

  constructor(props: CommentsProps) {
    super(props);
    
  }

  render() {
    return (
      <div>
        <h1>Komentari</h1>
      </div>
    );
  }
}

export default Comments;
