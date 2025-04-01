'use client';
import { RandomFox } from "app/components/RandomFox";
import { useState } from "react";

const random = () => Math.floor(Math.random()*123) + 1;

export default function Home() {
  const [images, setImages] = useState<Array<string>>([
    `https://randomfox.ca/images/${random()}.jpg`,
    `https://randomfox.ca/images/${random()}.jpg`,
    `https://randomfox.ca/images/${random()}.jpg`,
    `https://randomfox.ca/images/${random()}.jpg`,
  ]);
  return (
    <div>
      
      <main>
        <h1 className="text-3xl font-bold underline">
          Hello world!
        </h1>
        {images.map((image, index) => (
          <div key={index} className="p-4">
            <RandomFox image={image}/>
          </div>
        ))}
      </main>

      <footer></footer>
    </div>
  );
}
