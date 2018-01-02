import React from 'react';

const Comment = ({text, votes, id, thumbUpComment, thumbDownComment, removeComment}) =>
    <li>
        {text} <span>votes: {votes}<br/></span><button onClick={() => thumbUpComment(id)}>Thumb up</button>
        <button onClick={() => thumbDownComment(id)}>Thumb Down</button>
        <button onClick={() => removeComment(id)}>Remove comment</button>
        <hr/>
    </li>

export default Comment;