export default function Signup() {
  return (
    <>
      <div className="mt-4">
        <h1 className="text-4xl text-center mb-4">Login Page</h1>
        <form className="max-w-md mx-auto ">
          <input type="email" name="email" placeholder="Your email here" />
          <input type="password" name="password" placeholder="password" />
          <button>Log In</button>
        </form>
      </div>
    </>
  );
}
