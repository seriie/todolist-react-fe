interface RegisterProps {
  username: string;
  email: string;
  password: string;
  error: string;
  registering: boolean;
  onUsernameChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onEmailChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onPasswordChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent) => void;
}

export default function AppRegister({
  username,
  email,
  password,
  onUsernameChange,
  onEmailChange,
  onPasswordChange,
  onSubmit,
  error,
  registering,
}: RegisterProps) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300 px-4">
      <div className="w-full max-w-md bg-white/50 backdrop-blur-md border border-gray-300/40 rounded-2xl shadow-xl p-8">
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
          Create Account
        </h2>

        <form onSubmit={onSubmit} className="space-y-5">
          <div>
            <label className="block text-gray-700 text-sm font-medium mb-1">
              Username
            </label>
            <input
              type="text"
              value={username}
              onChange={onUsernameChange}
              placeholder="your_username"
              className="w-full px-4 py-2 rounded-lg bg-white/70 text-gray-900 placeholder-gray-500 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 transition"
            />
          </div>

          <div>
            <label className="block text-gray-700 text-sm font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={onEmailChange}
              placeholder="you@example.com"
              className="w-full px-4 py-2 rounded-lg bg-white/70 text-gray-900 placeholder-gray-500 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 transition"
            />
          </div>

          <div>
            <label className="block text-gray-700 text-sm font-medium mb-1">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={onPasswordChange}
              placeholder="••••••••"
              className="w-full px-4 py-2 rounded-lg bg-white/70 text-gray-900 placeholder-gray-500 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 transition"
            />
          </div>
          {error && (
            <p className="p-2 bg-red-500/20 text-red-500 border-2 border-red-500 rounded-md">
              {error}
            </p>
          )}
          <button
            type="submit"
            disabled={registering}
            className={`w-full p-2 rounded text-white ${
              registering
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-gray-800 hover:bg-gray-600"
            }`}
          >
            {registering ? "Registering..." : "Register"}
          </button>
        </form>

        <p className="text-sm text-center text-gray-600 mt-6">
          Already have an account?{" "}
          <a
            href="/auth/login"
            className="underline text-gray-800 hover:text-gray-700"
          >
            Sign in
          </a>
        </p>
      </div>
    </div>
  );
}
