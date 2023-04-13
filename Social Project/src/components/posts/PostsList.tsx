import { PostContent } from "./PostContent";

interface Props {
  posts: Array<{
    user: number
    textContent: string
  }>;
}

export const PostsList = ({posts}: Props) => {
  return (
    <div>
      {posts.map((post) => {
        return <PostContent post={post} key={Math.random()}/>;
      })}
    </div>
  );
};
