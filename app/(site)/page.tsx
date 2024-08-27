export default function Home() {
  return (
    <>
      {new Array(10).fill(null).map((_, key) => {
        return (
          <div key={key} className="mb-5 space-y-5">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur, commodi eaque obcaecati perspiciatis aut cum maxime ab quas labore ea?
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione autem, officiis dignissimos nisi consectetur porro velit delectus ipsam sapiente facere nesciunt atque. Voluptatibus blanditiis sapiente reprehenderit quibusdam minima debitis repellat!
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident suscipit beatae voluptas magni hic molestias et assumenda! Quibusdam, hic. Eos inventore fugiat saepe dicta possimus nesciunt nam. Voluptas ea fuga eaque cupiditate a, reprehenderit alias odio necessitatibus? Molestiae eos beatae est fuga exercitationem deleniti temporibus assumenda, autem officia maxime quasi ipsum eum possimus aspernatur harum perferendis atque, repudiandae iusto velit?
            </p>
          </div>
        );
      })}
    </>
  );
}
