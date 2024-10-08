import { StylesConfig } from "react-select";
import { useMediaQuery } from "react-responsive";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectError, selectIsAuth } from "../redux/auth/authSelectors";

export const useSelectStyles = (): StylesConfig => {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return {
    placeholder: (provided) => ({
      ...provided,
      color: "#262626",
      fontSize: isMobile ? "14px" : "16px",
      lineHeight: isMobile ? "18px" : "20px",
      fontWeight: "400",
    }),
    control: (provided) => ({
      ...provided,
      backgroundColor: "#ffffff",
      border: "1px solid transparent",
      width: isMobile ? "144px" : "170px",
      height: isMobile ? "42px" : "48px",
      boxShadow: "none",
      borderRadius: "30px",
      "&:hover": {
        border: "1px solid #f6b83d",
      },
    }),
    singleValue: (provided) => ({
      ...provided,
      fontSize: isMobile ? "14px" : "16px",
      lineHeight: isMobile ? "18px" : "20px",
      fontWeight: "400",
      color: "#262626", // Колір обраного значення
    }),
    dropdownIndicator: (provided) => ({
      ...provided,
      color: "#262626", // Колір стрілочки
    }),
    menu: (provided) => ({
      ...provided,
      borderRadius: "10px",
      marginTop: "4px",
    }),
    menuList: (provided) => ({
      ...provided,
      padding: "0",
      borderRadius: "10px",
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: "#ffffff",
      color: state.isSelected ? " #f6b83d" : "#262626",
      "&:hover": {
        color: " #f6b83d",
      },
    }),
  };
};

export const useValidNavigate = () => {
  const navigate = useNavigate();
  const isAuth = useSelector(selectIsAuth);
  const error = useSelector(selectError);

  useEffect(() => {
    if (isAuth) {
      toast.success("User successfully login");
      navigate("/profile");
    }
    if (error) {
      toast.error(error as string);
    }
  }, [error, navigate, isAuth]);
};
