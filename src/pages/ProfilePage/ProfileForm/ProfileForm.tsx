import { useRef, useState, type FC } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import ButtonForm from "../../../components/Button/ButtonForm";
import { schemaUser } from "../../../shemas/shemas";
import { yupResolver } from "@hookform/resolvers/yup";
import classNames from "classnames";
import ButtonIcon from "../../../components/ButtonIcon/ButtonIcon";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../../redux/auth/authSelectors";
import { AppDispatch } from "../../../redux/store";
import { IUpdateReq, updateProfile } from "../../../redux/auth/authOperations";
import { uploadToCloudinary } from "../../../services/services";
import { ColorTheme } from "../../../components/Navigation/NavigationLink/NavigationLink";
import style from "./ProfileForm.module.scss";
import { BtnIconSizes } from "../../../components/ButtonIcon/types";

type ProfileFormProps = {
  setFile?: (file: File) => void;
  onClose: () => void;
};

const ProfileForm: FC<ProfileFormProps> = ({ onClose }) => {
  const [imageUrl, setImageUrl] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const dispatch: AppDispatch = useDispatch();
  const user = useSelector(selectUser);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors, isValidating },
    reset,
  } = useForm<IUpdateReq>({
    resolver: yupResolver(schemaUser),
    mode: "onChange",
    defaultValues: {
      name: user.name,
      email: user.email,
      avatar: user.avatar,
      phone: user.phone || "",
    },
  });

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      const selectedFile = files[0];

      setFile(selectedFile);
      const url: string | null = await uploadToCloudinary(selectedFile);
      console.log(url);
      if (url) {
        setImageUrl(url);
        console.log(imageUrl);
      } else {
        console.error("Failed attempt to load file");
      }
    }
  };

  const onFakeInputClick = () => {
    fileInputRef.current?.click();
  };

  const onSubmit: SubmitHandler<IUpdateReq> = (data) => {
    console.log(data);
    let formData = {};

    if (data.name) {
      formData = { ...formData, name: data.name };
    }
    if (data.email) {
      formData = { ...formData, email: data.email };
    }
    if (file) {
      formData = { ...formData, avatar: data.avatar };
    }
    if (data.phone) {
      formData = { ...formData, phone: data.phone };
    }

    if (Object.keys(formData).length > 0) {
      dispatch(updateProfile(formData));
      setImageUrl("");
      reset();
      onClose();
    }
  };

  const isNameValid = !errors.name && getValues("name");
  const isEmailValid = !errors.email && getValues("email");
  const isAvatarValid = !errors.avatar && getValues("avatar");
  const isPhoneValid = !errors.phone && getValues("phone");

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={style.form__wrapper}>
          <div className={style.form__avatarWrapper}>
            {/* ----------avatar------------- */}
            <div className={style.form__inputWrapper}>
              <input
                className={classNames(style.form__input, {
                  [style.form__inputError]: errors.avatar,
                  [style.form__inputSuccess]: isAvatarValid && !isValidating,
                })}
                placeholder="Avatar"
                {...register("avatar")}
                value={imageUrl}
              />
              {errors.avatar && (
                <p className={style.form__error}>{errors.avatar?.message}</p>
              )}
              {isAvatarValid && !isValidating && (
                <p className={style.form__success}>Valid url for avatar</p>
              )}
            </div>

            {/* ----------file------------- */}
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
          {/* ----------name------------- */}
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
          </div>
          {/* ----------email------------- */}
          <div className={style.form__inputWrapper}>
            <input
              className={classNames(style.form__input, {
                [style.form__inputError]: errors.email,
                [style.form__inputSuccess]: isEmailValid && !isValidating,
              })}
              placeholder="Email"
              {...register("email")}
            />
            {errors.email && (
              <p className={style.form__error}>{errors.email?.message}</p>
            )}
            {isEmailValid && !isValidating && (
              <p className={style.form__success}>Valid email format</p>
            )}
          </div>
          {/* ----------phone------------- */}
          <div className={style.form__inputWrapper}>
            <input
              className={classNames(style.form__input, {
                [style.form__inputError]: errors.phone,
                [style.form__inputSuccess]: isPhoneValid && !isValidating,
              })}
              placeholder="Phone"
              {...register("phone")}
            />
            {errors.phone && (
              <p className={style.form__error}>{errors.phone?.message}</p>
            )}
            {isPhoneValid && !isValidating && (
              <p className={style.form__success}>Phone is valid</p>
            )}
          </div>
        </div>
        <ButtonForm text="Go to profile" type="submit" />
      </form>
    </div>
  );
};

export default ProfileForm;
