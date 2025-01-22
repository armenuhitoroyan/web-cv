import React from "react";
import styles from "../style/AboutPage.module.css";

interface UserInfoProps {
  data: string;
  responseData: string;
  style?: React.CSSProperties;
  classname?: string;
}

const UserInfo: React.FC<UserInfoProps> = ({
  data,
  responseData,
  style,
  classname,
}) => {
  return (
    <li style={style} className={styles.table}>
      <h6>
        {data}
        <span style={{ color: "red !important" }} className={classname}>
          {responseData}
        </span>
      </h6>
    </li>
  );
};

export default UserInfo;
