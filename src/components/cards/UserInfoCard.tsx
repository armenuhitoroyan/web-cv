import React from "react";

type UserInfoCardProps = {
  IconComponent?: React.FC<React.SVGProps<SVGSVGElement>>;
  title: string;
  text: string;
};

const UserInfoCard: React.FC<UserInfoCardProps> = ({
  IconComponent,
  title,
  text,
}) => {
  return (
    <div
      style={{ border: "4px #7b2ff7" }}
      // className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center gap-x-4"
      className="p-10 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex flex-col sm:flex-row items-center gap-x-4"
    >
      <div className="shrink-0">
        {IconComponent && <IconComponent style={{ color: "#000" }} />}
      </div>
      <div>
        <div className="text-xl font-medium text-black">{title}</div>
        <p style={{ fontSize: "15px" }} className="text-slate-500">
          {text}
        </p>
      </div>
    </div>
  );
};

export default UserInfoCard;
