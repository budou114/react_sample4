import { PrimaryButton } from './components/atoms/button/PrimaryButton';
import { SecondaryButton } from './components/atoms/button/SecondaryButton';
import { SearchInput } from './components/molecures/SearchInput';
import { UserCard } from './components/organisms/user/UserCard';
import { HeaderOnly } from './components/templates/HeaderOnly';
import { DefaultLayout } from './components/templates/DefaultLayout';
import { Router } from './router/Router';
import './App.css';

export default function App() {
  return (
    <Router />
  );
};
