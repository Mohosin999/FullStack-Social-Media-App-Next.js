import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

const HomePage = () => {
  return (
    <div>
      <SignedOut>
        <SignInButton />
      </SignedOut>

      <SignedIn>
        <UserButton />
      </SignedIn>
    </div>
  );
};

export default HomePage;
