import { createContext } from "react";

const AuthContext = createContext({
  isAuthenticated: false,
  user: {
    username: "maye",
    name: "Maye Edwin",
    email: "dev@gmail.com",
  },
});

//Define Context Provider
function AuthProvider(props) {
  return (
    <AuthContext.Provider
      user={{
        isAuthenticated: false,
        user: {
          username: "maye",
          name: "Maye Edwin",
          email: "dev@gmail.com",
        },
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}

function UserProfile() {
    const {user} = React.
  return (
    <div>
      {/* Define a user profile component */}
      <h1>UserProfile</h1>
      <div>Username: @Maye</div>
      <div>Name: Maye Edwin</div>
      <div>Email: maye@gmail.com</div>
    </div>
  );
}

function PracticeContext() {
  return (
    <AuthProvider>
      <section className="main-container">
        <UserProfile />
      </section>
    </AuthProvider>
  );
}

export default PracticeContext;
