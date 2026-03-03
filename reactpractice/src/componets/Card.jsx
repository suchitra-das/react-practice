const Card = () => {
  let datas = [
    {
      id: 1,
      title: "Card One",
      value: 0,
    },
    {
      id: 2,
      title: "Card 2",
      value: 0,
    },

    {
      id: 3,
      title: "Card 3",
      value: 0,
    },
    {
      id: 4,
      title: "Card 4",
      value: 0,
    },
    {
      id: 5,
      title: "Card 5",
      value: 0,
    },
    {
      id: 6,
      title: "Card 6",
      value: 0,
    },
  ];
  return (
    <div>
      {datas.map((data) => (
        <div className="border p-4">
          <div key={data.id}>{data.title}</div>

          <button className="border px-2 py-1">Add card</button>
        </div>
      ))}
    </div>
  );
};

export default Card;
