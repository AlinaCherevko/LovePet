import { useEffect, useRef, useState, type FC } from "react";
import Title from "../../../components/Section/Title/Title";
import ButtonForm from "../../../components/Button/ButtonForm";
import classNames from "classnames";
import ButtonIcon from "../../../components/ButtonIcon/ButtonIcon";
import { BtnIconSizes } from "../../../components/ButtonIcon/types";
import { AppDispatch } from "../../../redux/store";
import { useDispatch, useSelector } from "react-redux";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { schemaPet } from "../../../shemas/shemas";
import { uploadToCloudinary } from "../../../services/services";
import Avatar from "../../ProfilePage/Avatar/Avatar";
import { AvatarSizes } from "../../ProfilePage/Avatar/types";
import SelectEl from "../../../components/Selects/Select";
import { speciesSelector } from "../../../redux/notices/noticesSelectors";
import { addPet } from "../../../redux/auth/authOperations";
import style from "./AddPetForm.module.scss";
import { yupResolver } from "@hookform/resolvers/yup";
import RadioBtnGroup from "../RadioBtnGroup/RadioBtnGroup";
import { useSelectStyles } from "../../../hooks/hooks";
import { useNavigate } from "react-router-dom";
import { AddPetProps, IAddPet } from "./types";

import { IOptions } from "../../NoticesPage/NoticesSearch/types";
import { ColorTheme } from "../../../components/Navigation/NavigationLink/types";
import { toast } from "react-toastify";
import { selectError } from "../../../redux/auth/authSelectors";

const AddPetForm: FC<AddPetProps> = ({
  maleBtnRef,
  femaleBtnRef,
  othersBtnRef,
  onFakeMaleClick,
  onFakeFemaleClick,
  onFakeOthersClick,
}) => {
  const [hasError, setHasError] = useState(false);
  const [initialState, setInitialState] = useState(true);
  const [hasSuccess, setHasSuccess] = useState(false);
  const [imgUrl, setImgUrl] = useState("");
  const [gender, setGender] = useState("");
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();
  const species = useSelector(speciesSelector);
  const error = useSelector(selectError);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const selectStyles = useSelectStyles(initialState, hasError, hasSuccess);

  const speciesOptions: IOptions[] = species.map((item) => ({
    value: item,
    label: item.charAt(0).toUpperCase() + item.slice(1),
  }));

  const {
    register,
    handleSubmit,
    getValues,
    setValue,
    formState: { errors, isValidating },
    control,
    reset,
    trigger,
  } = useForm<IAddPet>({
    resolver: yupResolver(schemaPet),
    mode: "onChange",
  });

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      const selectedFile = files[0];
      const url: string | null = await uploadToCloudinary(selectedFile);

      if (url) {
        setImgUrl(url);
        setValue("imageUrl", url);
        trigger("imageUrl");
      } else {
        toast.error("Failed attempt to load file");
      }
    }
  };

  const onFakeInputClick = () => {
    fileInputRef.current?.click();
  };
  const onMaleBtnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setValue("sex", e.target.value);
    setGender(e.target.value);
    trigger("sex");
  };

  const onFemaleBtnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setValue("sex", e.target.value);
    setGender(e.target.value);
    trigger("sex");
  };

  const onOthersBtnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue("sex", e.target.value);
    setGender(e.target.value);
    trigger("sex");
  };

  const onSubmit: SubmitHandler<IAddPet> = (data) => {
    const formData = {
      name: data.name,
      title: data.title,
      species: data.species,
      sex: gender,
      imgURL: imgUrl || data.imageUrl || "",
      birthday: data.birthday,
    };

    dispatch(addPet(formData));
    setImgUrl("");
    reset();
    navigate("/profile");

    if (error) {
      toast.error(error as string);
    }
  };

  const isNameValid = !errors.name && getValues("name");
  const isTitleValid = !errors.title && getValues("title");
  const isImageUrlValid = !errors.imageUrl && getValues("imageUrl");
  const isBirthdayValid = !errors.birthday && getValues("birthday");

  useEffect(() => {
    if (errors.species) {
      setHasError(true);
      setHasSuccess(false);
      setInitialState(false);
    }
    if (!errors.species) {
      setHasError(false);
      setHasSuccess(true);
    }
  }, [errors.species]);

  return (
    <div className={style.formWrapper}>
      <Title text="Add my pet" />
      <RadioBtnGroup
        onFakeMaleClick={onFakeMaleClick}
        onFakeFemaleClick={onFakeFemaleClick}
        onFakeOthersClick={onFakeOthersClick}
      />
      {errors.sex && (
        <p className={style.form__errorGender}>{errors.sex?.message}</p>
      )}
      <Avatar id="icon-footprint" size={AvatarSizes.Small} url={imgUrl} />
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={style.form__wrapper}>
          <div className={style.form__inputRadioWrapper}>
            <input
              type="radio"
              {...register("sex")}
              ref={femaleBtnRef}
              value="female"
              onChange={onFemaleBtnChange}
            />
            <input
              type="radio"
              {...register("sex")}
              value="male"
              ref={maleBtnRef}
              onChange={onMaleBtnChange}
            />
            <input
              type="radio"
              {...register("sex")}
              ref={othersBtnRef}
              value="multiple"
              onChange={onOthersBtnChange}
            />
          </div>

          <div className={style.form__avatarWrapper}>
            <div className={style.form__inputWrapper}>
              <input
                className={classNames(style.form__input, {
                  [style.form__inputError]: errors.imageUrl,
                  [style.form__inputSuccess]: isImageUrlValid && !isValidating,
                })}
                placeholder="ImageUrl"
                {...register("imageUrl")}
              />
              {errors.imageUrl && (
                <p className={style.form__error}>{errors.imageUrl?.message}</p>
              )}
              {isImageUrlValid && !isValidating && (
                <p className={style.form__success}>Valid url for avatar</p>
              )}
            </div>

            <div className={style.form__inputWrapper}>
              <input
                type="file"
                className={style.form__input_none}
                ref={fileInputRef}
                onChange={handleFileChange}
              />
            </div>
            <div className={style.form__inputWrapper}>
              <ButtonIcon
                id="icon-cloud-upload"
                width="18px"
                height="18px"
                type={ColorTheme.White}
                text="Upload photo"
                onClick={onFakeInputClick}
                size={BtnIconSizes.Medium}
              ></ButtonIcon>
            </div>
          </div>

          <div className={style.form__inputWrapper}>
            <input
              className={classNames(style.form__input, {
                [style.form__inputError]: errors.name,
                [style.form__inputSuccess]: isNameValid && !isValidating,
              })}
              placeholder="Name"
              {...register("name")}
            />
            {errors.name && (
              <p className={style.form__error}>{errors.name?.message}</p>
            )}
            {isNameValid && !isValidating && (
              <p className={style.form__success}>Valid name format</p>
            )}
          </div>

          <div className={style.form__inputWrapper}>
            <input
              className={classNames(style.form__input, {
                [style.form__inputError]: errors.title,
                [style.form__inputSuccess]: isTitleValid && !isValidating,
              })}
              placeholder="Title"
              {...register("title")}
            />
            {errors.title && (
              <p className={style.form__error}>{errors.title?.message}</p>
            )}
            {isTitleValid && !isValidating && (
              <p className={style.form__success}>Valid title</p>
            )}
          </div>

          <div className={style.form__selectWrap}>
            <div className={style.form__inputWrapper}>
              <input
                className={classNames(style.form__input, {
                  [style.form__inputError]: errors.birthday,
                  [style.form__inputSuccess]: isBirthdayValid && !isValidating,
                })}
                {...register("birthday")}
                type="text"
                placeholder="0000-00-00"
              />
              <svg className={style.form__icon} height="18px" width="18px">
                <use href="/public/symbol-defs.svg#icon-calendar"></use>
              </svg>
              {errors.birthday && (
                <p className={style.form__error}>{errors.birthday?.message}</p>
              )}
              {isBirthdayValid && !isValidating && (
                <p className={style.form__success}>Date is valid</p>
              )}
            </div>

            <div className={style.form__inputWrapper}>
              <Controller
                name="species"
                control={control}
                render={({ field }) => (
                  <SelectEl
                    {...field}
                    options={speciesOptions}
                    placeholder="Type of pet"
                    onChange={field.onChange}
                    value={field.value}
                    selectStyles={selectStyles}
                  />
                )}
              />
              {errors.species && (
                <p className={style.form__error}>{errors.species?.message}</p>
              )}
            </div>
          </div>
        </div>
        <ButtonForm text="Save" type="submit" />
      </form>
    </div>
  );
};

export default AddPetForm;
