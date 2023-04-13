import { Posts } from '@/components/posts/Posts'
import { PostCreator } from '@/components/posts/post-creator/PostCreator'

export const MainContentView = () => {
  return (
    <div style={{width:"65%", background:"gray", margin:"auto", marginTop:"5px"}}>
      <PostCreator/>
      <Posts/>
    </div>
  )
}
