import Link from "next/link";
import React from "react";

const menu = [
  { label: "О нас", value: "/about" },
  { label: "Контакты", value: "/contacts" },
  { label: "Продукты", value: "/products" },
];

const Header = () => {
  return (
    <header className="flex items-center justify-between">
      <div>
        {/* тут вместо буквы должен стоять логотип */}
        <h1 className="text-[30px] font-medium">B.</h1>
      </div>
      <div className="flex gap-x-5">
        {menu.map((item) => (
          <Link key={item.label} href={item.value}>
            {item.label}
          </Link>
        ))}
      </div>
      <div className="flex gap-x-5">
        <button>Регистрация</button>
        <button>Войти</button>
      </div>
    </header>
  );
};

export default Header;
