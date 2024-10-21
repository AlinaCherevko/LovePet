export interface IAddPet {
  name: string;
  title: string;
  species: string;
  sex: string;
  imageUrl?: string | null;
  birthday: string;
}

export type AddPetProps = {
  maleBtnRef: React.RefObject<HTMLInputElement>;
  femaleBtnRef: React.RefObject<HTMLInputElement>;
  othersBtnRef: React.RefObject<HTMLInputElement>;
  onFakeMaleClick: () => void;
  onFakeFemaleClick: () => void;
  onFakeOthersClick: () => void;
};
