import Item from "./subComponent/item";
import { useEffect, useRef, useState } from "react";
import { getData } from "../script/fetch";
export default function Section() {
  const [article, setArticle] = useState([]);
  const [page, setPage] = useState(1);
  const getTarget = useRef(null);
  useEffect(() => {
    if (getTarget.current) {
      let observer = new IntersectionObserver((entry, observer) => {
        if (entry[0].isIntersecting) {
          const data = async () => {
            observer.unobserve(getTarget.current);
            const { data } = await getData();
            setPage(page + 1);
            setArticle([...article, ...data.articles]);
          };
          data();
        }
      });
      observer.observe(getTarget.current);
    }
  }, [page, getTarget]);

  return (
    <div>
      <ul className="w-full flex flex-col ">
        {article &&
          article.map((item, index) => {
            return <Item item={item} key={index} />;
          })}
      </ul>
      <div className="observe" style={{ display: "block" }} ref={getTarget}>
        observe
      </div>
    </div>
  );
}
