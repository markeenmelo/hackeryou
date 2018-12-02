import React from 'react'

const Comment = ({ comment }) => (
    <div>
      {comment.body} - {comment.user.name} - {comment.date}
    </div>
)

export default Comment
