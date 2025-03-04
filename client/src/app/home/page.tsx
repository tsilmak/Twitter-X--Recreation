import RightSidebar from "@/components/RightSidebar";
import PostInput from "@/components/feed/PostInput";
import PostView from "@/components/feed/PostView";

const Home = () => {
  return (
    <div className="flex min-h-screen">
      {/* Main Content */}
      <div className="flex-1 max-w-2xl border-r border-gray-800 ">
        {/* Adjust max-width and margins */}
        <div>
          <div className="text-sm sticky top-0 mt-1 bg-black bg-opacity-80 backdrop-blur-md border-b border-gray-800">
            <div className="flex">
              <button className="w-1/2 py-3 text-center hover:bg-colorHover relative">
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[55px] border-b-4 border-sky-500 rounded-b-full"></div>
                <h1 className="font-bold mb-1">For you</h1>
              </button>
              <button className="w-1/2 py-3 text-center hover:bg-colorHover border-gray-800">
                Following
              </button>
            </div>
          </div>

          {/* Post Input (Client Component) */}
          <PostInput />

          <PostView
            username={"username"}
            name={"name"}
            postContent={"This is a post content"}
            postDate={"1h"}
            postLikes={1100}
            postComments={20000}
            postRetweets={120021}
            postViews={100}
          />
        </div>
      </div>
      {/* Right Sidebar */}
      <div className="hidden lg:block w-[350px] flex-shrink-0">
        {/* Add fixed width and show only on lg screens */}
        <RightSidebar />
      </div>
    </div>
  );
};

export default Home;
