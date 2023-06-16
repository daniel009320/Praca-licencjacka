import MuiModal from "@mui/material/Modal";
import { useRecoilState } from "recoil";
import { AiFillCloseCircle } from "react-icons/ai";
import { modalState } from "@/atoms/modalAtom";
import { confirmationModal } from "@/atoms/modalAtom";
export const ConfirmationModal = ({ header, content }) => {
  const [showModal, setShowModal] = useRecoilState(confirmationModal);
  const handleClose = () => {
    setShowModal(false);
  };
  return (
    <MuiModal
      open={showModal}
      onClose={handleClose}
      className="w-[700px] h-[500px] z-50 fixed m-auto left-0 right-0"
    >
      <div className="bg-custom-yellow rounded-xl text-black border-2 border-black py-5 ">
        <div className="flex justify-between items-center w-full px-5">
          <div></div>
          <h2 className="text-4xl ">{header}</h2>
          <AiFillCloseCircle
            className="w-10 h-10 cursor-pointer"
            onClick={handleClose}
          />
        </div>
        <div className="border-t-2 border-black my-4"></div>
        <p className="pt-5 px-5 font-semibold">{content}</p>
      </div>
    </MuiModal>
  );
};
