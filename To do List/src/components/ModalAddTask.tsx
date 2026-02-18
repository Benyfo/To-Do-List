import { useState, type ChangeEvent, type FC } from "react";

const ModalAddTask: FC<{
  addTask: (title: string, description: string) => void;
  handleCloseModal: () => void;
}> = ({ addTask, handleCloseModal }) => {
  const [ValueInput1, setValueInput1] = useState<string>("");
  const [ValueInput2, setValueInput2] = useState<string>("");

  const handleGetValueInput1 = (event: ChangeEvent<HTMLInputElement>) => {
    setValueInput1(event.currentTarget.value);
    console.log(ValueInput1);
  };

  const handleGetValueInput2 = (event: ChangeEvent<HTMLInputElement>) => {
    setValueInput2(event.currentTarget.value);
    console.log(ValueInput2);
  };

  return (
    <div className="absolute top-[148px] border w-full min-h-screen bg-[#9F7E69]/85 flex justify-center items-center z-40">
      <div className="w-[25%] h-[50%] m-auto bg-[#FFEEE2] flex flex-col justify-center items-center gap-4 rounded-xl p-20 relative">
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
          onChange={handleGetValueInput1}
          placeholder="Number1"
          className="p-2 rounded-lg text-[#D2BBA0]"
        />
        <input
          type="text"
          onChange={handleGetValueInput2}
          placeholder="Number2"
          className="p-2 rounded-lg text-[#D2BBA0]"
        />
        <button
          onClick={() => {
            addTask(
              ValueInput1 ? ValueInput1 : "",
              ValueInput2 ? ValueInput2 : "",
            );
            handleCloseModal();
          }}
          className="py-2 px-[65px] rounded-lg text-[#D2BBA0]"
        >
          Click me!
        </button>
      </div>
    </div>
  );
};

export default ModalAddTask;
