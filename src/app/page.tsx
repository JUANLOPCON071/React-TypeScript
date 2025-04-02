'use client';
import { RandomFox } from "app/components/RandomFox";
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
        {images.map(({ id, url }) => (
          <div key={id} className="p-4">
            <RandomFox image={url}/>
          </div>
        ))}
      </main>

      <footer></footer>
    </div>
  );
}
