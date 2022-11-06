import React, { useState } from "react";
import { Helmet } from "react-helmet";
const Menu = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="h-screen bg-gray-200 p-6">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Menu page</title>
        <meta name="description" content="This is the Menu page" />
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <h1 className="text-3xl leading-9 tracking-tight">
        Welcome to oge Menu page
      </h1>
      <p className="text-xl leading-7 py-6">
        Click to increase you coins, You have <strong>{count}</strong> coins,
        click for more.
      </p>
      <button
        className="bg-indigo-500 font-bold rounded-full py-4 px-8 shadow-lg uppercase tracking-wider text-white focus:outline-none"
        onClick={() => setCount(count + 1)}
      >
        Click me for more coins
      </button>
      <p className="text-sm leading-7 pt-10">Thank you for coming</p>
    </div>
  );
};

export default Menu;
