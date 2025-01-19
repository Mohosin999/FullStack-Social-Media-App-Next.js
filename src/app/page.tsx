import CreatePost from "@/components/CreatePost";
import { currentUser } from "@clerk/nextjs/server";

const HomePage = async () => {
  const user = await currentUser();

  return (
    <div className="grid grid-cols-1 lg:grid-cols-10 gap-6">
      {/* Center content area */}
      <div className="lg:col-span-6">{user ? <CreatePost /> : null}</div>

      {/* Who to follow you */}
      <div className="hidden lg:block lg:col-span-4 sticky top-20">
        WhoToFollow
      </div>
    </div>
  );
};

export default HomePage;
