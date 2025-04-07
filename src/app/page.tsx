'use client';
import { LazyImage } from "app/components/RandomFox";
import { MouseEventHandler, useState } from "react";
import { random } from "lodash";

const myRandom = () => random(1, 123);

const generateId = () => Math.random().toString(36).substr(2, 9);

export default function Home() {
  const [images, setImages] = useState<Array<IFoxImageItem>>([]);

  const addNewFox: MouseEventHandler<HTMLButtonElement> = (event) => {
    const newImageItem: IFoxImageItem = {
      id: generateId(),
      url: `https://randomfox.ca/images/${myRandom()}.jpg`,
    };

    setImages([
      ...images,
      newImageItem
    ])
  }

  return (
    <div>
      
      <main>
        <h1 className="text-3xl font-bold underline">
          Hello world!
        </h1>
        <button onClick={addNewFox}>Add new fox</button>
        {images.map(({ id, url }, index) => (
          <div key={id} className="p-4">
            <LazyImage 
              src={url}
              width={320} 
              height="auto"
              title="Random Fox"
              className="rounded bg-gray-300"
              onClick={() => console.log("hey")}
              onLazyLoad = {(img) => {
                console.log(`Image #${index + 1} cargada. Nodo:`, img);
              }}
            />
          </div>
        ))}
      </main>

      <footer></footer>
    </div>
  );
}
