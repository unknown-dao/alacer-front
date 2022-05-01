import { ReactTypical } from "@deadcoder0904/react-typical";
import type { NextPage } from "next";
import Link from "next/link";
import { wordsForReactTypical } from "../constants/constants";

const Home: NextPage = () => {
  return (
    <div className="flex items-center flex-col h-screen w-screen">
      <nav className="max-w-screen-lg w-full px-16 py-4 flex justify-between items-center">
        <h1 className="text-4xl">
          <span className="">Alacer DAO</span>
        </h1>
        <ul className="flex items-center gap-x-4">
          <li>
            <a href="">Link 1</a>
          </li>
          <li>
            <a href="">Link 2</a>
          </li>
          <li>
            <a href="">Link 3</a>
          </li>
          <li>
            <a href="">Link 4</a>
          </li>
        </ul>
        <div className="flex items-center gap-x-10">
          <button data-hover="🐵" className="button-animation">
            <a className="flex items-center justify-center text-white py-2 text-xl">
              Be a Monkey
            </a>
          </button>
        </div>
      </nav>
      <main className="griddie h-full w-full container">
        <div className="col-start-1 col-end-13 flex flex-col justify-center items-center">
          <h2 className="text-6xl font-medium">
            The inclusive DAO for{" "}
            <ReactTypical
              loop={Infinity}
              wrapper="span"
              steps={wordsForReactTypical}
            />{" "}
          </h2>
          <p className="text-2xl mt-4">
            Through travel and education we help young people enter the crypto
            world.
          </p>
          <button data-hover="🐵" className="mt-8 button-animation">
            <Link href="/">
              <a className="flex items-center justify-center text-white py-2 px-4 text-xl">
                Be a Monkey
              </a>
            </Link>
          </button>
        </div>
      </main>
      <footer>
        <div className="flex items-center justify-center pb-5">
          <p className="text-xl text-zinc-600">
            Made with{" "}
            <span role="img" aria-label="heart">
              ❤️
            </span>{" "}
            by{" "}
            <a
              href="https://twitter.com/alacerdao"
              target="_blank"
              rel="noopener noreferrer"
            >
              @alacerdao
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
