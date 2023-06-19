export default function item({ item }) {
  return (
    <li className="flex w-1/2 h-80 shrink-0 items-center mx-auto">
      <div className="left">
        <figure>
          <img
            src={item.urlToImage ? item.urlToImage : null}
            alt="이미지 사진"
          />
        </figure>
      </div>
      <div className="right ml-5">
        <div>{item.title}</div>
      </div>
    </li>
  );
}
