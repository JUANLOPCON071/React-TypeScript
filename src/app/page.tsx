'use client';
import { LazyImage } from "app/components/RandomFox";
import { MouseEventHandler, useState } from "react";

const random = () => Math.floor(Math.random()*123) + 1;

const generateId = () => Math.random().toString(36).substr(2, 9);

type ImageItem = { id: string; url: string }

export default function Home() {
  const [images, setImages] = useState<Array<ImageItem>>([]);

  const addNewFox: MouseEventHandler<HTMLButtonElement> = (event) => {
    const newImageItem: ImageItem = {
      id: generateId(),
      url: `https://randomfox.ca/images/${random()}.jpg`,
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
