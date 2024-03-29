import s from "../Dialogs.module.css";
import React from "react";
import {MessagesType} from "../../../redux/state";

export const Message = (props: MessagesType) => {
  return <div className={s.message}>{props.message}</div>
}