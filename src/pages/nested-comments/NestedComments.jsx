import { Comments } from "../../components";

const commentsData = [
  {
    id: 1,
    userName: "Alice",
    commentText: "This is the first comment.",
    replies: [
      {
        id: 11,
        userName: "Bob",
        commentText: "This is a reply to the first comment.",
        replies: [
          {
            id: 111,
            userName: "Charlie",
            commentText: "This is a nested reply to the first reply.",
            replies: [],
          },
        ],
      },
    ],
  },
  {
    id: 2,
    userName: "Dave",
    commentText: "This is the second comment.",
    replies: [],
  },
  {
    id: 3,
    userName: "Eve",
    commentText: "This is the third comment.",
    replies: [
      {
        id: 31,
        userName: "Frank",
        commentText: "This is a reply to the third comment.",
        replies: [],
      },
    ],
  },
  {
    id: 4,
    userName: "Grace",
    commentText: "This is the fourth comment.",
    replies: [],
  },
  {
    id: 5,
    userName: "Hank",
    commentText: "This is the fifth comment.",
    replies: [
      {
        id: 51,
        userName: "Ivy",
        commentText: "This is a reply to the fifth comment.",
        replies: [
          {
            id: 511,
            userName: "Jack",
            commentText: "This is a nested reply to the fifth comment's reply.",
            replies: [],
          },
        ],
      },
    ],
  },
  {
    id: 6,
    userName: "Kate",
    commentText: "This is the sixth comment.",
    replies: [],
  },
  {
    id: 7,
    userName: "Leo",
    commentText: "This is the seventh comment.",
    replies: [
      {
        id: 71,
        userName: "Mia",
        commentText: "This is a reply to the seventh comment.",
        replies: [],
      },
      {
        id: 72,
        userName: "Nina",
        commentText: "This is another reply to the seventh comment.",
        replies: [],
      },
    ],
  },
  {
    id: 8,
    userName: "Oscar",
    commentText: "This is the eighth comment.",
    replies: [],
  },
];

const NestedComments = () => {
  return <Comments data={commentsData} />;
};

export default NestedComments;
