import styles from "./Comments.module.css";

const Comments = ({ data }) => {
  return data.map((comment) => {
    return (
      <div key={data.id} className={styles.commentBox}>
        <div className={styles.userProfile}>
          <img
            alt="user profile"
            src="https://www.redditstatic.com/avatars/defaults/v2/avatar_default_2.png"
          />
        </div>
        <div className={styles.commentContent}>
          <p style={{fontWeight: "600"}}>{comment.userName}</p>
          <p>{comment.commentText}</p>
          {comment.replies.length > 0 && <Comments data={comment.replies} />}
        </div>
      </div>
    );
  });
};

export default Comments;
