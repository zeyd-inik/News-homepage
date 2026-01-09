import data from '../data.json';

import './Main.css';

import Topic from './Topic';

import Web3mobile from '.././assets/images/image-web-3-mobile.jpg';

export default function Main() {
  return (
    <main className="Main">
      <div className="img_container">
        <img
          src={Web3mobile}
          alt="Web 3 Mobile Illustration"
        />
      </div>
      <section>
        <h1>The Bright Future of Web 3.0?</h1>
        <div>
          <p>
            We dive into the next evolution of the web that claims to put the
            power of the platforms back into the hands of the people. But is it
            really fulfilling its promise?
          </p>
          <button>Read More</button>
        </div>
      </section>
      <aside>
        <h5>New</h5>

        {data.map((item) => {
          const { description, title } = item;

          return (
            <Topic
              index={crypto.randomUUID()}
              description={description}
              title={title}
            />
          );
        })}
      </aside>
    </main>
  );
}
