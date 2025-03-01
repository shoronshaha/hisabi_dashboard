/* eslint-disable react/no-unknown-property */

const LoadingOverlay = () => {
  return (
    <div className="flex items-center justify-center h-screen w-screen bg-gray-100">
      <div className="flex flex-col items-center">
        <div className="loader mb-4"></div>
        <div className="text-[1rem] text-gray-700">Loading...</div>
      </div>

      <style jsx>{`
        .loader {
          border: 8px solid rgba(255, 255, 255, 0.1);
          border-left-color: #4f46e5; /* Indigo color */
          border-radius: 50%;
          width: 48px;
          height: 48px;
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
};

export default LoadingOverlay;
