import Header from "../components/Header/Header";

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen">
      <Header />
      <p className="text-black text-4xl">404 page not found</p>
    </div>
  );
};

export default ErrorPage;
