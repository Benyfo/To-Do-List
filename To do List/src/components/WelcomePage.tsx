import type { FC } from "react";

interface IProps {
  name: string;
  age: number;
}

const WelcomePage: FC<IProps> = ({ name, age }) => {
  return (
    <h1 className="text-2xl font-bold text-center text-red-700">{`Welcome to the To-Do List App! this app created by ${name} with only ${age} years old!`}</h1>
  );
};

export default WelcomePage;
