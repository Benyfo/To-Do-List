import { useState, type ChangeEvent, type FC } from "react";

type Levels = 1 | 2 | 3 | "high" | "medium" | "low";

const ModalAddTask: FC<{
  addTask: (title: string, description: string, Level: Levels) => void;
  handleCloseModal: () => void;
}> = ({ addTask, handleCloseModal }) => {
  const [valueInput1, setValueInput1] = useState<string>("");
  const [valueInput2, setValueInput2] = useState<string>("");

  const [selectedLevel, setSelectedLevel] = useState<Levels>("low");

  const handleGetValueInput1 = (event: ChangeEvent<HTMLInputElement>) => {
    setValueInput1(event.currentTarget.value);
    // console.log("valueInput1:", event.currentTarget.value);
  };

  const handleGetValueInput2 = (event: ChangeEvent<HTMLInputElement>) => {
    setValueInput2(event.currentTarget.value);
    // console.log("valueInput2:", event.currentTarget.value);
  };

  const handleChangeLevel = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedLevel(event.currentTarget.value as Levels);
  };

  const handleSubmit = () => {
    if (!valueInput1.trim() || !valueInput2.trim()) return;
    addTask(valueInput1, valueInput2, selectedLevel);

    handleCloseModal();
  };

  return (
    <div className="absolute top-[148px] border w-full min-h-screen bg-[#9F7E69]/85 flex justify-center items-center z-40">
      <div className="w-[25%] 2xl:w-[20%] m-auto bg-[#FFEEE2] flex flex-col justify-center items-center gap-4 rounded-xl p-20 relative">
        <button
          className="absolute top-2 left-2 text-[#9F7E69] rounded-2xl"
          onClick={handleCloseModal}
        >
          X
        </button>

        <p className="text-2xl font-bold text-[#D2BBA0] mb-[10%]">
          Please fill fields
        </p>

        <input
          type="text"
          value={valueInput1}
          onChange={handleGetValueInput1}
          placeholder="Task title"
          className="p-2 rounded-lg text-[#D2BBA0]"
        />
        <input
          type="text"
          value={valueInput2}
          onChange={handleGetValueInput2}
          placeholder="Task description"
          className="p-2 rounded-lg text-[#D2BBA0]"
        />

        <select
          aria-label="Select Level"
          value={selectedLevel}
          onChange={handleChangeLevel}
          id="selectOption"
          className="text-black px-[60px] py-2 rounded-lg"
        >
          <option value="high">high</option>
          <option value="medium">medium</option>
          <option value="low">low</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>

        <button
          onClick={handleSubmit}
          className="py-2 px-[55px] mt-[10%] rounded-lg text-[#D2BBA0] text-nowrap"
        >
          Create task!
        </button>
      </div>
    </div>
  );
};

export default ModalAddTask;
