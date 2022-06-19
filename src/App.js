import { PrimaryButton } from './components/atoms/button/PrimaryButton';
import { SecondaryButton } from './components/atoms/button/SecondaryButton';
import { SearchInput } from './components/molecures/SearchInput';
import { UserCard } from './components/organisms/user/UserCard';
import './App.css';

const user = {
  name: "じゃけえ",
  image: "https://source.unsplash.com/2l0CWTpcChI",
  email: "12345@emxample.com",
  phone: "090-1111-2222",
  company: {
    name: "テスト株式会社"
  },
  website: "https://google.com"
};

export default function App() {
  return (
    <div className='App'>
      <PrimaryButton>テスト</PrimaryButton>
      <SecondaryButton>検索</SecondaryButton>
      <br />
      <SearchInput />
      <UserCard user={user} />
    </div>
  );
};
