"use client";
import React from "react";
import useBoundStore from "@/store/rootStore";
import { Button } from "./ui/button";

const Bear = () => {
  const bears = useBoundStore((state) => state.bears);
  const fishes = useBoundStore((state) => state.fishes);
  const addAysyncBear = useBoundStore((state) => state.addAysyncBear);
  const addFish = useBoundStore((state) => state.addFish);
    //  const {bears, fishes, addAysyncBear, addFish} = useBoundStore(
    //     (state) => ({
    //         bears: state.bears,
    //         fishes: state.fishes,
    //         addAysyncBear: state.addAysyncBear,
    //         addFish: state.addFish,
    //     }),
    //  );
  return (
    <div className="flex flex-col  justify-around h-[20rem]">
      <h2>Number of bears: {bears}</h2>
      <h2>Number of fishes: {fishes}</h2>
      <Button
        variant="default"
        className="bg-blue-500 text-white"
        onClick={() => addAysyncBear()}
      >
        Add a bear
      </Button>
      <Button
        variant="default"
        className="bg-blue-500 text-white"
        onClick={() => addFish()}
      >
        Add a fish
      </Button>
    </div>
  );
};

export default Bear;
