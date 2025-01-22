import React, { useState } from "react";
import Input from "./Input";
import Button from "./Button";
import TextArea from "./TextArea";

type FormData = {
  name: string;
  email: string;
  phone: string;

  comment: string;
};

type Errors = Partial<Record<keyof FormData, string>>;

type AddCommentProps = {
  onAdd: (data: FormData) => void;
};

const AddCommentForm: React.FC<AddCommentProps> = ({ onAdd }) => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",

    comment: "",
  });

  const [errors, setErrors] = useState<Errors>({});

  const validateForm = (): boolean => {
    const newErrors: Errors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.phone) newErrors.phone = "Phone is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ): void => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form Submitted", formData);
      onAdd(formData);
      setFormData({
        name: "",
        email: "",
        phone: "",

        comment: "",
      });
    }
  };

  return (
    <form className="Question" onSubmit={handleSubmit}>
      <div className="space-y-6">
        <div className="w-full flex flex-col md:flex-row gap-4">
          <div className="w-full md:w-1/2 space-y-2">
            {errors.name && (
              <p className="self-start text-red-500 text-sm">{errors.name}</p>
            )}
            <Input
              type="text"
              placeholder="Complete Name "
              name="name"
              value={formData.name}
              onChange={handleChange}
              error={!!errors.name}
            />
          </div>
          <div className="w-full md:w-1/2 space-y-2">
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email}</p>
            )}
            <Input
              type="email"
              placeholder="Email Address"
              name="email"
              value={formData.email}
              onChange={handleChange}
              error={!!errors.email}
            />
          </div>
        </div>
        <div className="w-full flex flex-col items-center space-y-2">
          {errors.phone && (
            <p className="text-red-500 text-sm">{errors.phone}</p>
          )}
          <Input
            type="text"
            placeholder="Phone No(Optional)"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            error={!!errors.phone}
          />
        </div>

        <div className="w-full space-y-2">
          <TextArea
            name="comment"
            placeholder="Your Comment"
            value={formData.comment}
            onChange={handleChange}
          />
        </div>

        <div className="w-full flex-col flex justify-start md:flex-row">
          <Button text="Post comment" />
        </div>
      </div>
    </form>
  );
};

export default AddCommentForm;
