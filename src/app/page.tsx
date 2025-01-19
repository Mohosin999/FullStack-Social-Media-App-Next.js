import CreatePost from "@/components/CreatePost";
import WhoToFollow from "@/components/WhoToFollow";
import { currentUser } from "@clerk/nextjs/server";

const HomePage = async () => {
  const user = await currentUser();

  return (
    <div className="grid grid-cols-1 lg:grid-cols-10 gap-6">
      {/* Middle content area */}
      <div className="lg:col-span-6">
        {/* Create post area */}
        {user ? <CreatePost /> : null}

        {/* Show all posts */}
      </div>

      {/* Who to follow you */}
      <div className="hidden lg:block lg:col-span-4 sticky top-20">
        <WhoToFollow />
      </div>
    </div>
  );
};

export default HomePage;
