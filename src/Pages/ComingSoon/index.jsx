export const ComingSoonPage = () => {
  return (
    <div className="min-h-screen pt-20 bg-gray-100">
      <div className="max-w-4xl px-4 py-12 mx-auto sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900">Coming Soon</h1>
          <p className="mt-3 text-lg text-gray-500">
            Our website is under construction.
          </p>
        </div>
        <div className="mt-10">
          <form className="max-w-xs mx-auto">
            <div className="flex items-center py-2 border-b border-gray-500">
              <input
                type="email"
                className="w-full px-2 py-1 mr-3 leading-tight text-gray-700 bg-transparent border-none appearance-none focus:outline-none"
                placeholder="Enter your email"
              />
              <button
                className="flex-shrink-0 px-2 py-1 text-sm text-white border-4 rounded bg-cyan-500 hover:bg-cyan-700 border-cyan-500 hover:border-cyan-700"
                type="submit"
              >
                Notify me
              </button>
            </div>
          </form>
          <p className="mt-2 text-xs text-center text-gray-500">
            We &#39; ll notify you when we launch.
          </p>
        </div>
      </div>
    </div>
  );
};
