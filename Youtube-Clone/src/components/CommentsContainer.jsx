const commentsData = [
  {
    name: "Haseeb Yousuf",
    text: "lorem ahksdjhasjk asdhja ajhda kashd",
    replies: [
      {
        name: "Jawad Shakeel",
        text: "Text within text",
        replies: [
          {
            name: "Haseeb Yousuf",
            text: "lorem ahksdjhasjk asdhja ajhda kashd",
            replies: [
              {
                name: "Jawad Shakeel",
                text: "Text within text",
                replies: [
                  {
                    name: "Jawad Shakeel",
                    text: "Text within text",
                    replies: [
                      {
                        name: "Jawad Shakeel",
                        text: "Text within text",
                        replies: [],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        name: "Jawad Shakeel",
        text: "Text within text",
        replies: [],
      },
      {
        name: "Jawad Shakeel",
        text: "Text within text",
        replies: [],
      },
    ],
  },
  {
    name: "Haseeb Yousuf",
    text: "lorem ahksdjhasjk asdhja ajhda kashd",
    replies: [
      {
        name: "Jawad Shakeel",
        text: "Text within text",
        replies: [],
      },
    ],
  },
  {
    name: "Haseeb Yousuf",
    text: "lorem ahksdjhasjk asdhja ajhda kashd",
    replies: [
      {
        name: "Jawad Shakeel",
        text: "Text within text",
        replies: [],
      },
    ],
  },
  {
    name: "Haseeb Yousuf",
    text: "lorem ahksdjhasjk asdhja ajhda kashd",
    replies: [
      {
        name: "Jawad Shakeel",
        text: "Text within text",
        replies: [],
      },
    ],
  },
];

const Comment = ({ data }) => {
  return (
    <div className='flex gap-2 p-2 mt-2 bg-gray-200 rounded-lg'>
      <img
        src='https://w7.pngwing.com/pngs/178/595/png-transparent-user-profile-computer-icons-login-user-avatars-thumbnail.png'
        alt='profile'
        className='w-12 rounded-full '
      />
      <div>
        <h5 className='font-bold'>{data.name}</h5>
        <p>{data.text}</p>
      </div>
    </div>
  );
};
const CommentsList = ({ commentsData }) => {
  return commentsData.map((comment, index) => {
    return (
      <div key={index}>
        <Comment data={comment} />
        <div className='pl-5 border-l-2 border-l-black'>
          <CommentsList commentsData={comment.replies} />
        </div>
      </div>
    );
  });
};
const CommentsContainer = () => {
  return (
    <div className='mt-2'>
      <h1 className='font-bold'>Comments:</h1>
      <CommentsList commentsData={commentsData} />
    </div>
  );
};

export default CommentsContainer;
