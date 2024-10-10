import { useRef, useState, type FC } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import ButtonForm from "../../../components/Button/ButtonForm";
import { schemaUser } from "../../../shemas/shemas";
import { yupResolver } from "@hookform/resolvers/yup";
import classNames from "classnames";
import ButtonIcon from "../../../components/ButtonIcon/ButtonIcon";
import Icon from "../../../components/Icon/Icon";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../../redux/auth/authSelectors";
import { AppDispatch } from "../../../redux/store";
import { IUpdateReq, updateProfile } from "../../../redux/auth/authOperations";
import style from "./ProfileForm.module.scss";

type ProfileFormProps = {
  setFile?: (file: File) => void;
  onClose?: () => void;
};

const ProfileForm: FC<ProfileFormProps> = () => {
  const [imageUrl, setImageUrl] = useState("");
  const dispatch: AppDispatch = useDispatch();
  const user = useSelector(selectUser);
  //console.log(user);
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

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      const selectedFile = files[0];
      console.log(selectedFile);

      const blob = URL.createObjectURL(selectedFile);

      console.log(blob);
      const url = `https://${selectedFile.name}`;
      console.log(url);
      setImageUrl(url);
    }
  };

  const onFakeInputClick = () => {
    fileInputRef.current?.click();
  };

  const onSubmit: SubmitHandler<IUpdateReq> = (data) => {
    let newData: Partial<IUpdateReq> = {};
    if (data.name !== "") {
      newData = { ...newData, name: data.name };
    }
    if (data.email !== "") {
      newData = { ...newData, email: data.email };
    }
    if (data.avatar !== "") {
      newData = { ...newData, avatar: imageUrl };
    }
    if (data.phone !== "") {
      newData = { ...newData, phone: data.phone };
    }

    console.log(newData);
    if (Object.keys(newData).length > 0) {
      dispatch(updateProfile(newData));
      setImageUrl("");
      reset();
      //onClose();
    }

    //onClose();
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
              <ButtonIcon text="Upload photo" onClick={onFakeInputClick}>
                <Icon
                  id="icon-cloud-upload"
                  stroke="#f6b83d"
                  fill="transparent"
                  width="18px"
                  height="18px"
                />
              </ButtonIcon>
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
        <ButtonForm text="Go to profile" />
      </form>
    </div>
  );
};

export default ProfileForm;
