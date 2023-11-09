import Image from 'next/image';
import { MdStarRate, MdStarOutline } from 'react-icons/md';

const Article = () => {
  return (
    <main className="col-span-1 px-3 m-3 bg-white rounded-lg dark:bg-darkBlack lg:col-start-3 lg:col-end-9 dark:text-gray-200">
      <div className="flex flex-col">
        <div className="flex gap-5">
          <div className="hidden gap-5 pt-28 pl-5 min-w-[3rem] lg:flex lg:flex-col">
            <Image
              src="/facebook.png"
              width={75}
              height={75}
              alt="Facebook icon"
            />
            <Image
              src="/linkedin.png"
              width={75}
              height={75}
              alt="Facebook icon"
            />
            <Image
              src="/twitter.png"
              width={75}
              height={75}
              alt="Facebook icon"
            />
            <Image src="/more.png" width={75} height={75} alt="Facebook icon" />
          </div>
          <div className="p-10 pb-5 sm:pl-6 min-w-[10rem]">
            <img
              src="/healthy-food.jpg"
              alt="Healthy food"
              className="mb-3 rounded-lg sm:max-w-sm sm:ml-5 sm:float-right"
            />
            <h1 className="pb-5 text-2xl font-bold sm:text-4xl ">
              The Natural and Colorful World of Fruits
            </h1>
            <h2 className="pb-3 text-lg font-bold sm:text-2xl">
              Fruit Diversity
            </h2>
            <p className="pb-3">
              Fruits encompass a vast variety of plant products, each unique in
              appearance, taste, and nutritional content. From the vibrant
              colors of berries to the tropical allure of mangoes and the
              refreshing juiciness of watermelons, the diversity of fruits is a
              testament to nature's creativity.
            </p>
            <h2 className="pb-3 text-lg font-bold sm:text-2xl">
              Health Benefits of Fruits
            </h2>
            <p className="pb-3">
              Fruits are packed with essential nutrients and offer numerous
              health benefits, making them a fundamental component of a balanced
              diet.
            </p>
            <h2 className="pb-3 text-lg font-bold sm:text-2xl">
              Vitamins in Fruits
            </h2>
            <p className="pb-3">
              Fruits are abundant sources of vitamins, with vitamin C, A, and K
              being some of the most prevalent. These vitamins contribute to
              immune system support, skin health, and blood clotting.
            </p>
            <h2 className="pb-3 text-lg font-bold sm:text-2xl">
              Minerals in Fruits
            </h2>
            <p className="pb-3">
              Minerals like potassium, magnesium, and folate are found in
              various fruits, aiding in functions such as regulating blood
              pressure, muscle contraction, and cell growth.
            </p>

            <img
              src="/healthy-food.jpg"
              alt="Healthy food"
              className="my-3 rounded-lg sm:max-w-sm sm:float-left sm:mr-5 "
            />
            <h2 className="pb-3 text-lg font-bold sm:text-2xl">
              Dietary Fiber Content
            </h2>
            <p className="pb-3">
              Fruits are renowned for their high fiber content, which promotes
              digestive health by preventing constipation and supporting a
              feeling of fullness.
            </p>
            <h2 className="pb-3 text-lg font-bold sm:text-2xl">
              Water Content
            </h2>
            <p className="pb-3">
              Many fruits have high water content, making them excellent choices
              for staying hydrated, especially in warm weather. Watermelon and
              cucumber, for example, are composed mainly of water.
            </p>
          </div>
        </div>

        <div className="flex gap-1 pb-12 pl-6 lg:pl-24">
          <h3 className="pr-2 text-lg font-bold">Was this helpful?</h3>
          <MdStarRate size={25} className="cursor-pointer text-primary" />
          <MdStarRate size={25} className="cursor-pointer text-primary" />
          <MdStarRate size={25} className="cursor-pointer text-primary" />
          <MdStarRate size={25} className="cursor-pointer text-primary" />
          <MdStarOutline size={25} className="cursor-pointer text-primary" />
        </div>
      </div>
    </main>
  );
};

export default Article;
