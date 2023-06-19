import React from "react";
import HeaderButton from "./subComponent/Header_button";

export default function Header() {
  const inputData = [
    { category: "all", showTitle: "전체보기" },
    { category: "bussiniss", showTitle: "비지니스" },
    { category: "entertainment", showTitle: "엔터테이먼스" },
    { category: "general", showTitle: "제네럴" },
    { category: "health", showTitle: "건강" },
    { category: "science", showTitle: "과학" },
    { category: "sports", showTitle: "스포츠" },
    { category: "technology", showTitle: "기술" },
  ];
  return (
    <>
      <ul className="flex justify-center w-full mt-5">
        {inputData.map((item, i) => {
          return (
            <HeaderButton
              category={item.category}
              title={item.showTitle}
              key={item.category}
            />
          );
        })}
      </ul>
    </>
  );
}
