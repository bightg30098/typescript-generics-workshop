import { expect, it } from "vitest";
import { Equal, Expect } from "../helpers/type-utils";

type GreetingType = "hello" | "goodbye";

type Greeting<T> = T extends "goodbye" ? "hello" : "goodbye";

function youSayGoodbyeISayHello<T extends GreetingType>(greeting: T) {
  return (greeting === "goodbye" ? "hello" : "goodbye") as Greeting<T>;
}

it("Should return goodbye when hello is passed in", () => {
  const result = youSayGoodbyeISayHello("hello");
  //    ^?

  type test = [Expect<Equal<typeof result, "goodbye">>];

  expect(result).toEqual("goodbye");
});

it("Should return hello when goodbye is passed in", () => {
  const result = youSayGoodbyeISayHello("goodbye");
  //    ^?

  type test = [Expect<Equal<typeof result, "hello">>];

  expect(result).toEqual("hello");
});
