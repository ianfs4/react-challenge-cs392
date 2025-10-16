import { signInWithGoogle, signOut, useAuthState } from '../utilities/firebase.ts';

const Banner = () => {
  const { isAuthenticated } = useAuthState();

  return (
    <div className="flex items-center justify-between bg-gray-100 px-6 py-4 shadow-md rounded-lg">
      <h1 className="text-2xl font-semibold text-gray-800">CS Course Scheduler</h1>
      {isAuthenticated ? (
        <button
          className="bg-red-600 text-white font-medium px-5 py-2 rounded-lg hover:bg-red-700 transition-colors"
          onClick={signOut}
        >
          Log Out
        </button>
      ) : (
        <button
          className="bg-blue-600 text-white font-medium px-5 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          onClick={signInWithGoogle}
        >
          Log In
        </button>
      )}
    </div>
  );
}

export default Banner;
