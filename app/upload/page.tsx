"use client";
import { useState } from "react";
import { Button } from "../components/Button";
import { createCard } from "../api/cards-api";
import { TCard } from "../lib/definitions";
import { useRouter } from "next/navigation";

export default function Upload() {
  const [newCard, setNewCard] = useState({
    name: "",
    description: "",
    includePattern: "",
    excludePattern: "",
    sensitivity: "LOW",
  });
  const router = useRouter();

  const handleChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setNewCard((prevNewCard) => ({
      ...prevNewCard,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmitCard = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const createdCard = await createCard(newCard as TCard);
      console.log("createdCard:", createdCard);
      setNewCard({
        name: "",
        description: "",
        includePattern: "",
        excludePattern: "",
        sensitivity: "LOW",
      });
      router.push("/");
    } catch (error) {
      console.error("Error creating card:", error);
      throw error;
    }
  };

  return (
    <main className="p-4 mt-6 mx-auto w-3/5 flex flex-col justify-center border border-solid border-gray-300 rounded-md">
      <h4 className="text-xl text-center">INPUT NEW CARD</h4>
      <div className="w-full flex flex-col">
        <form
          className="flex flex-col items-center mx-auto w-full"
          action=""
          method="post"
          onSubmit={handleSubmitCard}>
          <div className="flex flex-col w-full max-w-162 pb-4">
            <div className="flex flex-col sm:m-0 sm:mb-6">
              <label className="flex justify-between text-black" htmlFor="name">
                NAME
              </label>
              <textarea
                className="text-black bg-gray-50 border border-solid border-gray-300 rounded-md p-2 h-16 lh-8 pl-3 mb-3 text-black text-sm"
                name="name"
                id="name"
                onChange={handleChange}
                value={newCard.name}
                placeholder="add a name"></textarea>
            </div>

            <div className="form__wrapper">
              <label
                className="flex justify-between text-black"
                htmlFor="description">
                DESCRIPTION
              </label>
              <textarea
                className="w-full text-black bg-gray-50 border border-solid border-gray-300 rounded-md p-2 h-16 lh-8 pl-3 mb-3 text-black text-sm"
                name="description"
                id="description"
                onChange={handleChange}
                value={newCard.description}
                placeholder="add a description"></textarea>
            </div>

            <div className="form__wrapper">
              <label
                className="flex justify-between text-black"
                htmlFor="includePattern">
                INCLUDE PATTERN
              </label>
              <textarea
                className="w-full text-black bg-gray-50 border border-solid border-gray-300 rounded-md p-2 h-16 lh-8 pl-3 mb-3 text-black text-sm"
                name="includePattern"
                id="includePattern"
                onChange={handleChange}
                value={newCard.includePattern}
                placeholder="add a pattern to include"></textarea>
            </div>

            <div className="form__wrapper">
              <label
                className="flex justify-between text-black"
                htmlFor="excludePattern">
                EXCLUDE PATTERN
              </label>
              <textarea
                className="w-full text-black bg-gray-50 border border-solid border-gray-300 rounded-md p-2 h-16 lh-8 pl-3 mb-3 text-black text-sm"
                name="excludePattern"
                id="excludePattern"
                onChange={handleChange}
                value={newCard.excludePattern}
                placeholder="add a pattern to exclude"></textarea>
            </div>

            <div className="form__wrapper">
              <label
                className="flex justify-between text-black"
                htmlFor="sensitivity">
                SENSITIVITY
              </label>
              <select
                className="text-gray-500 w-full text-black bg-gray-50 border border-solid border-gray-300 rounded-md p-2 h-16 lh-8 pl-3 mb-3 text-black text-sm"
                name="sensitivity"
                id="sensitivity"
                onChange={handleChange}
                value={newCard.sensitivity}>
                <option value="LOW">LOW</option>
                <option value="MEDIUM">MEDIUM</option>
                <option value="CRITICAL">CRITICAL</option>
              </select>
            </div>

            <div className="newcard___button-container">
              <Button btnLabel="SUBMIT" />
            </div>
          </div>
        </form>
      </div>
    </main>
  );
}
