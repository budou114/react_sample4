import { Router } from './router/Router';
import './App.css';
import { UserProvider } from './providers/UserProvider';

export default function App() {
  return (
    <UserProvider>
      <Router />
    </UserProvider>
  );
};
