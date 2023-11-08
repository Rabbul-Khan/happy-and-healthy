import Image from 'next/image';

const Article = () => {
  return (
    <main className="lg:col-start-3 lg:col-end-9 bg-yellow-500 col-span-1 ">
      <div className="flex gap-5">
        <div className="hidden lg:flex-col gap-5 w-16 pt-10">
          <div>Social</div>
          <div>Social</div>
          <div>Social</div>
          <div>Social</div>
        </div>
        <div className="p-14">
          <h1 className=" text-4xl font-bold pb-5">Article title goes here</h1>
          <img
            src="/healthy-food.jpg"
            alt="Healthy food"
            className=" float-right ml-5  max-w-sm"
          />
          <h2 className="text-2xl font-bold pb-3">Sub heading goes here</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae
            delectus rerum quo tenetur nihil consequuntur porro maxime
            voluptates et nisi nostrum corporis vitae nam, illo ipsam cupiditate
            aut laboriosam mollitia!
          </p>
          <h2 className="text-2xl font-bold pb-3">Sub heading goes here</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae
            delectus rerum quo tenetur nihil consequuntur porro maxime
            voluptates et nisi nostrum corporis vitae nam, illo ipsam cupiditate
            aut laboriosam mollitia!
          </p>
          <h2 className="text-2xl font-bold pb-3">Sub heading goes here</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae
            delectus rerum quo tenetur nihil consequuntur porro maxime
            voluptates et nisi nostrum corporis vitae nam, illo ipsam cupiditate
            aut laboriosam mollitia!
          </p>
          <h2 className="text-2xl font-bold pb-3">Sub heading goes here</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae
            delectus rerum quo tenetur nihil consequuntur porro maxime
            voluptates et nisi nostrum corporis vitae nam, illo ipsam cupiditate
            aut laboriosam mollitia!
          </p>

          <img
            src="/healthy-food.jpg"
            alt="Healthy food"
            className=" float-left mr-5 mt-5  max-w-sm"
          />
          <h2 className="text-2xl font-bold pb-3">Sub heading goes here</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae
            delectus rerum quo tenetur nihil consequuntur porro maxime
            voluptates et nisi nostrum corporis vitae nam, illo ipsam cupiditate
            aut laboriosam mollitia!
          </p>
          <h2 className="text-2xl font-bold pb-3">Sub heading goes here</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae
            delectus rerum quo tenetur nihil consequuntur porro maxime
            voluptates et nisi nostrum corporis vitae nam, illo ipsam cupiditate
            aut laboriosam mollitia!
          </p>
        </div>
      </div>
    </main>
  );
};

export default Article;
