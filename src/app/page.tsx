import NavBar from "../../components/NavBar";
import UserList from "../../components/UserList";

export default function Home() {
  return (
    <div>
      <head>
        <title>Demo App</title>
      </head>
      <NavBar></NavBar>
      <main>
        <UserList />
      </main>
    </div>
  );
}
